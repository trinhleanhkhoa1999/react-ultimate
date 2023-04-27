import React, { Component } from "react";

export default class DisplayInfor extends Component {
  render() {
    console.log("props form MyComponent", this.props);
    const { name, age } = this.props;
    return (
      <div>
        My name is {name} and my age {age}
      </div>
    );
  }
}
