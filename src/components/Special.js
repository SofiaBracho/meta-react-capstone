import React from 'react'

function Special(props) {
  return (
    <article key={props.name}>
        <img src={require(`../img/specials/${props.img}`)} alt={props.name}></img>
        <div>
            <div>
                <h4>{props.name}</h4>
                <strong>$ {props.price}</strong>
            </div>
            <p>{props.description}</p>
            <b>Order a delivery <i>Bicycle icon</i></b>
        </div>
    </article>
  )
}

export default Special