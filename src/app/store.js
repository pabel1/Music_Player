import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../feature/ApiSlice/apiSlice";
import playerReducer from "../feature/player/playerSlice";
import searchReducer from "../feature/search/searchSlice";
// import userReducer from '../State/userSlice'
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    player: playerReducer,
    search: searchReducer,
  },
  // devTools: import.meta.env.VITE_ENV !== "PRODUCTION",
  middleware: (gDM) => gDM().concat(apiSlice.middleware),
});
