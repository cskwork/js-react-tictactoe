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

class Square extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			value: null,
		};
	}

	render(){
		return(
			/*
			<button className="square" onClick={function(){ alert('click');} 
												}>
				{this.props.value}
			</button>*/
			/* REFACTORED to use arrow function syntax */
			<button className="square" 
					onClick={ () => this.setState({value:'X'})}>
				{this.state.value}
			</button>

			);
	}
}

class Board extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			squares: Array(9).fill(null),
		};
	}
	renderSquare(i){
		return <Square value={ this.state.squares[i] } 
					   onClick={ () => this.handleClick(i)} />;
	}
	
	handleClick(i){
		const squares = this.state.squares.slice();
		squares[i] = 'X';
		this.setState ({ squares: squares});
	}renderSquare(i){
		return (
				<Square value = { this.state.squares[i] }
					    onClick= { () => this.handleClick(i) } />
				);
	}

	render(){
		const status='Next player: X';
		
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

/*class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  handleClick(i) {    
  	const squares = this.state.squares.slice();    
  					squares[i] = 'X';    
  					this.setState({squares: squares});  
  				}renderSquare(i) {
    						return (
      						<Square value={ this.state.squares[i] } onClick={() => this.handleClick(i)}/>
      						);
  				}

  render() {
    const status = 'Next player: X';
    return (
    <div>        
		<div className="status">{status}</div>        
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
	</div>);
  }
}*/