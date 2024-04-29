import React from 'react'
import { redirect } from 'react-router-dom'
import { ErrorMessage, useFormik } from "formik"
import * as Yup from 'yup';
import useSubmit from "../hooks/useSubmit"

function BookingForm({state, availableTimes, setState, dispatch}) {
  const {isLoading, response, submit} = useSubmit();
  const formik = useFormik({
    initialValues: {
      ...state
    },
    onSubmit: (values) => {
      submit('', values)
      formik.resetForm()
      // onOpen(response.type, response.message);
      // if (response.type === 'success') {
      //   formik.resetForm()
      // }
    },
    validationSchema: Yup.object({
      date: Yup.date()
        .min(new Date() , 'Date should be later  than today')
        .required("Required"),
      time: Yup.string()
        .oneOf(
          availableTimes,
          'Invalid Time'
        )
        .required('Required'),
      guests: Yup.number()
      .min(1, 'The minimum customer number is 1')
      .max(10, 'The maximum customer number is 10')
      .required('Required'),
      occasion: Yup.string()
        .oneOf(
          ['Birthday', 'Anniversary'],
          'Invalid Occasion'
        )
        .required('Required'),
    }),
  });

  const errorMessageStyles = {
    color: "red",
    fontWeight: 'bold'
  }

  return (
    <form>

      <label htmlFor="res-date">* Choose date</label>
      <br/>
      <input type="date" id="res-date" name='date' {...formik.getFieldProps("date")}></input>
      <p style={ errorMessageStyles }>{ formik.errors.date }</p>

      <label htmlFor="res-time">* Choose time</label>
      <br/>
      <select name="time" id="res-time" {...formik.getFieldProps("time")}>
        <option selected disabled>-- Select Time --</option>
        {availableTimes.map((time) => {
          return (<option key={time} value={time}>{time}</option>);
        })}
      </select>
      <p style={ errorMessageStyles }>{ formik.errors.time }</p>

      <label htmlFor="guests">* Number of guests</label>
      <br/>
      <input type="number" min='1' max='10' placeholder='1' id="guests" {...formik.getFieldProps("guests")}></input>
      <p style={ errorMessageStyles }>{ formik.errors.guests }</p>

      <label htmlFor="occasion">* Occasion</label>
      <br/>
      <select id="occasion" name='occasion' {...formik.getFieldProps("occasion")}>
        <option selected disabled>-- Select --</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      <p style={ errorMessageStyles }>{ formik.errors.occasion }</p>

      <button type="submit" className='btn btn-primary'>
        {isLoading  ? "Submitting..." : "Make a reservation!"}
      </button>
    </form>
  )
}

export default BookingForm