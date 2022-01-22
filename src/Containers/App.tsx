import * as React from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';
import './App.css'

// Interface that contains types the Robot object contains
export interface IRobot {
    name: string;
    id: number;
    email: string;
}
  
interface IAppProps {

}

// Interface that contains the keys of the app's state
interface IAppState {
    robots: Array<IRobot>;
    searchField: string;
}

class App extends React.Component<IAppProps,IAppState> {
    constructor(props: IAppProps) {
        super(props);
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    // Invokes when constructor() and render() are done running. Renders again after componentDidMount()
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users') 
        .then(response => response.json())
        .then(users => this.setState({ robots: users}));
    }

    // Search method
    // SyntheticEvent: cross-browser wrapper around the browser’s native event
    // HTMLInputElement:  provides special properties and methods for manipulating the options, layout, and presentation of <input> elements.
    onSearchChange = (event: React.SyntheticEvent<HTMLInputElement>): void => {
        this.setState({ searchField: event.currentTarget.value })
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