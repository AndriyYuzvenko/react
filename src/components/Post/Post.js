import React from 'react';

const Post = (props) => {
    const {post: {id, userId, title, body}} = props
    return (
        <div>
            <div>
                <ul>
                    <li><b>id:</b> {id}</li>
                    <li><b>userId:</b> {userId}</li>
                    <li><b>title:</b> {title}</li>
                    <li><b>body:</b> {body}</li>
                </ul>
            </div>
            <hr/>
        </div>
    );
};

export default Post;