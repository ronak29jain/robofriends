import React from "react";
import Card from "./Card";

const CardList = ({ directory, uid, update, setUpdate }) => {
    const cardcomponent = directory.map((user, i) => {
        // return (<Card 
        //     key = {directory[i].id}
        //     uid = {uid}
        //     id = {directory[i].id} 
        //     name = {directory[i].name} 
        //     phone = {directory[i].phone} 
        //     email = {directory[i].email}
        //     update={update}
        //     setUpdate = {setUpdate} />);
        return (<Card 
            key={user.id} 
            uid = {uid}
            id = {user.id} 
            name = {user.name} 
            phone = {user.phone} 
            email = {user.email}
            update={update}
            setUpdate = {setUpdate}/>);
    })
    
    return(
        <div>
            {cardcomponent}
        </div>
    )
}

export default CardList;