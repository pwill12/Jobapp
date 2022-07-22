import { createSlice } from '@reduxjs/toolkit'

const EmployerSlice = createSlice({
    name: "employer",
    initialState: {
        details: [],
        isFetching: false,
    },
    reducers: {
        CollectingDetails: (state) => {
            state.isFetching = true;
        },
        Details: (state, action) => {
            state.details = [action.payload]
            state.isFetching = false;

        },
        Removedetails: (state) => {
            state.details = null
            state.isFetching = false;
        },
    },
});

export const { Details, Removedetails, CollectingDetails } = EmployerSlice.actions;
export default EmployerSlice.reducer;