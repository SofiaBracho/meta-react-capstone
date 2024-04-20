import React from 'react'
import restaurantBackground from '../img/restaurant.jpg'
import chefPhoto from '../img/chef.jpg'

function About() {
  return (
    <section id='about'>
      <div className="container">
        <div className='row'>
          <div className='col-12 col-md-6'>
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
              <p>You are invited to visit our restaurant and taste our delicious mediterranean food.</p>
          </div>
          <div className='col-12 col-md-6'>
              <img src={restaurantBackground} alt='Restaurant Background'></img>
              <img src={chefPhoto} alt='Chef cooking'></img>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About