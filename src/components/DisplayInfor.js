import React, { Component } from "react";
import "./DisplayInfor.scss";

// class DisplayInfor extends Component {
//   render() {
//     console.log(">>> call render");
//     //Destructoring Array/Object
//     const { listUsers } = this.props;
//     //listUsers = this.props.listUsers
//     return (
//       <div className="display-infor-container">
//         {true && (
//           <>
//             {listUsers.map((item, idx) => {
//               return (
//                 <div
//                   key={item.id}
//                   className={+item.age <= 18 ? "green" : "red"}
//                 >
//                   <div> My name is {item.name}</div>
//                   <div> My age {item.age}</div>
//                   <div>
//                     <button
//                       onClick={() => {
//                         this.props.handleDeleteUser(item.id);
//                       }}
//                     >
//                       Delete!
//                     </button>
//                   </div>
//                   <hr />
//                 </div>
//               );
//             })}
//           </>
//         )}
//       </div>
//     );
//   }
// }
const DisplayInfor = (props) => {
  //Destructoring Array/Object
  const { listUsers } = props; //object
  return (
    <div className="display-infor-container">
      {true && (
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
