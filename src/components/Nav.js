import React from 'react'
import Menu from '../data/Menu'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='bg-gradient-to-r from-cyan-500 to-blue-500'>
      <div className='flex container mx-auto justify-between py-5'>
        <Link to="/">
          <p className='font-bold text-[25px]'>Oudom<span className='text-cyan-50'>.</span></p>
        </Link>
        <div className='flex gap-14 items-center'>
        {Menu.map((item, index) => (
          <div className='text-[20px] font-bold' key={index}>
            <Link to={item.path}>{item.label}</Link>
          </div>
        ))}
        </div>
        <div className='flex items-center'>Menu bar</div>
      </div>       
    </nav>
  )
}
export default Nav