import React from 'react';
import './Navbar.scss';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <NavLink to={'/about'}>О нас</NavLink>
      <NavLink to={'/products'}>Продукции</NavLink>
      <NavLink to={'/contact'}>Контакты</NavLink>
    </nav>
  )
}

export default Navbar