import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom';
import SignUp from './components/signup/SignUp';
import Home from './views/Home';

const RoutesApp = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    </Router>
  )
}

export default RoutesApp