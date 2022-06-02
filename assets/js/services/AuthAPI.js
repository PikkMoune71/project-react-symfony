import { URL_LOGIN } from '../config'
import axios from 'axios'
import jwtDecode from 'jwt-decode'

function authenticate(credentials){
    return axios.post(URL_LOGIN, credentials)
    .then(res => res.data)
    .then(data => {
        window.localStorage.setItem("authToken", data.token)
        axios.defaults.headers["Authorization"] = "Bearer " + data.token

        console.log(jwtDecode(data.token))
    })
}

function isAuthenticated(){
    const token = window.localStorage.getItem("authToken")

    if(token){
        const {exp} = jwtDecode(token)

        if(exp * 1000 > new Date().getTime()){
            return true
        }
        return false
    }
    return false
}

export default {
    authenticate,
    isAuthenticated
};