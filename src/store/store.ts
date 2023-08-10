import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
  users: userReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDisparch = AppStore["dispatch"];
