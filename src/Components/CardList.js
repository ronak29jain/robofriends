import React from "react";
import Card from "./Card";

const CardList = ({ directory }) => {
    const cardcomponent = directory.map((user, i) => {
        return (<Card 
            key={i} 
            name = {directory[i].name} 
            phone = {directory[i].phone} 
            email = {directory[i].email}/>);
        // return (<Card 
        //     key={i} 
        //     id = {user.id} 
        //     name = {user.name} 
        //     phone = {user.phone} 
        //     email = {user.email}/>);
    })
    
    return(
        <div>
            {cardcomponent}
        </div>
    )
}

export default CardList;