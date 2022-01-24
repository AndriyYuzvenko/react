import React from 'react';

const EpisodeDetails = (props) => {
    const {episod: {name, episode, air_date}} = props
    return (
        <div>
            <h3>{name}</h3>
            <p><b>Episodes:</b> {episode}</p>
            <p><b>Air date:</b> {air_date}</p>
        </div>
    );
};

export default EpisodeDetails;