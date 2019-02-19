const env = process.env.ACTIVE_ENV || process.env.NODE_ENV || 'development'
console.log(env)
const Cookie = {
  set: (rawName: string, rawValue: string, jwtExpiry: number = 0) => {
    const value = encodeURIComponent(rawValue)
    const name = encodeURIComponent(rawName)
    // set cookie to expire when jwt token does
    const at = new Date(jwtExpiry * 1000)
    const expires = `expires=${at.toUTCString()}`
    const secure = env === 'production' ? 'Secure=true; ' : ''
    const cookie = `${name}=${value}; ${expires}; path=/; ${secure}SameSite=Strict;`
    document.cookie = cookie
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
