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





const RegisterSiteVisits = ({ fbos }) => {
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

  const notifyMessage = () => {
    toast.success("Technical assistance created", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const submitForm = async () => {
    setLoading(!loading);
    await axios
      .post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/technical_assistance/create`,
        form
      )
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setLoading(!loading);
          notifyMessage();
          setTimeout(() => {
            router.push("/oef/technical-assistance/success");
          }, 1500);
        }
      })
      .catch(function (error) {
        setLoading(!loading);
        setError("An error ocurred, try again");
        console.error("error: ", error);
      });
  };
  const boroughs = [
    "Bronx",
    "Brooklyn",
    "Manhattan",
    "Staten Island",
    "Queens",
  ];
  const handleForm = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAddress = (value, key) => {
    setForm((prev) => ({ ...prev, key: value }));
  };


  /////////

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
      <FinishTime />
      <FboRadioList dispatch={dispatch} surveyForm={surveyForm} updateFbo={updateFbo} fbos={fbos} />
      <OneColumnCheckbox options={fboAttendeesOptions} surveyForm ={surveyForm} dispatch={dispatch} updateFunction={updateFboAttendees} title='Meeting attendees' stateValue='fboAttendees'/>
    <TextArea dispatch={dispatch} surveyForm={surveyForm}  stateValue='strategiesHealthDisparities' updateFunction={updateStrategiesHealthDisparities} title='What strategies do you employ to engage FBO members around other health disparities'/>

          </div>
        </div>
        <div className="flex justify-center">{loading && <Loader />}</div>
        <div className="flex justify-center my-10">
          {loading ? null : (
            <button
              className="py-2 px-5 flex items-center rounded bg-black text-white font-semibold"
              onClick={'submitEventForm'}
            >
              Save and finish
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

export default RegisterSiteVisits;

export const getServerSideProps = async(ctx) => {
    const [fbos] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/fbos`).then((r) => r.json()),
    ]);
    return { props: { fbos: fbos } };

  }


