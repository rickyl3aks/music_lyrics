import { createSlice } from "@reduxjs/toolkit";

export const trackSlice = createSlice({
  name: "track",
  initialState: {
    track: [],
  },
  reducers: {
    TRACK_TITLE: (state, action) => {
      state.track = action.payload;
    },
  },
});

export const { TRACK_TITLE } = trackSlice.actions;

export default trackSlice.reducer;
