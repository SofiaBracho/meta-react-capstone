import React from 'react'
import Special from './Special'
import dishes from  '../specials.json';

function Specials() {
  return (
    <section>
        <div>
            <h1>This weeks specials!</h1>
            <a href='#'>Online Menu</a>
        </div>
        <article>
            {dishes.map((dish) => {
                return (
                    <Special {...dish} />
                )
            })}
        </article>
    </section>
  )
}

export default Specials