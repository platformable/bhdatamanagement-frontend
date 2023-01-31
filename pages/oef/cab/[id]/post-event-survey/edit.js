import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../../../../components/Layout";
import PageTopHeading from "../../../../../components/PageTopHeading";
import TopEventsInfo from "../../../../../components/TopEventsInfo";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import WhichCluster from "../../../../../components/oef-cab-post-event-survey/WhichCluster";
import ClusterFbos from "../../../../../components/oef-cab-post-event-survey/ClusterFbos";
import TotalAttendees from "../../../../../components/oef-cab-post-event-survey/TotalAttendees";
import EventQuestions from "../../../../../components/oef-cab-post-event-survey/EventQuestions";
import EventHighlights from "../../../../../components/oef-cab-post-event-survey/EventHighlights";
import DocumentUploadDropbox from "../../../../../components/oef-cab-post-event-survey/DropboxDocumentUpload";
import ResponseStatusModal from "../../../../../components/ResponseStatusModal";
import Status from "../../../../../components/oef-post-event-survey/Status";
import Notes from "../../../../../components/oef-post-event-survey/Notes";

const EditCabPostEventSurvey = ({ event, fbos }) => {
  const { user, error, isLoading } = useUser();
  const [showDemographicsSection, setShowDemographicsSection] = useState(true);
  const [showStatusUpload, setShowStatusUpload] = useState(false);
  const [msgStatusUpload, setMsgStatusUpload] = useState({})
  const loggedUsername = user && user["https://lanuevatest.herokuapp.com/name"];
  const loggedUserLastname = user && user["https://lanuevatest.herokuapp.com/lastname"];

  const [submissionForm, setSubmissionForm] = useState({
    id: Number(event?.eventid),
    submissionNotes: event?.submissionnotes || "",
    submissionStatus: event?.submissionstatus || "",
  });

console.log("evento",event)
  const [eventForm, setEventForm] = useState({
    id: event?.id,
    cluster: event?.cluster || "",
    clusterFbos: event?.clusterfbos || [],
    eventQuestions: event?.eventquestions || "",
    eventHighlights: event?.eventhighlights || "",
    totalAttendees: event?.totalattendees || 0,
    programName: 'OEF',
    eventName: event?.eventname,
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
    toast.success("OEF CAB Post Event Report updated", {
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

    // if (!isEmpty) {
    axios
      .put(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/post_event_report/oef/cab/post-event/update`,
        eventForm
      )
      .then((response) => {
        if (response.data.statusText === "OK") {
          notifyMessage();
          console.log(response)
          submitSubmissionForm()

        }
      })
      .catch(function (error) {
        console.error("error: ", error);
      });
  };

  const submitSubmissionForm = async () => {
    axios
      .put(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/events/oef/update_from_event_output`,
        submissionForm
      )
      .then((response) => {
        if (response.data.statusText === "OK") {
          console.log(response);
          
          setTimeout(() => {
            router.push(`/oef/cab`);
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
          pageTitle={"Post-event survey"}
        />
        <div className="container mx-auto md:px-0 px-5 items-center">
          <TopEventsInfo event={event} editPath={`/oef/cab/${event?.eventid || event?.id}/edit`}/>

          <div className="post-envent-form-container mt-10 border-black grid bg-white rounded-lg p-1 mb-10 pb-10 shadow-lg">
            {/* <div className="rounded-tl-md rounded-tr-md"> */}

            <WhichCluster
              eventForm={eventForm}
              setEventForm={setEventForm}
              isNumberKey={isNumberKey}
            />

            {eventForm.cluster !== "" && (
                <ClusterFbos
                  eventForm={eventForm}
                  setEventForm={setEventForm}
                  isNumberKey={isNumberKey}
                  fbos={fbos}
                  selectedCluster={eventForm.cluster}
                />
              )}

           
            <TotalAttendees
              eventForm={eventForm}
              setEventForm={setEventForm}
              isNumberKey={isNumberKey}
            />
            
            <EventQuestions
              eventForm={eventForm}
              setEventForm={setEventForm}
              isNumberKey={isNumberKey}
            />
            <EventHighlights
              eventForm={eventForm}
              setEventForm={setEventForm}
              isNumberKey={isNumberKey}
            />
           
            <DocumentUploadDropbox FileUploadedMessage={FileUploadedMessage} path={`/data governance app/events/oef cab`}  title="Please attach the CAB agenda" />
            <Status
              submissionForm={submissionForm}
              setSubmissionForm={setSubmissionForm}
            />
            <Notes
              submissionForm={submissionForm}
              setSubmissionForm={setSubmissionForm}
            />

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

export default EditCabPostEventSurvey;


export const getServerSideProps = async(ctx) => {
    const { id } = ctx.params;
    const [data, fbos] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/post_event_report/oef/event/${id}`).then((r) =>
        r.json()
      ),
      fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/fbos`).then((r) => r.json()),
    ]);
    return {
      props: {
        event: data,
        fbos: fbos,
      },
    };
}
