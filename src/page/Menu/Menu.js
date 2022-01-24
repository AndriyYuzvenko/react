import React from 'react';
import {Link, Outlet} from "react-router-dom";

import './Menu.css'

const Menu = () => {

    return (
        <div>
            <div className={'rickAndMorty'}>
                <Link to={'/'}>Rick and Morty</Link>
            </div>
            <Outlet/>
        </div>
    );
};

export default Menu;