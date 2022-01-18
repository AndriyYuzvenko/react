import React, {useEffect, useState} from 'react';
import usersService from "../../service/users.service/users.service";
import User from "../../components/User/User";
import {Outlet} from "react-router-dom";
import './UsersPage.css'

const UsersPage = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        usersService.getAll()
            .then(item => setUsers([...item]))
    }, [])

    return (
            <div className={'allUsers'}>
                <div className={'users'}>
                    {users.map(user => <User key={user.id} user={user}/>)}</div>
                {<Outlet/>}
            </div>
    );
};

export default UsersPage;