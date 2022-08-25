import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Layout from "../../../components/Layout";
import PageTopHeading from "../../../components/PageTopHeading";

import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";

import axios from "axios";
import ResponseStatusModal from "../../../components/ResponseStatusModal";

import Link from "next/link";
import Image from "next/image";

import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PostEventReportSection1 from "../../../components/post-event-report/PostEventReportSection1";
import PostEventReportSection2 from "../../../components/post-event-report/PostEventReportSection2";
import PostEventReportSection3 from "../../../components/post-event-report/PostEventReportSection3";
import PostEventReportSection4 from "../../../components/post-event-report/PostEventReportSection4";
import PostEventReportSection5 from "../../../components/post-event-report/PostEventReportSection5";
import PostEventReportSection6 from "../../../components/post-event-report/PostEventReportSection6";
import PostEventReportSection7 from "../../../components/post-event-report/PostEventReportSection7";
import PostEventReportSection8 from "../../../components/post-event-report/PostEventReportSection8";
import PostEventReportSection9 from "../../../components/post-event-report/PostEventReportSection9";
import PostEventReportSection10 from "../../../components/post-event-report/PostEventReportSection10";

import PostEventReportSection11 from "../../../components/post-event-report/PostEventReportSection11";
import PostEventReportSection12 from "../../../components/post-event-report/PostEventReportSection12";
import PostEventReportSection13 from "../../../components/post-event-report/PostEventReportSection13";
import PostEventReportSection14 from "../../../components/post-event-report/PostEventReportSection14";
import PostEventReportSection15 from "../../../components/post-event-report/PostEventReportSection15";
import PostEventReportSection16 from "../../../components/post-event-report/PostEventReportSection16";
import PostEventReportSection17 from "../../../components/post-event-report/PostEventReportSection17";
import PostEventReportSection18 from "../../../components/post-event-report/PostEventReportSection18";
import PostEventReportSection19 from "../../../components/post-event-report/PostEventReportSection19";
import PostEventReportSection20 from "../../../components/post-event-report/PostEventReportSection20";

import PostEventReportSection21 from "../../../components/post-event-report/PostEventReportSection21";
import PostEventReportSection22 from "../../../components/post-event-report/PostEventReportSection22";
import PostEventReportSection23 from "../../../components/post-event-report/PostEventReportSection23";
import PostEventReportSection24 from "../../../components/post-event-report/PostEventReportSection24";
import PostEventReportSection25 from "../../../components/post-event-report/PostEventReportSection25";
import PostEventReportSection26 from "../../../components/post-event-report/PostEventReportSection26";
import PostEventReportSection27 from "../../../components/post-event-report/PostEventReportSection27";
import PostEventReportSection28 from "../../../components/post-event-report/PostEventReportSection28";
import PostEventReportSection29 from "../../../components/post-event-report/PostEventReportSection29";


