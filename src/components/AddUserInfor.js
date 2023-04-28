import React, { useState } from "react";

const AddUserInfor = (props) => {
  const [name, setName] = useState("khoa");
  const [age, setAge] = useState("24");

  const handleOnChangeName = (event) => {
    // setState({
    //   name: event.target.value,
    // });
    setName(event.target.value);
  };
  const handleOnChangeAge = (event) => {
    // setState({
    //   age: event.target.value,
    // });
    setAge(event.target.value);
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.handleAddNewUser({
      id: Math.floor(Math.random() * 100) + 1 + "random",
      name: name,
      age: age,
    });
  };
  return (
    <div>
      My name is {name} and my age {age}
      <form onSubmit={(event) => handleOnSubmit(event)}>
        <label>My name: </label>
        <input
          value={name}
          type="text"
          onChange={(event) => handleOnChangeName(event)}
        />
        <label>My age: </label>
        <input
          value={age}
          type="text"
          onChange={(event) => handleOnChangeAge(event)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default AddUserInfor;
