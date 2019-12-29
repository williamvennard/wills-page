import React from "react"
import './App.css';
import { startSnakeGame } from './SnakeApp.js';


function startGame () {
	startSnakeGame();
}

function Snake(props) {
  return (
    <div className="container-fluid snake-container">
    	<div className="row">
	      <div className="col-sm">
	      	<h1>Snake</h1>
		      <div id="game-space">
		      	<svg id="board" width="300px" height="300px"></svg>
		      </div>
		      <div id="score">score: <span id="score-count"></span></div>
		      <div id="start-game">
		        <button className="btn btn-primary"
		        			  onClick={startGame}>
		        	Start Game
		        </button>
		      </div>
		    </div>
	    </div>
	    <div className="col-sm">
	    	<a href='/github' className="item">Checkout this project on GitHub </a>
	    </div>
    </div>
  )
}
 
export default Snake;