import React from 'react'
import Testimony from './Testimony'
import testimonies from  '../testimonies.json';

function Testimonials() {
  return (
    <section id='testimonials'>
      <div className='container'>
        <h1>Testimonials</h1>
        <article className='row'>
            {testimonies.map((testimony) => {
                return (
                    <Testimony {...testimony} key={testimony.name} />
                )
            })}
        </article>
      </div>
    </section>
  )
}

export default Testimonials