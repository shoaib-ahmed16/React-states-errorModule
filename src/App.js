import React,{useState} from 'react';
import AddUser  from './components/Users/AddUser';
import UsersList from './components/Users/UserList';
function App() {
 const [userList,setUserList] =useState([]);
 const adddUserHandler =(userName, userAge)=>{
  setUserList((prevUsersList) =>{
    return [...prevUsersList,{name:userName,age:userAge, id:Math.random().toString()}]
  })
 }
  return (
    <>
      <AddUser onAddUser={adddUserHandler}></AddUser>
      <UsersList users={userList}></UsersList>
    </>
  );
}

export default App;
