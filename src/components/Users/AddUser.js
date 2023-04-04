import React,{useState} from 'react'
import Card from '../UI/Card';
import classes  from './AddUser.module.css'
import Button  from '../UI/Button';
import ErrorModel from '../UI/ErrorModel'
const AddUser =(props)=>{
const [enteredUserName,setEnterUserName]=useState("");
const [enteredUserAge,setEnterUserAge]=useState(0);
const [error,setError] =useState()
  const addUserHandler =(event)=>{
    event.preventDefault();
    if(enteredUserName.trim().length===0 || enteredUserAge.trim().length===0 ){
      setError({
        errorTitle:"Invalid input",
        errorMessage:"Please Enter a valid name and age (non-empty values)."
      })
      return;
    }
    if(+enteredUserAge<1){
       setError({
        errorTitle:"Invalid age",
        errorMessage:"Please Enter a valid age greater than 0."
      })
      return;
    }
    // console.log(enteredUserName,enteredUserAge);
    props.onAddUser(enteredUserName,enteredUserAge);
    setEnterUserName("");
    setEnterUserAge(0);
  }
  const userNameChangeHandler =(event)=>{
    event.preventDefault();
    setEnterUserName(event.target.value)
  }
  const userAgeChangeHandler =(event)=>{
    event.preventDefault()
    setEnterUserAge(event.target.value);
  }

  const errorHandler =()=>{
    setError(null);
  }

  return (
    <React.Fragment>
    {error && <ErrorModel onConfirm={errorHandler} errorTitle={error.errorTitle} errorMessage={error.errorMessage}/>}
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' value={enteredUserName} onChange={userNameChangeHandler}/>
        <label htmlFor='age'>Age</label>
        <input id='age' type='number' value={enteredUserAge}  onChange={userAgeChangeHandler}/>
        <Button type='submit'>Add User</Button>
    </form>
    </Card>
    </React.Fragment>
 )
}

export default AddUser