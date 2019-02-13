// Cross subdomain cookies

const COOKIE_DOMAIN = process.env.GATSBY_COOKIE_DOMAIN || 'localhost'

const Cookie = {
  set: (rawName: string, rawValue: string, jwtExpiry: number = 0) => {
    const value = encodeURIComponent(rawValue)
    const name = encodeURIComponent(rawName)
    // set cookie to expire when jwt token does
    const at = new Date(jwtExpiry * 1000)
    const expires = `; expires=${(at as any).toGMTString()}`

    if (COOKIE_DOMAIN.split('.').length === 1) {
      // localhost
      document.cookie = `${name}=${value}${expires}; path=/;`
    } else {
      const cmd = `${name}=${value}${expires}; path=/; domain=.${COOKIE_DOMAIN}; Secure=true; SameSite=Strict;`
      document.cookie = cmd
    }
  },

  get: (name: string) => {
    const encodedName = encodeURIComponent(name).replace(/[\-\.\+\*]/g, '\\$&')
    const search = new RegExp(`(?:(?:^|.*;)\\s*${encodedName}\\s*\\=\\s*([^;]*).*$)|^.*$`)
    return decodeURIComponent(document.cookie.replace(search, '$1')) || null
  },

  erase(name: string) {
    Cookie.set(name, '', -1)
  }
}

export default Cookie
