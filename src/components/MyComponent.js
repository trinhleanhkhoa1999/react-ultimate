import React from "react";

export class MyComponent extends React.Component {
  state = {
    name: "khoa",
    age: 24,
    address: "Tp.Hcm",
  };
  handleClick = (event) => {
    console.log("handleClick");
    console.log("My name is ", this.state.name);

    this.setState({
      name: "be bi",
      age: Math.floor(Math.random() * 10) + 1,
    });
  };
  render() {
    return (
      <div>
        My name is {this.state.name} and my age {this.state.age}
        <button
          onClick={(event) => {
            this.handleClick(event);
          }}
        >
          Click me!
        </button>
      </div>
    );
  }
}

export default MyComponent;
