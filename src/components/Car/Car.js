import React from 'react';

const Car = (props) => {
    const {car: {id, model, year, price},deleteCar} = props
    return (
        <div>
            <hr/>
            <ul>
                <li>id: {id}</li>
                <li>model: {model}</li>
                <li>year: {year}</li>
                <li>price: {price}</li>
            </ul>
            <button onClick={()=>deleteCar(id)}>Delete</button>
        </div>
    );
};

export default Car;