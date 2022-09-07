import React, {useState, useEffect} from 'react'
import './App.css';
import NavBar from '../Components/NavBar';
import AddCard from '../Components/AddCard';
import DisplayCard from "../Components/DisplayCard";
import SignIn from '../Components/SignIn';
import { auth } from './../firebaseConfig';
import {GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged} from 'firebase/auth';
// import DeleteModal from '../Components/DeleteModal';

function App() {   
    
    const [update, setUpdate] = useState(true);
    const [user, setUser] = useState(null)
    const [signinErr, setSigninErr] = useState(null)

    const googleSignIn = () => {
        setSigninErr('')
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(() => {})
            .catch((err) => {
                setSigninErr(err.message)
            })
    }

    const googleSignOut = () => {
        signOut(auth)
        console.log('user loged out')
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged( auth, (currentUser) => {
        setUser(currentUser)
        console.log("User (from Authcontext): ", user)
        })
        return () => {
        unsubscribe()
        }
    }, [user, user?.displayName])

    if (!user) {
        return (
            <div className="center">
                <SignIn googleSignIn={googleSignIn} signinErr={signinErr}/>
            </div>
        )
    }

    return (
        <div className='app'>
            <NavBar googleSignOut={googleSignOut} user={user} />
            <AddCard update={update} setUpdate={setUpdate} uid={user.uid}/>
            <DisplayCard update={update} setUpdate={setUpdate} uid={user.uid} />
            {/* <DeleteModal /> */}
        </div>
        // <div>
        //     <DeleteModal />
        // </div>
    )
}

export default App

