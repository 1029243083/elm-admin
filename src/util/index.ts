export function setStorage(key: string, value: string) {
  window.localStorage.setItem(key, value)
}

export function getStorage(key: string) {
  return window.localStorage.getItem(key)
}

export function removeStorage(key: string) {
  return window.localStorage.removeItem(key)
}
