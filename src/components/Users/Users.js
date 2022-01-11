import React, {useEffect, useState} from 'react';
import User from "../User/User";
import "./Users.css"
const Users = () => {
    let [users,setUsers]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(item=>item.json())
            .then(item=>setUsers(item))
    },[])
    return (
        <div className={'users'}>
            {users.map(item=><User key={item.id} id={item.id} name={item.name} username={item.username} email={item.email}/>)}
        </div>
    );
};

export default Users;