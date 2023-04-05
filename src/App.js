import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Destination from './components/Destination';
import About from './components/About';
import Contact from './components/Contact';
import RegistrationForm from './components/RegistrationForm';
import SubmittedForm from './components/SubmittedForm';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/destination">Destination</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/registration">Registration Form</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/submittedform" element={<SubmittedForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
