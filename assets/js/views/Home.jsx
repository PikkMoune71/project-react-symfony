import React from 'react'
import SignIn from '../components/signin/Signin'
import SignUp from '../components/signup/SignUp'
import Post from '../components/post/Post'
import AuthAPI from '../services/AuthAPI'

function Home() {
  return (
    <div>
      {
        (AuthAPI.isAuthenticated() == true 
        ? <div>
            <Post />
            <button onClick={() => localStorage.clear()}>Logout</button>
            <p>Une fois cliquer sur le boutton "Logout", <b>actualiser</b> la page pour voir les posts</p>
          </div> 
          
        : <div>
            <SignIn />
            <p>Une fois cliquer sur le boutton "Connexion", <b>actualiser</b> la page pour voir les posts</p>
          </div>
        )
      }
    </div>
  )
}

export default Home