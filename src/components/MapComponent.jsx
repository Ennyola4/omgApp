// MapComponent.js
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import '../css/map.css'


// Define the container style (width and height for the map)
const containerStyle = {
  width: '80%',
  height: '40vw',
  // borderRadius : '1vw'


};

// Define the map center (latitude and longitude)
const center = {
  lat: 51.505, // Latitude of the center
  lng: -0.09,  // Longitude of the center
};

const MapComponent = () => {
  return (
    <div className='map-container'>

      <div className='map' data-aos="zoom-out" data-aos-duration="3000">

        <LoadScript googleMapsApiKey="AIzaSyCVUcBdMDxgndKwGGja5bZHX9ky_lkcDtA">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={13}
          >
            {/* Add a marker at the center */}
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default MapComponent;
