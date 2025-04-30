// import node module libraries
import { createSlice } from "@reduxjs/toolkit";

// import data files

const initialState = {};

export const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (state, action) => {
      return action.payload;
    },
  },
});

export const { setCourses } = coursesSlice.actions;

export default coursesSlice.reducer;
