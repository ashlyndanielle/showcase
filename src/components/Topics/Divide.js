import React, { Component } from 'react'

class Divide extends Component(){
    constructor(){
        super();
        this.state = {
            number1: '',
            number2: '',
            dividend: null
        }
    }

    changeNumber1(value){
        this.setState({
            number1: parseInt(value, 10)
        })
    }

    changeNumber2(value){
        this.setState({
            number2: parseInt(value, 10)
        })
    }

    render(){
        return (
            <div className="puzzleBox sumPB">
                <h4>Divide</h4>
                <input className="inputLine" onChange={ (e)=> this.changeNumber1(e.target.value) }></input>
                <input className="inputLine" onChange={ (e)=> this.changeNumber2(e.target.value) }></input>
                <button className="confirmationButton" onClick={ ()=> this.divideMe(this.state.number1, this.state.number2) }>Divide</button>
                <span className="resultsBox">Dividend: { this.state.dividend }</span>
            </div>
        );
    }
}

export default Divide