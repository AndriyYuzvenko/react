import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import postsService from "../../service/posts.service/post.service";
import UsersPost from "../../components/UsersPost/UsersPost";

const PostsPage = () => {
    const {id} = useParams()
    const [post, setPost] = useState([])
    useEffect(() => {
        postsService.getAll()
            .then(item => {
                setPost([...item])
            })
    }, [])
    return (
        <div>
            {post.filter(item => item.userId == id).map(post => <UsersPost key={post.id} post={post}/>)}
        </div>
    );
};
export default PostsPage;