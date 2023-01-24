import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value : {
    userId:"",
    eventDate:"",
    eventStartTime:"",
    eventFinishTime:"",
    fbo:"",
    fboAttendees:[],
    fboAttendeesOther:"",
    sanctuary: false,
    privateTestingArea: false,
    healthMinistry:"",
    healthMinistryMembers:"",
    healthMinistryActive:"",
    healthMinistryCoordinators:"",
    strategiesHealthDisparities:"",
    targetAudience:[],
    targetAudienceOther:"",
    targetAudienceAdditional:"",
    barriersEngagement :[],
    barriersEngagementOther:"",
    bestPractices:"",
    eventChallenges:"",
    fboChanges:"",
    fboImprovements:"",
    fboObservations:"",
    fboBeyondGrant:"",
    fboCabFeedback:"",
    fboAliFeedback:"",
    fboYipFeedback:"",
    fboLeaderHivOpenness:"",
    healthMinistryHivOpenness:"",
    membershipHivOpenness:"",
    communityHivOpenness:"",
    faithLeaderDiversityOpenness:"",
    healthMinistryDiversityOpenness:"",
    membershipDiversityOpenness:"",
    communityDiversityOpenness:"",
    boroughFbo:"",
    submissionStatus:"",
    submissionNotes:"",
    surveyName:"oef-site-visit",
    programId:1,
    programName:"OEF",
  }
}

export const siteVisitsSlice = createSlice({
  name: 'siteVisits',
  initialState,
  reducers: {
    updateInitialState: (state,action) =>{
      return {...state, value: {...initialState}}
    },
    updateEditFormState: (state,action) =>{
        return {...state, value:{...action.payload}}
      },
    updateStartDate:(state,action)=>{
      return {...state, value:{...state.value,...action.payload}}
    },
    updateEndDate:(state,action)=>{
      return {...state, value:{...state.value,...action.payload}}
     },
     updateUserId:(state,action)=>{
      return {...state, value:{...state.value,...action.payload}}
     },
     updateEventDate:(state,action)=>{
      return {...state, value:{...state.value,...action.payload}}
     },
     updateEventStartTime:(state,action)=>{
      return {...state, value:{...state.value,...action.payload}}
     },
     updateEventFinishTime:(state,action)=>{
      return {...state, value:{...state.value,...action.payload}}
     },
     updateFbo:(state,action)=>{
      return {...state, value:{...state.value,...action.payload}}
     },
     updateFboAttendees:(state,action)=>{
      return {...state, value:{...state.value,...action.payload}}
     },
     updateFboAttendeesOther:(state,action)=>{
      return {...state, value:{...state.value,...action.payload}}
     },
     updateSanctuary:(state,action)=>{
      return {...state, value:{...state.value,...action.payload}}
     },
     updatePrivateTestingArea:(state,action)=>{
      return {...state, value:{...state.value,...action.payload}}
     },
     updateHealthMinistry:(state,action)=>{
      return {...state, value:{...state.value,...action.payload}}
     },
     updateHealthMinistryMembers:(state,action)=>{
      return {...state, value:{...state.value,...action.payload}}
     },
     updateHealthMinistryActive:(state,action)=>{
      return {...state, value:{...state.value,...action.payload}}
     },
     updateHealthMinistryCoordinators:(state,action)=>{
      return {...state, value:{...state.value,...action.payload}}
     },
     updateStrategiesHealthDisparities:(state,action)=>{
      return {...state, value:{...state.value,...action.payload}}
     },
     updateTargetAudience:(state,action)=>{
      return {...state, value:{...state.value,...action.payload}}
     },
     updateTargetAudienceOther:(state,action)=>{
         return {...state, value:{...state.value,...action.payload}}
     },
     updateTargetAudienceAdditional:(state,action)=>{
         return {...state, value:{...state.value,...action.payload}}
     },
     updateBarriersEngagement: (state,action)=>{
         return {...state, value:{...state.value,...action.payload}}
     },
     updateBarriersEngagementOther:(state,action)=>{
         return {...state, value:{...state.value,...action.payload}}
     },
     updateBestPractices:(state,action)=>{
         return {...state, value:{...state.value,...action.payload}}
     },
     updateEventChallenges:(state,action)=>{
         return {...state, value:{...state.value,...action.payload}}
     },
     updateFboChanges:(state,action)=>{
         return {...state, value:{...state.value,...action.payload}}
     },
     updateFboImprovements:(state,action)=>{
         return {...state, value:{...state.value,...action.payload}}
     },
     updateFboObservations:(state,action)=>{
         return {...state, value:{...state.value,...action.payload}}
     },
     updateFboBeyondGrant:(state,action)=>{
         return {...state, value:{...state.value,...action.payload}}
     },
     updateFboCabFeedback:(state,action)=>{
         return {...state, value:{...state.value,...action.payload}}
     },
     updateFboAliFeedback:(state,action)=>{
         return {...state, value:{...state.value,...action.payload}}
     },
     updateFboYipFeedback:(state,action)=>{
         return {...state, value:{...state.value,...action.payload}}
     },
     updateFboLeaderHivOpenness:(state,action)=>{
         return {...state, value:{...state.value,...action.payload}}
     },
     updateHealthMinistryHivOpenness:(state,action)=>{
         return {...state, value:{...state.value,...action.payload}}
     },
     updateMembershipHivOpenness:(state,action)=>{
         return {...state, value:{...state.value,...action.payload}}
     },
     updateCommunityHivOpenness:(state,action)=>{
         return {...state, value:{...state.value,...action.payload}}
     },
     updateFaithLeaderDiversityOpenness:(state,action)=>{
         return {...state, value:{...state.value,...action.payload}}
     },
     updateHealthMinistryDiversityOpenness:(state,action)=>{
         return {...state, value:{...state.value,...action.payload}}
     },
     updateMembershipDiversityOpenness:(state,action)=>{
         return {...state, value:{...state.value,...action.payload}}
     },
     updateCommunityDiversityOpenness:(state,action)=>{
         return {...state, value:{...state.value,...action.payload}}
     },
     updateBoroughFbo:(state,action)=>{
         return {...state, value:{...state.value,...action.payload}}
     },
     updateSubmissionStatus:(state,action)=>{
         return {...state, value:{...state.value,...action.payload}}
     },
     updateSubmissionNotes:(state,action)=>{
         return {...state, value:{...state.value,...action.payload}}
     },
  },
})

