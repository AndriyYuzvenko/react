import React, {useEffect, useState} from 'react';

import Launche from "../Launche/Launche";
import './Launches.css'

const Launches = () => {
    const [launches, setLaunches] = useState([])

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(item => item.json())
            .then(item => setLaunches(item))
    }, [])

    return (

        <div className={'launches'}>

            {launches.map(item => {
                    if (item.launch_year !== '2020') {
                        return (<Launche key={item.flight_number} mission_name={item.mission_name}
                                         launch_year={item.launch_year}
                                         mission_patch_small={item.links.mission_patch_small}/>)
                    }
                }
            )}

        </div>
    );

};

export default Launches;