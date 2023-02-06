import React, { useEffect, useState,useRef } from "react";

import Layout from "../../../../../components/Layout";
import PageTopHeading from "../../../../../components/PageTopHeading";

import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";

//import { crearFecha2 } from "../../../../utils/helpers";

import ResponseStatusModal from "../../../../../components/ResponseStatusModal";
import ReactToPrint from 'react-to-print'
import PrintQR from '../../../../../components/PrintQR'



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
  
  const userId = user && user.sub;

  console.log("event",event)


  const programAndAreaStyles = {
    display: "grid",
    gridTemplateColumns: "2fr 3fr",
    gap: "20px",
  };

  const [copyToClipboard,setCopyToClipboard]=useState(false)

  const addToClipboard=()=>{
    if(typeof window !=='undefined'){
      navigator.clipboard.writeText(`https://bh.platformable.com/events/${event.id}/participant-survey/survey`)
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
          pageTitle={"Participant survey"}
        />
        <p className="container mx-auto mb-3 text-lg">This participant survey is to collect demographics and some optional additional information from participants at your event.
        <br/>Please check Additional Materials in the event for any additional event-specific surveys created by the data team. </p>
        <div className="container mx-auto md:px-0 px-5  items-center  rounded-lg shadow-lg">
         <div className="border rounded-t-lg py-3 px-7 bg-black text-white flex justify-between ">
               {/*  <p className="lg:text-lg flex items-center justify-center">Program</p> */}
                <h2 className="flex items-center text-2xl">{event?.eventname}</h2>
                <h2 className="flex items-center text-2xl">{new Date(event?.eventdate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                })}</h2>
            </div>
          {/* TABLE HEAD END */}
          <div className="flex items-center bg-white">

            
            <div className="grid  md:grid-cols-4 lg:grid-cols-6 grid-cols-1 gap-7 p-7">
              <div className="text-center rounded bg-black  border p-5 text-center shadow-xl rounded-xl grid justify-center content-center">
      
              <a id="myBtn" href={event.qrcode} download={event?.eventname}>
                <div className="flex justify-center items-center">
                  {/* <img
                    src="/events/download_QR_icon.svg"
                    alt=""
                    width={85}
                  /> */}
                </div>
                <p className="text-white uppercase">
                 Download QR Code
                </p>
              </a>

          </div>
          <div className="text-center rounded bg-black  border p-5 text-center shadow-xl   rounded-xl grid justify-center content-center">
  
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
                  <p className=" text-white uppercase">
                   Copy link to clipboard
                  </p>
                </div>{" "}
              </button>
              {copyToClipboard && <span className="text-xs bg-green-300 p-1 rounded">Copied to clipboard</span>}
            
          </div>
          <div className="text-center rounded bg-black  border p-5 text-center shadow-xl   rounded-xl grid justify-center content-center">

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
                    <p className="text-white uppercase">
                     Print the qr code to put up at your event
                    </p>
                  </div>{" "}
                </button>}
                  content={() => componentRef.current} />
          
              <div style={{display:'none'}}>
                <PrintQR ref={componentRef} event={event}/>
              </div>
      
              
 
          </div>
          <div className="text-center rounded bg-black  border p-5 text-center shadow-xl   rounded-xl grid justify-center content-center">
            
              <a id="myBtn" href={`/oef/events/${event.id}/participant-survey/survey`} target="_blank" >
                <div className="">
                  <div className="flex justify-center items-center ">
                    {/* <img
                      src="/events/go_survey_icon.svg"
                      alt=""
                      width={85}
                    /> */}
                  </div>
                  <p className="text-white uppercase">
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
