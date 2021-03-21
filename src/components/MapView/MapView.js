import { GoogleMap, LoadScript } from '@react-google-maps/api';
import React from 'react';

const MapView = () => {
    const containerStyle = {
        width: '100%',
        height: '100%'
      };
      
      const center = {
        lat: -3.745,
        lng: -38.523
      };
    return (
        <LoadScript
        googleMapsApiKey="AIzaSyAiYZ4EMlDpnzRqjoNb_JWgGXN5D46ZmuE"
        >
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
        >
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
        </GoogleMap>
        </LoadScript>
    );
};

export default MapView;