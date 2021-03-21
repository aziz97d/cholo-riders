import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Destination.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import MapView from '../MapView/MapView';

const Destination = () => {
    const {vehicleId} = useParams();
    const [isSearch,setIsSearch] = useState(false)
    const [vehicleInfo,setVehicleInfo] = useState({});
    const [destinationInfo,setDestinationInfo] = useState({
        pickFrom:"",
        pickTo:"",
        travelDate:"",
        travelDistance:"",
        totalFare:""
    })
    useEffect(()=>{
        debugger
        fetch('https://api.mocki.io/v1/21788877')
        .then(res => res.json())
        .then(data => {
            const vehicle = data.filter(vh => vh.id === vehicleId);
            setVehicleInfo(vehicle);
        })
        .catch(err => console.log(err))
    },[]);
    const onBlurHandle =(e) =>{
        let newDestination = {...destinationInfo};
        newDestination[e.target.name] = e.target.value;
        setDestinationInfo(newDestination)
    }
   const searchHandle = (e) =>{
       setIsSearch(true)
       e.preventDefault();
   }
    return (
        <div className="destination">
            <div className="destination-search">
                {
                    !isSearch &&
                    <form onSubmit={searchHandle}>
                    <label htmlFor="pick-from">Pick From</label>
                    <input  className="input-field" type="text" name="pickFrom" onBlur={onBlurHandle} id=""/>
                    <label htmlFor="pick-to">Pick To</label>
                    <input className="input-field" type="text" name="pickTo" onBlur={onBlurHandle} id=""/>
                    <label htmlFor="travel-date">Travel Date</label>
                    <input className="input-field" type="Date" name="travelDate" onBlur={onBlurHandle} id=""/>
                    <input className="search-button" type="submit" value="Search"/>
                </form>
                }
                {
                    isSearch &&
                    <div className="travelSummary">
                        <div className="pickInfo">
                            <div className="pickInfoName"><p>{destinationInfo['travelDate']}</p></div>
                            <div className="pickInfoName"><p>{destinationInfo['pickFrom']}</p></div>
                            <div className="pickInfoName"><p>{destinationInfo['pickTo']}</p></div>
                        </div>
                        <div className="fareInfo">
                            <div className="fareInfoItem">
                                <img src={vehicleInfo[0].image} alt=""/>
                                <h4>Car</h4>
                                <i><FontAwesomeIcon icon={faUsers}></FontAwesomeIcon></i>
                                <h5>4</h5>
                                <h5>$67</h5>
                            </div>
                            <div className="fareInfoItem">
                                <img src={vehicleInfo[0].image} alt=""/>
                                <h4>Car</h4>
                                <i><FontAwesomeIcon icon={faUsers}></FontAwesomeIcon></i>
                                <h5>4</h5>
                                <h5>$67</h5>
                            </div>
                            <div className="fareInfoItem">
                                <img src={vehicleInfo[0].image} alt=""/>
                                <h4>Car</h4>
                                <i><FontAwesomeIcon icon={faUsers}></FontAwesomeIcon></i>
                                <h5>4</h5>
                                <h5>$67</h5>
                            </div>
                            
                        </div>
                    </div>
                }
                
            </div>
            <div className="destination-map">
                <MapView></MapView>
            </div>
        </div>
    );
};

export default Destination;