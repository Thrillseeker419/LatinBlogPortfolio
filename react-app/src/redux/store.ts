import { configureStore } from "@reduxjs/toolkit";
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
    return JSON.parse(localStorage.getItem("applicationState") || ""); // re-hydrate the store
  }
};

//STORE CONFIGURATION

export const store = configureStore({
  reducer: { counter: counterReducer, posts: postsReducer },
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

//Alternate store configuration not using local storage
// export const store = configureStore({
//   reducer:{counter:counterReducer,
//   posts: postsReducer}
// }
// )

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
