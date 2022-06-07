import React, {useState} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

const theme = createTheme();

export default function SignUp() {
    const [inputErrorEmail, setInputErrorEmail] = useState('')
    const [inputErrorPassword, setInputErrorPassword] = useState('')
    const [inputErrorPasswordCopy, setInputErrorPasswordCopy] = useState('')

    const navigate = useNavigate()

    const validateEmail = (value) => {
        let error
        if (!value) error = 'Champ requis'
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))
        error = 'Format email invalide'
        return error
    }
    const validatePassword = (value) => {
        let error = ''
        if (!value) error = 'Champ requis'
        else if (value.length < 3) error = '3 caractères minimum'
        else if (!/(?=.*[0-9])/.test(value)) error = 'Doit contenir un nombre'

        return error
    }
    const validateConfirmPassword = (pass, value) => {
        let error = ''
        if (!value) error = 'Champ requis'
        else if (pass && value && pass !== value)
        error = 'Les mots de passe de correspondent pas'

        return error
    }

    onchange = (e) => {
        const name = e.target.name
        const value = e.target.value
        if (name === 'email') {
        setInputErrorEmail(validateEmail(value))
        } else if (name === 'password') {
        setInputErrorPassword(validatePassword(value))
        } else if (name === 'confirmPassword') {
        const passwordInput = document.querySelector(
            'input[name="password"]',
        ).value
        setInputErrorPasswordCopy(validateConfirmPassword(passwordInput, value))
        }
    }

  const handleSubmit = async (e) => {
    console.log('submit')
    e.preventDefault()
    axios.post('http://127.0.0.1:8000/api/register', {
        email: e.target[0].value,
        password: e.target[2].value,
      })
      .then((res) => {
        console.log(res)
        navigate('/login')
      })
      .catch((err) => {
        console.log(err)
      })
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => onchange(e)}
                />
                <p>{inputErrorEmail}</p>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  autoComplete="new-password"
                  onChange={(e) => onchange(e)}
                />
                <p>{inputErrorPassword}</p>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="comfirmPassword"
                  label="Comfirm Password"
                  type="password"
                  autoComplete="new-password"
                  onChange={(e) => onchange(e)}
                />
                <p>{inputErrorPasswordCopy}</p>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}