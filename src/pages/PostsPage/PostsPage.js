import React, {useEffect, useState} from 'react';
import postsService from "../../service/posts.service/post.service";
import UsersPost from "../../components/UsersPost/UsersPost";
import {useParams} from "react-router-dom";

const PostsPage = () => {
    const {id} = useParams()
    const [post, setPost] = useState(null)
    useEffect(() => {
        postsService.getById(id)
            .then(item => setPost(item))
    }, [])
    return (
        <div>
            {post && <div>
                <UsersPost post={post}/>
            </div>
            }
        </div>
    );
};
export default PostsPage;