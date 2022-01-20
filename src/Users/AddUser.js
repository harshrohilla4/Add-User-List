import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";
import { useState, useRef } from "react";

const AddUser = (props) => {
  const inputNameRef = useRef();
  const inputAgeRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredName = inputNameRef.current.value;
    const enteredUserAge = inputAgeRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        content: "Please enter valid username and age (non empty)",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid Input",
        content: "Please enter valid Age (>0)",
      });
      return;
    }
    //console.log(enteredName, enteredUserAge);
    props.onAddUser(enteredName, enteredUserAge);
    enteredName.current.value = "";
    enteredUserAge.current.value = "";
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          content={error.content}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={inputNameRef}></input>
          <label htmlFor="age">Age</label>
          <input id="age" type="number" ref={inputAgeRef}></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
