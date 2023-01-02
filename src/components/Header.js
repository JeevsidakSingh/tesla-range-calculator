import React from 'react'
import logoUrl from '../assets/logo.svg'

function Header() {
  return (
    
    <div className='py-6 px-25 flex justify-center bg-[#222222]'>
        <img className='w-2/12 flex-shrink-0 inline-flex justify-center object-center h-13px' src={logoUrl} alt='Tesla' />
    </div>
  )
}

export default Header