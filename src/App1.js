import React from 'react';
import logo from './logo.svg';
import './App.css';

/*
* intialize -- constrictor --- this.state = {}
* use - this.state.keyOfState
* update (optinal) - this.setState({keyOfState:  newValue})
* */

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            displayText: ''
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                displayText: 'male'
            })
        }, 2000);
    }

    onTextClick = () => {
        this.setState({
            displayText: 'Female'
        })
    }
/*
* if(this.state.displayText === 'male' ){}else {}
* */

    render() {
        return (
            <div>
                <h1>{this.state.displayText}</h1>
                <h1 onClick={this.onTextClick}>Click me</h1>
                {
                    this.state.displayText === 'male'  ? <div><p>selected male</p></div> : <div/>
                }
                {
                    this.state.displayText === 'Female'  ? <div><p>selected Female</p></div> : <div/>
                }
            </div>
        )
    }
}

export default App;
