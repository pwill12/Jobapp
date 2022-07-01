import {createSlice} from '@reduxjs/toolkit'

const applySlice = createSlice({
  name: "apply",
  initialState: {
    appliedjobs: [],
    error: false,
  },
  reducers: {
    applySuccessfull: (state, action) => {
      state.jobs = action.payload
      state.error = false
    },
    applyFailure: (state) => {
        state.error = true;
      },
  },
});

export const { applySuccessfull, applyFailure} = applySlice.actions;
export default applySlice.reducer;