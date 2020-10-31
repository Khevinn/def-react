export const IS_DEV = process.env.NODE_ENV !== 'production'
export const IS_PROD = !IS_DEV
export const IS_JEST = typeof jest !== 'undefined'