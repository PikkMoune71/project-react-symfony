import React, { useContext, useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import authAPI from '../../services/AuthAPI.js'

export const SignIn = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  })

  const handleChange = ({currentTarget}) => {
    const {value, name} = currentTarget
    setCredentials({
      ...credentials,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      await authAPI.authenticate(credentials)
      setIsAuthenticated(true)
    }catch(error){
      console.log(error)
    }

  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextField 
        id="username"
        label="Email"
        type="text"
        name="username"
        onChange={handleChange}
        />
      </div>
      <div>
        <TextField 
        id="password"
        label="Password"
        type="text"
        name="password"
        onChange={handleChange}
        />
      </div>
      <div>
        <Button variant="contained" color="primary" type="submit">
          Connexion
        </Button>
      </div>
    </form>
  )
}

export default SignIn