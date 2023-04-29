import React from "react";
import ModalCreateUser from "./ModalCreateUser";

function ManageUser(props) {
  return (
    <div className="manage-user-container">
      <div className="title">ManageUser</div>
      <div className="users-content">
        <ModalCreateUser />
      </div>
      <div>table users</div>
    </div>
  );
}

export default ManageUser;
