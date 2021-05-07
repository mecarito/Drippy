import React from "react";
import "./App.css";

export default class App extends React.Component<{}, { counter: number }> {
  timerID: any;
  constructor(props: any) {
    super(props);
    this.state = { counter: 0 };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState((state) => ({
      counter: state.counter + 4,
    }));
  }

  render() {
    return (
      <div>
        <h1> Today's time</h1>
        <h1> {this.state.counter}</h1>
      </div>
    );
  }
}
