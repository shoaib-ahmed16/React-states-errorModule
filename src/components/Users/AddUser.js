import React,{useState,useRef} from 'react'
import Card from '../UI/Card';
import classes  from './AddUser.module.css'
import Button  from '../UI/Button';
import ErrorModel from '../UI/ErrorModel'
const AddUser =(props)=>{
  const nameInputRef =useRef();
  const ageInputRef =useRef();
// const [enteredUserName,setEnterUserName]=useState("");
// const [enteredUserAge,setEnterUserAge]=useState(0);
const [error,setError] =useState()
  const addUserHandler =(event)=>{
    event.preventDefault();
    const name =nameInputRef.current.value;
    const age =ageInputRef.current.value;
    // if(enteredUserName.trim().length===0 || enteredUserAge.trim().length===0 ){
    //   setError({
    //     errorTitle:"Invalid input",
    //     errorMessage:"Please Enter a valid name and age (non-empty values)."
    //   })
    //   return;
    // }
    // if(+enteredUserAge<1){
    //    setError({
    //     errorTitle:"Invalid age",
    //     errorMessage:"Please Enter a valid age greater than 0."
    //   })
    //   return;
    // }
    // // console.log(enteredUserName,enteredUserAge);
    // props.onAddUser(enteredUserName,enteredUserAge);
    // setEnterUserName("");
    // setEnterUserAge(0);
     if(name.trim().length===0 || age.trim().length===0 ){
      setError({
        errorTitle:"Invalid input",
        errorMessage:"Please Enter a valid name and age (non-empty values)."
      })
      return;
    }
    if(+age<1){
       setError({
        errorTitle:"Invalid age",
        errorMessage:"Please Enter a valid age greater than 0."
      })
      return;
    }
    props.onAddUser(name,age);
    nameInputRef.current.value='';
    ageInputRef.current.value='';
  }
  // const userNameChangeHandler =(event)=>{
  //   event.preventDefault();
  //   // setEnterUserName(event.target.value)
  // }
  // const userAgeChangeHandler =(event)=>{
  //   event.preventDefault()
  //   // setEnterUserAge(event.target.value);
  // }

  const errorHandler =()=>{
    setError(null);
  }
// to use ref hook in this project we remove useState hook we get again use of useState just need to add value={enteredUserName} and onChange ={userNameChangeHandler} in input tag in below code and remove ref ={}; 
  return (
    <React.Fragment>
    {error && <ErrorModel onConfirm={errorHandler} errorTitle={error.errorTitle} errorMessage={error.errorMessage}/>}
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text'  ref ={nameInputRef}/>
        <label htmlFor='age'>Age</label>
        <input id='age' type='number'  ref ={ageInputRef}/>
        <Button type='submit'>Add User</Button>
    </form>
    </Card>
    </React.Fragment>
 )
}

export default AddUser