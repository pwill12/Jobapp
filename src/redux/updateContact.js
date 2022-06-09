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
        state.contacts[
            state.contacts.findIndex((item) => item._id === action.payload.id)
          ] = action.payload.contact;
      },
      updateFailure: (state) => {
        state.isFetching = false;
        state.error = true;
      },
    },
  });

export const { updateStart, updateSuccess, updateFailure } = contactSlice.actions;
export default contactSlice.reducer;

