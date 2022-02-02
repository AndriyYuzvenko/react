import {createSlice} from '@reduxjs/toolkit';

const todoSplice = createSlice({
    name: 'todoSplice',
    initialState: {
        todo: [],
        count: 0
    },
    reducers: {
        addTodo: (state, action) => {
            state.todo.push({id: Date.now(), ...action.payload.data, status: false})
        },
        deleteTodo: (state, action) => {
            state.todo = state.todo.filter(item => {
                if (item.id !== action.payload.id) {
                    return item
                } else if (item.status) {
                    state.count--
                }
            })

        },
        todoChecked: (state, action) => {
            const todo = state.todo.find(item => item.id === action.payload.id)
            todo.status = !todo.status

            if (!todo.status) {
                state.count--
            } else {
                state.count++
            }
        }
    }
})

const todoReducer = todoSplice.reducer
export const {addTodo, deleteTodo, todoChecked} = todoSplice.actions
export default todoReducer