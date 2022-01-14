import React from 'react';

const User = (props) => {
    const {users: {id, name, username, email}, chooseUser} = props
    return (
        <div>
            {id} -- {name} {username} -- {email}
            <button onClick={() => chooseUser(id)}>Get details</button>
        </div>
    );
};

export default User;