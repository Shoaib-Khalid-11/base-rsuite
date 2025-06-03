import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GeoProps } from "types";
import { IAppStore } from "store";

export interface YoutubeState {
  ytSearch: string;
  initialLink: string;
  geo: GeoProps;
}

const initialState: YoutubeState = {
  ytSearch: "",
  initialLink: "",
  geo: "PK",
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
    setGeo: (state: YoutubeState, action: PayloadAction<GeoProps>) => {
      state.geo = action.payload;
    },
  },
});
export const { setSearch, setLink, setGeo } = youtubeSlice.actions;

// export default generalSlice.reducer;
export const youtubeReducerSelector = (youtubeState: IAppStore): YoutubeState =>
  youtubeState.youtube;
