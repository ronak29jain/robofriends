import React from 'react'

function DeleteModal({ closeModal, deleteContact, name}) {
  return (
    <div onClick={closeModal} className="modal">
      <div onClick={(e) => e.stopPropagation()} className="modal-content">
          <h5 onClick={closeModal}><span className='x'>X</span></h5>
          <h2 className='delete-contact'>Delete Contact</h2>
          <h3>Are you sure you want to delete the contact of {name}</h3>
          <button className='delete-button' onClick={() => deleteContact()}>Delete</button>
      </div>
    </div>  
  )
}

export default DeleteModal