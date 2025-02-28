import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAppStore } from "store";

export interface YoutubeState {
  ytSearch: string;
  initialLink: string;
}

const initialState: YoutubeState = {
  ytSearch: "",
  initialLink: "",
};

export const youtubeSlice = createSlice({
  name: "youtube",
  initialState,
  reducers: {
    setSearch: (state: YoutubeState, action: PayloadAction<string>) => {
      state.ytSearch = action.payload;
    },
    setLink: (state: YoutubeState, action: PayloadAction<string>) => {
      state.initialLink = action.payload;
    },
  },
});
export const { setSearch, setLink } = youtubeSlice.actions;

// export default generalSlice.reducer;
export const youtubeReducerSelector = (youtubeState: IAppStore): YoutubeState =>
  youtubeState.youtube;
