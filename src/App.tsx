import React from "react";
import "./App.css";

export default class App extends React.Component<{}, { counter: number }> {
  constructor(props: any) {
    super(props);
    this.state = { counter: 0 };
  }

  list: any;
  numbers = [1, 2, 3, 4, 5];
  listItems = this.numbers.map((number) => (
    <li key={number.toString()}>{number}</li>
  ));

  render() {
    return (
      // <div>
      <ol>{this.listItems}</ol>
      // </div>
    );
  }
}
