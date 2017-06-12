import React, { Component } from 'react';

class Sum extends Component {
    constructor(){
        super();
        this.state={
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    inputChange1(value){
        this.setState({
            number1: parseInt(value, 10)
        })
    }

    inputChange2(value){
        this.setState({
            number2: parseInt(value, 10)
        })
    }

    addMe(num1, num2){
        var summed = num1 + num2;
        this.setState({
            sum: summed
        })
    }

    render(){
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={ (e)=> this.inputChange1(e.target.value) }></input>
                <input className="inputLine" onChange={ (e)=> this.inputChange2(e.target.value) }></input>
                <button className="confirmationButton" onClick={ ()=> this.addMe(this.state.number1, this.state.number2) }>Add</button>
                <span className="resultsBox">Sum: { this.state.sum }</span>
            </div>
        );
    }
}

export default Sum;