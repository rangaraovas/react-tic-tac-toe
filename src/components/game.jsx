import React, { Component } from 'react';
import Board from './board';

class Game extends Component {
    
    render() { 
        return ( 
            <div className="game">
                <div className="game-board">
                    <Board className="container"/>
                </div>
            </div>
         );
    }
}
 
export default Game;

