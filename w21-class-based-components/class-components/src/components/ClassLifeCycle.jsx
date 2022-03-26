import { Component } from 'react';

class ClassLifeCycle extends Component {
  constructor(){
    super();
    this.state = {
      timer: 1,
      interval: null, 
    }
  }

  componentDidMount(){
    console.log("Class: The component mounted")
    this.state.interval = setInterval(()=>this.setState({timer: this.state.timer+1}),1000)
  }
  componentDidUpdate(){
        console.log('Class: The component updated');
  }
  componentWillUnmount(){
        console.log('Class: The component destroyed');
        clearInterval(this.state.interval);
  }

  render(){
    return (
      <>
        <h1>Class Life Cycle Component</h1>
        <p>Timer: {this.state.timer}</p>
      </>
    );
  }
}

export default ClassLifeCycle;