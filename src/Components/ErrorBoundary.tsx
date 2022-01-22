import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) { // executes if an error did occur
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return <h1>SOMETHING WENT WRONG... TRY AGAIN</h1>
        }
        return this.props.children; // return children components if nothing went wrong
    }
}

export default ErrorBoundary;