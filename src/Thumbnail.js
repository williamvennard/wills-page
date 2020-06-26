import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component
import './App.css';

function OrderedList(props) {
  const list = props.list;
  const listItems = list.map((item) =>
    <li key={item.toString()}>{ item }</li>
  );
  return (
    <ul>{ listItems }</ul>
  );
}

class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="col-4">
          <div className="project-title"><h4>{this.props.title}</h4></div>
          <p>{this.props.description}</p>
          <p> Tools Used: </p>
          <OrderedList list={ this.props.tools } />,
        </div>
        <div className="col-8">
          <Thumbnail props={ this.props }/>
        </div>

      </div>
    );
  }
}

function Thumbnail(props) {
  // use a tag if using extenal link
  if(props.props.externalLink === "true") {
    return (
      <div className="project">
        <a href={props.props.link}>
          <div className="project-image">
            <img src={props.props.image} alt="Project Thumbnail"/>
          </div>
        </a>
      </div>
    );
  } else {
    return (
      <div className="project">
        <Link to={props.props.link}>
          <div className="project-image">
            <img src={props.props.image} alt="Project Thumbnail"/>
          </div>

        </Link>
      </div>
    );
  }

}

export default Content;