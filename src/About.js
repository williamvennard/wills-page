import React from "react"
import './App.css';
 
function About(props) {
  return (
    <div className="container-fluid about-container">
      <h1>About Me</h1>

	    <p>Hello there, welcome to my website!</p>
	    <p>
	      A little bit about myself; I grew up in Madison WI, went to the University of Colorado Boulder 
	      to study Mechanical Engineering, and after graduating joined a start-up from San Francisco where 
	      I have been doing Web Development ever since. 
	    </p> 
	    <p>
	    	I am currently a Web Developer at GradentOne, where for the past few years, I've been 
	      lucky enough to help build their product from the ground up. GradientOne's is a test automation 
	      cloud platform with a web browser interface and a robust API for those who like to dig deeper. 
	      GradientOne enables test engineers to do asset utilization tracking, hardware test automation, 
	      test data acquisition and archiving and much more. Click the link below to learn more. 
	    </p>
	    <a href="https://www.gradientone.com/">Go to GradientOne.com</a>

    </div>
  )
}
 
export default About;