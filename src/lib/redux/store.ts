// redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { ThunkAction, Action } from "@reduxjs/toolkit";
import cartReducer from "./features/cart";

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
