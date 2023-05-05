import React from "react";
import ModalCreateUser from "./ModalCreateUser";
import { FcPlus } from "react-icons/fc";
import { useState, useEffect } from "react";
import { getAllUsers, getUserWithPaginate } from "../../../services/apiService";
import "./ManageUser.scss";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";
import PaginateTableUser from "./PaginateTableUser";

const ManageUser = (props) => {
  const [showMoalCreateUser, setShowMoalCreateUser] = useState(false);
  const [showMoalUpdateUser, setShowMoalUpdateUser] = useState(false);
  const [showModalViewUser, setShowModalViewUser] = useState(false);
  const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [dataView, setDataView] = useState({});
  const [dataDelete, setDataDelete] = useState({});
  const [listUsers, setlistUsers] = useState([]);

  //use Paginate table for user list
  const [pageCount, setPageCount] = useState(0);
  const LIMIT_USER = 5;

  // call back API when render layout
  useEffect(() => {
    // fetchListUsers();
    fetchListUsersWithPaginate(1);
  }, []);
  //Noi call API getAllUsers
  const fetchListUsers = async () => {
    let res = await getAllUsers();
    if (res.EC === 0) {
      setlistUsers(res.DT);
    }
  };
  //use Paginate table for user list
  const fetchListUsersWithPaginate = async (page) => {
    let res = await getUserWithPaginate(page, LIMIT_USER);
    console.log(">>>check res.DT: ", res.DT);
    if (res.EC === 0) {
      setlistUsers(res.DT.users);
      setPageCount(res.DT.totalPages);
    }
  };

  const handleClickBtnUpdate = (user) => {
    setShowMoalUpdateUser(!showMoalUpdateUser);
    setDataUpdate(user);
  };

  const handleClickBtnView = (user) => {
    setShowModalViewUser(!showModalViewUser);
    setDataView(user);
  };
  const handleClickBtnDelete = (user) => {
    setShowModalDeleteUser(!showModalDeleteUser);
    setDataDelete(user);
    console.log(user);
  };

  const resetUpdateData = () => {
    setDataUpdate({});
    setDataView({});
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
          {/* <TableUser
            listUsers={listUsers}
            handleClickBtnUpdate={handleClickBtnUpdate}
            handleClickBtnView={handleClickBtnView}
            handleClickBtnDelete={handleClickBtnDelete}
          /> */}
          {/* use Paginate table for user list */}
          <PaginateTableUser
            listUsers={listUsers}
            handleClickBtnUpdate={handleClickBtnUpdate}
            handleClickBtnView={handleClickBtnView}
            handleClickBtnDelete={handleClickBtnDelete}
            fetchListUsersWithPaginate={fetchListUsersWithPaginate}
            pageCount={pageCount}
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
          fetchListUsers={fetchListUsers}
          resetUpdateData={resetUpdateData}
        />
        <ModalViewUser
          show={showModalViewUser}
          setShow={setShowModalViewUser}
          dataView={dataView}
          resetUpdateData={resetUpdateData}
        />
        <ModalDeleteUser
          show={showModalDeleteUser}
          setShow={setShowModalDeleteUser}
          dataDelete={dataDelete}
          fetchListUsers={fetchListUsers}
        />
      </div>
    </div>
  );
};

export default ManageUser;
