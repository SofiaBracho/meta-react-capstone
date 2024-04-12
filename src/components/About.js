import React from 'react'
import restaurantBackground from '../img/restaurant.jpg'
import chefPhoto from '../img/chef.jpg'

function About() {
  return (
    <section>
        <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>You are invited to visit our restaurant and taste our delicious mediterranean food.</p>
        </div>
        <div>
            <img src={restaurantBackground} alt='Restaurant Background'></img>
            <img src={chefPhoto} alt='Chef cooking'></img>
        </div>
    </section>
  )
}

export default About