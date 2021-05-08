import React from "react";
import "./App.css";

// interface Form {
//   value: string;
//   age: number;
// }

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
    console.log(event.target.value);
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
        <label htmlFor="age">
          Age:
          <input type="number" />
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }
}
