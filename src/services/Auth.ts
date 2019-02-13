import * as auth0 from 'auth0-js'
import Auth0Lock from 'auth0-lock'
import IdTokenVerifier from 'idtoken-verifier'
import Cookie from './Cookie'
import { colors } from '../styles/variables'

const AUTH0_CREDENTIALS = {
  clientID: process.env.GATSBY_AUTH0_CLIENT_ID || '',
  domains: {
    bearer: process.env.GATSBY_BASE_DOMAIN || '',
    provider: process.env.GATSBY_AUTH0_DOMAIN || ''
  }
}
const CALLBACK_URI = `${AUTH0_CREDENTIALS.domains.bearer}/callback`
const REDIRECT_KEY = '_BEARERLOGINREDIRECT'
const JWT_COOKIE_KEY = '_BEARERSSO'
const DEFAULT_REDIRECT = '/'
const RESPONSE_TYPE = 'id_token'
const OPENID_SCOPES = 'openid'

const AUTH0 = new auth0.WebAuth({
  audience: `https://${AUTH0_CREDENTIALS.domains.provider}/userinfo`,
  clientID: AUTH0_CREDENTIALS.clientID,
  domain: AUTH0_CREDENTIALS.domains.provider,
  redirectUri: CALLBACK_URI,
  responseType: RESPONSE_TYPE,
  scope: OPENID_SCOPES
})
const VERIFIER = new IdTokenVerifier({
  issuer: `https://${AUTH0_CREDENTIALS.domains.provider}`,
  audience: `https://${AUTH0_CREDENTIALS.domains.provider}/userinfo`
})

/*
  Triggers off site auth flow
*/
export function login(url: string = DEFAULT_REDIRECT): void {
  sessionStorage.setItem(REDIRECT_KEY, url)
  AUTH0.authorize()
}

export function isAuthenticated(): boolean {
  const jwt = Cookie.get(JWT_COOKIE_KEY)
  return jwt ? true : false
}

/*
  TODO: Used for inline login
  cant use just yet see: https://github.com/auth0/lock/issues/1148
*/
export function createAuth0Lock(url: string = DEFAULT_REDIRECT, closable: boolean = false): Auth0LockStatic {
  sessionStorage.setItem(REDIRECT_KEY, url)
  const lock = new Auth0Lock(AUTH0_CREDENTIALS.clientID, AUTH0_CREDENTIALS.domains.provider, {
    closable,
    auth: {
      params: {
        scope: OPENID_SCOPES
      },
      redirectUrl: CALLBACK_URI,
      responseType: RESPONSE_TYPE
    },
    languageDictionary: {
      title: 'Bearer'
    },
    theme: {
      logo: 'https://static.bearer.sh/logo.png',
      primaryColor: colors.accent
    }
  })
  lock.on('authenticated', (authResult: any) => {
    storeJWT(authResult.idToken)
  })
  return lock
}

export function authenticateCallback(callback: () => void) {
  AUTH0.parseHash((_err: any, authResult: any) => {
    storeJWT(authResult.idToken)
    callback()
  })
}

function storeJWT(jwt: string) {
  const exp = VERIFIER.decode(jwt).payload.exp
  Cookie.set(JWT_COOKIE_KEY, jwt, exp)
}

export function redirectPath(): string {
  return sessionStorage.getItem(REDIRECT_KEY) || DEFAULT_REDIRECT
}
