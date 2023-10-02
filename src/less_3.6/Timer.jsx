import React from 'react';

export default class Timer extends React.Component {
  state = {
    count: 0,
    isCounting: false,
  };

  componentDidMount() {
    this.timerId = undefined;
    const storageCount = localStorage.getItem('count');
    if (storageCount) this.setState({ count: +storageCount });
  }

  componentDidUpdate() {
    localStorage.setItem('count', this.state.count);
    console.log(`LocalStorage updated: count = ${localStorage.getItem('count')}`);
  }

  componentWillUnmount() {
    this.handleStop();
  }

  handleStart() {
    this.setState({ isCounting: true })
    this.timerId = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  handleStop() {
    if (this.timerId) {
      this.setState({ isCounting: false })
      clearInterval(this.timerId);
      this.timerId = undefined;
      console.log('timerId was clean');
    }
  }

  handleReset() {
    this.handleStop();
    this.setState({ count: 0 });
  }

  render() {
    return (
      <div className="App">
        <h1>React Timer</h1>
        <h3>{this.state.count}</h3>
        {!this.state.isCounting ? (
          <button className='button-22' style={{ margin: '0 0.5rem' }} onClick={() => this.handleStart()}>Start</button>
        ) : (
          <button className='button-22' style={{ margin: '0 0.5rem' }} onClick={() => this.handleStop()}>Stop</button>
        )}
        <button className='button-22' style={{ margin: '0 0.5rem' }} onClick={() => this.handleReset()}>Reset</button>
      </div>
    );
  }
}