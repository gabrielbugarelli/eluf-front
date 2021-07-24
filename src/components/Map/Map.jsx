import React from 'react';
import GoogleMapReact from 'google-map-react';

const Local = ({ text }) => (
  <div style={{
    color: 'white', 
    background: 'grey',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);

const Map = () => {
  const position = {
    center: {lat: -15.61, lng: -56.04},
    zoom: 16
  };

  return (
    <GoogleMapReact
      defaultCenter={position.center}
      defaultZoom={position.zoom}
    >
      <Local 
        lat={-15.6144073} 
        lng={-56.041807} 
        text={'Cuiabá'} 
      />
    </GoogleMapReact>
  );
}

export default Map