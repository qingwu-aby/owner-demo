/*
 * @Author: yangyuan
 * @Description:
 * @Date: 2023-12-25 17:35:45
 * @LastEditTime: 2023-12-25 17:36:34
 */
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
// import counterReducer from "../features/counter/counterSlice"

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
