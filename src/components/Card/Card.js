import React from 'react';
import './Card.css';
import frame from '../../images/Frame.png';
import { Link } from 'react-router-dom';

const Card = (props) => {
    const {id,vehicleType,rentPerKilometer,image,}=props.vehicle;
    return (
        // <div onClick={()=>{props.vehicleClickHandler(props.vehicle)}} className="card">
        //     <img src={image} alt=""/>
        //     <h3>{vehicleType}</h3>
        // </div>
        <Link to={"/destination/"+id} className="card">
        <img src={image} alt=""/>
        <h3>{vehicleType}</h3>
        </Link>
    );
};

export default Card;