import React from 'react';

// Import the HashRouter, Route and Link components
// HashRouter is needed in order to be hosted on github
import { HashRouter, Route, Link } from 'react-router-dom';
import ScrollableAnchor from 'react-scrollable-anchor';

// import Background from './images/water-background.jpg';
// import Background from './images/red-fish.jpg';

import Home from './Home.js';
import Projects from './Projects.js';
import Snake from './Snake.js';
import Planit from './Planit.js';
import About from './About.js';
import Footer from './Footer.js';
import './App.css';


let backgroundStyle = {
  // backgroundImage: `url(${Background})`,
  backgroundAttachment: 'fixed',
  backgroundSize: `100%`
};

function MainContent() {
  return (
    <div>
      <Home></Home>

      <ScrollableAnchor id={'/#projects'}>
        <div>
          <Projects/>
        </div>
      </ScrollableAnchor>

      <ScrollableAnchor id={'/#about'}>
        <div>
          <About/>
        </div>
      </ScrollableAnchor>
    </div>
  )
}

function App() {
  return (
    <HashRouter basename='/'>
      <div className="App" style={ backgroundStyle }>
        <nav className="navbar header">
          <ul className="nav">
            <li className="nav-item">
              <Link to="/" className="item">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/#projects" className="item">Projects</Link>
            </li>
            <li className="nav-item">
              <Link to="/#about" className="item">About</Link>
            </li>
          </ul>
        </nav>
        <Route path="/snake"  component={ Snake } />
        <Route path="/planit"  component={ Planit } />
        <Route exact path="/"  component={ MainContent } />

        <Footer></Footer>
      </div>
    </HashRouter>
  );
}

export default App;
