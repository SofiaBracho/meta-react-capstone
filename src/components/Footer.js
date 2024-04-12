import React from 'react'
import logoVertical from "../img/logo-vertical.png"

function Footer() {
  return (
    <footer>
        <img src={logoVertical} alt="Little Lemon Logo"></img>
        <div>
            <nav>
                <b>Page Navigation</b>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservations</a></li>
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
    </footer>
  )
}

export default Footer