import {createSlice} from '@reduxjs/toolkit'

const saveSlice = createSlice({
  name: "save",
  initialState: {
    jobs: [],
  },
  reducers: {
    addsaved: (state, action) => {

      state.jobs = [action.payload]
      // state.jobs.push(action.payload);

      // state.quantity += 1
    },
  },
});

export const { addsaved } = saveSlice.actions;
export default saveSlice.reducer;