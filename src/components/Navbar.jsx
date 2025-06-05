import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-full flex justify-center items-center gap-10 text-xl text-white font-medium'>
      <NavLink className={({isActive}) => isActive ? "text-blue-700" : "" } to='/'>Home</NavLink>
      <NavLink className={({isActive}) => isActive ? "text-blue-700" : "" } to='/recipes'>Recipes</NavLink>
      <NavLink className={({isActive}) => isActive ? "text-blue-700" : "" } to='/create'>Create</NavLink>
      <NavLink className={({isActive}) => isActive ? "text-blue-700" : "" } to='/fav'>Favourite</NavLink>
    </div>
  )
}

export default Navbar