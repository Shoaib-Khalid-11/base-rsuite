import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAppStore } from "store";
import {
  CustomizationProps,
  FontFamily,
  I18n,
  MenuOrientation,
  PresetColor,
  ThemeDirection,
  ThemeMode,
} from "types/config";

const initialState: CustomizationProps = {
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
      state: CustomizationProps,
      action: PayloadAction<boolean>
    ) => {
      state.container = action.payload;
    },
    onChangeLocalization: (
      state: CustomizationProps,
      action: PayloadAction<I18n>
    ) => {
      state.i18n = action.payload;
    },
    onChangeMode: (
      state: CustomizationProps,
      action: PayloadAction<ThemeMode>
    ) => {
      state.mode = action.payload;
    },
    onChangePresetColor: (
      state: CustomizationProps,
      action: PayloadAction<PresetColor>
    ) => {
      state.presetColor = action.payload;
    },
    onChangeDirection: (
      state: CustomizationProps,
      action: PayloadAction<ThemeDirection>
    ) => {
      state.themeDirection = action.payload;
    },
    onChangeMiniDrawer: (
      state: CustomizationProps,
      action: PayloadAction<boolean>
    ) => {
      state.miniDrawer = action.payload;
    },
    onChangeMenuOrientation: (
      state: CustomizationProps,
      action: PayloadAction<MenuOrientation>
    ) => {
      state.menuOrientation = action.payload;
    },
    onChangeMenuCaption: (
      state: CustomizationProps,
      action: PayloadAction<boolean>
    ) => {
      state.menuCaption = action.payload;
    },
    onChangeFontFamily: (
      state: CustomizationProps,
      action: PayloadAction<FontFamily>
    ) => {
      state.fontFamily = action.payload;
    },
    onChangeContrast: (
      state: CustomizationProps,
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
): CustomizationProps => generalState.app;
