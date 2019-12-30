import React from "react"
import './App.css';
 
function About(props) {
  return (
    <div className="container-fluid about-container">
      <h1>About Me</h1>

	    <p>Hello there, welcome to my website!</p>
	    <p>
	      A little bit about myself; I grew up in Madison WI, went to the University of Colorado Boulder to study Mechanical Engineering, and after graduating started working for GradientOne, a start-up from San Francisco where I have been a Web Developer ever since. I currently live in Lake Tahoe California.  
	    </p>
	    <p>
	    	The tools I like to use are: Angular, React, D3, and Bootstrap.
	    </p>
	    <p>
	    	For more information about GradientOne click <a href="https://www.gradientone.com/">here</a>.
	    </p>
	    

    </div>
  )
}
 
export default About;