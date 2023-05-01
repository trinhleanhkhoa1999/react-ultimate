import { useState } from "react";
import { getAllUsers } from "../../../services/apiService";
import { useEffect } from "react";

const TableUser = (props) => {
  const [listUsers, setlistUsers] = useState([]);
  // call back API when render layout
  useEffect(() => {
    fetchListUsers();
  }, []);
  //Noi call API getAllUsers
  const fetchListUsers = async () => {
    let res = await getAllUsers();
    console.log(res.DT);
    if (res.EC === 0) {
      setlistUsers(res.DT);
    }
  };
  return (
    <>
      <table className="table table-hover table-bordered ">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, idx) => {
              return (
                <tr key={`tablle-users-${idx}`}>
                  <td>{idx + 1}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td className="d-flex">
                    <button className="btn btn-secondary">View</button>
                    <button className="btn btn-warning mx-3">Update</button>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
          {listUsers && listUsers.length === 0 && (
            <tr>
              <th colSpan="4">Khong co data...... </th>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};
export default TableUser;
