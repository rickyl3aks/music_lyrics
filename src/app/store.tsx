import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import artistReducer from "../features/artist/ArtistSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    artist: artistReducer,
  },
});
