import React from 'react';

import './launche.css'

const Launche = (props) => {
    const {mission_name, launch_year, mission_patch_small} = props
    return (

        <div className={'launche'}>
            <nav>
                <h1>{mission_name}</h1>
                <p>  {launch_year} </p>
            </nav>
            <nav>
                <img src={mission_patch_small} alt={mission_name}/>
            </nav>
        </div>
    );
};

export default Launche;