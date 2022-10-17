import React, { Component } from "react";

class ClassCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            name: "",
        };
    }
    incrementCounter = () => {
        this.setState({ counter: this.state.counter + 1 });
    };
    componentDidMount() {
        document.title = `Current counter value is ${this.state.counter}`;
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.counter !== this.state.counter) {
            console.log("Hello");
            document.title = `Current counter value is ${this.state.counter}`;
        }
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.name}
                    onChange={(e) => this.setState({ name: e.target.value })}
                />
                <button
                    onClick={() => {
                        this.incrementCounter();
                    }}
                >
                    Increment
                </button>
                <hr />
            </div>
        );
    }
}
export default ClassCounter;
