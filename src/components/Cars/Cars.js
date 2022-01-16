import React, {useEffect, useState} from 'react';

import {carsService} from "../../service/cars.service";
import Car from "../Car/Car";

const Cars = ({car, upDate}) => {
    const [cars, setCars] = useState([])
    useEffect(() => {
        carsService.CarsService.getAll()
            .then(param => setCars(param))

    }, [car])
    const [form, setForm] = useState({})
    const deleteCar = async (car) => {
        console.log(car)
        try {
            const newCar = await carsService.CarsService.deleteId(car)
            upDate(newCar)
        } catch (error) {
            setForm(error.response.data)
        }
        console.log(cars)
    }
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} deleteCar={deleteCar}/>)}
        </div>
    );
};

export default Cars;