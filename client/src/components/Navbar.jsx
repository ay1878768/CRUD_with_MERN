import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='h-20 bg-black flex justify-around items-center sticky top-0'>
        <NavLink to={"/"}><p className='text-white text-4xl font-bold'>Animal</p></NavLink>
        <ul className='text-white flex gap-10 font-bold text-xl'>
        <NavLink to={"/new"}><li>Add New Item</li></NavLink>
        </ul>
    </div>
  )
}
export default Navbar