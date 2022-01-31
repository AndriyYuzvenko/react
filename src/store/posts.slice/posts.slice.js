import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {postsService} from "../../service/posts.service/posts.service";

export const getPosts = createAsyncThunk(
    'postSlice/getPost',
    async (_, {rejectWithValue}) => {
        try {
            const posts = await postsService.getPost()
            return posts
        } catch (e) {
            rejectWithValue(e.message)
        }
    }
)
const postsSlice = createSlice({
    name: 'postSlice',
    initialState: {
        posts: [],
        status: null,
        error: null
    },
    extraReducers: {
        [getPosts.pending]: (state, action) => {
            state.status = 'pending'
            state.error = null
        },
        [getPosts.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.posts = action.payload
        },
        [getPosts.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})
const postsReducer = postsSlice.reducer

export default postsReducer