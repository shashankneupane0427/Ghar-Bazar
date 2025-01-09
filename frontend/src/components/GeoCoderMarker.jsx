import React, { useEffect, useState } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import * as ELG from 'esri-leaflet-geocoder';

// Default marker icon configuration
const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

const GeoCoderMarker = ({ address }) => {
  const map = useMap();
  const [position, setPosition] = useState([60, 19]); // Initial default position
  const [error, setError] = useState(null);

  useEffect(() => {
    if (address) {
      ELG.geocode()
        .text(address)
        .run((error, results) => {
          if (error) {
            setError('Address not found or geocoding failed.');
            console.error(error);
            return;
          }
          if (results?.results?.length > 0) {
            const { lat, lng } = results.results[0].latlng;
            setPosition([lat, lng]);
            map.flyTo([lat, lng], 8);
            setError(null); // Clear previous error
          } else {
            setError('No results found for the provided address.');
          }
        });
    }
  }, [address, map]);

  return (
    <>
      <Marker position={position} icon={DefaultIcon}>
        <Popup>
          {error ? error : `Marker for: ${address}`}
        </Popup>
      </Marker>
    </>
  );
};

export default GeoCoderMarker;
