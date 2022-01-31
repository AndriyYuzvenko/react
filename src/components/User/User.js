import React from 'react';

const User = (props) => {
    const {user: {id, name, email}} = props
    return (
        <div>
            <h4>{id}--{name}--{email}</h4>
        </div>
    );
};

export default User;