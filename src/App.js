import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import TkdAdults from './pages/TkdAdults/TkdAdults';
import TkdKids from './pages/TkdKids/TkdKids';
import Taekwondo from './pages/Taekwondo/Taekwondo';
import Ranks from './pages/Ranks/Ranks';
import TkdPrivate from './pages/TkdPrivate/TkdPrivate';
import Booking from './pages/Booking/Booking';
import Footer from './components/Layout/Footer/Footer';
import './App.css';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/adults" element={<TkdAdults />}/>
        <Route path="/kids" element={<TkdKids />}/>
        <Route path="/private" element={<TkdPrivate />}/>
        <Route path="/taekwondo" element={<Taekwondo />}/>
        <Route path="/ranks" element={<Ranks />}/>
        <Route path="/booking" element={<Booking />}/>
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;