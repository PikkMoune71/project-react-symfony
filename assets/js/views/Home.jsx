import React from 'react'
import SignIn from '../components/signin/Signin'
import SignUp from '../components/signup/SignUp'
import Post from '../components/post/Post'

function Home() {
  return (
    <div>
        <SignIn />
        
        <Post />
    </div>
  )
}

export default Home