import React from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch} from "react-redux";

import {addTodo} from '../../store/tode.splice';

const Form = () => {
    const {register, handleSubmit, reset} = useForm()
    const dispatch = useDispatch()
    const submit = (data) => {
        dispatch(addTodo({data}))
        reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)} className={'form'}>
                <input type="text" placeholder={'todo'} {...register('todo')}/>
                <button>add</button>
            </form>
            <hr/>
        </div>
    );
};

export default Form;