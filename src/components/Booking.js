import React from 'react'
import BookingForm from './BookingForm'

function Booking({state, availableTimes, setState, dispatch}) {

  return (
    <section className="booking">
      <div className='container'>
        <h1 id='booking-title'>
          Table Booking
        </h1>
        <BookingForm state={state} dispatch={dispatch} availableTimes={availableTimes} setState={setState} />
      </div>
    </section>
  )
}

export default Booking