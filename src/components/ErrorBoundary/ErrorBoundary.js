import React, {Component} from 'react';

class ErrorBoundaryComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError() {
        return {hasError: true};
    }

    componentDidCatch(error, errorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    render() {
        const {children} = this.props;
        const {hasError} = this.state;
        if (hasError) {
            return (
                <div>We’re sorry – something has gone wrong. Please try again or contact support.</div>
            );
        }
        return children;
    };
}

export const ErrorBoundary = ErrorBoundaryComponent;
