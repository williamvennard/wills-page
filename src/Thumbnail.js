import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component
import './App.css';
 
class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="project-image">
          <img src={this.props.props.image} alt="Project Thumbnail"/>
        </div>
        <div className="project-title">{this.props.props.title}</div>
        <div className="project-category">{this.props.props.category}</div>
      </div>
    );
  }
}

function Thumbnail(props) {
  // use a tag if using extenal link
  if(props.externalLink === "true") {
    return (
      <div className="project">
        <a href={props.link}>
          <Content props={props}/>
        </a>
      </div>
    );
  } else {
    return (
      <div className="project">
        <Link to={props.link}>
          <Content props={props}/>
        </Link>
      </div>
    );
  }
  
}
 
export default Thumbnail;