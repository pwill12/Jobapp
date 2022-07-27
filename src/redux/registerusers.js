import { createSlice } from '@reduxjs/toolkit'

const registerusers = createSlice({
    name: "registerusers",
    initialState: {
        fetchingapi: false,
        successapi: false,
        failureapi: false
    },
    reducers: {
        regfetchings: (state) => {
            state.fetchingapi = true
        },
        regsuccessfulls: (state, action) => {
            state.fetchingapi = false
            state.successapi = true
            state.failureapi = false

        },
        regfailures: (state) => {
            state.successapi = null
            state.failureapi = true
            state.fetchingapi = false
        },
    },
});

export const { regfetchings, regsuccessfulls, regfailures } = registerusers.actions;
export default registerusers.reducer;;