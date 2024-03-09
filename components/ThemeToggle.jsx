'use client'
import { useState } from 'react'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'

const themes = {
  garden: 'garden',
  dracula: 'dracula',
  dark: 'dracula',
  light: 'garden'
}
const ThemeToggle = () => {
  const [theme, setTheme] = useState(themes.light)
  return (
    <button className='btn btn-sm btn-outline'>
      {theme === themes.light ? (
        <BsMoonFill className='w-4 h-4' />
      ) : (
        <BsSunFill className='w-4 h-4' />
      )}
    </button>
  )
}

export default ThemeToggle
