import { configureStore } from '@reduxjs/toolkit'
import uiReducer from './uiSlice'
import newsReducer from './newsSlice'
import authReducer from './authSlice'

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    news: newsReducer,
    auth: authReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
