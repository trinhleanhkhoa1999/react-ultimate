import React, { useState } from "react";
import "./DisplayInfor.scss";

const DisplayInfor = (props) => {
  //Destructoring Array/Object
  const { listUsers } = props; //object

  // this.state({
  //   isShowHide:true
  // })
  const [isShowHide, setIsShowHide] = useState(true);
  console.log("isShowHide: ", isShowHide);
  const handleShowHide = () => {
    // this.setState({
    //   isShowHide:!true
    // })
    setIsShowHide(!isShowHide);
  };

  return (
    <div className="display-infor-container">
      <div>
        <span onClick={() => handleShowHide()}>
          {isShowHide === true ? "Hide list users" : "Show list users"}
        </span>
      </div>
      {isShowHide && (
        <>
          {listUsers.map((item, idx) => {
            return (
              <div key={item.id} className={+item.age <= 18 ? "green" : "red"}>
                <div> My name is {item.name}</div>
                <div> My age {item.age}</div>
                <div>
                  <button
                    onClick={() => {
                      props.handleDeleteUser(item.id);
                    }}
                  >
                    Delete!
                  </button>
                </div>
                <hr />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default DisplayInfor;
