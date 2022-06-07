import React, { useState } from 'react'
import { Routes, Route, Link, useNavigate} from 'react-router-dom'
import SignIn from './components/signin/Signin'
import SignUp from './components/signup/SignUp'
import Post from './components/post/Post'
import PrivateRoute from './components/PrivateRoute'
import '../styles/app.css'
import Home from './views/Home'
import AddPost from './components/post/AddPost'

const RoutesApp = () => {
    const useAuth = () => {
        const user = localStorage.getItem("authToken")
        if(user){
            return true;
        }else{
            return false
        }
    }

    const user = useAuth()
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem('authToken');
        navigate('/login')
    }
  return (
        <div>
            <div className='container_navbar'>
                <h1>API Symfony React</h1>
                <ul className='navbar'>
                    {
                        user && <>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/posts">Posts</Link></li>
                        
                            {
                                location.pathname !== "/login" && <li><button onClick={logout}>Logout</button></li>
                            }
                        </>
                    }
                    
                </ul>
            </div>
                <Routes>
                    <Route path="/login" element={<SignIn />} />
                    <Route path="/register" element={<SignUp />} />
                    <Route path="/" element={<PrivateRoute/>}>   
                        <Route path="/" element={<Home />} />
                        <Route path="/posts" element={<Post />} />
                        <Route path="/add-post" element={<AddPost />} />
                    </Route>
                </Routes>
        </div>
  )
}

export default RoutesApp