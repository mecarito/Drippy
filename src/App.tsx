import React from "react";
import "./App.css";

export default class App extends React.Component<{}, { date: Date }> {
  timerID: any;
  constructor(props: any) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 100);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div>
        <h1> Today's time</h1>
        <h1> {this.state.date.toLocaleTimeString()}</h1>
      </div>
    );
  }
}
