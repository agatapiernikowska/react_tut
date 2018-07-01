import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {counter: 0};
  }

  render() {
    return (
      <div>
        <button onClick={this.increment.bind(this)}>+</button>
        <output>{this.state.counter}</output>
        <button onClick={this.decrement.bind(this)}>-</button>
      </div>
    );
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decrement() {
    this.setState({
      counter: this.state.counter - 1
    })
  }
}

export default App;
