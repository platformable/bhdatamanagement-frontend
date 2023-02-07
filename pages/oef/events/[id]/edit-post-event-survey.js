import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../../../components/Layout";
import PageTopHeading from "../../../../components/PageTopHeading";
import TopEventsInfo from "../../../../components/TopEventsInfo";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../../../components/Loader";

import PostEventReportSection23 from "../../../../components/post-event-report/PostEventReportSection23";
import PostEventReportSection25 from "../../../../components/post-event-report/PostEventReportSection25";
import TestingDone from "../../../../components/oef-post-event-survey/TestingDone";
import TypesOfTesting from "../../../../components/oef-post-event-survey/TypesOfTesting";
import TestingDocuments from "../../../../components/oef-post-event-survey/TestingDocuments";

import Cluster from "../../../../components/oef-post-event-survey/Cluster";
import WhichCluster from "../../../../components/oef-post-event-survey/WhichCluster";
import ClusterFbos from "../../../../components/oef-post-event-survey/ClusterFbos";
import NameGuestSpeakers from "../../../../components/oef-post-event-survey/NameGuestSpeakers";
import PartnerOrganization from "../../../../components/oef-post-event-survey/PartnerOrganization";
import PartnerOrganization2 from "../../../../components/oef-post-event-survey/PartnerOrganization2";
import NationalAwarenessDay from "../../../../components/oef-post-event-survey/NationalAwarenessDay";
import TargetAudience from "../../../../components/oef-post-event-survey/TargetAudience";
import TotalAttendees from "../../../../components/oef-post-event-survey/TotalAttendees";
import ResourcesDistributed from "../../../../components/oef-post-event-survey/ResourcesDistributed";
import TotalTalkedHivPrepSaferSex from "../../../../components/oef-post-event-survey/TotalTalkedHivPrepSaferSex";
import EventQuestions from "../../../../components/oef-post-event-survey/EventQuestions";
import EventHighlights from "../../../../components/oef-post-event-survey/EventHighlights";
import EventChallenges from "../../../../components/oef-post-event-survey/EventChallenges";
import CapacityTraining from "../../../../components/oef-post-event-survey/CapacityTrainingUseful";
import LessonLearned from "../../../../components/oef-post-event-survey/LessonLearned";
import DocumentUploadDropbox from "../../../../components/oef-post-event-survey/DropboxDocumentUpload";
import PictureUploadDropbox from "../../../../components/oef-post-event-survey/PictureUploadDropbox";
import OtherTesting from "../../../../components/oef-post-event-survey/OtherTesting";
import Status from "../../../../components/oef-post-event-survey/Status";
import Notes from "../../../../components/oef-post-event-survey/Notes";
import ResponseStatusModal from "../../../../components/ResponseStatusModal";
import TextArea from "../../../../components/oef-post-event-survey/TextArea";
import RadioList from "../../../../components/oef-post-event-survey/RadioList";

