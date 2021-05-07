import React from "react";
import "./App.css";

export default class App extends React.Component<any, any> {
  timerID: any;
  constructor(props: any) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
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
        <h1> {this.state.date.tolocaleTimeString()}</h1>
      </div>
    );
  }
}
