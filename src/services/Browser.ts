export const isBrowser = () => typeof window !== 'undefined'
export const isBuild = () => !isBrowser()
