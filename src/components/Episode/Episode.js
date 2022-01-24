import React from 'react';
import {Link, Outlet} from "react-router-dom";

import './Episode.css'

const Episode = (props) => {
    const {episode: {id, name, episode, air_date}} = props
    return (
        <div className={'episode'}>
            <h3>{name}</h3>
            <p><b>Episode:</b> {episode}</p>
            <p><b>Air date:</b> {air_date}</p>
            <Link to={`episode/${id.toString()}`} state={id}>Episode details</Link>
            <Outlet/>
        </div>
    );
};

export default Episode;