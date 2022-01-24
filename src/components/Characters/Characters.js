import React from 'react';

const Characters = (props) => {
    const {character: {name, image, status, species, gender, origin, location}} = props
    return (
        <div className={'episodeOne'}>
            <img src={image} alt={name}/>
            <h3>{name}</h3>
            <p><b>Status:</b> {status}</p>
            <p><b>Species:</b> {species}</p>
            <p><b>Gender:</b> {gender}</p>
            <p><b>Origin:</b> {origin.name}</p>
            <p><b>Location:</b> {location.name}</p>
        </div>
    );
};

export default Characters;