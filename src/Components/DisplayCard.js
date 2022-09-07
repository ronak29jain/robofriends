import React, {useState, useEffect} from 'react'
import './DisplayCard.css';
import Searchbox from './Searchbox';
import CardList from './CardList';
import Scroll from './Scroll';
import {db} from '../firebaseConfig'
import {collection, getDocs} from 'firebase/firestore'

function DisplayCard({update, setUpdate, uid}) {

  const [directory, setDirectory] = useState([]);
  const [searchfield, setSearchfield] = useState('');

  useEffect(() => {
    const getContacts = async() => {
      const contactsCollectionRef = collection(db, uid);
      const data = await getDocs(contactsCollectionRef);
      setDirectory(data.docs.map((contact) => ({...contact.data(), id: contact.id})))
    }
    getContacts();
  },[update, uid])

  const whenISearch = (event) => {
    setSearchfield(event.target.value);
    console.log('searchfield', searchfield)
  }

  const filteredDirectory = directory.filter(contact => {
      return (
        contact.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
        || contact.phone.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
        || contact.email.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
      )
  })
  

  return (
    !directory.length 
      ? <h2 className='center' style={{display: "flex", placeItems: 'center', margin: "0 auto"}}>Please Enter your Contacts</h2> 
      : <div className='displaycard'>
          <Searchbox searchChange = {whenISearch} />
          <Scroll> 
            <CardList directory={filteredDirectory} uid={uid} update={update} setUpdate={setUpdate} />
          </Scroll>
        </div>
  )
}

export default DisplayCard;