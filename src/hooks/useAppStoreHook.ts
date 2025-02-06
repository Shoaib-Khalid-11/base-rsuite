import { useCallback, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "store";
import {
  appReducerSelector,
  onChangeContainer,
  onChangeContrast,
  onChangeDirection,
  onChangeFontFamily,
  onChangeLocalization,
  onChangeMenuCaption,
  onChangeMenuOrientation,
  onChangeMiniDrawer,
  onChangeMode,
  onChangePresetColor,
} from "store/reduxReducer";
import {
  FontFamily,
  I18n,
  MenuOrientation,
  PresetColor,
  ThemeDirection,
  ThemeMode,
} from "types/config.model";

export const useAppStore = () => {
  const dispatch = useAppDispatch();
  const appState = useAppSelector(appReducerSelector);
  const appStateValue = useMemo(() => appState, [appState]);
  const setChangeContainerReducer = useCallback(
    (c: boolean) => {
      dispatch(onChangeContainer(c));
    },
    [dispatch]
  );
  const setChangeLocalizationReducer = useCallback(
    (l: I18n) => {
      dispatch(onChangeLocalization(l));
    },
    [dispatch]
  );
  const setChangeModeReducer = useCallback(
    (m: ThemeMode) => {
      dispatch(onChangeMode(m));
    },
    [dispatch]
  );
  const setChangePresetColorReducer = useCallback(
    (p: PresetColor) => {
      dispatch(onChangePresetColor(p));
    },
    [dispatch]
  );
  const setChangeDirectionReducer = useCallback(
    (d: ThemeDirection) => {
      dispatch(onChangeDirection(d));
    },
    [dispatch]
  );
  const setChangeMiniDrawerReducer = useCallback(
    (md: boolean) => {
      dispatch(onChangeMiniDrawer(md));
    },
    [dispatch]
  );
  const setChangeMenuOrientationReducer = useCallback(
    (mo: MenuOrientation) => {
      dispatch(onChangeMenuOrientation(mo));
    },
    [dispatch]
  );
  const setChangeMenuCaptionReducer = useCallback(
    (mc: boolean) => {
      dispatch(onChangeMenuCaption(mc));
    },
    [dispatch]
  );
  const setChangeFontFamilyReducer = useCallback(
    (ff: FontFamily) => {
      dispatch(onChangeFontFamily(ff));
    },
    [dispatch]
  );
  const setChangeContrastReducer = useCallback(
    (c: boolean) => {
      dispatch(onChangeContrast(c));
    },
    [dispatch]
  );

  return {
    appStateValue,
    setChangeContainerReducer,
    setChangeLocalizationReducer,
    setChangeModeReducer,
    setChangePresetColorReducer,
    setChangeDirectionReducer,
    setChangeMiniDrawerReducer,
    setChangeMenuOrientationReducer,
    setChangeMenuCaptionReducer,
    setChangeFontFamilyReducer,
    setChangeContrastReducer,
  };
};
