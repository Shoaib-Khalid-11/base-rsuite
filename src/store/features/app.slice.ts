import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAppStore } from "store";
import {
  DefaultConfigProps,
  FontFamily,
  I18n,
  MenuOrientation,
  PresetColor,
  ThemeDirection,
  ThemeMode,
} from "types/config.model";

const initialState: DefaultConfigProps = {
  fontFamily: "'Roboto', sans-serif",
  i18n: "en",
  miniDrawer: false,
  container: false,
  menuOrientation: MenuOrientation.VERTICAL,
  menuCaption: false,
  mode: ThemeMode.AUTO,
  presetColor: "default",
  themeDirection: ThemeDirection.LTR,
  themeContrast: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    onChangeContainer: (
      state: DefaultConfigProps,
      action: PayloadAction<boolean>
    ) => {
      state.container = action.payload;
    },
    onChangeLocalization: (
      state: DefaultConfigProps,
      action: PayloadAction<I18n>
    ) => {
      state.i18n = action.payload;
    },
    onChangeMode: (
      state: DefaultConfigProps,
      action: PayloadAction<ThemeMode>
    ) => {
      state.mode = action.payload;
    },
    onChangePresetColor: (
      state: DefaultConfigProps,
      action: PayloadAction<PresetColor>
    ) => {
      state.presetColor = action.payload;
    },
    onChangeDirection: (
      state: DefaultConfigProps,
      action: PayloadAction<ThemeDirection>
    ) => {
      state.themeDirection = action.payload;
    },
    onChangeMiniDrawer: (
      state: DefaultConfigProps,
      action: PayloadAction<boolean>
    ) => {
      state.miniDrawer = action.payload;
    },
    onChangeMenuOrientation: (
      state: DefaultConfigProps,
      action: PayloadAction<MenuOrientation>
    ) => {
      state.menuOrientation = action.payload;
    },
    onChangeMenuCaption: (
      state: DefaultConfigProps,
      action: PayloadAction<boolean>
    ) => {
      state.menuCaption = action.payload;
    },
    onChangeFontFamily: (
      state: DefaultConfigProps,
      action: PayloadAction<FontFamily>
    ) => {
      state.fontFamily = action.payload;
    },
    onChangeContrast: (
      state: DefaultConfigProps,
      action: PayloadAction<boolean>
    ) => {
      state.themeContrast = action.payload;
    },
  },
});
export const {
  onChangeContainer,
  onChangeLocalization,
  onChangeMode,
  onChangePresetColor,
  onChangeDirection,
  onChangeMiniDrawer,
  onChangeMenuOrientation,
  onChangeMenuCaption,
  onChangeFontFamily,
  onChangeContrast,
} = appSlice.actions;

export const appReducerSelector = (
  generalState: IAppStore
): DefaultConfigProps => generalState.app;
