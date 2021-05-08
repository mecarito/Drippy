import React from "react";
import "./App.css";

export default class App extends React.Component<{}, { value: string }> {
  constructor(props: any) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange() {
    this.setState({});
  }

  handleSubmit(e: MouseEvent) {
    alert(`your name is: ${this.state.value}`);
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input
          type="submit"
          value="submit"
          onSubmit={(e) => this.handleSubmit}
        />
      </div>
    );
  }
}
