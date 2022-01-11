import React, {useEffect, useState} from 'react';
import Post from "../Post/Post";
import "./Posts.css"
const Posts = () => {
    let [posts,setPosts]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(item=>item.json())
            .then(item=>setPosts(item))
    },[])
    return (
        <div className={'posts'}>
            {posts.map(item=><Post key={item.id} id={item.id} userId={item.userId} title={item.title} body={item.body}/>)}
        </div>
    );
};

export default Posts;