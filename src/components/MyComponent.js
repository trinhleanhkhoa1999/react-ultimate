import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

export class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "John", age: 18 },
      { id: 2, name: "Ko", age: 25 },
      { id: 3, name: "Decate", age: 17 },
    ],
  };
  handleAddNewUser = (user) => {
    this.setState({
      listUsers: [user, ...this.state.listUsers],
    });
  };
  render() {
    return (
      <div>
        <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
        <br />
        <DisplayInfor listUsers={this.state.listUsers} />
      </div>
    );
  }
}

export default MyComponent;
