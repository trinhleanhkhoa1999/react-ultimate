import React, { Component } from "react";

export class AddUserInfor extends Component {
  state = {
    name: "khoa",
    age: 24,
    address: "Tp.Hcm",
  };
  handleOnChangeInput(event) {
    this.setState({
      name: event.target.value,
    });
  }
  handleOnChangeAge(event) {
    this.setState({
      age: event.target.value,
    });
  }
  handleOnSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    this.props.handleAddNewUser({
      id: Math.floor(Math.random() * 100) + 1 + "random",
      name: this.state.name,
      age: this.state.age,
    });
  }
  render() {
    return (
      <div>
        My name is {this.state.name} and my age {this.state.age}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>My name: </label>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChangeInput(event)}
          />
          <label>My age: </label>
          <input
            value={this.state.age}
            type="text"
            onChange={(event) => this.handleOnChangeAge(event)}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddUserInfor;
