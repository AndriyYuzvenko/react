import React from 'react';
import {useDispatch} from 'react-redux';

import {deleteTodo, todoChecked} from '../../store/tode.splice';

const Todo = (props) => {
    const {todo: {id, todo, status}} = props;
    const dispatch = useDispatch()
    return (
        <div>
            <div className={'oneTodo'}>
                <label>
                    <input type="checkbox" value={status} onChange={() => dispatch(todoChecked({id}))}/>
                    <h2 className={status ? 'todo' : ''}>{todo}</h2>
                </label>
                <button onClick={() => dispatch(deleteTodo({id}))} className={'button'}>delete</button>
            </div>
            <hr/>
        </div>
    );
};

export default Todo;