import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

// export class MyComponent extends React.Component {
//   state = {
//     listUsers: [
//       { id: 1, name: "John", age: 18 },
//       { id: 2, name: "Ko", age: 25 },
//       { id: 3, name: "Decate", age: 17 },
//     ],
//   };
//   handleAddNewUser = (user) => {
//     this.setState({
//       listUsers: [user, ...this.state.listUsers],
//     });
//   };
//   handleDeleteUser = (userId) => {
//     console.log("Delete user");
//     this.setState({
//       listUsers: [...this.state.listUsers.filter((item) => item.id !== userId)],
//     });
//   };
//   render() {
//     return (
//       <div>
//         <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
//         <br />
//         <DisplayInfor
//           listUsers={this.state.listUsers}
//           handleDeleteUser={this.handleDeleteUser}
//         />
//       </div>
//     );
//   }
// }
const MyComponent = (props) => {
  const [listUsers, setListUsers] = useState([
    { id: 1, name: "John", age: 18 },
    { id: 2, name: "Ko", age: 25 },
    { id: 3, name: "Decate", age: 17 },
  ]);

  const handleAddNewUser = (user) => {
    setListUsers([user, ...listUsers]);
  };
  const handleDeleteUser = (userId) => {
    console.log("Delete user");
    setListUsers([...listUsers.filter((item) => item.id !== userId)]);
  };
  return (
    <div>
      <AddUserInfor handleAddNewUser={handleAddNewUser} />
      <br />
      <DisplayInfor listUsers={listUsers} handleDeleteUser={handleDeleteUser} />
    </div>
  );
};
export default MyComponent;
