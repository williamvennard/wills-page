import React from 'react';

// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ScrollableAnchor from 'react-scrollable-anchor';
import Background from './mountainsPurple.jpg';
import Home from './Home.js';
import Projects from './Projects.js'; 
import Snake from './Snake.js'; 
import About from './About.js'; 
import Footer from './Footer.js';
import './App.css';


let backgroundStyle = {
  backgroundImage: `url(${Background})`,
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover'
};

function MainContent() {
  return (
    <div>
      <Home></Home>
        
      <ScrollableAnchor id={'projects'}>
        <div>
          <Projects/>
        </div>
      </ScrollableAnchor>

      <ScrollableAnchor id={'about'}>
        <div>
          <About/>
        </div>
      </ScrollableAnchor>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={ backgroundStyle }>
        <nav className="navbar header">
          <ul className="nav">
            <li className="nav-item">
              <a href='/' className="item"> Home </a>
            </li>
            <li className="nav-item">
              <a href='/#projects' className="item"> Projects </a>
            </li>
            <li className="nav-item">
              <a href='/#about' className="item"> About Me </a>
            </li>
          </ul>
        </nav>

        <Route path="/snake" component={Snake} />

        <Route path="/" component={MainContent} />
      
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
