import React from "react";
import './Card.css';

const Card = ({ name, phone, email }) => {
    // const { id, name, phone, email } = props;
    return (
        <div id="card" className="tc dib br3 ma2 pa3 grow bw2 shadow-5">
            <img alt='robot_image' src= {`https://robohash.org/${email.replace('@gmail.com','')}?200*200`} />
            <div>
                <h2>{name}</h2>
                <h3>{phone}</h3>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card