import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';

class LocalTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Click the button'
        }
    }

    handleClick = () => {
        this.setState = {
            text: 'The button was clicked'
        }
    }

    render() {
        return (
            <div>
                <h2>{this.state.text}</h2>
                <button onClick={handleClick}>Click me!</button>
            </div>
        );
    }
}


ReactDOM.render(
    <LocalTime />,
    document.getElementById('root')
);
