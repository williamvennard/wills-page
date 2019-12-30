import React from "react"
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import './App.css';
import snakeThumbnail from './snakeProject.png';
import d3PlotThumbnail from './GradientOnePlot.png';

function Projects(props) {
  return (
    <div className="container-fluid project-container">
    	<h1>Projects</h1>
    	<div className="row">
		    <div className="col-sm">
		      <Thumbnail
			  		link="https://examples.gradientone.com/results/R4573773855883741"
			  		image={d3PlotThumbnail}
			  		title="Interactive D3 Plot"
			  		category="Data Visualization"
			  		externalLink = "true"
					/>
		    </div>
		    <div className="col-sm">
		      <Thumbnail
			  		link="/snake"
			  		image={snakeThumbnail}
			  		title="Play Snake"
			  		category="Mini Game using D3"
			  		externalLink = "false"
					/>
		    </div>
		  </div>

      

      
			
	 
    </div>
  )
}
 
export default Projects;