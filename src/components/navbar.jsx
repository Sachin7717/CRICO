import React from 'react'
import { navItemsList } from '../constants'


const NavItems =()=>(
  <ul className='flex gap-10 mx-auto'>
    {
      navItemsList.map((item)=>(
        <li key={item.id}>
          {item.name}
        </li>
      ))
    }
  </ul>
  
)
function Navbar() {
  return (
    <nav className='flex justify-between text-xl my-2'>
        <h1 className='mx-auto font-extrabold text-blue-600 font-serif'>CRICO</h1>
        <NavItems/>
    </nav>
        
  )
}

export default Navbar
