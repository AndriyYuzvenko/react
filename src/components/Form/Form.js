import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {createCar} from "../../store/car.slice/car.slice";

const Form = () => {
    const {handleSubmit, register, reset} = useForm()
    const dispatch = useDispatch()

    const submit = (data) => {
        dispatch(createCar({data}))
        reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)} className={'form'}>
                <label>Model: <input type="text" {...register('model')}/></label>
                <label>Price: <input type="text" {...register('price')}/></label>
                <label>Year: <input type="text" {...register('year')}/></label>
                <button>save</button>
            </form>
            <hr/>
        </div>
    );
};

export default Form;