import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
    name: "contact",
    initialState: {
        contacts: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        updateStart: (state) => {
            state.isFetching = true;
        },
        updateSuccess: (state, action) => {
            state.isFetching = false;
            // state.contacts[
            //     state.contacts.findIndex((item) => item._id === action.payload.id)
            //   ] = action.payload.contact;
            state.contacts = action.payload
            state.error = false;

        },
        updateFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        updatedout: (state) => {
            state.contacts = null;
            state.error = false;
        },
    },
});

export const { updateStart, updateSuccess, updateFailure, updatedout } = contactSlice.actions;
export default contactSlice.reducer;