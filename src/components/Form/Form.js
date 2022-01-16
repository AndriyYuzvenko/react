import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {CarsValidation} from "../../valodation/cars.validation";
import {carsService} from "../../service/cars.service";

const Form = ({upDate}) => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: joiResolver(CarsValidation),
        mode: 'onTouched'
    });
    const [form,setForm]=useState({})
    const submit = async (car) => {
        try{
            const newCar= await carsService.CarsService.create(car)
            upDate(newCar)
        }catch (error){
            setForm(error.response.data)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div><label>Model: <input type="text" defaultValue={''} {...register('model')}/></label></div>
                {errors.model && <span>{errors.model.message}</span>}
                <div><label>Year: <input type="text" defaultValue={''} {...register('year')}/></label></div>
                {errors.year && <span>{errors.year.message}</span>}
                <div><label>Price: <input type="text" defaultValue={''} {...register('price')}/></label></div>
                {errors.price && <span>{errors.price.message}</span>}
                <div>
                    <button>App</button>
                </div>
            </form>
        </div>
    );
};

export default Form;