import React from 'react'
import Avatar1 from '../assets/img/avatar-1.png'
import { ReactComponent as SearchIcon } from '../assets/icons/search.svg'
import { ReactComponent as ChevronDownIcon } from '../assets/icons/chevron-down.svg'
import { ReactComponent as NotificationIcon } from '../assets/icons/notification.svg'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between'>
        <div className='relative flex flex-1 max-w-xl'>
            <input className='items-center w-full h-10 px-4 text-sm font-normal tracking-wider text-white placeholder-gray-500 bg-white/10 rounded-xl focus:outline-none' type="text" placeholder='Search' />
            <div className='absolute inset-y-0 right-0 flex items-center pr-6'>
                <SearchIcon className='text-gray-500 stroke-current' />
            </div>
        </div>
        <div className='flex items-center'>
            <img src={Avatar1} alt="Avatar 1" className='w-8 h-8 rounded-full' />
            <a href="#purnomo" className='inline-flex items-center pl-4'>
                <span className='text-xs font-normal tracking-widest'>Purnomo</span>
                <ChevronDownIcon className='text-gray-500 fill-current' />
            </a>
            <button className='pl-8 p-0.5 relative'>
                <NotificationIcon className='text-gray-500 fill-current' />
                <span className='absolute w-2 h-2 bg-red-500 rounded-full top-0 border border-gray-900 right-1'></span>
            </button>
        </div>
    </div>
  )
}

export default Navbar