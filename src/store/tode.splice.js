import {createSlice} from '@reduxjs/toolkit';

const todoSplice = createSlice({
    name: 'todoSplice',
    initialState: {
        todo: []
    },
    reducers: {
        addTodo: (state, action) => {
            state.todo.push({
                id: Date.now(), ...action.payload.data
            })
        },
        deleteTodo: (state, action) => {
            state.todo = state.todo.filter(item => item.id !== action.payload.id)
        }
    }
})

const todoReducer = todoSplice.reducer
export const {addTodo, deleteTodo} = todoSplice.actions
export default todoReducer