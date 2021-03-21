import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Card from '../Card/Card';

const Home = () => {
    const [vehicles, setVehicles] = useState([]);
    const history = useHistory();
    
    useEffect(()=>{
        fetch('https://api.mocki.io/v1/21788877')
        .then(res => res.json())
        .then(data => setVehicles(data));
    },[]);
    const vehicleClickHandler = (vehicle) =>{
        
    }
    return (
        <div className="card-list">
            {
                vehicles.map(vehicle  => <Card vehicleClickHandler={vehicleClickHandler} vehicle={vehicle}></Card>)
            }
        </div>
    );
};

export default Home;