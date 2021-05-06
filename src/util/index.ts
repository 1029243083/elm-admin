export function setStorage(key: string, value: string) {
  window.localStorage.setItem(key, value)
}

export function getStorage(key: string) {
  return window.localStorage.getItem(key)
}

export function removeStorage(key: string) {
  return window.localStorage.removeItem(key)
}

export function randomArr<T>(arr: T[]): T[] {
  const newArr: T[] = []

  for (let i = 0; i < getRandom(1, 20); i++) {
    newArr.push(arr[getRandom(0, arr.length)])
  }
  return newArr
}

function getRandom(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min)
}
