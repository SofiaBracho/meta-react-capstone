import React from 'react'
import logo from '../img/logo.png'

function Header() {
  return (
    <header>
        <img id='logo' src={logo} alt='Little Lemon Logo'></img>
        <nav>
          <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Menu</a></li>
            <li><a href='#'>Reservation</a></li>
            <li><a href='#'>Order Online</a></li>
            <li><a href='#'>Login</a></li>
          </ul>
        </nav>
    </header>
  )
}

export default Header