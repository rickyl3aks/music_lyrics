import { createSlice } from "@reduxjs/toolkit";

export const artistSlice = createSlice({
  name: "artist",
  initialState: {
    artist: [],
  },
  reducers: {
    ARTIST_NAME: (state, action) => {
      state.artist = action.payload;
    },
  },
});

export const { ARTIST_NAME } = artistSlice.actions;

export default artistSlice.reducer;