// Action creators are generated for each case reducer function
export const { 
/*   updateSiteVisits */
updateUserId,
updateEventDate,
updateEventStartTime,
updateEventFinishTime,
updateFbo,
updateFboAttendees,
updateFboAttendeesOther,
updateSanctuary ,
updatePrivateTestingArea ,
updateHealthMinistry,
updateHealthMinistryMembers,
updateHealthMinistryActive,
updateHealthMinistryCoordinators,
updateStrategiesHealthDisparities,
updateTargetAudience,
updateTargetAudienceOther,
updateTargetAudienceAdditional,
updateBarriersEngagement ,
updateBarriersEngagementOther,
updateBestPractices,
updateEventChallenges,
updateFboChanges,
updateFboImprovements,
updateFboObservations,
updateFboBeyondGrant,
updateFboCabFeedback,
updateFboAliFeedback,
updateFboYipFeedback,
updateFboLeaderHivOpenness,
updateHealthMinistryHivOpenness,
updateMembershipHivOpenness,
updateCommunityHivOpenness,
updateFaithLeaderDiversityOpenness,
updateHealthMinistryDiversityOpenness,
updateMembershipDiversityOpenness,
updateCommunityDiversityOpenness,
updateBoroughFbo,
updateSubmissionStatus,
updateSubmissionNotes,
updateInitialState,
updateEditFormState
 } = siteVisitsSlice.actions

export default siteVisitsSlice.reducer




