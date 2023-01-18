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
import EventDelivery from '../../../../../components/oef-cbt-post-event-survey/EventDelivery'
import EventResponsive from '../../../../../components/oef-cbt-post-event-survey/EventResponsive'
import Engaged from '../../../../../components/oef-cbt-post-event-survey/Engaged'
import TopicFollowUp from '../../../../../components/oef-cbt-post-event-survey/TopicFollowUp'
import LeastEngaged from '../../../../../components/oef-cbt-post-event-survey/LeastEngaged'
import ImproveEngagement from '../../../../../components/oef-cbt-post-event-survey/ImproveEngagement'
import EventChallenges from '../../../../../components/oef-cbt-post-event-survey/EventChallenges'
import EventQuestions from '../../../../../components/oef-cbt-post-event-survey/EventQuestions'
import OrganizerFeedback from '../../../../../components/oef-cbt-post-event-survey/OrganizerFeedback'
import DropboxDocumentUpload from "../../../../../components/oef-post-event-survey/DropboxDocumentUpload";




const PostEventReport = ({ event, fbos }) => {
  const { user, error, isLoading } = useUser();
  const [showDemographicsSection, setShowDemographicsSection] = useState(true);
  const [showStatusUpload, setShowStatusUpload] = useState(false);
  const [msgStatusUpload, setMsgStatusUpload] = useState({})
  const loggedUsername = user && user["https://lanuevatest.herokuapp.com/name"];
  const loggedUserLastname = user && user["https://lanuevatest.herokuapp.com/lastname"];
console.log(event)
  const [eventForm, setEventForm] = useState({
    programid:"",
programname:"",
participantRegistrationForm:"",
eventStartedOnTime:"",
eventFinishedOnTime:"",
participantGreeted:"",
resourcesAvailable:"",
photoRelease:"",
handSanitizerAvailable:"",
reminderSafeSpace:"",
reminderPostEvaluationSurvey:"",
eventChecklistOther:"",
totalAttendees:"",
eventChallenges:"",
eventQuestions:"",
surveyname:"",
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
    setMsgStatusUpload({statusMessage: 'File saved to Dropbox'})
    setShowStatusUpload(true)
  };

  const submitPostEventForm = async () => {
    const isEmpty = Object.values(eventForm).some((value) => !value);

    // if (!isEmpty) {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/post_event_report/oef/create`,
        eventForm
      )
      .then((response) => {
        if (response.data.statusText === "OK") {
          notifyMessage();
          console.log(response)
          setTimeout(() => {
            router.push(`/oef/events/${eventForm.eventID}/success`);
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
          <TopEventsInfo event={event} />

          <div className="post-envent-form-container mt-10 border-black grid bg-white rounded-lg p-1 mb-10 pb-10 shadow-lg">
           
        <MainRoles eventForm={eventForm} setEventForm={setEventForm} s/>
        <ProgramLeaders eventForm={eventForm} setEventForm={setEventForm} />
        <TotalAttendes eventForm={eventForm} setEventForm={setEventForm} />
        <EventOrganization eventForm={eventForm} setEventForm={setEventForm} />
        <EventWorkedBest eventForm={eventForm} setEventForm={setEventForm} />
        <EventImprove eventForm={eventForm} setEventForm={setEventForm} />
        <EventDelivery eventForm={eventForm} setEventForm={setEventForm} />
        <EventResponsive eventForm={eventForm} setEventForm={setEventForm} />
        <Engaged eventForm={eventForm} setEventForm={setEventForm} />
        <TopicFollowUp eventForm={eventForm} setEventForm={setEventForm} />
        <LeastEngaged eventForm={eventForm} setEventForm={setEventForm} />
        <ImproveEngagement eventForm={eventForm} setEventForm={setEventForm} />
        <EventChallenges eventForm={eventForm} setEventForm={setEventForm} />
        <EventQuestions eventForm={eventForm} setEventForm={setEventForm} />
        <OrganizerFeedback eventForm={eventForm} setEventForm={setEventForm} />
        <DropboxDocumentUpload path={`${event?.folderpath}/Documents`} title="Please upload the meeting agenda or other supporting documents" FileUploadedMessage={FileUploadedMessage}/>
        <DropboxDocumentUpload path={`${event?.folderpath}/Images`} title="Please upload any additional pictures or files" FileUploadedMessage={FileUploadedMessage}/>

            
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

    </>
  );
};

export default PostEventReport;


export const getServerSideProps = async(ctx) => {
    const { id } = ctx.params;
    const [data, fbos] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/events/${id}`).then((r) =>
        r.json()
      ),
      fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/fbos`).then((r) => r.json()),
    ]);
    return {
      props: {
        event: data[0],
        fbos: fbos,
      },
    };
}
