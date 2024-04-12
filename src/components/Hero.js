import React from 'react'
import restaurantFood from '../img/restauranfood.jpg'

function Hero() {
  return (
    <section>
        <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <a>Reserve a Table</a>
        </div>
        <div>
            <img src={restaurantFood} alt='Restaurant Food'></img>
        </div>
    </section>
  )
}

export default Hero