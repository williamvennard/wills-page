import React from "react"
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import './App.css';
import snakeThumbnail from './snakeProject.png'

function Projects(props) {
  return (
    <div className="container-fluid project-container">
    	<h1>Projects</h1>
    	<p>Look at all these cool projects!</p>
    	<div className="row">
		    <div className="col-sm">
		      <Thumbnail
			  		link="/d3plot"
			  		image="http://via.placeholder.com/400x360"
			  		title="Interactive D3 Plot"
			  		category="Data Visualization"
					/>
		    </div>
		    <div className="col-sm">
		      <Thumbnail
			  		link="/snake"
			  		image={snakeThumbnail}
			  		title="Play Snake"
			  		category="Mini Game using D3"
					/>
		    </div>
		  </div>

      

      
			
	 
    </div>
  )
}
 
export default Projects;