import { createSlice } from '@reduxjs/toolkit'

const regcallSlice = createSlice({
    name: "regcall",
    initialState: {
        fetching: false,
        regsuccess: null,
        failure: false
    },
    reducers: {
        regfetching: (state) => {
            state.fetching = true
        },
        regsuccessfull: (state, action) => {
            state.fetching = false
            state.regsuccess = action.payload
            state.failure = false

        },
        regfailure: (state) => {
            state.regsuccess = null
            state.failure = true
            state.fetching = false
        },
    },
});

export const { regfetching, regsuccessfull, regfailure } = regcallSlice.actions;
export default regcallSlice.reducer;;