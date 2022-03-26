import { Component } from 'react';
// import React from 'react'

class ClassComponent extends Component {
  constructor(){
    super();
    this.state = {
      counter: 1,
    }
      this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement(){
      this.setState({counter: this.state.counter +1})
  }

  render() {

    const { someProps } = this.props;

    return (
      <>
        <h2>Class Component</h2>
        <p>{this.state.counter}</p>
        <p>Prop: {someProps}</p>
        <button onClick={this.handleIncrement}>Increment</button>
      </>
    );
  }
}

export default ClassComponent;
