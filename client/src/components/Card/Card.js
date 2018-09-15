import React from "react";
import './Card.css';

const Card = props =>
    (
        <div className="card" onClick={()=>props.onClick(props.id)}>
            <img className="card-img-top" id={props.id} src={props.image} alt="OW Image" />
        </div>
    );

export default Card;

