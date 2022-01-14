import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css"
import { useState } from "react";
const AddUser = (props) => {
const[enteredUsername,setenteredUsername]=useState('');
const[enteredAge,setenteredAge]=useState('');

const enteredUsernameHandler=(event)=>{
    setenteredUsername(event.target.value);
}
const enteredAgeHandler=(event)=>{
    setenteredAge(event.target.value);
}
  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length ===0 || enteredAge.trim().length === 0)
    {
        return;
    }
    if(+enteredAge<1)
    {
        return;
    }
    setenteredUsername('');
    setenteredAge('');
  };
  return (
    <Card className={classes.input}> 
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={enteredUsername} onChange={enteredUsernameHandler}></input>
        <label htmlFor="age">Age</label>
        <input id="age" type="number" value={enteredAge} onChange={enteredAgeHandler}></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
