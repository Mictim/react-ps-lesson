import React from "react";

class ClassCounter extends React.Component<{ message: string }, { count: number }> {

    state = { count: 0 };
    increment() {
        this.setState((state) => ({
            count: state.count + 1,
          }));
    }

    decrement() {
        this.setState((state) => ({
            count: state.count - 1,
          }));
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.increment()}>Increment</button>
                <button onClick={() => this.decrement()}>Decrement</button>
            </div>
        )
    }
}

export default ClassCounter;