import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationPin from '../map/LocationPin';
import './map.css';

const Map = ({ location, zoomLevel }) => (
    <div className="map">
        <h2 className="map-h2">Come Visit my Work Setup or Employ Remotely</h2>

        <div className="google-map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDRdgkjlcBPGpVWc7vfrSXED-dCr1TpOUU' }}
                defaultCenter={location}
                defaultZoom={zoomLevel}
            >
                <LocationPin
                    lat={location.lat}
                    lng={location.lng}
                    text={location.address}
                />
            </GoogleMapReact>
        </div>
    </div>
)

export default Map;