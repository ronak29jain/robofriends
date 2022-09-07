import React, {useState} from 'react'
import './AddCard.css'
import { db } from '../firebaseConfig';
import {collection, addDoc} from 'firebase/firestore'
// import { async } from '@firebase/util';

function AddCard({ update, setUpdate, uid }) {
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [addInfo, setAddInfo] = useState("");
  const [error, setError] = useState('')
  const contactsCollectionRef = collection(db, uid);
  
  const AddContact = async() => {
    setError('')
    try {
      ( (name.length !== 0) && ((phone.length > 5) || (email.length > 5) )) ?
          await addDoc(contactsCollectionRef, {
            name: name, phone: phone, email: email, addInfo: addInfo
            })
            .then(() => {
              setName('')
              setPhone('')
              setEmail('')
              setAddInfo('')
              setUpdate(!update)
            })
        :  alert("Invalid Data Entry.")
    } 
    catch(err) {
      setError(err.message)
    }
    // setName('')
    // setPhone('')
    // setEmail('')
    // setAddInfo('')
    // setUpdate(!update)
  }

  return (
    <div className='addcard'>
      <div className="input-section">
        <h2>Add Contact</h2>   
          <div className="addcard-input">
            <input value={name} type="text" name='name' placeholder='Name' onChange={(e) => setName(e.target.value)} className='form-control'/>
            <input value={phone} type="number" name="phone" id="" placeholder='Phone' onChange={(e) => setPhone(e.target.value)} className='form-control'/>
            <input value={email} type="text" name="email" placeholder='Email' id="" onChange={(e) => setEmail(e.target.value)} className='form-control'/>
            <input value={addInfo} type="text" name="AddInfo" placeholder='Additional Information' id="" onChange={(e) => setAddInfo(e.target.value)} className='form-control'/>
          </div>
          <h5 className='error'>{error}</h5>
          <button type='submit' className='addcard-submit' onClick={AddContact}>Add Contact</button>
      </div>
    </div>
  )
}

export default AddCard


// import React from 'react'
// import './AddCard.css'

// function AddCard() {
//   return (
//     <div className='addcard'>
//       <div className="addcard-input">
//         <legend className='Legend'>Add Card</legend>
//         <div className="input-section">
//           <input type="text" name='name' placeholder='Name' className='input'/>
//           <input type="text" name="phone" placeholder='Phone' className='input' />
//           <input type="email" name="email" placeholder='Email' className='input' />
//         </div>
//       </div>
//       <button className='addcard-submit'>Add Contact</button>
//     </div>
//   )
// }

// export default AddCard