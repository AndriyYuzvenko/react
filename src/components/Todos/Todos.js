import React from 'react';
import {useSelector} from 'react-redux';

import Todo from '../Todo/Todo';

const Todos = () => {
    const {todo} = useSelector(state => state['todoReducer'])
    return (
        <div>
            {todo.map(todo => <Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};

export default Todos;