import React, { Component } from "react";
import "./DisplayInfor.scss";

export default class DisplayInfor extends Component {
  state = {
    isShowHide: true,
  };
  //set true or false
  handleShowHide = () => {
    this.setState({
      isShowHide: !this.state.isShowHide,
    });
  };

  render() {
    console.log("props form MyComponent", this.props);
    //Destructoring Array/Object
    const { listUsers } = this.props;
    //listUsers = this.props.listUsers
    return (
      <div className="display-infor-container">
        <div>
          <span
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isShowHide === true
              ? "Hide List User:"
              : "Show List User:"}
          </span>
        </div>
        {this.state.isShowHide && (
          <>
            {listUsers.map((item, idx) => {
              return (
                <div
                  key={item.id}
                  className={+item.age <= 18 ? "green" : "red"}
                >
                  <div> My name is {item.name}</div>
                  <div> My age {item.age}</div>
                  <div>
                    <button
                      onClick={() => {
                        this.props.handleDeleteUser(item.id);
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
  }
}
