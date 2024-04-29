import './normalize.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useReducer, useState } from 'react'
import Header from './components/Header';
import HomePage from './components/HomePage';
import Success from './components/Success';
import Booking from './components/Booking';
import Footer from './components/Footer';

const initializeTimes = () => {
  // const today = new Date();
  // const date = today.toISOString().split('T')[0];
  // return fetchAPI(date);
  return [
    "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
  ];
};

const updateTimes = (date) => {
  // return fetchAPI(date);
  return [
    "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
  ];
}

function App() {
  const [ state, setState ] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: undefined
  })
  const [ availableTimes, dispatch ] = useReducer(updateTimes, initializeTimes())

  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/booking" element={<Booking state={state} dispatch={dispatch} availableTimes={availableTimes} setState={setState} />}></Route>
          <Route path="/success" element={<Success />}></Route>
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
export { initializeTimes, updateTimes };
