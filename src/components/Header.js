import React from 'react'
import logoUrl from '../assets/logo.svg'
import {SunIcon, MoonIcon} from '@heroicons/react/24/solid'
import {useState, useEffect} from 'react'
import {ThemeContext} from './ThemeContext'

function Header() {

  const {theme, setTheme} = React.useContext(ThemeContext)

  return (
    <div className='animate-fade-in-down'>
      {theme === 'dark' ? (
        <div className='py-6 flex justify-center bg-slate-900'>
          <img className='w-1/6 flex-shrink-0 justify-center h-13px py-0' src={logoUrl} alt='Tesla' />
          <button className='border rounded-lg w-[40px] h-[40px] py-[1px] -my-4 lg:my-0 translate-x-[400%] lg:w-[50px] lg:h-[50px] dark:text-slate-500' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {console.log(theme)}
            <MoonIcon />
          </button>
        </div>
      ): (
        <div className='py-6 flex justify-center bg-[#222222]'>
          <img className='w-1/6 flex-shrink-0 justify-center h-13px py-0' src={logoUrl} alt='Tesla' />
          <button className='border rounded-lg w-[40px] h-[40px] py-[1px] -my-4 lg:my-0 translate-x-[400%] lg:w-[50px] lg:h-[50px] text-white' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            <SunIcon />
          </button>
        </div>
      )}
    </div> 
  )
}

export default Header