import { useCallback, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "store";
import { appReducerSelector, setModeRedux, setRtlRedux } from "store/features";

export const useAppStore = () => {
  const dispatch = useAppDispatch();
  const appState = useAppSelector(appReducerSelector);
  const appStateValue = useMemo(() => appState, [appState]);
  const setModeRuducer = useCallback(
    (mode: "light" | "dark" | "high-contrast") => {
      dispatch(setModeRedux(mode));
    },
    [dispatch]
  );
  const setRtlRuducer = useCallback(
    (rtl: boolean) => {
      dispatch(setRtlRedux(rtl));
    },
    [dispatch]
  );

  return {
    appStateValue,
    setModeRuducer,
    setRtlRuducer,
  };
};
