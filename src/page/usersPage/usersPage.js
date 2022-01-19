import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import usersService from "../../service/users.service/users.service";
import User from "../../components/User/User";
import './usersPage.css'

const UsersPage = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        usersService.getAll()
            .then(item => setUsers([...item]))
    }, [])
    return (
        <div className={'content'}>
            <div className={'users'}>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>
            <div className={'albums'}>
                <Outlet/>
            </div>
        </div>
    );
};

export default UsersPage;