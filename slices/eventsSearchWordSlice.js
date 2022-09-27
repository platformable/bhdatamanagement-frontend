import { createSlice } from '@reduxjs/toolkit'

export const eventsSearchWordSlice = createSlice({
  name: 'program',
  initialState:{value : {programName:""}},
  reducers: {
    updateProgramName:(state,action)=>{
      if(typeof window !==undefined){
        window.localStorage.setItem('program',JSON.stringify(action.payload))
      }
        state.value=action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateProgramName } = eventsSearchWordSlice.actions

export default eventsSearchWordSlice.reducer