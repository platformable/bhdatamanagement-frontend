import { createSlice } from '@reduxjs/toolkit'

export const eventsCalendarDatesSlice = createSlice({
  name: 'eventsCalendarDates',
  initialState:{value : {startDate:"",endDate:""}},
  reducers: {
    updateStartDate:(state,action)=>{
     /*  if(typeof window !==undefined){
        window.localStorage.setItem('program',JSON.stringify(action.payload))
      } */

      /* state.value=action.payload */
     
      return {...state, value:action.payload}
    },
    updateEndDate:(state,action)=>{
      /*  if(typeof window !==undefined){
         window.localStorage.setItem('program',JSON.stringify(action.payload))
       } */
       /* state.value=action.payload */
       return {...state, value:action.payload}
     }
  },
})

// Action creators are generated for each case reducer function
export const { updateStartDate,updateEndDate } = eventsCalendarDatesSlice.actions

export default eventsCalendarDatesSlice.reducer