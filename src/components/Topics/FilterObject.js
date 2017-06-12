import React, { Component } from 'react';

class FilterObject extends Component {
    constructor(){
        super();
        this.state = {
            employees: [
                {
                    name: 'Ashlyn',
                    title: 'Master of the Universe',
                    age: '25'
                },
                {
                    name: 'Albert',
                    career: 'plumber',
                    age: 12
                },
                {
                    name: 'Gualberto',
                    career: 'Rodeo Clown',
                    married: '300years'
                }
                ],
            userInput: '',
            filteredEmployees: []
        }
    }

    arrayChange(value){
        this.setState({
            userInput: value
        });
    }

    filtered(prop){
        var array = [];
        var employ=this.state.employees;

        for (var key in employ){
            if(employ[key].hasOwnProperty(prop)){
                array.push(employ[key])
            }
        }

        this.setState({
            filteredEmployees: array
        })
    }


    render(){
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: { JSON.stringify(this.state.employees, null, 10) }</span>
                <input className="inputLine" onChange={ (e)=>this.arrayChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ ()=> this.filtered(this.state.userInput) }>Filter</button>
                <span className="resultsBox filterObjectRB"> { JSON.stringify(this.state.filteredEmployees, null, 10) } </span>
            </div>
        );
    }
}

export default FilterObject;