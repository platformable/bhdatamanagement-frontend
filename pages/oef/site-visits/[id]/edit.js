import React, { useState,useEffect } from "react";
import Layout from "../../../../components/Layout";
import PageTopHeading from "../../../../components/PageTopHeading";
import Loader from "../../../../components/Loader";
import axios from "axios";
import { useUser,withPageAuthRequired } from "@auth0/nextjs-auth0";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputValidationAddress from "../../../../components/InputValidationAddress";
import { useRouter } from "next/router";
import ResponseStatusModal from "../../../../components/ResponseStatusModal";
import Router from "next/router";

import DateComponent from '../../../../components/oef-site-visit-survey/DateComponent'

import { useSelector, useDispatch } from 'react-redux'

import { 
  updateInitialState,
  updateEditFormState,
  updateSiteVisits,
  updateStartDate,
  updateEndDate,
   updateUserId,
   updateEventDate,
   updateEventStartTime,
   updateEventFinishTime,
   updateFbo,
   updateFboAttendees,
   updateFboAttendeesOther,
   updateSanctuary,
   updatePrivateTestingArea,
   updateHealthMinistry,
   updateHealthMinistryMembers,
   updateHealthMinistryActive,
   updateHealthMinistryCoordinators,
   updateStrategiesHealthDisparities,
   updateTargetAudience,
   updateTargetAudienceOther,
   updateTargetAudienceAdditional,
   updateBarriersEngagement,
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
   updateSubmissionNotes
 } from "../../../../slices/siteVisitsSlice";
import TypeOfTARequested from "../../../../components/technicalAssistance/TypeOfTARequested";
import FboRadioList from "../../../../components/oef-site-visit-survey/FboRadioList";
import StartTime from "../../../../components/oef-site-visit-survey/StartTime";
import FinishTime from "../../../../components/oef-site-visit-survey/FinishTime";
import OneColumnCheckbox from "../../../../components/oef-site-visit-survey/OneColumnCheckbox";
import TextArea from "../../../../components/oef-site-visit-survey/TextArea";
import RadioBoolean from "../../../../components/oef-site-visit-survey/RadioBoolean";
import RadioGroup from "../../../../components/oef-site-visit-survey/RadioGroup";
import NumberLimits from "../../../../components/oef-site-visit-survey/NumberLimits";
import Rating from "../../../../components/oef-site-visit-survey/Rating";


