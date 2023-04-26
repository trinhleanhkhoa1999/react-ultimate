import React from "react";

export class MyComponent extends React.Component {
  state = {
    name: "khoa",
    age: 24,
    address: "Tp.Hcm",
  };
  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
    console.log("onChangeInput");
  };
  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        My name is {this.state.name} and my age {this.state.age}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            onChange={(event) => this.handleOnChangeInput(event)}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default MyComponent;
