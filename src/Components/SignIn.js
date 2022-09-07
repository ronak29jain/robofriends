import React from 'react'
import GoogleButton from 'react-google-button';

function SignIn({googleSignIn, signinErr}) {
  return (
    <div className='signin'>
      <div className="heading">
        <h1>RoboFriends</h1>
        <h3>Create your secret contacts with unique Robots</h3>
        <GoogleButton onClick={googleSignIn} className='signinwithgoogle' />
        <h5>{signinErr}</h5>
      </div>
    </div>
  )
}

export default SignIn