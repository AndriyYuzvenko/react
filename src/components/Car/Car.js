import React from 'react';
import {useDispatch} from "react-redux";

import {deleteCarThunk} from "../../store/car.slice/car.slice";

const Car = (props) => {
    const {car: {id, model, price, year}} = props
    const dispatch = useDispatch()
    return (
        <div>
            <div>
                <p>Model: {model}</p>
                <p>Price: {price}</p>
                <p>Year: {year}</p>
                <button onClick={() => dispatch(deleteCarThunk({id}))}>Delete</button>
            </div>
            <hr/>
        </div>
    );
};

export default Car;