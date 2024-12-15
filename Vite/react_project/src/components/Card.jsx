import React from 'react';
import pic from '../images/RAVAYAT.png'
import './Card.css'

const Card = (props) =>{
    return(
        <div className="card"> 
            <h1>{props.name}</h1>
            <img src={props.pic} alt="logo"/>
            <h2>{props.roll}</h2>
            <h2>{JSON.stringify(props.date)}</h2>
        </div>
    );
};
export default Card;