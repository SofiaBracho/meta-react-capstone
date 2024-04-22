import './normalize.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import HomePage from './components/HomePage';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/booking" element={<Booking />}></Route>
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
