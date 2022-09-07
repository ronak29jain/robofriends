import React from 'react'

function NavBar({googleSignOut, user}) {
  return (
    <div className='navbar'>
      {
        (user)
          ? <div className="nav-btn">
              <button className='btn' onClick={googleSignOut}>Log Out</button>
            </div>
          : null
      }
      <h1>Robo Friends</h1>
    </div>
  )
}

export default NavBar