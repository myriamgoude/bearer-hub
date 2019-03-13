import Auth0Lock from 'auth0-lock'
import Cookie from './Cookie'
import { colors } from '../styles/variables'
import { isBuild } from './Browser'

interface IidTokenPayload {
  aud: string
  exp: number
  iat: number
  iss: string
  nonce?: string
  sub: string
}

const CLIENT_ID = process.env.GATSBY_AUTH0_CLIENT_ID || ''
const AUTH0_DOMAIN = 'login.bearer.sh'
const BASE_DOMAIN = process.env.GATSBY_BASE_DOMAIN || ''

const CALLBACK_URI = `${BASE_DOMAIN}/callback`
const REDIRECT_KEY = '_BEARERLOGINREDIRECT'
const JWT_COOKIE_KEY = '_BEARERAUTH0'
const DEFAULT_REDIRECT = '/'
const RESPONSE_TYPE = 'id_token'
const OPENID_SCOPES = 'openid'

export function isAuthenticated(): boolean {
  if (isBuild()) {
    return false
  }
  const jwt = Cookie.get(JWT_COOKIE_KEY)
  return jwt ? true : false
}

/*
  This will attempt to authenticate a user in the background via SSO
  https://github.com/auth0/lock#checksessionparams-callback
*/
export function isSSOAuthenticated(authenticated: () => void) {
  if (isBuild()) {
    return
  }
  if (isAuthenticated()) {
    // already authenticated no need to go further
    authenticated()
    return
  }
  const lock = createLock()
  lock.checkSession({}, (error, authResult) => {
    if (error || !authResult) {
      // background auth failed do nothing
      return
    }
    storeJWT(authResult.idToken, authResult.idTokenPayload)
    authenticated()
  })
}

function createLock(signup: boolean = false, closable: boolean = false) {
  const initialScreen = signup ? 'signUp' : 'login'
  return new Auth0Lock(CLIENT_ID, AUTH0_DOMAIN, {
    closable,
    initialScreen,
    auth: {
      params: {
        scope: OPENID_SCOPES
      },
      redirectUrl: CALLBACK_URI,
      responseType: RESPONSE_TYPE
    },
    configurationBaseUrl: 'https://cdn.eu.auth0.com',
    languageDictionary: {
      title: 'Bearer'
    },
    theme: {
      logo: 'https://static.bearer.sh/logo.png',
      primaryColor: colors.accent[0]
    }
  })
}

function storeJWT(_jwt: string, { exp }: IidTokenPayload) {
  // Just store a key we dont actually need the JWT for anything
  Cookie.set(JWT_COOKIE_KEY, 'true', exp)
}

export function lockLogin(
  authenticated: () => void,
  signup: boolean = false,
  url: string = window.location.pathname
): Auth0LockStatic {
  sessionStorage.setItem(REDIRECT_KEY, url)
  const lock = createLock(signup, true)
  lock.on('authenticated', (authResult: any) => {
    // in page login
    storeJWT(authResult.idToken, authResult.idTokenPayload)
    lock.hide()
    authenticated()
  })
  lock.show()
  return lock
}

export function lockCallback(callback: () => void) {
  createLock().on('authenticated', (authResult: any) => {
    storeJWT(authResult.idToken, authResult.idTokenPayload)
    callback()
  })
}

export function redirectPath(): string {
  return sessionStorage.getItem(REDIRECT_KEY) || DEFAULT_REDIRECT
}

export function logout(callback: () => void) {
  Cookie.erase(JWT_COOKIE_KEY)
  createLock().logout({ returnTo: DEFAULT_REDIRECT })
  callback()
}
