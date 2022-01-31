import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {carsService} from "../../service/cars.service/cars.service";

export const getCars = createAsyncThunk(
    'carSlice/getCars',
    async (_, {rejectWithValue}) => {
        try {
            const data = await carsService.getAll()
            return data
        } catch (e) {
            rejectWithValue(e.message)
        }
    }
)
export const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({data}, {dispatch}) => {
        try {
            const newCar = await carsService.create(data);
            dispatch(addCars({data: newCar}))
        } catch (e) {
            console.log(e)
        }
    }
)
export const deleteCarThunk = createAsyncThunk(
    'carSlice/deleteCarThunk',
    async ({id}, {dispatch}) => {
        try {
            await carsService.deleteCar(id)
            dispatch(deleteCars({id}))
        } catch (e) {
            console.log(e)
        }
    }
)
const carSlice = createSlice({
    name: 'carSlice',
    initialState: {
        cars: [],
        status: null,
        error: null
    },
    reducers: {
        addCars: (state, action) => {
            console.log(action.payload.data)
            state.cars.push(action.payload.data)
        },
        deleteCars: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        }
    },
    extraReducers: {
        [getCars.pending]: (state, action) => {
            state.status = 'pending'
            state.error = null
        },
        [getCars.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.cars = action.payload
        },
        [getCars.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})
const carReducer = carSlice.reducer
const {addCars, deleteCars} = carSlice.actions

export default carReducer
export const carActions = {addCars, deleteCars}