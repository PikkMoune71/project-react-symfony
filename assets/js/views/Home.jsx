import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
        <h2>Bienvenue sur la page d'accueil</h2>
        <Link to="/posts"><button>Voir les Posts</button></Link>
    </div>
  )
}

export default Home