import React, { useEffect, useState,useRef } from "react";

import Layout from "../../../../components/Layout";
import PageTopHeading from "../../../../components/PageTopHeading";

import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";

import axios from "axios";

import ResponseStatusModal from "../../../../components/ResponseStatusModal";
import ReactToPrint from 'react-to-print'
import PrintQR from '../../../../components/PrintQR'



const ParticipantSurvey = ({
  event,
  programs,
  locationTypes,
  areasOfFocus,
  eventTypes,
}) => {
  const { user, error, isLoading } = useUser();
  const [showResponseStatus, setShowResponseStatus] = useState(false);
  const [responseStatus, setResponseStatus] = useState({});
  let componentRef = useRef();
  const [eventForm, setEventForm] = useState({
    userID: "",
    eventDateCreated: new Date(),
    programID: "",
    programName: "",
    eventName: "",
    eventDate: "",
    eventStartTime: "",
    eventFinishTime: "",
    eventLocationTypeID: "",
    eventLocationTypeName: "",
    // eventZipCode: "",
    healthAreaOfFocusID: "",
    healthAreaOfFocusName: "",
    eventTypeID: "",
    eventTypeName: "",
  });
  const userId = user && user.sub;

  console.log("event",event)

  useEffect(() => {
    setEventForm({ ...eventForm, userID: userId });
  }, [userId]);

  const submitPostEventForm = async () => {
    const isEmpty = Object.values(eventForm).some((value) => !value);

    if (!isEmpty) {
      axios
        .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/events`, eventForm)
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
    } else {
      setResponseStatus({
        success: false,
        statusMessage: "Please complete all the fields",
      });
      setShowResponseStatus(!showResponseStatus);
    }
  };

  const programAndAreaStyles = {
    display: "grid",
    gridTemplateColumns: "2fr 3fr",
    gap: "20px",
  };

  const [copyToClipboard,setCopyToClipboard]=useState(false)

  const addToClipboard=()=>{
    if(typeof window !=='undefined'){
      navigator.clipboard.writeText(`http://www.bh.platformable.com/events/${event.id}/participant_survey`)
    }
    setCopyToClipboard(!copyToClipboard)
    setTimeout(()=>{
      setCopyToClipboard(false)
    },500 )
  }
  return (
    <>
      <Layout showStatusHeader={true}>
        <PageTopHeading
          backBtn={true}
          dashboardBtn={true}
          pageTitle={"Participant Survey"}
        />
        <div className="container mx-auto md:px-0 px-5  items-center  rounded-lg shadow-lg">

        <div className="participant-survey-head-table border rounded-t-lg py-3 px-5 bg-black text-white flex gap-x-5 ">
               {/*  <p className="lg:text-lg flex items-center justify-center">Program</p> */}
                <p className="lg:text-lg flex items-center ">Event name</p>
                <p className="lg:text-lg flex items-center ">Event date</p>
            </div>
          {/* TABLE HEAD END */}
          <div className="participant-survey-head-table items-center gap-2 bg-white p-5">

            <div >
              <p className=" text-lg">{event?.eventname}</p>
            </div>
            <div className="flex ">
            <p className=" text-lg">  {new Date(event?.eventdate).toLocaleDateString('en-US',{year:'numeric',month:'numeric',day:'numeric'})}</p>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-1 mb-2 ">
              <div className="text-center mr-5 rounded bg-white border p-5 text-center shadow-xl   mb-2 rounded-xl grid justify-center content-center">
      
              <a id="myBtn" href={event.qrcode} download={event?.eventname}>
                <div className="flex justify-center items-center">
                  {/* <img
                    src="/events/download_QR_icon.svg"
                    alt=""
                    width={85}
                  /> */}
                </div>
                <p className="text-black uppercase">
                 Download QR Code
                </p>
              </a>

          </div>
          <div className="text-center mr-5 rounded bg-white border p-5 text-center shadow-xl   mb-2 rounded-xl grid justify-center content-center">
  
              <button id="myBtn"
              onClick={()=>addToClipboard()}>
                <div className="">
                  <div className="flex justify-center items-center ">
                    {/* <img
                      src="/events/copy_link_icon.svg"
                      alt=""
                      width={85}
                    /> */}
                  </div>
                  <p className=" text-black uppercase">
                   Copy link to clipboard
                  </p>
                </div>{" "}
              </button>
              {copyToClipboard && <span className="text-xs bg-green-300 p-1 rounded">Copied to clipboard</span>}
            
          </div>
          <div className="text-center mr-5 rounded bg-white border p-5 text-center shadow-xl   mb-2 rounded-xl grid justify-center content-center">

          <ReactToPrint
                  trigger={() => <button id="myBtn">
                  <div className="">
                    <div className="grid justify-center content-center">
                      {/* <img
                        src="/events/print_QR_icon.svg"
                        alt=""
                        width={85}
                      /> */}
                    </div>
                    <p className="text-black uppercase">
                     Print the qr code to put up at your event
                    </p>
                  </div>{" "}
                </button>}
                  content={() => componentRef.current} />
          
              <div style={{display:'none'}}>
                <PrintQR ref={componentRef} event={event}/>
              </div>
      
              
 
          </div>
          <div className="text-center mr-5 rounded bg-white border p-5 text-center shadow-xl   mb-2 rounded-xl grid justify-center content-center">
            
              <a id="myBtn" href={`/events/${event.id}/participant-survey/survey`} target="_blank" >
                <div className="">
                  <div className="flex justify-center items-center ">
                    {/* <img
                      src="/events/go_survey_icon.svg"
                      alt=""
                      width={85}
                    /> */}
                  </div>
                  <p className="text-black uppercase">
                   Go to survey
                  </p>
                </div>{" "}
               </a> 
    
          </div>
              </div>
        
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

export default ParticipantSurvey;

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const { id } = ctx.params;
    const [event] =
      await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/events/${id}`)
          .then((r) => r.json())
          .then((response) => response[0]),
        fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/programs`).then((r) =>
          r.json()
        ),

      ]);
      console.log(event)
    return {
      props: {
        event: event
      },
    };
  },
});
