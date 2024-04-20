import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faBicycle } from  '@fortawesome/free-solid-svg-icons'

function Special(props) {
  return (
    <article className='special col-12 col-md-4' key={props.name}>
        <img src={require(`../img/specials/${props.img}`)} alt={props.name}></img>
        <div>
            <div>
                <h4 className='card-title'>{props.name}</h4>
                <strong className='price'>$ {props.price}</strong>
            </div>
            <p className='description'>{props.description}</p>
            <h4 className='card-title'>
              <p>Order a delivery</p>
              <FontAwesomeIcon icon={faBicycle} />
            </h4>
        </div>
    </article>
  )
}

export default Special