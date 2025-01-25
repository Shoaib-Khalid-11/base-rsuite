import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAppStore } from "store";

export interface GeneralState {
  loading: boolean;
}

const initialState: GeneralState = {
  loading: false,
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setLoading: (state: GeneralState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});
export const { setLoading } = generalSlice.actions;

// export default generalSlice.reducer;
export const generalReducerSelector = (generalState: IAppStore): GeneralState =>
  generalState.general;
