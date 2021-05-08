import React from "react";
import "./App.css";

export default class App extends React.Component<{}, { value: string }> {
  constructor(props: any) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: any) {
    this.setState({
      value: event.target.value,
    });
    console.log(event.target);
  }

  handleSubmit(event: any) {
    event.preventDefault();
    alert(`your name is: ${this.state.value}`);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }
}
