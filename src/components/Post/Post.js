import React from 'react';

const Post = (props) => {
    const {post} = props
    return (
        <div className={'post'}>
            <h1>userId: {post.userId}(id: {post.id})</h1>
            <p>title: {post.title}</p>
            <p>body: {post.body}</p>
        </div>
    );
};

export default Post;