const PostEventReport = ({ event, fbos, user }) => {
  console.log("data", event);
   

  const [showDemographicsSection, setShowDemographicsSection] = useState(false);
  const [showStatusUpload, setShowStatusUpload] = useState(false);
  const [msgStatusUpload, setMsgStatusUpload] = useState({});
  const loggedUserRole =
    user && user["https://lanuevatest.herokuapp.com/roles"];

  // const loggedUserLastname =
  //   user && user["https://lanuevatest.herokuapp.com/lastname"];

  const isEditable =
    loggedUserRole === "Supervisor" ||
    loggedUserRole === "Data Team" ||
    new Date().toLocaleDateString() ===
      new Date(event?.eventdatecreated).toLocaleDateString();

  const [submissionForm, setSubmissionForm] = useState({
    oefEventEmail: event?.oefeventemail,
    id: Number(event?.eventid),
    submissionNotes: event?.submissionnotes || "",
    submissionStatus: event?.submissionstatus || "",
    onelineDescription: event?.onelinedescription || "",
    oefEventPresentationTopic: event?.oefeventpresentationtopic || "",
  });
  const [eventForm, setEventForm] = useState({
    isClusterEvent: event?.isclusterevent || "",
    cluster: event?.cluster || "",
    clusterFbos: event?.clusterfbos || [],
    partnerOrganization1: event?.partnerorganization1 || "",
    partnerOrganization1Other: event?.partnerorganization1other || "",
    partnerOrganization2: event?.partnerorganization2 || "",
    nationalAwarenessDay: event?.nationalawarenessday || "",
    targetAudience: event?.targetaudience || [],
    targetAudienceOther: event?.targetaudienceother || "",
    totalTalkedHivPrepSaferSex: event?.totaltalkedhivprepsafersex || 0,
    eventQuestions: event?.eventquestions || "",
    eventHighlights: event?.eventhighlights || "",
    capacityTrainingUseful: event?.capacitytraininguseful || "",
    lessonsLearned: event?.lessonslearned || "",
    nationalAwarenessDayOther: event?.nationalawarenessdayother || "",
    id: Number(event?.id),
    eventID: Number(event?.eventid),
    eventDateCreated: new Date(),
    programID: event?.programid,
    programName: "OEF",
    eventName: event?.eventname,
    eventDate: event && new Date(event?.eventdate),
    eventStartTime: event?.eventstarttime,
    eventFinishTime: event?.eventfinishtime,
    eventTypeName: event?.eventtypename || "",
    zipCode: event?.eventzipcode || 0,
    masks: event?.masks || 0,
    covidLiterature: event?.covidliterature || 0,
    vaccineRelatedLiterature: event?.vaccinerelatedliterature || 0,
    hivLiterature: event?.hivliterature || 0,
    hepCLiterature: event?.hepcliterature || 0,
    prepLiterature: event?.prepliterature || 0,
    saferSexKits: event?.safersexkits || 0,
    healthDisparitiesLiterature: event?.healthdisparitiesliterature || 0,
    bagsBoxesFood: event?.bagsboxesfood || 0,
    handSanitizers: event?.handsanitizers || 0,
    covidVaccineSiteReferralDetails: event?.covidvaccinesitereferraldetails || 0,
    totalAttendees: event?.totalattendees || 0,
    eventChallenges: event?.eventchallenges || "",
    eventTestingDone: event?.eventtestingdone || false,
    hivTesting: event?.hivtesting || false,
    hepCTesting: event?.hepctesting || false,
    covidTesting: event?.covidtesting || false,
    otherTesting: event?.othertesting || false,
    hivTestingAgency: event?.hivtestingagency || "",
    hivTestedTotal: event?.hivtestedtotal || 0,
    hivReactiveResults: event?.hivreactiveresults || 0,
    prepReferrals: event?.prepreferrals || 0,
    hivLinkedToCare: event?.hivlinkedtocare || 0,
    hivServicesReferredTo: event?.hivservicesreferredto || "",
    hivFemale: event?.hivfemale || 0,
    hivMale: event?.hivmale || 0,
    hivTransgenderFemale: event?.hivtransgenderfemale || 0,
    hivTransgenderMale: event?.hivtransgendermale || 0,
    hivGenderNonConforming: event?.hivgendernonconforming || 0,
    hivNonBinary: event?.hivnonbinary || 0,
    hivOtherGenderIdentity: event?.hivothergenderidentity || 0,
    hivGenderDeclinedToAnswer: event?.hivgenderdeclinedtoanswer || 0,
    hivUnder15: event?.hivunder15 || 0,
    hiv16_19: event?.hiv16_19 || 0,
    hiv20_24: event?.hiv20_24 || 0,
    hiv25_29: event?.hiv25_29 || 0,
    hiv30_34: event?.hiv30_34 || 0,
    hiv35_39: event?.hiv35_39 || 0,
    hiv40_44: event?.hiv40_44 || 0,
    hiv45_49: event?.hiv45_49 || 0,
    hiv50_54: event?.hiv50_54 || 0,
    hiv55_59: event?.hiv55_59 || 0,
    hiv60_64: event?.hiv60_64 || 0,
    hiv65_69: event?.hiv65_69 || 0,
    hiv70: event?.hiv70 || 0,
    hivAgeDeclinedToAnswer: event?.hivagedeclinedtoanswer || 0,
    hivBlackOrAfricanAmerican: event?.hivblackorafricanamerican || 0,
    hivHispanic: event?.hivhispanic || 0,
    hivAsian: event?.hivasian || 0,
    hivAmericanIndianOrAlaskaNative:
      event?.hivamericanindianoralaskanative || 0,
    hivMiddleEasternOrNorthAfrican: event?.hivmiddleeasternornorthafrican || 0,
    hivNativeHawaiianOrOtherPacificIslander:
      event?.hivnativehawaiianorotherpacificislander || 0,
    hivWhite: event?.hivwhite || 0,
    hivSomeOtherRace: event?.hivsomeotherrace || 0,
    hivRaceDeclinedToAnswer: event?.hivracedeclinedtoanswer || 0,
    hivNotHispanic: event?.hivnothispanic || 0,
    hivMexicanMexicanAmericanOrChicano:
      event?.hivmexicanmexicanamericanorchicano || 0,
    hivPuertoRican: event?.hivpuertorican || 0,
    hivCuban: event?.hivcuban || 0,
    hivDominican: event?.hivdominican || 0,
    hivEcuadorian: event?.hivecuadorian || 0,
    hivOtherHispanic: event?.hivotherhispanic || 0,
    hivEthnicityDeclinedToAnswer: event?.hivethnicitydeclinedtoanswer || 0,
    hivGayOrLesbian: event?.hivgayorlesbian || 0,
    hivStraightOrHeterosexual: event?.hivstraightorheterosexual || 0,
    hivBisexual: event?.hivbisexual || 0,
    hivQueer: event?.hivqueer || 0,
    hivQuestioningOrNotSure: event?.hivquestioningornotsure || 0,
    hivSexualOrientationUnknown: event?.hivsexualorientationunknown || 0,
    hivSexualOrientationDeclinedToAnswer:
      event?.hivsexualorientationdeclinedtoanswer || 0,
    hepCTestingAgency: event?.hepctestingagency || "",
    hepCTestedTotal: event?.hepctestedtotal || 0,
    hepCReactiveResults: event?.hepcreactiveresults || 0,
    hepCLinkedToCare: event?.hepclinkedtocare || 0,
    hepCServicesReferredTo: event?.hepcservicesreferredto || "",
    hepCFemale: event?.hepcfemale || 0,
    hepCMale: event?.hepcmale || 0,
    hepCTransgenderFemale: event?.hepctransgenderfemale || 0,
    hepCTransgenderMale: event?.hepctransgendermale || 0,
    hepCGenderNonConforming: event?.hepcgendernonconforming || 0,
    hepCNonBinary: event?.hepcnonbinary || 0,
    hepCOtherGenderIdentity: event?.hepcothergenderidentity || 0,
    hepCGenderDeclinedToAnswer: event?.hepcgenderdeclinedtoanswer || 0,
    hepCUnder15: event?.hepcunder15 || 0,
    hepC16_19: event?.hepc16_19 || 0,
    hepC20_24: event?.hepc20_24 || 0,
    hepC25_29: event?.hepc25_29 || 0,
    hepC30_34: event?.hepc30_34 || 0,
    hepC35_39: event?.hepc35_39 || 0,
    hepC40_44: event?.hepc40_44 || 0,
    hepC45_49: event?.hepc45_49 || 0,
    hepC50_54: event?.hepc50_54 || 0,
    hepC55_59: event?.hepc55_59 || 0,
    hepC60_64: event?.hepc60_64 || 0,
    hepC65_69: event?.hepc65_69 || 0,
    hepC70: event?.hepc70 || 0,
    hepCAgeDeclinedToAnswer: event?.hepcagedeclinedtoanswer || 0,
    hepCBlackOrAfricanAmerican: event?.hepcblackorafricanamerican || 0,
    hepCHispanic: event?.hepchispanic || 0,
    hepCAsian: event?.hepcasian || 0,
    hepCAmericanIndianOrAlaskaNative:
      event?.hepcamericanindianoralaskanative || 0,
    hepCMiddleEasternOrNorthAfrican:
      event?.hepcmiddleeasternornorthafrican || 0,
    hepCNativeHawaiianOrOtherPacificIslander:
      event?.hepcnativehawaiianorotherpacificislander || 0,
    hepCWhite: event?.hepcwhite || 0,
    hepCSomeOtherRace: event?.hepcsomeotherrace || 0,
    hepCRaceDeclinedToAnswer: event?.hepcracedeclinedtoanswer || 0,
    hepCNotHispanic: event?.hepcnothispanic || 0,
    hepCMexicanMexicanAmericanOrChicano:
      event?.hepcmexicanmexicanamericanorchicano || 0,
    hepCPuertoRican: event?.hepcpuertorican || 0,
    hepCCuban: event?.hepccuban || 0,
    hepCDominican: event?.hepcdominican || 0,
    hepCEcuadorian: event?.hepcecuadorian || 0,
    hepCOtherHispanic: event?.hepcotherhispanic || 0,
    hepCEthnicityDeclinedToAnswer: event?.hepcethnicitydeclinedtoanswer || 0,
    hepCGayOrLesbian: event?.hepcgayorlesbian || 0,
    hepCStraightOrHeterosexual: event?.hepcstraightorheterosexual || 0,
    hepCBisexual: event?.hepcbisexual || 0,
    hepCQueer: event?.hepcqueer || 0,
    hepCQuestioningOrNotSure: event?.hepcquestioningornotsure || 0,
    hepCSexualOrientationUnknown: event?.hepcsexualorientationunknown || 0,
    hepCSexualOrientationDeclinedToAnswer:
      event?.hepcsexualorientationdeclinedtoanswer || 0,
    otherTestingType: event?.othertestingtype || "",
    otherTestedTotal: event?.othertestedtotal || 0,
    hivGenderNotSureQuestioning: event?.hivgendernotsurequestioning || 0,
    altAgeHivUnder13: event?.altagehivunder13 || 0,
    altAgeHiv13_18: event?.altagehiv13_18 || 0,
    altAgeHiv19_24: event?.altagehiv19_24 || 0,
    hivMoreThanOneRace: event?.hivmorethanonerace || 0,
    hepCGenderNotSureQuestioning: event?.hepcgendernotsurequestioning || 0,
    altAgeHepCUnder13: event?.altagehepcunder13 || 0,
    altAgeHepC13_18: event?.altagehepc13_18 || 0,
    altAgeHepC19_24: event?.altagehepc19_24 || 0,
    hepCMoreThanOneRace: event?.hepcmorethanonerace || 0,
    datePostEventSurvey: event?.dateposteventsurvey || new Date(),
    guestSpeakers: event?.guestspeakers || "",
    nameGuestSpeakers: event?.nameguestspeakers || "",
    
  });
  const userId = user && user.sub;
  console.log("eventForm", eventForm);
  // console.log("event", submissionForm);

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
    setMsgStatusUpload({ statusMessage: "Upload has been successful" });
    setShowStatusUpload(true);
  };

  const submitPostEventForm = async () => {
    const isEmpty = Object.values(eventForm).some((value) => !value);

    // if (!isEmpty) {
    axios
      .put(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/post_event_report/oef/event/update`,
        eventForm
      )
      .then((response) => {
        if (response.data.statusText === "OK") {
          notifyMessage();
          submitSubmissionForm();
          router.push(`/oef/fbo`);
          console.log(response);
        }
      })
      .catch(function (error) {
        console.error("error: ", error);
      });
  };
  const submitSubmissionForm = async () => {
    // const isEmpty = Object.values(eventForm).some((value) => !value);

    // if (!isEmpty) {
    axios
      .put(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/events/oef/update_from_event_output`,
        submissionForm
      )
      .then((response) => {
        if (response.data.statusText === "OK") {
          console.log(response);
          setTimeout(() => {
            // router.push(
            //   router.asPath.replace("edit-post-event-survey", "success")
            // );
            router.push(`/oef/fbo`);
          }, 1500);
        }
      })
      .catch(function (error) {
        console.error("error: ", error);
      });
  };




  const [eventNotCompletedMessage, setEventNotCompletedMessage] =
    useState(false);

  useEffect(() => {
    if (event.statusText === "FAIL") {
      setEventNotCompletedMessage(!eventNotCompletedMessage);
      setTimeout(() => {
        router.push(`/oef/events/${event?.eventID}/post-event-survey`);
      }, 5000);
    }
  }, []);

  return (
    <>
      <Layout showStatusHeader={true}>
        <ToastContainer autoClose={1500} />
        <PageTopHeading
          backBtn={true}
          dashboardBtn={true}
          pageTitle={"Edit Post-event survey"}
        />

        {eventNotCompletedMessage ? (
          <div className="container mx-auto my-7">
            <h3 className="text-center bg-green-200 rounded-md">
              {event.message}
            </h3>
          </div>
        ) : null}
        <div
          className={`${
            !isEditable && "pointer-events-none"
          } container mx-auto md:px-0 px-5 items-center`}
        >
          <TopEventsInfo
            event={event}
            editPath={`/oef/events/${event?.eventid || event?.id}/edit`}
          />

          <div
            className={`post-envent-form-container mt-10 border-black grid bg-white rounded-lg p-1 mb-10 pb-10 shadow-lg ${
              eventNotCompletedMessage ? "hidden" : null
            }`}
          >
            {/* <div className="rounded-tl-md rounded-tr-md"> */}
            <Cluster
              eventForm={eventForm}
              setEventForm={setEventForm}
              isNumberKey={isNumberKey}
            />

            {eventForm.isClusterEvent === "Cluster Event" && (
              <WhichCluster
                eventForm={eventForm}
                setEventForm={setEventForm}
                isNumberKey={isNumberKey}
              />
            )}

            {eventForm.cluster !== "" &&
              eventForm.isClusterEvent === "Cluster Event" && (
                <ClusterFbos
                  eventForm={eventForm}
                  setEventForm={setEventForm}
                  isNumberKey={isNumberKey}
                  fbos={fbos}
                  selectedCluster={eventForm.cluster}
                />
              )}

            <NameGuestSpeakers
              eventForm={eventForm}
              setEventForm={setEventForm}
              isNumberKey={isNumberKey}
            />
            <PartnerOrganization
              eventForm={eventForm}
              setEventForm={setEventForm}
              isNumberKey={isNumberKey}
              fbos={fbos}
            />
            <PartnerOrganization2
              eventForm={eventForm}
              setEventForm={setEventForm}
              isNumberKey={isNumberKey}
            />
            <NationalAwarenessDay
              eventForm={eventForm}
              setEventForm={setEventForm}
              isNumberKey={isNumberKey}
            />
            <TargetAudience
              eventForm={eventForm}
              setEventForm={setEventForm}
              isNumberKey={isNumberKey}
            />
            <TotalAttendees
              eventForm={eventForm}
              setEventForm={setEventForm}
              isNumberKey={isNumberKey}
            />
            <ResourcesDistributed
              eventForm={eventForm}
              setEventForm={setEventForm}
              isNumberKey={isNumberKey}
            />
            <TotalTalkedHivPrepSaferSex
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
            <EventChallenges
              eventForm={eventForm}
              setEventForm={setEventForm}
              isNumberKey={isNumberKey}
            />
            <CapacityTraining
              eventForm={eventForm}
              setEventForm={setEventForm}
              isNumberKey={isNumberKey}
            />
            <LessonLearned
              eventForm={eventForm}
              setEventForm={setEventForm}
              isNumberKey={isNumberKey}
            />
            <DocumentUploadDropbox
              FileUploadedMessage={FileUploadedMessage}
              path={`${event?.folderpath}/Documents`}
              title="Upload supporting documentation - upload any flyers here"
            />
            <PictureUploadDropbox
              FileUploadedMessage={FileUploadedMessage}
              path={`${event?.folderpath}`}
              index="1"
              title="Upload an event picture here:"
            />

            <TestingDone eventForm={eventForm} setEventForm={setEventForm} />

            {eventForm.eventTestingDone && (
              <div className="flex flex-col gap-10">
                <TypesOfTesting
                  eventForm={eventForm}
                  setEventForm={setEventForm}
                />
                <button
                  disabled={
                    !eventForm.hivTesting &&
                    !eventForm.hepCTesting &&
                    !eventForm.otherTesting
                  }
                  className="bg-black text-white px-5 self-center py-2 rounded shadow-md"
                  onClick={() => setShowDemographicsSection((prev) => !prev)}
                >
                  Next
                </button>
              </div>
            )}

            {eventForm.hivTesting && showDemographicsSection && (
              <PostEventReportSection23
                eventForm={eventForm}
                setEventForm={setEventForm}
                isNumberKey={isNumberKey}
              >
                <TestingDocuments
                  FileUploadedMessage={FileUploadedMessage}
                  path={event?.folderpath}
                  testName={"HIV"}
                />
              </PostEventReportSection23>
            )}

            {eventForm?.hepCTesting && showDemographicsSection && (
              <PostEventReportSection25
                eventForm={eventForm}
                setEventForm={setEventForm}
                isNumberKey={isNumberKey}
              >
                <TestingDocuments
                  FileUploadedMessage={FileUploadedMessage}
                  path={event?.folderpath}
                  testName={"Hepatitis C"}
                />
              </PostEventReportSection25>
            )}

            {eventForm?.otherTesting && showDemographicsSection && (
              <>
                <OtherTesting
                  eventForm={eventForm}
                  setEventForm={setEventForm}
                  isNumberKey={isNumberKey}
                />
              </>
            )}
            <Status
              submissionForm={submissionForm}
              setSubmissionForm={setSubmissionForm}
            />
            <TextArea
              title="One line description of the event"
              stateValue="onelineDescription"
              surveyForm={submissionForm}
              setSurveyForm={setSubmissionForm}
            />
            <RadioList
              name="oefEventPresentationTopic"
              title="Type of Activity: Presentation Topic"
              surveyForm={submissionForm}
              setSurveyForm={setSubmissionForm}
            />
            <Notes
              submissionForm={submissionForm}
              setSubmissionForm={setSubmissionForm}
            />
          </div>
          {!eventNotCompletedMessage && (
            <div className="flex justify-center my-10">
              <button
                className="py-2 px-5 flex items-center rounded bg-black text-white font-semibold"
                onClick={submitPostEventForm}
              >
                Submit
              </button>
            </div>
          )}
        </div>
      </Layout>
      {showStatusUpload && (
        <ResponseStatusModal
          responseStatus={msgStatusUpload}
          setShowResponseStatus={setShowStatusUpload}
        />
      )}
    </>
  );
};

export default PostEventReport;

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
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
  },
});
