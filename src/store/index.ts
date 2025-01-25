import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { generalSlice } from "./features";
import { useDispatch, useSelector } from "react-redux";
import persistStore from "redux-persist/es/persistStore";
import { appSlice } from "./features/app.slice";

export const store = configureStore({
  reducer: persistReducer(
    {
      key: "root",
      storage,
    },
    combineReducers({
      general: generalSlice.reducer,
      app: appSlice.reducer,
    })
  ),
});
export type IAppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<IAppStore>();

export const persistor = persistStore(store);
