export function isObject (obj) {
  return typeof obj === 'object' && !Array.isArray(obj) && obj !== null
}

export function isArray (array) {
  return Array.isArray(array)
}

export function isBoolean (bool) {
  return typeof bool === 'boolean'
}

export function isString (string) {
  return typeof string === 'string'
}

export function isNumber (number) {
  return typeof number === 'number'
}

export function isNull (_null) {
  return _null === null
}

export function isFunction (value) {
  return value && value.__webpackbin_type_function
}

export function isCircular (value) {
  return value && value.__webpackbin_type_circular
}

export function isError (value) {
  return value && value.__webpackbin_type_error
}

export function isUndefined (value) {
  return value === undefined
}
