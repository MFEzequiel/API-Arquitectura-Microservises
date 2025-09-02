import { useState } from 'react'

export function useTheme () {
  const [theme, setTheme] = useState(
    window.matchMedia('(prefers-color-scheme: dark)') ? 'dark' : 'light'
  )
  const html = document.documentElement
  html.setAttribute('data-theme', theme)

  const handleChangeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return { theme, handleChangeTheme }
}
