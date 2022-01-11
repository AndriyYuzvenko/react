import React from 'react';

const User = (props) => {
    let {id, name, username, email}=props
    return (
        <div>
            <p>id: {id}</p>
            <p>name: {name}</p>
            <p>username: {username}</p>
            <p>email: {email}</p>
        </div>
    );
};

export default User;