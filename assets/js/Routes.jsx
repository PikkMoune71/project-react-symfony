import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './components/Home'

const RoutesApp = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    )
}

export default RoutesApp