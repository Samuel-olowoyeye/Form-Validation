"use client"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

const ThemeSwitcherBtn = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button className={`w-fit p-2 rounded-md hover:scale-110 active:scale-100 duration-200 text-green-600 dark:text-lime-500`} onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === 'light' ? <Moon /> : <Sun /> }
    </button>
    // <select value={theme} onChange={e => setTheme(e.target.value)}>
    //   <option value="system">System</option>
    //   <option value="dark">Dark</option>
    //   <option value="light">Light</option>
    // </select>
  )
}

export default ThemeSwitcherBtn