import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";
import usersService from "../../service/users.service/users.service";
import UserDetails from "../../components/UserDetails/UserDetails";
import postsService from "../../service/posts.service/post.service";
import UsersPost from "../../components/UsersPost/UsersPost";

const UserDetailsPage = () => {
    const {id} = useParams()
    const [user, setUser] = useState(null)
    useEffect(() => {
        usersService.getById(id)
            .then(item => setUser({...item}))
    }, [])
    return (
        <div>
            {user && <div>
                <UserDetails user={user} />
                </div>}
            <Outlet/>
        </div>
    );
};

export default UserDetailsPage;