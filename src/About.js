import React from "react"
import './App.css';
import Img from './images/blue-man.jpg';
 
function About(props) {
  return (
    <div className="container-fluid about-container">
    	<div className="row">
    		<div className="col-6">
		      <h1>About Me</h1>
			    <p>Hello there, welcome to my website!</p>
			    <p>
			        
			    </p>
			    <p>The tools I like to use are:</p>
			    <ul>
				  	<li>Angular</li>
				  	<li>React</li>
				  	<li>D3</li>
				  	<li>Bootstrap</li>
					</ul>
			    <p>
			    	For more information about GradientOne, where I work, click <a href="https://www.gradientone.com/">here</a>.
			    </p>
		    </div>
		    <div className="col-6">
		    	<img src={Img} alt="Fish" style={{ width: `600px` }}/>
		    </div>
	    </div>
    </div>
  )
}
 
export default About;