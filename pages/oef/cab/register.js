import React, { useEffect, useState } from "react";
import SubmittedBy from "../../../components/oef-cab-event-registration/SubmittedBy";
import Email from "../../../components/oef-cab-event-registration/Email";
import Fbo from "../../../components/oef-cab-event-registration/Fbo";
import RadioGroup from "../../../components/oef-cab-event-registration/RadioGroup";
import Section5 from "../../../components/oef-cab-event-registration/Section5";
import DateComponent from "../../../components/oef-cab-event-registration/DateComponent";
import Section7 from "../../../components/oef-cab-event-registration/Section7";
import Section8 from "../../../components/oef-cab-event-registration/Section8";
import Section9 from "../../../components/oef-cab-event-registration/Section9";


import Loader from "../../../components/Loader";

import { useRouter } from "next/router";
import { nysActivity, NYSZipCodesAndBoroughs } from "../../../utils/sharedData";

import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import ResponseStatusModal from "../../../components/ResponseStatusModal";
import ExternalSurveyHeader from "../../../components/ExternalSurveyHeader";


const CABRegister = ({ fbos }) => {
  const router = useRouter();
  const { user, error, isLoading } = useUser();
  let userId = user?.sub;
  const [showResponseStatus, setShowResponseStatus] = useState(false);
  const [responseStatus, setResponseStatus] = useState({});
  const [loading, setLoading] = useState(false);


  const [eventForm, setEventForm] = useState({
    eventDateCreated: new Date(),
    programId:"1",
    programName:"OEF",
    eventDate:"",
    eventStartTime:"",
    eventFinishTime:"",
    healthAreaOfFocusId:[6],
    healthAreaOfFocusName:["HIV/AIDS"],
    createdByName:"",
    createdByLastname:"",
    oefEventEmail:"",
    deliveryPartner:"",
    submissionStatus:"Pending",
    submissionNotes:"",
    eventRole:"",
    surveyName:"oef-cab",
  });

  console.log("oef state form", eventForm);


  

  const notifyMessage = () => {
    toast.success("Please wait while your event information is being processed", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const submitEventForm = async () => {

    setLoading(true);
    setResponseStatus({ success: true, statusMessage: "Please wait while your event information is being processed"})
    setShowResponseStatus(true)

    //notifyMessage()
   
    await axios
      .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/events/oef/cab/create`, eventForm)
      .then((response) => {
        if (response.data.statusText === "OK") {
          setShowResponseStatus(false)
          setLoading(false);
          //notifyMessage();
        setTimeout(() => {
      router.push(`/oef/cab/${response.data.createdEventId}/post-event-survey/register`);
       }, 18000);
          console.log("response createdEventId",response.data.createdEventId)
        }
      })
      .catch(function (error) {
        setLoading(false);
        setResponseStatus({ success: true, statusMessage: "An error ocurred, try again"})

        console.error("error: ", error);
      });
  };

  const getCity = (zipcode, array) => {
    const searchZipcode = array.filter((code) => code.zipcode === zipcode);
    console.log("searchZipcode", searchZipcode);
    if (searchZipcode.length > 0) {
      setEventForm({ ...eventForm, borough: searchZipcode[0].borought });
    } else {
      setEventForm({ ...eventForm, borough: "" });
    }
  };



const fboRolesOptions=[
  {d:1,value:'Coordinator'},
  {id:2,value:'Leader (Pastor, Imam, Deacon)'},
  {id:3,value:'Community Member'},
  {id:4,value:'Data Entry Assistant'},
  {id:5,value:'Ministry Member'}

]


const quarterOptions=[
  {
    id:1,value:'Q1: July-Sept 2022'
  },
  {id:2,value:'Q2: Oct-Dec 2022'},
  {id:3,value:'Q3: Jan-March 2023'},
  {id:4,value:'Q4: April-June 2023'}

]

  return (
    <>
    {/*   <Layout showStatusHeader={true}> */}
        <ToastContainer autoClose={20000} />
        
        <ExternalSurveyHeader pageTitle={'CAB Organizer Survey'} />
        <div className="container mx-auto border-black rounded-lg mb-10">
          <div className="register-envent-form-container  grid gap-10 bg-white  rounded-lg px-7 my-10 ">
       
 
            <SubmittedBy eventForm={eventForm} setEventForm={setEventForm} stateValueName='createdByName' stateValueLastname='createdByLastname'/>
         
            <Email eventForm={eventForm} setEventForm={setEventForm} stateValue='oefEventEmail'/>
            
            <RadioGroup options={fboRolesOptions} title='What is your role in your FBO?' stateValue='eventRole' eventForm={eventForm} setEventForm={setEventForm} />
            <Fbo eventForm={eventForm} setEventForm={setEventForm} fbos={fbos} stateValue='deliveryPartner'/>
            <RadioGroup options={quarterOptions} title='Which Quarter is meeting for?' stateValue='eventName' eventForm={eventForm} setEventForm={setEventForm} />
            <DateComponent eventForm={eventForm} setEventForm={setEventForm} />
            <Section7 eventForm={eventForm} setEventForm={setEventForm} />
            <Section8 eventForm={eventForm} setEventForm={setEventForm} />


          </div>
        </div>
        <div className="flex justify-center">{loading && <Loader />}</div>
        <div className="flex justify-center my-10">
         {loading? null:<button
            className="py-2 px-5 flex items-center rounded bg-black text-white font-semibold"
            onClick={submitEventForm}
          >
            Next
          </button> } 
        </div>
    {/*   </Layout> */}
      {showResponseStatus && (
        <ResponseStatusModal
          setShowResponseStatus={setShowResponseStatus}
          responseStatus={responseStatus}
        />
      )}
    </>
  );
};

export default CABRegister;

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/fbos`)
  const data = await res.json()
  // Pass data to the page via props
  return { props: { fbos: data } }
}