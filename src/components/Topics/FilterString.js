import React, { Component } from 'react';

class FilterString extends Component {
    constructor(){
        super();
        this.state = {
            unfilteredArray: ['sunshine', 'moonlight', 'starlight', 'rainbow'],
            userInput: '',
            filteredArray: []
        }


    }

    inputChange(value){
        this.setState({
            userInput: value
        })
    }

    filterMe(str){
        var stringFilter = [];
        var preString = this.state.unfilteredArray;
        for (var x = 0; x < preString.length; x++){
            if(preString[x].indexOf(str)>=0){
                stringFilter.push(preString[x]);
            }
        }
        this.setState({
            filteredArray: stringFilter
        })
    }


    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">{ JSON.stringify(this.state.unfilteredArray, null, 10) }</span>
                <input className="inputLine" onChange={ (e)=> this.inputChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ ()=> this.filterMe(this.state.userInput) }>Filter</button>
                <span className="resultsBox filterStringRB">{ JSON.stringify(this.state.filteredArray, null, 10) }</span>
            </div>
        );
    }
}

export default FilterString;