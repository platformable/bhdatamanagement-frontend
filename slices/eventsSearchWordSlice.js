import { createSlice } from '@reduxjs/toolkit'

export const eventsSearchWordSlice = createSlice({
  name: 'eventSearchWord',
  initialState:{value : {word:""}},
  reducers: {
    searchEventByName:(state,action)=>{
      // if(typeof window !==undefined){
      //   window.localStorage.setItem('eventsSearchWord',JSON.stringify(action.payload))
      // }
        state.value=action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { searchEventByName } = eventsSearchWordSlice.actions

export default eventsSearchWordSlice.reducer