const EditSiteVisits = ({ fbos, data }) => {
  const [showError, setShowError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  // console.log("edit data", data)

  const [showResponseStatus, setShowResponseStatus] = useState(false);
  const [responseStatus, setResponseStatus] = useState({});

  const { user, error, isLoading } = useUser();
  let userId = user?.sub;
  

  const isNumberKey = (e) => {
    const invalidChars = ["-", "+", "e"];
    if (invalidChars.includes(e.key)) {
      e.preventDefault();
    }
  };
  const surveyForm = useSelector((state)=>state.siteVisitsReducer.value) 

  

  console.log("surveyForm",surveyForm)


  const fboAttendeesOptions= [
    {
      id:1,value:"Faith Leader"
    },
    {
      id:2,value:"Coordinator(s)"
    },
    {
      id:3,value:"Black Health Staff"
    },
    {
      id:4,value:"Other"
    }
  ]


  const sanctuaryOptions=[
    {
      id:1,value:true,text:'Yes, there is a private testing area'
    },
    {
      id:2,value:false,text:'No, there is not a private testing area'
    }
  ]

  const privateTestingAreaOptions= [
    {
      id:1,value:true,text:'Yes, there is a sanctuary'
    },
    {
      id:2,value:false,text:'No, there is not a sanctuary'
    }
  ]

  const healthMinistryOptions=[
    {
      id:1,value:'There is no formal wellness ministry.'
    },
    {
      id:2,value:'There is a small or informal wellness ministry.'
    },
    {
      id:3,value:'There is an active wellness ministry.'
    }
  ]

  const healthMinistryActiveOptions = [
    {
      id: 1,
      value: "Not at all active",
      text: "Not at all active",
      bgColor:'stronglyDisagreeBg',
        bgColorHover:'hover:stronglyDisagreeBg'
    },
    {
      id: 2,
      value: "Somewhat active",
      text: "Somewhat active",
      bgColor:'disagreeBg',
        bgColorHover:'hover:disagreeBg'
    },
    {
      id: 3,
      value: "neutral",
      text: "Neutral",
      bgColor:'neitherAgreeOrDisagreeBg',
        bgColorHover:'hover:neitherAgreeOrDisagreeBg'
    },
    {
      id: 4,
      value: "Active",
      text: "Active",
      bgColor:'agreeBg',
        bgColorHover:'hover:agreeBg'
    },
    {
      id: 5,
      value: "Extremely active",
      text: "Extremely active",
      bgColor:'stronglyAgreeBg',
        bgColorHover:'hover:stronglyAgreeBg'
    },
    
  ]


  useEffect(()=>{
    const surveyEdit = {
      id: data?.id,
      userId: userId || "",
      eventDate: data?.eventdate || "",
      eventStartTime: data?.eventstarttime || "",
      eventFinishTime: data?.eventfinishtime || "",
      fbo: data?.fbo || "",
      fboAttendees: data?.fboattendees || [],
      fboAttendeesOther: data?.fboattendeesother || "",
      sanctuary: data?.sanctuary || false,
      privateTestingArea: data?.privatetestingarea || false,
      healthMinistry: data?.healthministry || "",
      healthMinistryMembers: data?.healthministrymembers || "",
      healthMinistryActive: data?.healthministryactive || "",
      healthMinistryCoordinators: data?.healthministrycoordinators || "",
      strategiesHealthDisparities: data?.strategieshealthdisparities || "",
      targetAudience: data?.targetaudience || [],
      targetAudienceOther: data?.targetaudienceother || "",
      targetAudienceAdditional: data?.targetaudienceadditional || "",
      barriersEngagement:  data?.barriersengagement || [],
      barriersEngagementOther: data?.barriersengagementother || "",
      bestPractices: data?.bestpractices || "",
      eventChallenges: data?.eventchallenges || "",
      fboChanges: data?.fbochanges || "",
      fboImprovements: data?.fboimprovements || "",
      fboObservations: data?.fboobservations || "",
      fboBeyondGrant: data?.fbobeyondgrant || "",
      fboCabFeedback: data?.fbocabfeedback || "",
      fboAliFeedback: data?.fboalifeedback || "",
      fboYipFeedback: data?.fboyipfeedback || "",
      fboLeaderHivOpenness: data?.fboleaderhivopenness || "",
      healthMinistryHivOpenness: data?.healthministryhivopenness || "",
      membershipHivOpenness: data?.membershiphivopenness || "",
      communityHivOpenness: data?.communityhivopenness || "",
      faithLeaderDiversityOpenness: data?.faithleaderdiversityopenness || "",
      healthMinistryDiversityOpenness: data?.healthministrydiversityopenness || "",
      membershipDiversityOpenness: data?.membershipdiversityopenness || "",
      communityDiversityOpenness: data?.communitydiversityopenness || "",
      boroughFbo: data?.boroughfbo || "",
      submissionStatus: data?.submissionstatus || "",
      submissionNotes: data?.submissionnotes || "",
      surveyName: data?.surveyname || "",
      programId: data?.programid || "",
      programName: data?.programname || "",
    }
    dispatch(updateEditFormState({...surveyEdit}))
    
  },[userId])

  return (
    <>
      <Layout showStatusHeader={true}>
        <ToastContainer autoClose={20000} />
        <PageTopHeading
          backBtn={true}
          dashboardBtn={true}
          pageTitle={"OEF Site Visits"}
        />
        <div className="container mx-auto border rounded-lg mb-10">
          <div className="register-envent-form-container  grid gap-10 bg-white  rounded-lg px-7 my-10 ">
      <DateComponent dispatch={dispatch} surveyForm={surveyForm} updateEventDate={updateEventDate}/>
      
      <StartTime dispatch={dispatch} surveyForm={surveyForm} updateEventStartTime={updateEventStartTime}/>
      <FinishTime dispatch={dispatch} surveyForm={surveyForm} updateEventFinishTime={updateEventFinishTime}/>
      <FboRadioList dispatch={dispatch} surveyForm={surveyForm} updateFbo={updateFbo} fbos={fbos} stateValue='fbo' />
      <OneColumnCheckbox options={fboAttendeesOptions} 
      surveyForm ={surveyForm} dispatch={dispatch} 
      updateFunction={updateFboAttendees} 
      updateFunctionOther={updateFboAttendeesOther}
      title='Meeting attendees' stateValue='fboAttendees'/>

      <RadioBoolean dispatch={dispatch} 
      surveyForm={surveyForm} 
      updateFunction={updateSanctuary} 
      title='Is there a Sanctuary?'
      options={sanctuaryOptions}
      stateValue='sanctuary'
      />

<RadioBoolean dispatch={dispatch} 
      surveyForm={surveyForm} 
      updateFunction={updatePrivateTestingArea} 
      title='Is there a private testing area?'
      options={privateTestingAreaOptions}
      stateValue='privateTestingArea'
      />

      <RadioGroup dispatch={dispatch} surveyForm={surveyForm} 
      updateFunction={updateHealthMinistry} 
      title="What is the state of your FBO's HIV or health ministry?"
      options={healthMinistryOptions}
      stateValue='healthMinistry'/>

      <NumberLimits dispatch={dispatch} surveyForm={surveyForm} 
      updateFunction={updateHealthMinistryMembers} title='How many members does your health ministry have?'
      stateValue='healthMinistryMembers'
      />



<Rating dispatch={dispatch} surveyForm={surveyForm}  
options={healthMinistryActiveOptions} 
stateValue='healthMinistryActive' 
updateFunction={updateHealthMinistryActive} title="If your FBO has a HIV or health ministry, how involved in the ministry's activities are the ministry coordinators or committee members?"/>
      

<NumberLimits dispatch={dispatch} surveyForm={surveyForm} 
      updateFunction={updateHealthMinistryCoordinators} title='How many coordinators does your  ministry have?'
      stateValue='healthMinistryCoordinators'
      />




          </div>
        </div>
        <div className="flex justify-center">{loading && <Loader />}</div>
        <div className="flex justify-center my-10">
          {loading ? null : (
            <button
              className="py-2 px-5 flex items-center rounded bg-black text-white font-semibold"
              onClick={()=>router.push(`/oef/site-visits/${surveyForm.id}/edit-part-2`)}
            >
              Next Page
            </button>
          )}
        </div>
      </Layout>
      {showResponseStatus && (
        <ResponseStatusModal
          setShowResponseStatus={setShowResponseStatus}
          responseStatus={responseStatus}
        />
      )}
    </>
  );
};

export default EditSiteVisits;



  export const getServerSideProps = withPageAuthRequired({
    async getServerSideProps(ctx) {
      const {id} = ctx.params;

      const [fbos, data] = await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/fbos`).then((r) => r.json()),
        fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/site_visits/${id}`).then(r => r.json()),
      ]);
      return { props: { fbos: fbos, data: data[0] } };
    },
  });
