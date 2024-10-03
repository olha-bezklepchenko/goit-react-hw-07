import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const selectNameFilter = (state) => state.filters.name;

export const { changeFilter } = slice.actions;
export default slice.reducer;