const PostEventReport = ({
  event,
  programs,
  locationTypes,
  areasOfFocus,
  eventTypes,
}) => {
  const { user, error, isLoading } = useUser();
  const [showResponseStatus, setShowResponseStatus] = useState(false);
  const [responseStatus, setResponseStatus] = useState({});
  const [eventForm, setEventForm] = useState({
    userID: "",
    eventDateCreated: new Date(),
    programID: event?.programid,
    programName: event?.programname,
    eventName: event?.eventname,
    eventDate: event && new Date(event.eventdate),
    eventStartTime: event?.eventstarttime,
    eventFinishTime: event?.eventfinishtime,
    eventLocationTypeID: event?.eventlocationtypeid,
    eventLocationTypeName: event?.eventlocationtypename,
    healthAreaOfFocusID: event?.healthareaoffocusid,
    healthAreaOfFocusName: event?.healthareaoffocusname,
    eventTypeID: event?.eventtypeid,
    eventTypeName: event?.eventtypename,
  });
  const userId = user && user.sub;
const router = useRouter()
console.log("event",event)
  useEffect(() => {
    setEventForm({ ...eventForm, userID: userId });
    
  }, [userId]);

  const notifyMessage= ()=>{
    toast.success("Survey saved!", {
      position: toast.POSITION.TOP_CENTER,
      
    });
   
   }

  const submitPostEventForm = async () => {
    const isEmpty = Object.values(eventForm).some((value) => !value);
    console.log("eventForm",eventForm)
/*     notifyMessage()
    setTimeout(()=>{
      router.back()
    },1500) */
    // if (!isEmpty) {
      axios
        .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/post_event_report/create`, eventForm)
        .then((response) => {
          if (response.data.statusText === "OK") {
            setResponseStatus({
              success: true,
              statusMessage: "Your Event has been saved",
            });
            setShowResponseStatus(!showResponseStatus);
          }
        })
        .catch(function (error) {
          setResponseStatus({
            success: false,
            statusMessage: "Request Failed",
          });
          setShowResponseStatus(!showResponseStatus);
          console.error("error: ", error);
        });
    // } else {
      // setResponseStatus({
      //   success: false,
      //   statusMessage: "Please complete all the fields",
      // });
      // setShowResponseStatus(!showResponseStatus);
   // }
  };

  const programAndAreaStyles = {
    display: "grid",
    gridTemplateColumns: "2fr 3fr",
    gap: "20px",
  };



  return (
    <>
      <Layout>
      <ToastContainer autoClose={1500}/>
        <PageTopHeading
          backBtn={true}
          dashboardBtn={true}
          pageTitle={"Post event report"}
        />
        <div className="container mx-auto md:px-0 px-5 items-center">
          <div className="post-envent-form-container  border-black grid gap-1 bg-white rounded-lg p-1 my-10 shadow-lg">
            <section className="event p-5 rounded">
              <div className="flex justify-between items-center ">
                <h3 className="mb-3 font-black ">Event</h3>
              </div>
              <div style={programAndAreaStyles}>
                <div>
                  <p className="font-black">Program</p>
                  <input
                    type="text"
                    value={event?.programname}
                    id="program"
                    className=" rounded self-start p-1 w-full  px-2 "
                    disabled
                  />
                </div>
                <div>
                  <p className="font-black">Health area of focus</p>
                  <input
                    type="text"
                    value={event.healthareaoffocusname.substring(0)}
                    id="program"
                    className=" rounded self-start p-1 w-full  px-2 "
                    disabled
                  />
                </div>
              </div>
              <div className="my-5">
                <p className="font-black">Event name</p>
                <input
                  type="text"
                  value={event?.eventname}
                  id="program"
                  className=" rounded self-start p-1 w-full  px-2 "
                  disabled
                />
              </div>

              <div className="grid md:grid-cols-2 grid-cols-1">
                <div className="grid md:grid-cols-3 grid-cols1 gap-5">
                  <div>
                    <p className="font-black">Event date</p>
                    <input
                      type="text"
                      value={event && new Date(event?.eventdate).toLocaleDateString('en-US',{year:'numeric',month:'numeric',day:'numeric'})}
                      id="program"
                      className=" rounded self-start p-1 w-full  px-2 "
                      disabled
                    />
                  </div>

                  <div>
                    <p className="font-black">Start time</p>
                    <input
                      type="time"
                      value={event?.eventstarttime}
                      id="program"
                      className=" rounded self-start p-1 w-full  px-2 "
                      disabled
                    />
                  </div>

                  <div>
                    <p className="font-black">End time</p>
                    <input
                      type="time"
                      value={event?.eventfinishtime}
                      id="program"
                      className=" rounded self-start p-1 w-full  px-2 "
                      disabled
                    />
                  </div>
                </div>
              </div>

              <div className="my-5">
                <p className="font-black">Event location</p>
                <input
                  type="text"
                  value={event?.eventlocationtypename}
                  id="program"
                  className=" rounded self-start p-1 w-full  px-2 "
                  disabled
                />
              </div>

              <div className="my-5">
                <p className="font-black">Type of event</p>
                <input
                  type="text"
                  value={event?.eventtypename}
                  id="program"
                  className=" rounded self-start p-1 w-full  px-2 "
                  disabled
                />
              </div>

              <div className="flex justify-center ">
                <Link href={`/events/${event?.id}/edit`}>

                  <button className="bg-black text-white rounded px-2 mr-2 ">

                    <a
                      className="px-10 py-2 flex  justify-center items-center font-bold"
                      id="myBtn"
                    >
                      {/* <img src="/events/edit_event_icon_button.svg" alt="" /> */}
                      <p className="ml-2 font-black">Edit event</p>
                    </a>
                  </button>
                </Link>
              </div>
            </section>

            <div className=" p-5 rounded-tl-md rounded-tr-md">
            <h3 className=" font-black">Event details</h3>
            
            <PostEventReportSection1 eventForm={eventForm} setEventForm={setEventForm}/>
            <PostEventReportSection2 eventForm={eventForm} setEventForm={setEventForm}/>
            <PostEventReportSection3 eventForm={eventForm} setEventForm={setEventForm} />
            <PostEventReportSection4 eventForm={eventForm} setEventForm={setEventForm}/>
            <PostEventReportSection5 eventForm={eventForm} setEventForm={setEventForm}/>
            <PostEventReportSection6 eventForm={eventForm} setEventForm={setEventForm}/>
            <PostEventReportSection7 eventForm={eventForm} setEventForm={setEventForm}/>
            <PostEventReportSection8 eventForm={eventForm} setEventForm={setEventForm}/>
            </div>
            <div className=" p-5 rounded-tl-md rounded-tr-md">
            <h3 className=" font-black">Event organization and promotion</h3>
            {/* <div className="grid md:grid-cols-2 grid-cols-1"> */}
            <PostEventReportSection9 eventForm={eventForm} setEventForm={setEventForm}/>
            <PostEventReportSection10 eventForm={eventForm} setEventForm={setEventForm}/>

            <PostEventReportSection11 eventForm={eventForm} setEventForm={setEventForm}/>
            <PostEventReportSection12 eventForm={eventForm} setEventForm={setEventForm}/>
            {/* </div> */}
            <PostEventReportSection13 eventForm={eventForm} setEventForm={setEventForm}/>
            <PostEventReportSection14 eventForm={eventForm} setEventForm={setEventForm}/>
            <PostEventReportSection15 eventForm={eventForm} setEventForm={setEventForm}/>
            {/* <div className="grid md:grid-cols-2 grid-cols-1"> */}
            <PostEventReportSection16 eventForm={eventForm} setEventForm={setEventForm}/>
            <PostEventReportSection17 eventForm={eventForm} setEventForm={setEventForm}/>
            {/* </div> */}
            <PostEventReportSection18 eventForm={eventForm} setEventForm={setEventForm}/>
            <PostEventReportSection19 eventForm={eventForm} setEventForm={setEventForm}/>
            <PostEventReportSection20 eventForm={eventForm} setEventForm={setEventForm}/>
            <PostEventReportSection21 eventForm={eventForm} setEventForm={setEventForm}/>
            
            {eventForm.eventTestingDone && 
            <PostEventReportSection22  eventForm={eventForm} setEventForm={setEventForm}/> } 
            
            {eventForm.hivTesting && 
            <PostEventReportSection23 eventForm={eventForm} setEventForm={setEventForm}/>}
            
            {eventForm.otherTesting && 
            <PostEventReportSection24 eventForm={eventForm} setEventForm={setEventForm}/>}

            {eventForm.hepCTesting && 
            <PostEventReportSection25 eventForm={eventForm} setEventForm={setEventForm}/>}

            {eventForm.stiTesting && 
            <PostEventReportSection26 eventForm={eventForm} setEventForm={setEventForm}/>}

            {eventForm.bloodPressureTesting && 
            <PostEventReportSection27 eventForm={eventForm} setEventForm={setEventForm}/>}

            {eventForm.cholesterolTesting && 
            <PostEventReportSection28 eventForm={eventForm} setEventForm={setEventForm}/>}
          
            {eventForm.covidTesting && 
            <PostEventReportSection29 eventForm={eventForm} setEventForm={setEventForm}/>}
            </div>
           

          </div>
          <div className="flex justify-center my-10">
          <button
            className="py-2 px-5 flex items-center rounded bg-black text-white font-semibold"
            onClick={submitPostEventForm}
          >
           {/*  <img
              src="/check-save-and-finish.svg"
              alt="register event icon"
              className="mr-2"
            /> */}
            Save
          </button>
          </div>
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

export default PostEventReport;

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const { id } = ctx.params;
    const [event, programs, locationTypes, areasOfFocus, eventTypes] =
      await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/events/${id}`)
          .then((r) => r.json())
          .then((response) => response[0]),
        fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/programs`).then((r) =>
          r.json()
        ),

        fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/event_location_type`).then(
          (r) => r.json()
        ),
        fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/health_area_of_focus`
        ).then((r) => r.json()),
        fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/event_type`).then((r) =>
          r.json()
        ),
      ]);
    return {
      props: {
        event: event,
        programs: programs,
        locationTypes: locationTypes,
        areasOfFocus: areasOfFocus,
        eventTypes: eventTypes,
      },
    };
  },
});
