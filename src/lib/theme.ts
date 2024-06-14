import { browser } from "$app/environment"
import { writable } from "svelte/store"

type Theme = 'light' | 'dark'

const userTheme = browser ? (localStorage.getItem('color-scheme') as Theme) : false
export const theme = writable<Theme>(userTheme ? userTheme : 'dark')

export const toggleTheme = () => {
    theme.update((t) => {
        const newTheme = t === 'light' ? 'dark' : 'light'

        document.documentElement.setAttribute('color-scheme', newTheme)
        localStorage.setItem('color-scheme', newTheme)

        return newTheme
    })
}

export const setTheme = (newTheme: Theme) => {
    theme.set(newTheme)
}

export default theme