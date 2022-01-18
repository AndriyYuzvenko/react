import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import usersService from "../../service/users.service/users.service";
import UserDetails from "../../components/UserDetails/UserDetails";

const UserDetailsPage = () => {
    const {id} = useParams()
    const [user, setUser] = useState(null)
    useEffect(() => {
        usersService.getById(id)
            .then(item=>setUser({...item}))
    }, [])
    return (
        <div>
            {user && <div>
                <UserDetails user={user}/>
            </div>
            }
        </div>
    );
};

export default UserDetailsPage;