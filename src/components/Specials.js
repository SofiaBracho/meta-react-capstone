import React from 'react'
import Special from './Special'
import dishes from  '../specials.json';

function Specials() {
  return (
    <section id='specials'>
        <div className='container'>
            <div>
                <h1>This weeks specials!</h1>
                <a href='#' className='btn btn-primary'>Online Menu</a>
            </div>
            <article className='row'>
                {dishes.map((dish) => {
                    return (
                        <Special {...dish} />
                    )
                })}
            </article>
        </div>
    </section>
  )
}

export default Specials