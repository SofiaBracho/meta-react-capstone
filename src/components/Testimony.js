import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faStar } from  '@fortawesome/free-solid-svg-icons'

function Testimony(props) {
  return (
    <article className='col-12 col-md-3 testimony'>
      <div>
        <img src={require(`../img/clients/${props.photo}`)} alt={props.name}></img>
        <h3 className='card-title'>{props.name}</h3>
        <p className='paragraph'>"{props.quote}"</p>

        <div>
          {[...Array(props.stars)].map((x) =>
            <FontAwesomeIcon icon={faStar} style={{color: '#F4CE14'}} />
          )}
        </div>
      </div>
    </article>
  )
}

export default Testimony