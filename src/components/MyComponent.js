import React from "react";

export class MyComponent extends React.Component {
  state = {
    name: "khoa",
    age: 24,
    address: "Tp.Hcm",
  };
  render() {
    return (
      <div>
        My name is {this.state.name} and my age {this.state.age}
      </div>
    );
  }
}

export default MyComponent;
