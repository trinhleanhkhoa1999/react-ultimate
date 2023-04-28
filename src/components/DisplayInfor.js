import React, { useState, useEffect } from "react";
import "./DisplayInfor.scss";

const DisplayInfor = (props) => {
  //Destructoring Array/Object
  const { listUsers } = props; //object

  const [isShowHide, setIsShowHide] = useState(true);

  const handleShowHide = () => {
    setIsShowHide(!isShowHide);
  };
  useEffect(() => {
    console.log(">>> check render using effect");
  }, []); //useEffect có [] render 1 lần duy nhất

  useEffect(() => {
    if (listUsers.length === 0) {
      alert("you are deleted all users");
    }
  }, [listUsers]); //useEffect truyen state [listUsers] re render useEffect sau moi lan render

  console.log(">>> check render");
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
