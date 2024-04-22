import React from 'react'
import logo from '../img/logo.png'
import { Link } from "react-router-dom";

function Header() {
  return (
      <header>
        <div className='container'>
          <div>
            <Link to='/'>
              <img id='logo' src={logo} alt='Little Lemon Logo'></img>
            </Link>
            <nav>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Menu</a></li>
                <li><Link to='/booking'>Reservations</Link></li>
                <li><a href='#'>Order Online</a></li>
                <li><a href='#'>Login</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
  )
}

export default Header