import React from "react";
import "./App.css";

// interface Form {
//   value: string;
//   age: number;
// }

export default class App extends React.Component<
  {},
  { name: string; age: number }
> {
  constructor(props: any) {
    super(props);
    this.state = { name: "", age: 0 };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: any) {
    if (event.target.type === "text") {
      this.setState({ name: event.target.value });
    } else {
      this.setState({ age: event.target.value });
    }

    console.log(this.state.name, this.state.age);
  }

  handleSubmit(event: any) {
    event.preventDefault();
    alert(`your name is: ${this.state.name}, age is ${this.state.age}`);
    const student = {
      name: "peter",
      age: 16,
    };
    console.log(student["name"]);
  }
  render() {
    return (
      // <form onSubmit={this.handleSubmit}>
      //   <label htmlFor="name">
      //     Name:
      //     <input
      //       type="text"
      //       value={this.state.name}
      //       onChange={this.handleChange}
      //     />
      //   </label>
      //   <br />
      //   <label htmlFor="age">
      //     Age:
      //     <input
      //       type="number"
      //       onChange={this.handleChange}
      //       // value={this.state.age}
      //     />
      //   </label>
      //   <br />
      //   <input type="submit" value="submit" />
      // </form>
      <Sidebar>
        <h1> i love react</h1>
        <h2> the web is great</h2>
      </Sidebar>
    );
  }
}
function Sidebar(props: any) {
  return (
    <div>
      <p> This is a sidebar</p>
      {props.children}
    </div>
  );
}
