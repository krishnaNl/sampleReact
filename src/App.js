import React from "react";

class App extends React.Component {
    // 1
    constructor() {
        super();
        console.log('constructor 1 : mount');
        this.state = {
            displayText: ''
        }
    }

    // 2
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps 2 : mount', props, state);
    }

    // 4
    componentDidMount() {
        console.log('componentDidMount 4 : mount');
    }

    // 1 : update
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate 1 : update', nextProps, nextState);
        return false;
    }

    // 3 : update
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate 3 : update', prevProps, prevState);
    }


    onTextClick = () => {
        this.setState({
            displayText: 'Female'
        })
    }

    //3 : mount || 2 : update
    render() {
        console.log('render 3 : mount || 2 : update');
        return(
            <div>
                <h1>Life cycle method</h1>
                <h1 onClick={this.onTextClick}>Click me</h1>
            </div>
        )
    }
}
export default App;
