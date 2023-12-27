import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchTearm: (state, action) => {
      state.searchTerm = action.payload.searchTerm;
    },
    removeSearchTearm: (state, action) => {
      state.searchTerm = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSearchTearm, removeSearchTearm } = searchSlice.actions;

export default searchSlice.reducer;
