import React from "react";
import './Cards.css'

const Cards = (props) => {
    return (
    <figure className="figure-card">
    {props.children}
    </figure>
    
);
};


export default Cards;

