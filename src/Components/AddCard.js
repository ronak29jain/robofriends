import React from 'react'
import './AddCard.css'

function AddCard() {
  return (
    <div className='addcard'>
      <div className="addcard-input">
        <input type="text" name='name'/>
        <input type="number" name="phone" id="" />
        <input type="email" name="email" id="" />
      </div>
      <button className='addcard-submit'>Add Contact</button>
    </div>
  )
}

export default AddCard