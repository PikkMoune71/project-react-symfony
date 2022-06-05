import React from 'react'
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import SignIn from './components/signin/Signin'
import Home from './views/Home'

const RoutesApp = () => {
  return (
    <Router>
        <Routes>
            <Route path="/login" element={<SignIn />} />
            <Route path="/" element={<Home />} />
        </Routes>
    </Router>
  )
}

export default RoutesApp