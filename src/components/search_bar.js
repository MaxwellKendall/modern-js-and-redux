import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        // constructor is called everytime component is called
        super(props); //calls the parent constructor method on react.component

        this.state = {
            term: ''
        };
    }
    render() {
        return (
            <div>
                <input onChange={event => this.setState({ term: event.target.value})} />
                Value of the input: {this.state.term}
            </div>

        )
    }
}

export default SearchBar;
