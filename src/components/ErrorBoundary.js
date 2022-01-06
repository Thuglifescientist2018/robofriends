import React from 'react'
class ErrorBoundary extends React.Component {
    constructor() {
        super();
        this.state = {  
            hasError: false
        }
    }
    componentDidCatch(error, info) {
        this.setState({hasError: true})
    }
    render() {
        if(this.state.hasError) {
            return <h1>Something wrong with website</h1>

        } 
        else {
            return this.props.children;
        }
    }
}
 
export default ErrorBoundary;