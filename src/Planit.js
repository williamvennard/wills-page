import React from "react"
import './App.css';
 
// Google maps api key AIzaSyAQnnrSxmjA4pPJuFsiSUBjZ0gL0Uq9D7Q

var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
	  center: {lat: -34.397, lng: 150.644},
	  zoom: 8
	});
}
      
function Planit(props) {
  return (
    <div className="container-fluid about-container">
      <h1>Planit</h1>
      <div id="map"></div>
	    
    </div>
  )
}
 
export default Planit;