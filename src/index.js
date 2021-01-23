/*
Get React Framework
 -Declare square component which can save state.value ('X') from button action.
 -Declare board component which makes sqaure components and saves each state. Also declares the square component
 -Declare game components which makes the layout for the board and declares the Board component
 -ReactDOM run main game component

*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props){
	/*constructor(props){
		super(props);
		this.state = {
			value: null,
		};
	}*/
		return(
			
			<button className="square" onClick={ props.onClick }>
				{props.value}
			</button>

			/* REFACTORED to use arrow function syntax */
			/*{<button className="square" 
					onClick={ () => this.setState({value:'X'})}>
				{this.state.value}
			</button>}*/

			);
	
}

class Board extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			squares: Array(9).fill(null),
			xIsNext: true,
		};
	}
	//Handle square state in parent Board Component
	handleClick(i){
		const squares = this.state.squares.slice();
		
		//Ignore if square is filled or already won.
		if(calculateWinner(squares) || squares[i] ){
			return;
		}

		squares[i] = this.state.xIsNext ? 'X':'O';
		this.setState ({ squares: squares,
						 xIsNext: !this.state.xIsNext,
					  });
	}

	renderSquare(i){
		return (
				<Square value = { this.state.squares[i] }
					    onClick= { () => this.handleClick(i) } />
				);
	}

	render(){
		const winner = calculateWinner(this.state.squares);
		//const status='Next player: X' ;
		//Switch player dep. on state
		//const status = '다음 선수: '+ (this.state.xIsNext ? 'X' : 'O');
		let status;

		if(winner){
			status = '승리 : '+winner;
		}else{
			status = '다음 선수: '+ (this.state.xIsNext ? 'X' : 'O');
		}
		
		return(
			<div>
				<div className="status">{status}
				</div>
				<div className="board-row">
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className="board-row">
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className="board-row">
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</div>
			);
	}
}

class Game extends React.Component{
	render(){
		return(
			<div className="game">
				<div className="game-board">
					<Board />{/*INSERT BOARD COMPONENT*/}
				</div>
				<div className="game-info">
					<div>{/*status*/}</div>
					<ol>{/*TODO*/}</ol>
				</div>
			</div>
			);
	}
}

//========================

ReactDOM.render(
				<Game />,
				document.getElementById('root')
				);


//Helper function to declare winnder
function calculateWinner(squares){
	const lines =[
	[0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
	];
	for (let i=0; i<lines.length; i++){
		const [a,b,c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
				return squares[a];
		}
	}
	return null;
}