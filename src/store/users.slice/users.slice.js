import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {usersService} from "../../service/users.service/users.service";

export const getUsers = createAsyncThunk(
    'carSlice/getUsers',
    async (_, {rejectWithValue}) => {
        try {
            const users = await usersService.getUsers()
            return users
        } catch (e) {
            rejectWithValue(e.message)
        }
    }
)
const usersSlice = createSlice({
    name: 'usersSlice',
    initialState: {
        users: [],
        status: null,
        error: null
    },
    extraReducers: {
        [getUsers.pending]: (state, action) => {
            state.status = 'pending'
            state.error = null
        },
        [getUsers.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.users = action.payload
        },
        [getUsers.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

const usersReducer = usersSlice.reducer
export default usersReducer
