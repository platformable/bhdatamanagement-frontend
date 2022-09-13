import { configureStore } from '@reduxjs/toolkit'
import programsReducer from '../slices/programsSlice'

export const store = configureStore({
  reducer: {
    programs:programsReducer
  },
})