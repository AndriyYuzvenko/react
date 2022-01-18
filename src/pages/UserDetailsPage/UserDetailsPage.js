import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";

import usersService from "../../service/users.service/users.service";
import UserDetails from "../../components/UserDetails/UserDetails";

const UserDetailsPage = () => {
    const {id} = useParams()
    const [user, setUser] = useState([])
    useEffect(() => {
        usersService.getAll()
            .then(item => setUser([...item]))
    }, [])
    return (
        <div className={'userDetails'}>
            {user.filter(item => item.id == id).map(user => <UserDetails key={user.id} user={user}/>)}
            <Outlet/>
        </div>
    );
};

export default UserDetailsPage;