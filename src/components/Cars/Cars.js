import React, {useEffect, useState} from 'react';

import {carsService} from "../../service/cars.service";
import Car from "../Car/Car";

const Cars = ({car,deleteCar}) => {
    const [cars, setCars] = useState([])
    useEffect(() => {
        carsService.CarsService.getAll()
            .then(param => setCars(param))
    }, [car])


    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} deleteCar={deleteCar}/>)}
        </div>
    );
};

export default Cars;