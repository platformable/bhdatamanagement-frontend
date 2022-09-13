import { createSlice } from '@reduxjs/toolkit'

export const programSlice = createSlice({
  name: 'program',
  initialState:{value : {programName:""}},
  reducers: {
    updateProgramName:(state,action)=>{
        state.value=action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateProgramName } = programSlice.actions

export default programSlice.reducer