import { createSlice } from '@reduxjs/toolkit'

const postSlice = createSlice({
    name: "post",
    initialState: {
        jobs: [],
    },
    reducers: {
        postsaved: (state, action) => {
            state.jobs = action.payload
        },
    },
});

export const { postsaved } = postSlice.actions;
export default postSlice.reducer;