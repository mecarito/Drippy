import React from "react";
import "./App.css";

export default class App extends React.Component<{}, { date: number }> {
  timerID: any;
  constructor(props: any) {
    super(props);
    this.state = { date: 0 };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({ date: Math.random() });
  }

  render() {
    return (
      <div>
        <h1> Today's time</h1>
        <h1> {this.state.date}</h1>
      </div>
    );
  }
}
