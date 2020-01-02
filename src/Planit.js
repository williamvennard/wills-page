// import React from "react"
// import './App.css';
 
// // Google maps api key AIzaSyAQnnrSxmjA4pPJuFsiSUBjZ0gL0Uq9D7Q


// function Planit(props) {
//   return (
//     <div className="container-fluid about-container">
//       <h1>Planit</h1>
//       <p>This project is in development</p>
//       <div id="map"></div>
	    
//     </div>
//   )
// }
 
// export default Planit;

import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAQnnrSxmjA4pPJuFsiSUBjZ0gL0Uq9D7Q' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="Hello World"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;