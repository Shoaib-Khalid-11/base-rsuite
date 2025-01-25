import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAppStore } from "store";

export interface AppState {
  mode: "light" | "dark" | "high-contrast";
  rtl: boolean;
}

const initialState: AppState = {
  rtl: false,
  mode: "light",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setModeRedux: (
      state: AppState,
      action: PayloadAction<"light" | "dark" | "high-contrast">
    ) => {
      state.mode = action.payload;
    },
    setRtlRedux: (state: AppState, action: PayloadAction<boolean>) => {
      state.rtl = action.payload;
    },
  },
});
export const { setModeRedux, setRtlRedux } = appSlice.actions;

// export default generalSlice.reducer;
export const appReducerSelector = (generalState: IAppStore): AppState =>
  generalState.app;
