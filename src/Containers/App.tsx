import React, { Component } from 'react';
import CardList from '../Components/CardList.js';
import SearchBox from '../Components/SearchBox.js';
import Scroll from '../Components/Scroll.js';
import ErrorBoundary from '../Components/ErrorBoundary.js';
import './App.css'

//  The State of a component is an object that holds some information that may change over the lifetime of the component.

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    // Invokes when constructor() and render() are done running. Renders again after componentDidMount()
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users') // fetch resource accross servers (JSON objects)
        .then(response => response.json())  // once repsonse is returned, convert it to json
        .then(users => this.setState({ robots: users})); // once response have been converted to json, set the state of the component
    }

    // Search method
    onSearchChange = (event) => { // NB! Use arrow functions when a method is not part of React
        // event.target.value: returns value typed in search box (component)
        this.setState({searchField: event.target.value}); // always invoke this when you want to change state
    }

    render() {
        const { robots, searchField } = this.state;
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase()); // check if search value exists in robots array. Works for upper and lowercase searches
        });
        return !robots.length ?
        <h1 className="tc f1">LOADING...</h1> :
        !filterRobots.length ? 
        (<div className="tc">
            <h1 className="tc f1">ROBOT DOESN'T EXIST...</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll> {/* CardList is a child of Scroll */}
                <ErrorBoundary> {/* if anything in CardList fails, an error will be displayed */}
                    <CardList robots={filterRobots}/> {/* state can be passed down as props to children */}
                </ErrorBoundary>
            </Scroll>
        </div>) :
        // remember to always return one component
        <div className="tc">
            <h1 className="mb3 f1">Robofriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll> {/* CardList is a child of Scroll */}
                <ErrorBoundary> {/* if anything in CardList fails, an error will be displayed */}
                    <CardList robots={filterRobots}/> {/* state can be passed down as props to children */}
                </ErrorBoundary>
            </Scroll>
        </div>
    }
}

export default App;