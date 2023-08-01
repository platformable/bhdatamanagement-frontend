import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../../../../components/Layout";
import PageTopHeading from "../../../../../components/PageTopHeading";
import TopEventsInfo from "../../../../../components/TopEventsInfo";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Loader from "../../../../../components/Loader";
import WhichCluster from "../../../../../components/oef-cab-post-event-survey/WhichCluster";
import ClusterFbos from "../../../../../components/oef-cab-post-event-survey/ClusterFbos";
import TotalAttendees from "../../../../../components/oef-cab-post-event-survey/TotalAttendees";
import EventQuestions from "../../../../../components/oef-cab-post-event-survey/EventQuestions";
import EventHighlights from "../../../../../components/oef-cab-post-event-survey/EventHighlights";
import DocumentUploadDropbox from "../../../../../components/oef-cab-post-event-survey/DropboxDocumentUpload";
import ResponseStatusModal from "../../../../../components/ResponseStatusModal";
import Status from "../../../../../components/oef-post-event-survey/Status";
import Notes from "../../../../../components/oef-post-event-survey/Notes";
import ReactToPrint from "react-to-print";
import { useReactToPrint } from "react-to-print";
import CabRegisterPrint from "../../../../../components/oef-cab-event-registration/CabRegisterPrint";

const EditCabPostEventSurvey = ({ event, fbos }) => {
  let componentRef = useRef();

  const { user, error, isLoading } = useUser();
  // const [showDemographicsSection, setShowDemographicsSection] = useState(true);
  const [showStatusUpload, setShowStatusUpload] = useState(false);
  const [msgStatusUpload, setMsgStatusUpload] = useState({});
  const [showResponseStatus, setShowResponseStatus] = useState(false);
  const [responseStatus, setResponseStatus] = useState({});
  const [loading, setLoading] = useState(false);

  const loggedUsername = user && user["https://lanuevatest.herokuapp.com/name"];
  const loggedUserLastname =
    user && user["https://lanuevatest.herokuapp.com/lastname"];

  const [submissionForm, setSubmissionForm] = useState({
    id: Number(event?.eventid),
    submissionNotes: event?.submissionnotes || "",
    submissionStatus: event?.submissionstatus || "",
  });

  console.log("evento", event);
  const [eventForm, setEventForm] = useState({
    id: event?.id,
    cluster: event?.cluster || "",
    clusterFbos: event?.clusterfbos || [],
    eventQuestions: event?.eventquestions || "",
    eventHighlights: event?.eventhighlights || "",
    totalAttendees: event?.totalattendees || 0,
    programName: "OEF",
    eventName: event?.eventname,
  });
  // const userId = user && user.sub;

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
    setMsgStatusUpload({ statusMessage: "Upload has been successful" });
    setShowStatusUpload(true);
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `AIRS_NYS_CMP_${event.eventname}_${new Date(
      event.eventdate
    ).toLocaleDateString("en-US", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    })}`,
  });

  const submitPostEventForm = async () => {
    // const isEmpty = Object.values(eventForm).some((value) => !value);

    setLoading(true);
    setResponseStatus({ success: true, statusMessage: "Please wait while your event information is being processed"})
    setShowResponseStatus(true)
    // if (!isEmpty) {
    axios
      .put(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/post_event_report/oef/cab/post-event/update`,
        eventForm
      )
      .then((response) => {
        if (response.data.statusText === "OK") {
          notifyMessage();
          submitSubmissionForm();
        }
      })
      .catch(function (error) {
        setLoading(false);
        setResponseStatus({ success: true, statusMessage: "An error ocurred, try again"})
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

          setTimeout(() => {
            router.push(`/oef/cab`);
          }, 1500);
        }
      })
      .catch(function (error) {
        setLoading(false);
        setResponseStatus({ success: true, statusMessage: "An error ocurred, try again"})
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
          <TopEventsInfo
            event={event}
            editPath={`/oef/cab/${event?.eventid || event?.id}/edit`}
          />

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

            <DocumentUploadDropbox
              FileUploadedMessage={FileUploadedMessage}
              path={`/data governance app/events/oef cab`}
              title="Please attach the CAB agenda"
            />
            <Status
              submissionForm={submissionForm}
              setSubmissionForm={setSubmissionForm}
            />
            <div className="container mx-auto mt-10 flex justify-center gap-x-5">
            <a
              href={event.folderurl}
              className="rounded-md bg-black px-5 py-1 text-white text-lg"
              target="_blank"
            >
              Event Dropbox Folders
            </a>
            <ReactToPrint
              trigger={() => (
                <button className="bg-yellow-500 hover:bg-yellow-300 px-24 py-1 rounded  inline-block ">
                  Print
                </button>
              )}
              documentTitle={`${new Date(event?.eventdate).toLocaleDateString('en-US',{year:'numeric',month:'numeric',day:'numeric'})}_${event.cluster}_CAB_${new Date().toLocaleDateString('en-US',{year:'numeric',month:'numeric',day:'numeric'})}`}
              content={() => componentRef.current}
            />
          </div>
            <Notes
              submissionForm={submissionForm}
              setSubmissionForm={setSubmissionForm}
            />
          </div>
          <div className="flex justify-center">{loading && <Loader />}</div>
          <div className="flex justify-center my-10">
          {loading? null: <button
              className="py-2 px-5 flex items-center rounded bg-black text-white font-semibold"
              onClick={submitPostEventForm}
            >
              Save and finish
            </button>
            }
          </div>
        </div>
      </Layout>
      {showResponseStatus && (
        <ResponseStatusModal
          setShowResponseStatus={setShowResponseStatus}
          responseStatus={responseStatus}
        />
      )}
      {showStatusUpload && (
        <ResponseStatusModal
          responseStatus={msgStatusUpload}
          setShowResponseStatus={setShowStatusUpload}
        />
      )}
      <div style={{ display: "none" }}>
        <CabRegisterPrint ref={componentRef} event={event} />
      </div>
    </>
  );
};

export default EditCabPostEventSurvey;

export const getServerSideProps = async (ctx) => {
  const { id } = ctx.params;
  const [data, fbos] = await Promise.all([
    fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/post_event_report/oef/event/${id}`
    ).then((r) => r.json()),
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/fbos`).then((r) => r.json()),
  ]);
  return {
    props: {
      event: data,
      fbos: fbos,
    },
  };
};
