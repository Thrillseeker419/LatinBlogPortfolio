import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import postsReducer from "./postsSlice";

//MIDDLEWARE
const localStorageMiddleware = (param: any) => {
  return (next: any) => (action: any) => {
    const result = next(action);
    let { getState } = param;
    localStorage.setItem("applicationState", JSON.stringify(getState()));
    return result;
  };
};

const reHydrateStore = () => {
  if (localStorage.getItem("applicationState") !== null) {
    return JSON.parse(localStorage.getItem("applicationState") || "");
  }
};

// Combine reducers
const appReducer = combineReducers({
  counter: counterReducer,
  posts: postsReducer,
});

// Root reducer that handles RESET_APP action
const rootReducer = (state: any, action: any) => {
  if (action.type === "RESET_APP") {
    state = undefined;
  }
  return appReducer(state, action);
};

//STORE CONFIGURATION

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
