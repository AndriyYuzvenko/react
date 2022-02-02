import React from 'react';
import {useDispatch} from 'react-redux';

import {deleteTodo} from '../../store/tode.splice';

const Todo = (props) => {
    const {todo: {id, todo}} = props;
    const dispatch = useDispatch()
    return (
        <div>
            <div className={'oneTodo'}>
                <label>
                    <input type="checkbox"/>
                    <h2>{todo}</h2>
                </label>
                <button onClick={() => dispatch(deleteTodo({id}))} className={'button'}>delete</button>
            </div>
            <hr/>
        </div>
    );
};

export default Todo;