import React from 'react'
import { sidebarMenu } from '../data'

const Sidebar = () => {
  return (
    <div className='px-8 pt-2 -mt-10 divide-y divide-gray-800'>
        {sidebarMenu.map((group, i) => (
            <div key={`group-${i}`} className='py-10'>
                <span className='tracking-widest text-gray-500 uppercase text-xxs'>{group.label}</span>
                <ul className='flex flex-col pt-5 space-y-8'>
                    {group.children.map((menu, j) => (
                        <li key={`menu-${j}`} className='flex items-center space-x-4 group'>
                            <span className={`p-2 to-gray-500 bg-gray-800 rounded-xl ${(i === 0 && j === 0) ? 'text-white bg-orange ' : 'group-hover:text-white group-hover:bg-orange '}`}>
                                <menu.Icon className='fill-current' />
                            </span>
                            <a href={`#${menu.name}`} className={`text-sm ${(i === 0 && j === 0) ? 'text-white font-semibold' : 'text-gray-500 group-hover:text-white group-hover:font-semibold'}`}>{menu.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
  )
}

export default Sidebar