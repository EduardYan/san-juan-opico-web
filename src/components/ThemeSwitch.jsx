import { useState, useEffect } from 'react'
import './Switch.css'

const ThemeSwitch = () => {
  const [theme, setTheme] = useState('light')

  const changeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    document.body.classList.toggle('dark')
    setTheme(newTheme)
    // eslint-disable-next-line no-undef
    localStorage.setItem('theme', newTheme)
  }

  useEffect(() => {
    // eslint-disable-next-line no-undef
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      document.body.classList.add(savedTheme)
      setTheme(savedTheme)
    }
  }, [])

  return (
    <label>
      <input
        className='toggle-checkbox'
        type='checkbox'
        id='themeSwitch'
        checked={theme === 'dark'}
        onChange={changeTheme}
      />
      <div className='toggle-slot'>
        <div className='sun-icon-wrapper'>
          <div
            className='iconify sun-icon'
            data-icon='feather-sun'
            data-inline='false'
          />
        </div>
        <div className='toggle-button' />
        <div className='moon-icon-wrapper'>
          <div
            className='iconify moon-icon'
            data-icon='feather-moon'
            data-inline='false'
          />
        </div>
      </div>
    </label>
  )
}

export default ThemeSwitch
