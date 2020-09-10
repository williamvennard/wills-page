
import React from "react"
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import './App.css';
import snakeThumbnail from './images/snake-project.png';
import d3PlotThumbnail from './images/gradient-one-plot.png';

import planitThumbnail from './images/travel-plan.jpg';


let backgroundStyle = {
    //backgroundImage: `linear-gradient(to bottom right, red, yellow)`,
    // backgroundImage: `url(${Background})`,
    // backgroundAttachment: 'fixed',
    // backgroundRepeat: `no-repeat, repeat`,
    // backgroundSize: `100%`,
    // background:`#2A9D8F`
};

function Projects(props) {
  return (
    <div className="container-fluid project-container" style={ backgroundStyle }>
    	<div style={{ padding: `0.5em 1em 0em`, background:`#2A9D8F`, 'borderBottom': `solid 2px #201b24`}}
             className="row">
    		<h2>Recent Projects</h2>
    	</div>
    	<div className="row">
		    <div className="col-12 projects-row">
	    		<Thumbnail
			  		link="https://examples.gradientone.com/results/R4573773855883741"
                    sourceLink=""
			  		image={d3PlotThumbnail}
			  		title="Interactive D3 Plot for GradientOne"
			  		externalLink = "true"
			  		tools={ ['D3', 'Angular', 'JS'] }
			  		description="Real Oscilloscope data plotted using D3.
                         Features include dynamic zoom, auto reduction, markers, and much more."
            descriptionLong="These plots were a key feature of GradientOne which allows users to remotely
                             fetch data from their lab equipment and interact with it in the web UI."
					/>
		    </div>
		    <div className="col-12 projects-row">
		      <Thumbnail
			  		link="/planit"
                    sourceLink=""
			  		image={planitThumbnail}
			  		title="Maps Project"
			  		externalLink = "false"
			  		tools={ ['Google Maps', 'React', 'JS'] }
			  		description="Basic application demonstrating react-google-maps and the Google Maps API."
            descriptionLong="The goal for this project was to get familiar with using APIs and
                             eventually build a travel planning application."
					/>
		    </div>
		    <div className="col-12 projects-row">
		    	<Thumbnail
			  		link="/snake"
                    sourceLink=""
			  		image={snakeThumbnail}
			  		title="Snake"
			  		externalLink = "false"
			  		tools={ ['D3', 'JS'] }
			  		description="The classic arcade game you know and love. Plus bombs!"
            descriptionLong="This game was created using only JS and D3.
                             It was a fun coding challenge to recreate one of my favorite arcade games from childhood."
					/>
		    </div>
		  </div>
    </div>
  )
}

export default Projects;