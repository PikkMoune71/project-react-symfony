import React from 'react'
import { Navigate, Outlet  } from 'react-router-dom';

const useAuth = () => {
    const user = localStorage.getItem("authToken")
    if(user){
        return true;
    }else{
        return false
    }
}

const PrivateRoute = (props) => {
    const isAuth = useAuth();

    return isAuth ? <Outlet /> :  <Navigate to="/login" />;
}

export default PrivateRoute;