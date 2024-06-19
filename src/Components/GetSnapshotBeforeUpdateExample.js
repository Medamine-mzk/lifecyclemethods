import React from 'react';

class GetSnapshotBeforeUpdateExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      lastUpdateTime: null,
      snapshot: null
    };
  }

  componentDidMount() {
    // Increment the counter every second
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        counter: prevState.counter + 1,
        lastUpdateTime: new Date().toLocaleTimeString()
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Capture the last update time before the component updates
    return prevState.lastUpdateTime;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // Store the snapshot (last update time) in the state
    if (snapshot !== this.state.snapshot) {
      this.setState({ snapshot });
    }
  }

  render() {
    return (
      <div>
        <h2>Get Snapshot Before Update Example</h2>
        <p>Counter: {this.state.counter}</p>
        <p>Last Update Time: {this.state.lastUpdateTime}</p>
        <p>Snapshot (Previous Update Time): {this.state.snapshot}</p>
      </div>
    );
  }
}

export default GetSnapshotBeforeUpdateExample;
