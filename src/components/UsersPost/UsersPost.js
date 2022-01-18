import React from 'react';

const UsersPost = (props) => {
    const {post: {id, title}} = props
    return (
        <div>
            <ul>
                <li>{id}</li>
                <li>{title}</li>
            </ul>
        </div>
    );
};

export default UsersPost;