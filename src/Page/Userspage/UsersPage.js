import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getUsers} from "../../store/users.slice/users.slice";
import User from "../../components/User/User";

const UsersPage = () => {
    const {users, status, error} = useSelector(state => state['usersReducer'])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUsers())
    }, [])
    return (
        <div>
            {status === 'pending' && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersPage;