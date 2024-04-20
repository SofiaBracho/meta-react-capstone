import React from 'react'
import restaurantFood from '../img/restauranfood.jpg'

function Hero() {
  return (
    <section id="hero">
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <a href='#' className='btn btn-primary'>Reserve a Table</a>
          </div>
          <div className='col-12 col-md-6'>
              <img src={restaurantFood} alt='Restaurant Food'></img>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero