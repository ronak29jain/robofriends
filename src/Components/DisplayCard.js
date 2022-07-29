import React, {useState, useEffect} from 'react'
import './DisplayCard.css';
import Searchbox from './Searchbox';
import CardList from './CardList';
import Scroll from './Scroll';
import db from '../firebaseConfig'
import {collection, getDocs} from 'firebase/firestore'

function DisplayCard() {

  const [directory, setDirectory] = useState([]);
  const [searchfield, setSearchfield] = useState('');

  useEffect(() => {
    const getContacts = async() => {
      const contactsCollectionRef = collection(db, 'contacts');
      const data = await getDocs(contactsCollectionRef);
      setDirectory(data.docs.map((contact) => ({...contact.data(), id: contact.id})))
    }
    getContacts();
  },[])

  const whenISearch = async(event) => {
    setSearchfield(event.target.value);
    filterDirectory();
  }

  const filterDirectory = async() => {
    directory.filter(contact => {
      return contact.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
    })
  }

  return (
    <div>
      <Searchbox searchChange = {whenISearch}/>
      <Scroll> 
          <CardList directory = {directory}/>
      </Scroll>
    </div>
  )
}

export default DisplayCard;