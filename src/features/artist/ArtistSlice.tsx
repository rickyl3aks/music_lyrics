import { createSlice } from "@reduxjs/toolkit";

export const artistSlice = createSlice({
  name: "artist",
  initialState: {
    artist: [],
  },
  reducers: {
    artist_name: (state, action) => {
      state.artist = action.payload;
    },
  },
});

export const { artist_name } = artistSlice.actions;

export default artistSlice.reducer;
