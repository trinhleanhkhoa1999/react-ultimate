import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

export class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <UserInfor />
        <br />
        <DisplayInfor name="Khoa dep trai" age="24" />
      </div>
    );
  }
}

export default MyComponent;
