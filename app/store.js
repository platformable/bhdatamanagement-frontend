import { configureStore } from '@reduxjs/toolkit'
import programsReducer from '../slices/programsSlice'
import eventsSearchWordReducer from '../slices/eventsSearchWordSlice'
import eventsCalendarDatesReducer from '../slices/eventsCalendarDatesSlice'

export const store = configureStore({
  reducer: {
    programs:programsReducer,
    eventCalendarDates:eventsCalendarDatesReducer,
    eventsSearchWord:eventsSearchWordReducer
  },
})