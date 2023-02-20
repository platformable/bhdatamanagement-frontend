import React, { useState,useEffect } from "react";
import RadioGroup from "../../../components/yip/RadioGroup";
import TextArea from "../../../components/yip/TextArea";
import OneColumnCheckbox from "../../../components/yip/OneColumnCheckbox";
import TwoColumnsCheckbox from "../../../components/yip/TwoColumnsCheckbox";
import TimeComponent from "../../../components/yip/TimeComponent";


import LocationAddress from "../../../components/oef-cbt-event-registration/LocationAddress";

import Loader from "../../../components/Loader";

import Layout from "../../../components/Layout";
import PageTopHeading from "../../../components/PageTopHeading";
import { useRouter } from "next/router";
// import { nysActivity, NYSZipCodesAndBoroughs } from "../../../utils/sharedData";

import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import ResponseStatusModal from "../../../components/ResponseStatusModal";

const Register = () => {
  const router = useRouter();
  const { user, error, isLoading } = useUser();
  let userId = user?.sub;
  console.log("user",user)
  const [showResponseStatus, setShowResponseStatus] = useState(false);
  const [responseStatus, setResponseStatus] = useState({});
  const [loading, setLoading] = useState(false);
  const [eventForm, setEventForm] = useState({
    createdbyLastName:user && user["https://lanuevatest.herokuapp.com/lastname"],
    createdByName: user && user["https://lanuevatest.herokuapp.com/name"],
    eventDate:"",
    eventDateCreated:new Date(),
    eventDescription:"",
    eventFinishTime:"00:00",
    eventStartTime:"00:00",
    inPersonEventTypeId:"",
    inPersonEventTypeName:"",
    locationAddress:"",
    onlineEventTypeId:"",
    onlineEventTypeName:"",
    onlineInPersonEventType:"",
    programId:1,
    programName:'OEF',
    submissionStatus:"",
    surveyCompleted:"",
    surveyModified:"",
    surveyName:"yip-register",
    userid:"",
    workArea:"",
    workAreaOther:"",
    yipSession:"",
    yipSessionOther:"",
  });

  console.log("oef state form", eventForm);
  async function makeIcsFile() {
    function convertDate(date, time) {
      const dateParts = date.split("T")[0];
      const dateString = dateParts.split("-").join("");
      const timeString = time.split(":").join("");

      return dateString + "T" + timeString;
    }

    // let icsFile
    const textData = `BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Black Health v1.0//EN\nCALSCALE:GREGORIAN\nMETHOD:PUBLISH\nX-WR-CALNAME:Events - Black Health\nX-MS-OLK-FORCEINSPECTOROPEN:TRUE\nBEGIN:VTIMEZONE\nTZID:America/New_York\nTZURL:http://tzurl.org/zoneinfo-outlook/America/New_York\nX-LIC-LOCATION:America/New_York\nBEGIN:DAYLIGHT\nTZOFFSETFROM:-0500\nTZOFFSETTO:-0400\nTZNAME:CEST\nDTSTART:19700329T020000\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\nEND:DAYLIGHT\nBEGIN:STANDARD\nTZOFFSETFROM:-0400\nTZOFFSETTO:-0500\nTZNAME:CET\nDTSTART:19701025T030000\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\nEND:STANDARD\nEND:VTIMEZONE\nBEGIN:VEVENT\nDTSTAMP:20220129T115020Z\nDTSTART:${convertDate(
      eventForm?.eventDate,
      eventForm?.eventStartTime
    )}\nDTEND:${convertDate(
      eventForm?.eventDate,
      eventForm?.eventFinishTime
    )}\nSTATUS:CONFIRMED\nSUMMARY:${eventForm?.eventName}\nDESCRIPTION:${
      eventForm?.onlineInPersonEventType
    } - ${
      eventForm?.inPersonEventTypeName === ""
        ? eventForm?.onlineEventTypeName
        : eventForm?.inPersonEventTypeName
    } - ${
      eventForm?.eventDescription
    }\nORGANIZER;CN=Black Health:MAILTO:info@meetup.com\nCLASS:PUBLIC\nLOCATION:${
      eventForm?.locationAddress
    }, ${eventForm?.locationName}, ${String(
      eventForm?.eventZipCode
    )}\nSEQUENCE:2\nUID:event_283355921@black_health_data_app_management\nEND:VEVENT\nEND:VCALENDAR`;

    var data = new File([textData], { type: "text/calendar" });

    setEventForm((prev) => ({ ...prev, icsUrlFile: textData }));
  }

  const notifyMessage = () => {
    toast.success(
      "Please wait while your event information is being processed",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  };

  const submitEventForm = async () => {
    setLoading(true);
    setResponseStatus({
      success: true,
      statusMessage:
        "Please wait while your event information is being processed",
    });
    setShowResponseStatus(true);

    //notifyMessage()


    await axios
      .post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/events/oef/cbt/create`,
        eventForm
      )
      .then((response) => {
        if (response.data.statusText === "OK") {
          //setShowResponseStatus(false)
          //notifyMessage();
          setTimeout(() => {
            router.push(
              `/oef/cbt/success`
            );
          }, 1000);
        }
      })
      .catch(function (error) {
        setLoading(false);
        setResponseStatus({
          success: true,
          statusMessage: "An error has occurred, please check that each question has been answered.",
        });

        console.error("error: ", error);
      });
  };

  const yipSessionOptions=[
    {id: 1, value:'Session 1: Sexual and Reproductive Health'},
{id: 2, value:'Session 2: Healthy Relationship/ Effective Communication'},
{id: 3, value:'Session 3: Nutrition'},
{id: 4, value:'Session 4: Mental Health'},
{id: 5, value:'Session 5: Financial Literacy'},
{id: 6, value:'Session 6: College and Job Readiness'},
{id:7, value:'Other'},

  ]

  useEffect(()=>{
    if(eventForm.yipSession!=='Other'){
        setEventForm({...eventForm,yipSessionOther:''})
    }
  },[eventForm.yipSession])

  return (
    <>
      <Layout showStatusHeader={true}>
        <ToastContainer autoClose={20000} />
        <PageTopHeading
          backBtn={true}
          dashboardBtn={true}
          pageTitle={"Register a YIP event"}
        />
        <div className="container mx-auto border rounded-lg mb-10">
          <div className="register-envent-form-container  grid gap-10 bg-white  rounded-lg px-7 my-10 ">
            <RadioGroup 
            options={[{id:1,value:'NYS CMP'},{id:2,value:'OEF'}]} 
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            title='Which program is this event for'
            stateValue={'programName'}
            />

            <RadioGroup 
            options={yipSessionOptions} 
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            title='Which YIP session is it?'
            stateValue={'yipSession'}
            />

            {eventForm.yipSession==='Other' && (
                
            <TextArea 
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            title='Please provide an event description'
            stateValue={'yipSessionOther'}
            />
            )}
       
          </div>
        </div>
        <div className="flex justify-center">{loading && <Loader />}</div>
        <div className="flex justify-center my-10">
          {loading ? null : (
            <button
              className="py-2 px-5 flex items-center rounded bg-black text-white font-semibold"
              onClick={submitEventForm}
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

export default Register;

export const getServerSideProps = withPageAuthRequired({
 
})
