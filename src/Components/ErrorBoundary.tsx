import * as React from 'react';

interface Props {
    children: React.ReactNode;
}
  
interface State {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    // executes if an error did occur
    componentDidCatch(error: Error, info: React.ErrorInfo) {
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