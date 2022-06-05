import axios from 'axios'
import React, {useState} from 'react'
// import { useNavigate } from 'react-router-dom'
axios.defaults.baseURL = 'http://localhost:8000'

function SignUp() {
    const [inputErrorEmail, setInputErrorEmail] = useState('')
    const [inputErrorPassword, setInputErrorPassword] = useState('')
    const [inputErrorPasswordCopy, setInputErrorPasswordCopy] = useState('')

    const validatePseudo = (value) => {
        let error
        if (!value) error = 'Champ requis'
        else if (value.length > 12) error = '12 caractère maximum'
        else if (value.length < 3) error = '3 caractères minimum'
        else if (/[^a-zA-Z0-9]/.test(value)) error = 'Pas de caractère spéciaux'

        return error
    }
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
        if (name === 'name') {
        setInputErrorPseudo(validatePseudo(value))
        } else if (name === 'email') {
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

    const handleSubmit = (e) => {
        console.log('submit')
        e.preventDefault()
        axios
          .post('/api/register', {
            username: e.target[0].value,
            email: e.target[1].value,
            password: e.target[2].value,
          })
          .then((res) => {
            console.log(res)
            // navigate('/signin')
          })
          .catch((err) => {
            console.log(err)
          })
      }
    return (
        <div>
            <div>
                <h2>Créer un compte</h2>
                <form onSubmit={handleSubmit}>
                {/* <input
                    name="name"
                    type="text"
                    placeholder="Nom d'utilisateur"
                    onChange={(e) => onchange(e)}
                />
                <p>{inputErrorPseudo}</p> */}
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={(e) => onchange(e)}
                />
                <p>{inputErrorEmail}</p>
                <input
                    name="password"
                    type="password"
                    placeholder="Mot de passe"
                    onChange={(e) => onchange(e)}
                />
                <p>{inputErrorPassword}</p>
                <input
                    name="confirmPassword"
                    type="password"
                    placeholder="Vérification mot de passe"
                    onChange={(e) => onchange(e)}
                />
                <p>{inputErrorPasswordCopy}</p>
                <button type="submit">S'inscrire</button>
                </form>
                <div>
                <p>Déjà inscrit ?</p>
                <a href="signin">Connectez-vous</a>
                </div>
            </div>
        </div>
    )
}

export default SignUp