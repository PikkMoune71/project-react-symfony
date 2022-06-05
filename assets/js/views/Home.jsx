import React from 'react'
import Menu from '../components/menu/Menu'

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Menu />
      {/* {
        (AuthAPI.isAuthenticated() == true 
        ? <div>
            <Post />
            <button onClick={() => localStorage.clear()}>Logout</button>
            <p>Une fois cliquer sur le boutton "Logout", <b>actualiser</b> la page pour voir les posts</p>
          </div> 
          
        : <div>
            <SignIn />
            <p>Une fois cliquer sur le boutton "Connexion", <b>actualiser</b> la page pour voir les posts</p>

            <SignUp />
          </div>
        )
      } */}
    </div>
  )
}

export default Home