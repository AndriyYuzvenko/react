import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {commentsService} from "../../service/comments.service/comments.service";

export const getComments = createAsyncThunk(
    'commentSlice/getComments',
    async (_, {rejectWithValue}) => {
        try {
            const comments = commentsService.getComments()
            return comments
        } catch (e) {
            rejectWithValue(e.message)
        }
    }
)
const commentsSlice = createSlice({
    name: 'commentSlice',
    initialState: {
        comments: [],
        status: null,
        error: null
    },
    extraReducers: {
        [getComments.pending]: (state, action) => {
            state.status = 'pending'
            state.error = null
        },
        [getComments.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.comments = action.payload
        },
        [getComments.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.error
        }
    }
})
const commentsReducer = commentsSlice.reducer

export default commentsReducer