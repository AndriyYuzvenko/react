import React from 'react';
import {Link} from "react-router-dom";

const Album = (props) => {
    const {album: {userId, id, title}} = props
    return (
        <div>
            <ul>
                <li>userId: {userId}</li>
                <li>id: {id}</li>
                <li>title: {title}</li>
                <li><Link to={`${id.toString()}/photos`}>
                    <button>All photos</button>
                </Link></li>
            </ul>
            <hr/>
        </div>
    );
};

export default Album;