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
import jwtDecode from 'jwt-decode';

const theme = createTheme();

export default function SignUp() {
    const token = window.localStorage.getItem("authToken");
    // const {username} = jwtDecode(token)
    console.log(jwtDecode(token));

    const navigate = useNavigate()

    const [credentials, setCredentials] = useState({
        title: "",
        content: "",
        user: "/api/users/17"
    })

    

    const handleChange = ({currentTarget}) => {
        const {value, name} = currentTarget
        setCredentials({
            ...credentials,
            [name]: value
        })
    }

    const handleSubmit = (e) => {    
        e.preventDefault()
        axios.post('http://127.0.0.1:8000/api/posts', {
            title: e.target[0].value,
            content: e.target[2].value,
            user: "/api/users/17",
        },
        {
            headers:{
                Authorization: 'Bearer ' + token //the token is a variable which holds the token
            }
        })
        .then((res) => {
            console.log(res);
            navigate('/posts')
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
                Ajout d'un Post
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    label="Title"
                    name="title"
                    type="text"
                    autoComplete="title"
                    onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    name="content"
                    label="Content"
                    type="text"
                    autoComplete="content"
                    onChange={handleChange}
                    />
                </Grid>
                </Grid>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                Créer le post
                </Button>
            </Box>
            </Box>
        </Container>
        </ThemeProvider>
    );
}