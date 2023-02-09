import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../../../components/Layout";
import PageTopHeading from "../../../../components/PageTopHeading";
import TopEventsInfo from "../../../../components/TopEventsInfo";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
import ResponseStatusModal from "../../../../components/ResponseStatusModal";

const PostEventReport = ({ event, fbos }) => {
  const { user, error, isLoading } = useUser();
  const [showDemographicsSection, setShowDemographicsSection] = useState(true);
  const [showStatusUpload, setShowStatusUpload] = useState(false);
  const [msgStatusUpload, setMsgStatusUpload] = useState({})
  const loggedUsername = user && user["https://lanuevatest.herokuapp.com/name"];
  const loggedUserLastname = user && user["https://lanuevatest.herokuapp.com/lastname"];
console.log(event)
  const [eventForm, setEventForm] = useState({
    isClusterEvent: "",
    cluster: "",
    clusterFbos: [],
    partnerOrganization1: "",
    partnerOrganization1Other: "",
    partnerOrganization2: "",
    nationalAwarenessDay: "",
    targetAudience: [],
    targetAudienceOther: "",
    totalTalkedHivPrepSaferSex: 0,
    eventQuestions: "",
    eventHighlights: "",
    capacityTrainingUseful: "",
    lessonsLearned: "",
    nationalAwarenessDayOther: "",
    eventID: Number(event?.id),
    eventDateCreated: new Date(),
    programID: event?.programid,
    programName: 'OEF',
    eventName: event?.eventname,
    eventDate: event && new Date(event.eventdate),
    eventStartTime: event?.eventstarttime,
    eventFinishTime: event?.eventfinishtime,
    // eventLocationTypeName: event?.eventlocationtypename,
    // healthAreaOfFocusName: event?.healthareaoffocusname.join(", "),
    eventTypeName: event?.eventtypename,
    zipCode: 0 || event?.eventzipcode,
    // locationAddress: "" || event?.locationaddress,
    // locationName: "" || event?.locationname,
    // locationNameOther: "" || event?.locationnameother,
    masks: 0,
    covidLiterature: 0,
    vaccineRelatedLiterature: 0,
    hivLiterature: 0,
    hepCLiterature: 0,
    prepLiterature: 0,
    saferSexKits: 0,
    healthDisparitiesLiterature: 0,
    bagsBoxesFood: 0,
    // posters: 0,
    // otherEventLeaflets: 0,
    // preparedMeals: 0,
    handSanitizers: 0,
    covidVaccineSiteReferralDetails: 0,
    // maleCondoms: 0,
    // femaleCondoms: 0,
    // lubricant: 0,
    // referralLists: 0,
    // promotionalMaterial: 0,
    // participantRegistrationForm: false,
    // eventStartedOnTime: false,
    // eventFinishedOnTime: false,
    // participantGreeted: false,
    // resourcesAvailable: false,
    // photoRelease: false,
    // handSanitizerAvailable: false,
    // reminderSafeSpace: false,
    // reminderPostEvaluationSurvey: false,
    totalAttendees: 0,
    eventChallenges: "",
    eventTestingDone: false,
    hivTesting: false,
    hepCTesting: false,
    covidTesting: false,
    otherTesting: false,
    hivTestingAgency: "",
    hivTestedTotal: 0,
    hivReactiveResults: 0,
    prepReferrals: 0,
    hivLinkedToCare: 0,
    hivServicesReferredTo: "",
    hivFemale: 0,
    hivMale: 0,
    hivTransgenderFemale: 0,
    hivTransgenderMale: 0,
    hivGenderNonConforming: 0,
    hivNonBinary: 0,
    hivOtherGenderIdentity: 0,
    hivGenderDeclinedToAnswer: 0,
    hivUnder15: 0,
    hiv16_19: 0,
    hiv20_24: 0,
    hiv25_29: 0,
    hiv30_34: 0,
    hiv35_39: 0,
    hiv40_44: 0,
    hiv45_49: 0,
    hiv50_54: 0,
    hiv55_59: 0,
    hiv60_64: 0,
    hiv65_69: 0,
    hiv70: 0,
    hivAgeDeclinedToAnswer: 0,
    hivBlackOrAfricanAmerican: 0,
    hivHispanic: 0,
    hivAsian: 0,
    hivAmericanIndianOrAlaskaNative: 0,
    hivMiddleEasternOrNorthAfrican: 0,
    hivNativeHawaiianOrOtherPacificIslander: 0,
    hivWhite: 0,
    hivSomeOtherRace: 0,
    hivRaceDeclinedToAnswer: 0,
    hivNotHispanic: 0,
    hivMexicanMexicanAmericanOrChicano: 0,
    hivPuertoRican: 0,
    hivCuban: 0,
    hivDominican: 0,
    hivEcuadorian: 0,
    hivOtherHispanic: 0,
    hivEthnicityDeclinedToAnswer: 0,
    hivGayOrLesbian: 0,
    hivStraightOrHeterosexual: 0,
    hivBisexual: 0,
    hivQueer: 0,
    hivQuestioningOrNotSure: 0,
    hivSexualOrientationUnknown: 0,
    hivSexualOrientationDeclinedToAnswer: 0,
    hepCTestingAgency: "",
    hepCTestedTotal: 0,
    hepCReactiveResults: 0,
    hepCLinkedToCare: 0,
    hepCServicesReferredTo: "",
    hepCFemale: 0,
    hepCMale: 0,
    hepCTransgenderFemale: 0,
    hepCTransgenderMale: 0,
    hepCGenderNonConforming: 0,
    hepCNonBinary: 0,
    hepCOtherGenderIdentity: 0,
    hepCGenderDeclinedToAnswer: 0,
    hepCUnder15: 0,
    hepC16_19: 0,
    hepC20_24: 0,
    hepC25_29: 0,
    hepC30_34: 0,
    hepC35_39: 0,
    hepC40_44: 0,
    hepC45_49: 0,
    hepC50_54: 0,
    hepC55_59: 0,
    hepC60_64: 0,
    hepC65_69: 0,
    hepC70: 0,
    hepCAgeDeclinedToAnswer: 0,
    hepCBlackOrAfricanAmerican: 0,
    hepCHispanic: 0,
    hepCAsian: 0,
    hepCAmericanIndianOrAlaskaNative: 0,
    hepCMiddleEasternOrNorthAfrican: 0,
    hepCNativeHawaiianOrOtherPacificIslander: 0,
    hepCWhite: 0,
    hepCSomeOtherRace: 0,
    hepCRaceDeclinedToAnswer: 0,
    hepCNotHispanic: 0,
    hepCMexicanMexicanAmericanOrChicano: 0,
    hepCPuertoRican: 0,
    hepCCuban: 0,
    hepCDominican: 0,
    hepCEcuadorian: 0,
    hepCOtherHispanic: 0,
    hepCEthnicityDeclinedToAnswer: 0,
    hepCGayOrLesbian: 0,
    hepCStraightOrHeterosexual: 0,
    hepCBisexual: 0,
    hepCQueer: 0,
    hepCQuestioningOrNotSure: 0,
    hepCSexualOrientationUnknown: 0,
    hepCSexualOrientationDeclinedToAnswer: 0,
    otherTestingType: "",
    otherTestedTotal: 0,
    hivGenderNotSureQuestioning: 0,
    altAgeHivUnder13: 0,
    altAgeHiv13_18: 0,
    altAgeHiv19_24: 0,
    hivMoreThanOneRace: 0,
    hepCGenderNotSureQuestioning: 0,
    altAgeHepCUnder13: 0,
    altAgeHepC13_18: 0,
    altAgeHepC19_24: 0,
    hepCMoreThanOneRace: 0,
    datePostEventSurvey: new Date(),
    // namePostEventSurvey: loggedUsername + " " + loggedUserLastname,
    guestSpeakers: "",
    nameGuestSpeakers: "",
    
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
          pageTitle={"Post-event survey"}
        />
        <div className="container mx-auto md:px-0 px-5 ">
          <TopEventsInfo event={event} editPath={`/oef/events/${event?.eventid || event?.id}/edit`}/>

          <div className="post-envent-form-container mt-10 border-black  bg-white rounded-lg mb-10 pb-10 shadow-lg">
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
             <DocumentUploadDropbox FileUploadedMessage={FileUploadedMessage} path={`${event?.folderpath}/Documents`} title="Upload supporting documentation - upload any flyers here" />
            <PictureUploadDropbox FileUploadedMessage={FileUploadedMessage} path={`${event?.folderpath}`} index="1" title="Upload an event picture here:" />

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
                 <TestingDocuments FileUploadedMessage={FileUploadedMessage} path={event?.folderpath} testName={"HIV"} />
              </PostEventReportSection23>
            )}

            {eventForm?.hepCTesting && showDemographicsSection && (
              <PostEventReportSection25
                eventForm={eventForm}
                setEventForm={setEventForm}
                isNumberKey={isNumberKey}
              >
                <TestingDocuments FileUploadedMessage={FileUploadedMessage} path={event?.folderpath} testName={"Hepatitis C"} />
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
          </div>
          <div className="flex justify-center my-10">
            <button
              className="py-2 px-5 flex items-center rounded bg-black text-white font-semibold"
              onClick={submitPostEventForm}
            >
              Submit
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
