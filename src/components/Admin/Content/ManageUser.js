import React from "react";
import ModalCreateUser from "./ModalCreateUser";
import { FcPlus } from "react-icons/fc";
import { useState, useEffect } from "react";
import TableUser from "./TableUser";
import { getAllUsers } from "../../../services/apiService";
import "./ManageUser.scss";
import ModalUpdateUser from "./ModalUpdateUser";

const ManageUser = (props) => {
  const [showMoalCreateUser, setShowMoalCreateUser] = useState(false);
  const [showMoalUpdateUser, setShowMoalUpdateUser] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [listUsers, setlistUsers] = useState([]);

  // call back API when render layout
  useEffect(() => {
    fetchListUsers();
  }, []);
  //Noi call API getAllUsers
  const fetchListUsers = async () => {
    let res = await getAllUsers();
    console.log("check getAllUsers: ", res);
    if (res.EC === 0) {
      setlistUsers(res.DT);
    }
  };
  const handleClickBtnUpdate = (user) => {
    setShowMoalUpdateUser(!showMoalUpdateUser);
    setDataUpdate(user);
    console.log(">>> check handleClickBtnUpdate user : ", user);
  };
  return (
    <div className="manage-user-container">
      <div className="title">ManageUser</div>
      <div className="users-content">
        <div className="btn-add-new">
          <button
            className="btn btn-primary"
            onClick={() => setShowMoalCreateUser(!showMoalCreateUser)}
          >
            <FcPlus />
            Add new users
          </button>
        </div>
        <div className="table-users-container">
          <TableUser
            listUsers={listUsers}
            handleClickBtnUpdate={handleClickBtnUpdate}
          />
        </div>
        <ModalCreateUser
          show={showMoalCreateUser}
          setShow={setShowMoalCreateUser}
          fetchListUsers={fetchListUsers}
        />
        <ModalUpdateUser
          show={showMoalUpdateUser}
          setShow={setShowMoalUpdateUser}
          dataUpdate={dataUpdate}
        />
      </div>
    </div>
  );
};

export default ManageUser;
