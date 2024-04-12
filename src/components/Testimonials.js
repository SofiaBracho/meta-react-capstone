import React from 'react'
import Testimony from './Testimony'
import testimonies from  '../testimonies.json';

function Testimonials() {
  return (
    <section>
        <h1>Testimonials</h1>
        <article>
            {testimonies.map((testimony) => {
                return (
                    <Testimony {...testimony} key={testimony.name} />
                )
            })}
        </article>
    </section>
  )
}

export default Testimonials