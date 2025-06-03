import { GeoProps } from "types";
import { useCallback, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "store";
import {
  setGeo,
  setLink,
  setSearch,
  youtubeReducerSelector,
} from "store/reduxReducer";

export const useYoutubeStoreHook = () => {
  const dispatch = useAppDispatch();
  const youtubeState = useAppSelector(youtubeReducerSelector);
  const youtubeStateValue = useMemo(() => youtubeState, [youtubeState]);
  const setYoutubeSearchReducer = useCallback(
    (s: string) => {
      dispatch(setSearch(s));
    },
    [dispatch]
  );
  const setYoutubeLinkReducer = useCallback(
    (l: string) => {
      dispatch(setLink(l));
    },
    [dispatch]
  );
  const setYoutubeGeoReducer = useCallback(
    (g: GeoProps) => {
      dispatch(setGeo(g));
    },
    [dispatch]
  );
  return {
    youtubeStateValue,
    setYoutubeSearchReducer,
    setYoutubeLinkReducer,
    setYoutubeGeoReducer,
  };
};
