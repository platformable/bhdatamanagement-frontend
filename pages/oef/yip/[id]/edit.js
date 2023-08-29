import React, { useState,useEffect } from "react";
import RadioGroup from "../../../../components/yip/RadioGroup";
import TextArea from "../../../../components/yip/TextArea";
import TimeComponent from "../../../../components/yip/TimeComponent";
import InputValidationAddress from '../../../../components/InputValidationAddress';
import DateComponent from "../../../../components/yip/DateComponent";
import OnlineOrInPerson from "../../../../components/yip/OnlineOrInPerson";

import Loader from "../../../../components/Loader";
import { workArea } from "../../../../utils/sharedData";


import Layout from "../../../../components/Layout";
import PageTopHeading from "../../../../components/PageTopHeading";
import { useRouter } from "next/router";
import ResponseStatusModal from "../../../../components/ResponseStatusModal";


import { withPageAuthRequired } from "@auth0/nextjs-auth0";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

const EditYip = ({event, user}) => {
  const router = useRouter();
/*   const { user, error, isLoading } = useUser(); */
  let userId = user?.sub;
//   console.log("user",event)
  const [showResponseStatus, setShowResponseStatus] = useState(false);
  const [responseStatus, setResponseStatus] = useState({});
  const [loading, setLoading] = useState(false);
  const [eventForm, setEventForm] = useState({
    id: event?.id,
    createdbyLastName:event?.createdbylastname || user && user["https://lanuevatest.herokuapp.com/lastname"],
    createdByName:event?.createdbyname || user && user["https://lanuevatest.herokuapp.com/name"],
    eventDate:event?.eventdate,
    eventDateCreated:event?.eventdatecreated || new Date(),
    eventDescription:event?.eventdescription || "",
    eventFinishTime:event?.eventfinishtime ,
    eventStartTime:event?.eventstarttime,
    inPersonEventTypeId:event?.inpersoneventtypeid || 0,
    inPersonEventTypeName:event?.inpersoneventtypename || "",
    inPersonEventTypeNameOther:event?.inpersoneventtypenameother || "",
    locationAddress:event?.locationaddress || "",
    onlineEventTypeId:event?.onlineeventtypeid ||  0,
    onlineEventTypeName:event?.onlineeventtypename || "",
    onlineInPersonEventType:event?.onlineinpersoneventtype || "",
    programId:event?.programid ||  0,
    programName:event?.programname || '',
    submissionStatus:event?.submissionstatus,
    surveyCreated:event?.surveycreated || "",
    surveyModified:event?.surveymodified || "",
    surveyName:event?.surveyname || "yip-register",
    userid: event?.userid ||  userId,
    workArea:event?.workarea || "",
    workAreaOther:event?.workareaother || "",
    yipSession:event?.yipsession || "",
    yipSessionOther:event?.yipsessionother || "",
  });

  // console.log("oef state form", eventForm);
  // console.log("event", event);
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
      .put(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/events/oef/yip/update`,
        eventForm
      )
      .then((response) => {
        if (response.data.statusText === "OK") {
          // console.log(response)
          //setShowResponseStatus(false)
          //notifyMessage();
          setTimeout(() => {
            router.push(
              `/oef/yip`
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
      {id: 1, value:'Session 1: Sexual Health and Healthy Relationships'},
  {id: 2, value:'Session 2: Effective Communication'},
  {id: 3, value:'Session 3: Let’s Make a choice/ HIV (Health), Education and Careers'},
  {id: 4, value:'Session 4: STI & HIV Risk Reduction and Prevention'},
  // {id:7, value:'Other'},

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
          pageTitle={"Edit a YIP event"}
        />
        <div className="container mx-auto border rounded-lg mb-10">
          <div className="register-envent-form-container  grid gap-10 bg-white  rounded-lg px-7 my-10 ">

           {/* <RadioGroup 
            options={[{id:3,value:'NYS CMP'},{id:1,value:'OEF'}]} 
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            title='Which program is this event for?'
            stateValue={'programName'}
            IdStateValue={'programId'}

            /> */}

            <RadioGroup 
            options={yipSessionOptions} 
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            title='Which YIP session is it?'
            stateValue={'yipSession'}
            />

            {/* {eventForm.yipSession==='Other' && (
                
            <TextArea 
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            title='Please provide an event description'
            stateValue={'yipSessionOther'}
            />
            )}
        */}
            {/* <RadioGroup 
            options={workArea}
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            title='Which region is the YIP running in?'
            stateValue={'workArea'}
            /> */}


            <OnlineOrInPerson 
             eventForm={eventForm}
             setEventForm={setEventForm}
            />

            <div className="">
              <h2 className="mb-2 font-black">What is the event location address?</h2>
              <p>Can be physical or an online meeting address</p>
              <label className="mt-7">
              {eventForm?.onlineInPersonEventType === 'Online' ? (
                  <input type="text" className="md:w-96" onChange={(e) => setEventForm(prev => ({...prev, locationAddress: e.target.value}))} defaultValue={eventForm.locationAddress}/>
                ) : (
                  <InputValidationAddress setForm={setEventForm} name={'locationAddress'} defaultValue={eventForm.locationAddress}/>
                )}
              </label>
            </div>


            <DateComponent 
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            title='Please provide an event description'
            stateValue={'eventDate'}
            />

            <TimeComponent 
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            title='What time will the event start?'
            stateValue={'eventStartTime'}
            />

            <TimeComponent 
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            title='What time will the event finish?'
            stateValue={'eventFinishTime'}
            />
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

export default EditYip;

export const getServerSideProps = withPageAuthRequired({
    async getServerSideProps(ctx) {
        const { id } = ctx.params;
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/events/${id}`
        );
        const event = await res.json();
    
        return {
          props: {
            event: event[0],
          },
        };
      },
})
