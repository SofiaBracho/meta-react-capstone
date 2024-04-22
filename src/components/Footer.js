import React from 'react'
import logoVertical from "../img/logo-vertical.png"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer>
        <div className='container'>
            <div>
                <img src={logoVertical} alt="Little Lemon Logo"></img>
                <div>
                    <nav>
                        <b>Page Navigation</b>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Menu</a></li>
                            <li><li><Link to='/booking'>Reservations</Link></li></li>
                            <li><a href="#">Order Online</a></li>
                            <li><a href="#">Login</a></li>
                        </ul>
                    </nav>
                    <nav>
                        <b>Contact</b>
                        <ul>
                            <li><a href="#">Address</a></li>
                            <li><a href="#">Phone Number</a></li>
                            <li><a href="#">Email</a></li>
                        </ul>
                    </nav>
                    <nav>
                        <b>Social Media</b>
                        <ul>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Youtube</a></li>
                            <li><a href="#">WhatsApp</a></li>
                            <li><a href="#">Facebook</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer