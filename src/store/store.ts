import { configureStore } from '@reduxjs/toolkit'
import uiReducer from './uiSlice'
import newsReducer from './newsSlice'

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    news: newsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
