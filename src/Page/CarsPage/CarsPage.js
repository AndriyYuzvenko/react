import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getCars} from "../../store/car.slice/car.slice";
import Car from "../../components/Car/Car";
import Form from "../../components/Form/Form";

const Cars = () => {
    const {cars, status, error} = useSelector(state => state['carReducer'])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCars())
    }, [])
    return (
        <div>
            <Form/>
            {status === 'pending' && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export default Cars;