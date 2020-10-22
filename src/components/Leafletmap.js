import React, { useRef, useEffect } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import murderMarker from '../images/marker.png'
//import iconShadow from 'leaflet/dist/images/marker-shadow.png';

//delete L.Icon.Default.prototype._getIconUrl;

const default_latlng = [46.431306, 30.715389]

const LeafletMap = (props) => {
    const mapRef = useRef()

    useEffect(() => {
      const { current = {} } = mapRef;
      const { leafletElement: map } = current;
      setTimeout(() => {
        map.flyTo(default_latlng, 11, {duration: 3})
      }, 1000)
    }, [mapRef])

    const defaultProps = {
      position: [51, -1],
      zoom: 13,
      markers: []
    }

    const murderIcon = new L.Icon({
      iconUrl: murderMarker,
      iconSize: [17,17],
      iconAnchor: [11,1],
      //shadowUrl: iconShadow,
      //shadowAnchor: [18,22]
    })  

    L.Marker.prototype.options.icon = murderIcon

    const markerList = props.markers.map(function(item, index) {

      const { 
        address,
        color,
        comment,
        date,
        icon,
        latitude,
        longitude,
        registry_number, 
        url, 
      } = item.node

      const get_coordinates = [latitude, longitude]
      
      //console.log(item.node)
      //console.log(registry_number)
      return (
        
        <Marker key={registry_number} position={get_coordinates} >
            <Popup>
                {comment} <br /> <a href={url}>{url}</a>
            </Popup>
        </Marker>
      )
    })

    //console.log(this.props.markers)
    if (typeof window !== 'undefined') {
      
      return (
        <Map ref={mapRef} center={props.position} zoom={props.zoom}>
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        {markerList}
        
      </Map>
      
      );
    }
    return null
  }


export default LeafletMap