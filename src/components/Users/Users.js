import React, {useEffect, useState} from 'react';

import User from "../User/User";
import {usersService} from "../../service/users.service";
import {postsService} from "../../service/posts.service";
import Post from "../Post/Post";
import UserDetails from "../userDetails/UserDetails";

const Users = () => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState(null)
    const [posts, setPosts] = useState([])
    const [id, setPost] = useState(null)
    useEffect(() => {
        postsService.getPost()
            .then(item => setPosts(item))
        usersService.getUsers()
            .then(item => setUsers(item))
    }, [])

    const chooseUser = (id) => {
        usersService.getById(id)
            .then(item => setUser(item))
    }
    const choosePost = (id) => {
        setPost(id)
        console.log(id)
    }
    return (
        <div className={'a'}>
            <div className={'usersAll'}>{users.map(item => <User key={item.id} users={item}
                                                                 chooseUser={chooseUser}/>)}</div>
            {user && <UserDetails user={user} choosePost={choosePost}/>}
            {posts.filter(item => item.userId === id).map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Users;