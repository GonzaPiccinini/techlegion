export const setLocalStorage = <T>(key: string, value: T) => {
    localStorage.setItem(key, value as string)
}

export const clearLocalStorage = (key: string) => {
    localStorage.removeItem(key)
}

export const getLocalStorage = (key: string): string | null => {
    return localStorage.getItem(key)
}