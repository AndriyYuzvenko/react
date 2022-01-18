import React from 'react';
import {NavLink} from "react-router-dom";

import './User.css'

const User = (props) => {
    const {user: {id, name}} = props
    return (
        <>
            <div>
                <NavLink to={id.toString()}>{id} -- {name}</NavLink>
                <hr/>
            </div>
        </>
    );
};

export default User;