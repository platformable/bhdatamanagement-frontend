import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../../../../components/Layout";
import PageTopHeading from "../../../../../components/PageTopHeading";
import TopEventsInfo from "../../../../../components/TopEventsInfo";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MainRoles from '../../../../../components/oef-cbt-post-event-survey/MainRoles'
import ProgramLeaders from '../../../../../components/oef-cbt-post-event-survey/ProgramLeaders'
import TotalAttendes from '../../../../../components/oef-cbt-post-event-survey/TotalAttendes'
import EventOrganization from '../../../../../components/oef-cbt-post-event-survey/EventOrganization'
import EventWorkedBest from '../../../../../components/oef-cbt-post-event-survey/EventWorkedBest'
import EventImprove from '../../../../../components/oef-cbt-post-event-survey/EventImprove'
import Engaged from '../../../../../components/oef-cbt-post-event-survey/Engaged'
import TopicFollowUp from '../../../../../components/oef-cbt-post-event-survey/TopicFollowUp'
import LeastEngaged from '../../../../../components/oef-cbt-post-event-survey/LeastEngaged'
import ImproveEngagement from '../../../../../components/oef-cbt-post-event-survey/ImproveEngagement'
import EventChallenges from '../../../../../components/oef-cbt-post-event-survey/EventChallenges'
import EventQuestions from '../../../../../components/oef-cbt-post-event-survey/EventQuestions'
import OrganizerFeedback from '../../../../../components/oef-cbt-post-event-survey/OrganizerFeedback'
import DropboxDocumentUpload from "../../../../../components/oef-post-event-survey/DropboxDocumentUpload";
import ResponseStatusModal from "../../../../../components/ResponseStatusModal";



const PostEventReport = ({ event }) => {
  const { user, error, isLoading } = useUser();
  const [showDemographicsSection, setShowDemographicsSection] = useState(true);
  const [showResponseStatus, setShowResponseStatus] = useState(false);
  const [responseStatus, setResponseStatus] = useState({});
  const [showStatusUpload, setShowStatusUpload] = useState(false);
  const [msgStatusUpload, setMsgStatusUpload] = useState({})
  const loggedUsername = user && user["https://lanuevatest.herokuapp.com/name"];
  const loggedUserLastname = user && user["https://lanuevatest.herokuapp.com/lastname"];
console.log(event)
  const [eventForm, setEventForm] = useState({
    eventID:event?.id,
    programid:1,
programname:"OEF",
participantRegistrationForm:false,
eventStartedOnTime:false,
eventFinishedOnTime:false,
participantGreeted:false,
resourcesAvailable:false,
photoRelease:false,
handSanitizerAvailable:false,
reminderSafeSpace:false,
reminderPostEvaluationSurvey:false,
eventChecklistOther:false,
totalAttendees:"",
eventChallenges:"",
eventQuestions:"",
surveyname:"bh-cbt-post-event",
eventOrganization:"",
eventWorkedBest:"",
eventImprove:"",
eventDelivery:"",
eventResponsive:"",
engaged:"",
topicsFollowup:"",
leastEngaged:"",
improveEngagement:"",
organizerFeedback:"",
mainRoles:[],
mainRolesOther:"",
eventChecklistOtherText:""
    
  });
  const userId = user && user.sub;

  const router = useRouter();

  const isNumberKey = (e) => {
    const invalidChars = ["-", "+", "e"];
    if (invalidChars.includes(e.key)) {
      e.preventDefault();
    }
  };

  const notifyMessage = () => {
    toast.success("Survey saved!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const FileUploadedMessage = (fileName) => {
    // toast.success("File saved to dropbox", {
    //   position: toast.POSITION.TOP_CENTER,
    // });
    setMsgStatusUpload({statusMessage: 'Upload has been successful'})
    setShowStatusUpload(true)
  };

  const submitPostEventForm = async () => {
    const isEmpty = Object.values(eventForm).some((value) => !value);
    setResponseStatus({
      success: true,
      statusMessage:
        "Please wait while your event information is being processed",
    });
    setShowResponseStatus(true);
    // if (!isEmpty) {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/post_event_report/oef/cbt/create`,
        eventForm
      )
      .then((response) => {
        if (response.data.statusText === "OK") {
          notifyMessage();
          console.log(response)
           setTimeout(() => {
            router.push(`/oef/cbt`);
          }, 1500); 
        }
      })
      .catch(function (error) {
        console.error("error: ", error);
      });
  };

  console.log("eventForm", eventForm);
  return (
    <>
      <Layout showStatusHeader={true}>
        <ToastContainer autoClose={1500} />
        <PageTopHeading
          backBtn={true}
          dashboardBtn={true}
          pageTitle={"CBT Post-event survey"}
        />
        <div className="container mx-auto md:px-0 px-5 items-center">
          <TopEventsInfo event={event} editPath={`/oef/cbt/${event?.eventid || event?.id}/events/edit`}/>

          <div className="mt-10 border-black bg-white rounded-lg p-1 mb-10 pb-10 shadow-lg">
           
        <MainRoles eventForm={eventForm} setEventForm={setEventForm}/>
        <ProgramLeaders eventForm={eventForm} setEventForm={setEventForm} />
        <TotalAttendes eventForm={eventForm} setEventForm={setEventForm} isNumberKey={isNumberKey} />
        <EventOrganization eventForm={eventForm} setEventForm={setEventForm} title={'How satisfied were you with how the event was organized?'} state='eventOrganization'/>
        <EventWorkedBest eventForm={eventForm} setEventForm={setEventForm} />
        <EventImprove eventForm={eventForm} setEventForm={setEventForm} />
        <EventOrganization eventForm={eventForm} setEventForm={setEventForm} title={'How satisfied were you with how the event was facilitated / delivered?'} state='eventDelivery'/>
        <EventOrganization eventForm={eventForm} setEventForm={setEventForm} title={'How responsive and engaged do you think participants were?'} state='eventResponsive'/>
        <Engaged eventForm={eventForm} setEventForm={setEventForm} />
        <TopicFollowUp eventForm={eventForm} setEventForm={setEventForm} />
        <LeastEngaged eventForm={eventForm} setEventForm={setEventForm} />
        <ImproveEngagement eventForm={eventForm} setEventForm={setEventForm} />
        <EventChallenges eventForm={eventForm} setEventForm={setEventForm} />
        <EventQuestions eventForm={eventForm} setEventForm={setEventForm} />
        <OrganizerFeedback eventForm={eventForm} setEventForm={setEventForm} />
        <DropboxDocumentUpload path={`${event?.folderpath}/Documents`} title="Please upload the meeting agenda or other supporting documents" FileUploadedMessage={FileUploadedMessage} forValue='1'/>
        <DropboxDocumentUpload path={`${event?.folderpath}/Images`} title="Please upload any additional pictures or files" FileUploadedMessage={FileUploadedMessage} forValue='2'/>

            
          </div>
          <div className="flex justify-center my-10">
            <button
              className="py-2 px-5 flex items-center rounded bg-black text-white font-semibold"
              onClick={submitPostEventForm}
            >
              Save and finish
            </button>
          </div>
        </div>
      </Layout>
      {showStatusUpload && <ResponseStatusModal responseStatus={msgStatusUpload} setShowResponseStatus={setShowStatusUpload}/>}
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


export const getServerSideProps = async(ctx) => {
    const { id } = ctx.params;
    const [data] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/events/${id}`).then((r) =>
        r.json()
      ),
    ]);
    return {
      props: {
        event: data[0],
      },
    };
}
