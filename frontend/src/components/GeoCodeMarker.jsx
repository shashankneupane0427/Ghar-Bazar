import React, { useEffect } from 'react'
import {Marker, Popup, useMap} from 'react-leaflet'
import L from 'leaflet'
import { useState } from 'react'
import 'leaflet/dist/leaflet.css'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import * as ELG from 'esri-leaflet-geocoder'

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
})
L.Marker.prototype.options.icon = DefaultIcon  



const GeoCodeMarker = ({address}) => {
 const map = useMap();
 const [postion, setPosition] = useState([60, 19]);


useEffect(()=>{
     ELG.geocode().text(address).run((err,results, response)=>{
        if(results?.results?.length > 0){
            const {lat, lng} = results?.results[0].latlng
            setPosition([lat, lng])
                map.flyTo([lat,lng], 8)
            
        }
     },[address])
})

  return (
    <Marker position={postion} icon={DefaultIcon}>
        <Popup />
    </Marker>
  )
}

export default GeoCodeMarker
