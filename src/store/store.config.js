import {configureStore} from '@reduxjs/toolkit';
import todoReducer from "./tode.splice";

const store = configureStore({
    reducer: {
        todoReducer
    }
})
export default store