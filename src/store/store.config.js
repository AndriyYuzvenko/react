import {configureStore} from "@reduxjs/toolkit";

import carReducer from './car.slice/car.slice';
import usersReducer from "./users.slice/users.slice";
import postsReducer from "./posts.slice/posts.slice";
import commentsReducer from "./comments.slice/comments.slice";

const store = configureStore({
        reducer: {
            carReducer,
            usersReducer,
            postsReducer,
            commentsReducer
        }
    }
)
export default store