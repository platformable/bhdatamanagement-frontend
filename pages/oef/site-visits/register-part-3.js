
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
 
   updateStrategiesHealthDisparities,
   
 } from "../../../slices/siteVisitsSlice";

import TextArea from "../../../components/oef-site-visit-survey/TextArea";





const RegisterSiteVisits = ({ fbos }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const [showResponseStatus, setShowResponseStatus] = useState(false);
  const [responseStatus, setResponseStatus] = useState({});


  const surveyForm = useSelector((state)=>state.siteVisitsReducer.value) 

  console.log("surveyForm",surveyForm)

  const notifyMessage = () => {
    toast.success("Technical assistance created", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
 

  return (
    <>
      <Layout showStatusHeader={true}>
        <ToastContainer autoClose={20000} />
        <PageTopHeading
          backBtn={true}
          dashboardBtn={true}
          pageTitle={"Progress made by FBO"}
        />
        <div className="container mx-auto border rounded-lg mb-10">
          <div className="register-envent-form-container  grid gap-10 bg-white  rounded-lg px-7 my-10 ">
      <TextArea dispatch={dispatch} surveyForm={surveyForm}  stateValue='bestPractices' updateFunction={updateStrategiesHealthDisparities} title='What best practices or lessons have you learned since this program began?'/>
      <TextArea dispatch={dispatch} surveyForm={surveyForm}  stateValue='eventChallenges' updateFunction={updateStrategiesHealthDisparities} title='What key challenges have you faced as a ministry? How have you overcome them?'/>
      <TextArea dispatch={dispatch} surveyForm={surveyForm}  stateValue='fboChanges' updateFunction={updateStrategiesHealthDisparities} title='How have you shifted your work to ensure that all program goals are met?'/>
      <TextArea dispatch={dispatch} surveyForm={surveyForm}  stateValue='fboImprovements' updateFunction={updateStrategiesHealthDisparities} title='What improvements have you made since our last site visit?'/>
      <TextArea dispatch={dispatch} surveyForm={surveyForm}  stateValue='fboObservations' updateFunction={updateStrategiesHealthDisparities} title='What results have you observed from your community outreach efforts?'/>
      <TextArea dispatch={dispatch} surveyForm={surveyForm}  stateValue='fboBeyondGrant' updateFunction={updateStrategiesHealthDisparities} title='What systems or sustainable practices have you put in place to make sure that this work can continue beyond the life of the grant (eg. when the funding runs out)?'/>
      <TextArea dispatch={dispatch} surveyForm={surveyForm}  stateValue='fboCabFeedback' updateFunction={updateStrategiesHealthDisparities} title='What has your experience been with CAB? Any specific challenges or successes you´d like to note?'/>
      <TextArea dispatch={dispatch} surveyForm={surveyForm}  stateValue='fboAliFeedback' updateFunction={updateStrategiesHealthDisparities} title='What has your experience been with your ALI group (if relevant)?'/>
      <TextArea dispatch={dispatch} surveyForm={surveyForm}  stateValue='fboYipFeedback' updateFunction={updateStrategiesHealthDisparities} title='What was your experience with YIP (if relevant)?'/>
     
          </div>
        </div>
        <div className="flex justify-center">{loading && <Loader />}</div>
        <div className="flex justify-center">
        {loading ? null : (
            <div className="flex gap-x-5 justify-center my-10">
            
            <button
              className="py-2 px-5 flex items-center rounded bg-black text-white font-semibold"
              onClick={()=>router.push('/oef/site-visits/register-part-2')}
            >
              Previous Page
            </button>
            <button
              className="py-2 px-10 flex items-center rounded bg-black text-white font-semibold"
              onClick={()=>router.push('/oef/site-visits/register-part-4')}
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
  );
};

export default RegisterSiteVisits;


export const getServerSideProps = withPageAuthRequired({});


