
// export const SignIn = () => {
//   const [credentials, setCredentials] = useState({
//     username: "",
//     password: ""
//   })

//   const handleChange = ({currentTarget}) => {
//     const {value, name} = currentTarget
//     setCredentials({
//       ...credentials,
//       [name]: value
//     })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try{
//       await authAPI.authenticate(credentials)
//     }catch(error){
//       console.log(error)
//     }

//   }
//   return (
//     <div className="containerLogin">
//       <form onSubmit={handleSubmit}>
//         <div>
//           <TextField 
//           id="username"
//           label="Email"
//           type="text"
//           name="username"
//           onChange={handleChange}
//           />
//         </div>
//         <div>
//           <TextField 
//           id="password"
//           label="Password"
//           type="text"
//           name="password"
//           onChange={handleChange}
//           />
//         </div>
//         <div>
//           <Button variant="contained" color="primary" type="submit">
//             Connexion
//           </Button>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default SignIn
import React, { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import authAPI from '../../services/AuthAPI.js'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        API Symfony React
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {

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
  }catch(error){
    console.log(error)
  }  
}

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
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="username"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
