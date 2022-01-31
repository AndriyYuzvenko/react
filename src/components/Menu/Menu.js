import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <div className={'menu'}>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/cars'}>Cars</NavLink>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/posts'}>Posts</NavLink>
                <NavLink to={'/comments'}>Comments</NavLink>
            </div>
            <Outlet/>
        </div>
    );
};

export default Menu;