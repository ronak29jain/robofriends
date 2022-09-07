import React from "react";
import './Card.css';
import { db } from "./../firebaseConfig";
import { doc, deleteDoc} from "firebase/firestore";
import { useState } from "react";
import DeleteModal from "./DeleteModal";

const Card = ({ uid, id, name, phone, email, update, setUpdate }) => {
    // const { id, name, phone, email } = props;
    
    const [displayModal, setDisplayModal] = useState(false);
    
    const length = 2;
    const roboid0 = name.substring(0, length) + phone.substring(0, length) + email;
    const roboid = roboid0.replace(' ', '').replace('.', '');

    const deleteContact = async() => {
        console.log('delete contact fn has started')
        const userDoc = doc(db, uid, id)
        await deleteDoc(userDoc)
            .then(() => {
                setUpdate(!update);
                console.log("user deleted")
            })
        // closeModal();
        setDisplayModal(false)
    }

    return (
        <div id="card" className="tc dib br3 ma2 pa3 bw2 shadow-5">
            {/* {console.log(roboid)} */}
            <div className="card-content">
                <div className="delete-btn" onClick={() => setDisplayModal(true)} >
                    <h5>Delete</h5>
                    {/* <h5 onClick={() => deleteContact(id)}>X</h5> */}
                </div>
                <img alt='robot_image' src= {`https://robohash.org/${roboid}?size=120x120`} />
                <div>
                    <h2>{name}</h2>
                    <h3>{phone}</h3>
                    <p>{email}</p>
                </div>
            </div>
            {console.log(displayModal)}
            {displayModal && console.log('it should display')}
            {!displayModal && console.log('it should not display')}
            {displayModal && <DeleteModal closeModal={() => setDisplayModal(false)} deleteContact={deleteContact} name={name} />}
        </div>
    );
}

export default Card