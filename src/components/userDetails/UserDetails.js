import React from 'react';

const UserDetails = (props) => {
    const {user, choosePost} = props
    return (
        <div className={'usersDetails'}>
            {user.id} {user.name} {user.username}
            <ul>
                <li> email: {user.email}</li>
                <li>phone: {user.phone}</li>
                <li>website:{user.website}</li>
                <li>city: {user.address.city}</li>
                <li>street: {user.address.street}</li>
                <li>suite: {user.address.suite}</li>
                <li>zipcode: {user.address.zipcode}</li>
            </ul>
            <button onClick={() => choosePost(user.id)}>Get posts</button>

        </div>
    );
};

export default UserDetails;