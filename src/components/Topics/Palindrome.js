import React, { Component } from 'react';

class Palindrome extends Component {
    constructor(){
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    inputChange(value){
        this.setState({
            userInput: value
        })
    }

    spelledBackwards(str){
        if(str.split('').reverse().join('') === str){
            this.setState({
                palindrome: 'true'
            })
        } else {
            this.setState({
                palindrome: 'false'
            })
        }

    }

    render() {
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={ (e)=> this.inputChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ ()=> this.spelledBackwards(this.state.userInput) }>Check</button>
                <span className="resultsBox">Palindrome: { this.state.palindrome }</span>
            </div>
        );
    }
}

export default Palindrome;