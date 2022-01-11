import React from 'react';

const Post = (props) => {
    let {id, userId,title,body}=props
    return (
        <div>
            <p>id: {id}</p>
            <p>userId: {userId}</p>
            <p>title: {title}</p>
            <p>body: {body}</p>
        </div>
    );
};

export default Post;