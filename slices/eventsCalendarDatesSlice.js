import { createSlice } from '@reduxjs/toolkit'

export const eventsCalendarDatesSlice = createSlice({
  name: 'eventsCalendarDates',
  initialState:{value : {startDate:"",endDate:""}},
  reducers: {
    updateStartDate:(state,action)=>{
      return {...state, value:{...action.payload}}
    },
    updateEndDate:(state,action)=>{
       return {...state, value:{...action.payload}}
     }
  },
})


export const { updateStartDate,updateEndDate } = eventsCalendarDatesSlice.actions

export default eventsCalendarDatesSlice.reducer