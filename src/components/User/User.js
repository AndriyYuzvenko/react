import React from 'react';
import {Link} from "react-router-dom";

const User = (props) => {
    const {user: {id, name, username}} = props
    return (
        <div>
            <ul>
                <li>id: {id}</li>
                <li>name: {name}</li>
                <li>username: {username}</li>
                <li><Link to={id.toString()}>
                    <button>All albums</button>
                </Link></li>
            </ul>
            <hr/>
        </div>
    );
};

export default User;