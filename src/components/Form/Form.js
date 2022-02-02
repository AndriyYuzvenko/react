import React from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';

import {addTodo} from '../../store/tode.splice';

const Form = () => {
    const {register, handleSubmit, reset} = useForm()
    const dispatch = useDispatch()
    const {todo, count} = useSelector(state => state['todoReducer'])
    const submit = (data) => {
        dispatch(addTodo({data}))
        reset()
    }
    console.log(todo)
    return (
        <div>
            <div className={'totoLength'}>
                <h1>All:{todo.length} Completed:{count}</h1>
            </div>
            <form onSubmit={handleSubmit(submit)} className={'form'}>
                <input type="text" placeholder={'todo'} {...register('todo')}/>
                <button>add</button>
            </form>
            <hr/>
        </div>
    );
};

export default Form;