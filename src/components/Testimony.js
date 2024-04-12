import React from 'react'

function Testimony(props) {
  return (
    <article>
      <img src={require(`../img/clients/${props.photo}`)} alt={props.name}></img>
      <h3>{props.name}</h3>
      <p>{props.quote}</p>

      <div>
        {[...Array(props.stars)].map((x) =>
          <p>*</p>
        )}
      </div>
    </article>
  )
}

export default Testimony