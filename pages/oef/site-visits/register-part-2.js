import React, { useState,useEffect } from "react";
import Layout from "../../../components/Layout";
import PageTopHeading from "../../../components/PageTopHeading";
import Loader from "../../../components/Loader";
import axios from "axios";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputValidationAddress from "../../../components/InputValidationAddress";
import { useRouter } from "next/router";
import ResponseStatusModal from "../../../components/ResponseStatusModal";

import DateComponent from '../../../components/oef-site-visit-survey/DateComponent'

import { useSelector, useDispatch } from 'react-redux'

import { 
  updateInitialState,
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
 } from "../../../slices/siteVisitsSlice";
import TypeOfTARequested from "../../../components/technicalAssistance/TypeOfTARequested";
import FboRadioList from "../../../components/oef-site-visit-survey/FboRadioList";
import StartTime from "../../../components/oef-site-visit-survey/StartTime";
import FinishTime from "../../../components/oef-site-visit-survey/FinishTime";
import OneColumnCheckbox from "../../../components/oef-site-visit-survey/OneColumnCheckbox";
import TextArea from "../../../components/oef-site-visit-survey/TextArea";
import RadioBoolean from "../../../components/oef-site-visit-survey/RadioBoolean";
import RadioGroup from "../../../components/oef-site-visit-survey/RadioGroup";
import NumberLimits from "../../../components/oef-site-visit-survey/NumberLimits";
import TwoColumnCheckbox from "../../../components/oef-site-visit-survey/TwoColumnsCheckbox";

export default function RegisterPart2({fbos}) {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const dispatch = useDispatch();
  
    const [showResponseStatus, setShowResponseStatus] = useState(false);
    const [responseStatus, setResponseStatus] = useState({});
  
  
  
    const isNumberKey = (e) => {
      const invalidChars = ["-", "+", "e"];
      if (invalidChars.includes(e.key)) {
        e.preventDefault();
      }
    };
  
    const surveyForm = useSelector((state)=>state.siteVisitsReducer.value) 


console.log("surveyForm",surveyForm)

    const targetAudienceOptions= [
        {
          id:1,value:"Adolescents"
        },
        {
          id:2,value:"Heterosexual Women"
        },
        {
          id:3,value:"Heterosexual Men"
        },
        {
          id:4,value:"Lesbian/Gay/Bisexual Individuals"
        },
        {
            id:5,value:"Trans/Non-conforming Individuals"
          },
          {
            id:6,value:"MSM: Men who have sex with men, regardless of their sexual identity"
          },
          {
              id:7,value:"Inmigrants"
            },
            {
                id:9,value:"Other"
              },
            {
              id:8,value:"General population"
            },
            
        
      ]


      const barriersEngamentOptions= [
        {
          id:1,value:"Stigma held by FBO members"
        },
        {
          id:2,value:"Stigma held by faith leader"
        },
        {
          id:3,value:"COVID-19 and adapting to digital methods"
        },
        {
          id:4,value:"Hard to reach community members"
        },
        {
            id:5,value:"Education on HIV/COVID/etc. for ministry members"
          },
          {
            id:6,value:"Location of FBO"
          },
          {
              id:7,value:"Physical set up or lack of space at the FBO"
            },
            {
                id:9,value:"Other"
              },
            {
              id:8,value:"Marketing not effective"
            },
            
        
      ]
    
    
   
    
      

  return (
    <>
      <Layout showStatusHeader={true}>
        <ToastContainer autoClose={20000} />
        <PageTopHeading
          backBtn={true}
          dashboardBtn={true}
          pageTitle={"Engaging FBO and Community Members"}
        />
        <div className="container mx-auto border rounded-lg mb-10">
          <div className="register-envent-form-container  grid gap-10 bg-white  rounded-lg px-7 my-10 ">


<TextArea dispatch={dispatch} surveyForm={surveyForm} 
      updateFunction={updateStrategiesHealthDisparities} 
      title='What strategies do you employ to engage the community in another pandemic?'
      stateValue='strategiesHealthDisparities'/>

      <TwoColumnCheckbox dispatch={dispatch} surveyForm={surveyForm} 
      updateFunction={updateTargetAudience} 
      updateFunctionOther={updateTargetAudienceOther} 
      title='Who are you most likely to reach through your programming?'
      stateValue='targetAudience' options={targetAudienceOptions}/>

<TextArea dispatch={dispatch} surveyForm={surveyForm} 
      updateFunction={updateTargetAudienceAdditional} 
      title="Are there any additional populations you'd like to reach? Why?"
      stateValue='targetAudienceAdditional'/>


<TwoColumnCheckbox dispatch={dispatch} surveyForm={surveyForm} 
      updateFunction={updateBarriersEngagement} 
      updateFunctionOther={updateBarriersEngagementOther} 
      title='What have been some barriers to engagement'
      message="Check all that apply"
      stateValue='barriersEngagement' options={barriersEngamentOptions}/>
 
          </div>
        </div>
        <div className="flex justify-center">{loading && <Loader />}</div>
        <div className="">
          {loading ? null : (
            <div className="flex gap-x-5 justify-center my-10">
            
            <button
              className="py-2 px-5 flex items-center rounded bg-black text-white font-semibold"
              onClick={()=>router.push('/oef/site-visits/register')}
            >
              Previous Page
            </button>
            <button
              className="py-2 px-10 flex items-center rounded bg-black text-white font-semibold"
              onClick={()=>router.push('/oef/site-visits/register-part-3')}
            >
              Next Page
            </button>
            </div>
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
  )
}



export const getServerSideProps = withPageAuthRequired({});