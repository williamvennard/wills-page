import React from "react"
import IconBadge from './IconBadge.js';
import {Link} from 'react-router-dom'; // Import the Link component
// import { Document } from 'react-pdf';
import { Document, Page, pdfjs } from "react-pdf";


import './App.css';

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
function About(props) {
  return (
    <div className="container-fluid about-container">
      <div style={{ padding: `0.5em 1em 0em`, background:`#264653`, 'borderBottom': `solid 2px #201b24` }}
           className="row">
        <h2>About Me</h2>
      </div>
    	<div className="row">
    		<div className="col-8 text-container">
			    <p>
            I'm currently a Web Developer at <a href="https://www.gradientone.com/">GradientOne</a>, where I have worked for the last 5 years.
            I specialize in UX/UI design and implementation and enjoy doing data visualization and animations.
          </p>

			    <p>Some of the tools I like to use and are most familar with are</p>
			    <ul className="tools-list">
            <li>
              <IconBadge devTool="HTML"/>
            </li>
            <li>
              <IconBadge devTool="CSS"/>
            </li>
				  	<li>
              <IconBadge devTool="Angular"/>
            </li>
            <li>
              <IconBadge devTool="React"/>
            </li>
            <li>
              <IconBadge devTool="Bootstrap"/>
            </li>
            <li>
              <IconBadge devTool="D3"/>
            </li>
            <li>
              <IconBadge devTool="Jasmine"/>
            </li>
				  </ul>

          <div className="col-8">
            Resume:
            <Document file="./wvResume2020.pdf" />
          </div>
          <p>
            Interested in working together or simply have questions?
          </p>
          <Link to="/contact">
            <button className="btn btn-outline-light">Contact Me</button>
          </Link>
		    </div>
	    </div>
    </div>
  )
}

export default About;