import React from 'react'
import PropTypes from 'prop-types'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'


class LeafletMap extends React.Component {

  static propTypes = {
    /** Latitude and Longitude of the map centre in an array, eg [51, -1] **/
    position: PropTypes.array,

    /** Initial zoom level for the map (default 13) **/
    zoom: PropTypes.number,

    /** If set, will display a marker, which when clicked will display this text **/
    markers: PropTypes.array
  }

  static defaultProps = {
    position: [51, -1],
    zoom: 13,
    markers: []
  }

  render() {

    const markerList = this.props.markers.map(function(item, index) {

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
        <Map center={this.props.position} zoom={this.props.zoom}>
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
}

export default LeafletMap