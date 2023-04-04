import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ExternalSurveyHeader from "../../../../../components/ExternalSurveyHeader";
import Loader from "../../../../../components/Loader";
import ResponseStatusModal from "../../../../../components/ResponseStatusModal";
import axios from "axios";
import RadioGroup from "../../../../../components/yip/RadioGroup";
import Zipcode from "../../../../../components/yip/Zipcode";
import NumberLimits from "../../../../../components/yip/NumberLimits";
import { ParticipantSurveySection3 } from "../../../../../components/yip/ParticipantSurveySection3";
import { ParticipantSurveySection4 } from "../../../../../components/yip/ParticipantSurveySection4";
import { ParticipantSurveySection5 } from "../../../../../components/yip/ParticipantSurveySection5";
import { ParticipantSurveySection6 } from "../../../../../components/yip/ParticipantSurveySection6";
import { ParticipantSurveySection32 } from "../../../../../components/yip/ParticipantSurveySection32";
import RadiogroupList from "../../../../../components/yip/RadiogroupList";
import DeliveryPartner from "../../../../../components/yip/DeliveryPartner";
import LeichardtScale from "../../../../../components/yip/LeichardtScale";
import FacilitatorName from "../../../../../components/yip/FacilitatorName";
import OneColumnCheckbox from "../../../../../components/yip/OneColumnCheckbox";
import TotalAttendees from "../../../../../components/yip/TotalAttendees";
import Rating from "../../../../../components/yip/Rating";

import InformationUseful from "../../../../../components/oef-cbt-participant-survey/InformationUseful";
import { NYSZipCodesAndBoroughs } from "../../../../../utils/sharedData";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TextArea from "../../../../../components/yip/TextArea";
import DropboxDocumentUpload from "../../../../../components/oef-post-event-survey/DropboxDocumentUpload";
import ProgramLeaders from "../../../../../components/yip/ProgramLeader";

export default function PostWorkshop({ event }) {
  console.log("event edit", event);
  const [showStatusUpload, setShowStatusUpload] = useState(false);
  const [msgStatusUpload, setMsgStatusUpload] = useState({});
  const [showResponseStatus, setShowResponseStatus] = useState();
  const [responseStatus, setResponseStatus] = useState();
  const [loading, setLoading] = useState();
  const [eventForm, setEventForm] = useState({
    surveyCreated: event?.surveycreated || new Date(),
    surveyName: event?.surveyname || "yip-post-event",
    id: event?.id,
    programName: event?.programname || "OEF",
    programID: event?.programid || 1,
    // createdDate:event?.createddate ||new Date(),
    externalFacilitatorName: event?.externalfacilitatorname || "",
    mainRoles: event?.mainroles || [],
    participantRegistrationForm: event?.participantregistrationform || false,
    eventStartedOnTime: event?.eventstartedontime || false,
    eventFinishedOnTime: event?.eventfinishedontime || false,
    participantGreeted: event?.participantgreeted || false,
    resourcesAvailable: event?.resourcesavailable || false,
    photoRelease: event?.photorelease || false,
    handSanitizerAvailable: event?.handsanitizeravailable || false,
    reminderSafeSpace: event?.remindersafespace || false,
    reminderPostEvaluationSurvey: event?.reminderpostevaluationsurvey || false,
    eventChecklistOther: event?.eventchecklistother || false,
    totalAttendees: event?.totalattendees || "",
    eventOrganization: event?.eventorganization || "",
    eventResponsive: event?.eventresponsive || "",
    engaged: event?.engaged || "",
    topicsFollowup: event?.topicsfollowup || "",
    leastEngaged: event?.leastengaged || "",
    improveEngagement: event?.improveengagement || "",
    eventChallenges: event?.eventchallenges || "",
    eventQuestions: event?.eventquestions || "",
    organizerFeedback: event?.organizerfeedback || "",
  });
  const router = useRouter();

  const FileUploadedMessage = (fileName) => {
    setMsgStatusUpload({ statusMessage: "Upload has been successful" });
    setShowStatusUpload(true);
  };

  const notifyMessage = () => {
    toast.success("Survey saved!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const submitParticipantSurvey = async () => {
    // if (!isEmpty) {
    axios
      .put(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/post_event_report/oef/yip/event/update`,
        eventForm
      )
      .then((response) => {
        if (response.data.statusText === "OK") {
          console.log(response);

            notifyMessage();
            setTimeout(() => {
              router.push(`/oef/yip/${event?.id}/post-workshop/success`);
            }, 1000);
        }
      })
      .catch(function (error) {
        console.error("error: ", error);
      });
  };

  const getCity = (zipcode, array) => {
    const searchZipcode = array.filter((code) => code.zipcode === zipcode);
    if (searchZipcode.length > 0) {
      setEventForm({
        ...eventForm,
        participantBorough: searchZipcode[0].borought,
      });
    } else {
      setEventForm({ ...eventForm, participantBorough: "" });
    }
  };

  useEffect(() => {
    getCity(eventForm.participantZipCode, NYSZipCodesAndBoroughs);
  }, [eventForm.participantZipCode]);

  const grades = [
    { id: 0, value: "Grade 7" },
    { id: 1, value: "Grade 8" },
    { id: 2, value: "Grade 9" },
    { id: 3, value: "Grade 10" },
    { id: 4, value: "Grade 11" },
    { id: 5, value: "Grade 12" },
    { id: 6, value: "College" },
    { id: 7, value: "Trade / Technical School" },
    { id: 8, value: "Not currently in school" },
    { id: 9, value: "Other" },
  ];
  const radioQuestionsList = [
    {
      value: "consentCanBeTakenAway",
      title: "You can take consent away at any point, even after I’ve given it",
    },
    {
      value: "participantBodyLanguageConsent",
      title: "Body language is a good indicator of consent",
    },
    {
      value: "partnerCheckPhoneEmail",
      title:
        "My partner should be allowed to check my phone, email, or social media accounts",
    },
    {
      value: "preparationHelpsGoals",
      title:
        "Preparing for obstacles, instead of ignoring them, will help me achieve my goals",
    },
    {
      value: "lowEnergySocialMediaHelpful",
      title:
        "When you feel like you have low energy, it is best to relax by scrolling through social media for a while",
    },
    {
      value: "pubertyDifferentExperiences",
      title:
        "Everyone experiences puberty differently and our bodies are constantly developing and changing",
    },
    {
      value: "eatingHabitsEmotions",
      title: "Our eating habits are usually connected to our emotions",
    },
    {
      value: "stairsInsteadElevator",
      title:
        "Taking the stairs instead of the elevator is an example of making everyday activities more active",
    },
    {
      value: "peopleMentallyIllViolent",
      title: "People with mental Illness are violent",
    },
  ];

  const selfCareOptions = [
    {
      id: 1,
      value: "Not at all aware",
      text: "Not at all aware",
      bgColor: "stronglyDisagreeBg",
      bgColorHover: "hover:stronglyDisagreeBg",
    },
    {
      id: 2,
      value: "Not so aware",
      text: "Not so aware",
      bgColor: "disagreeBg",
      bgColorHover: "hover:disagreeBg",
    },
    {
      id: 3,
      value: "Somewhat aware",
      text: "Somewhat aware",
      bgColor: "neitherAgreeOrDisagreeBg",
      bgColorHover: "hover:neitherAgreeOrDisagreeBg",
    },
    {
      id: 4,
      value: "Very aware",
      text: "Very aware",
      bgColor: "agreeBg",
      bgColorHover: "hover:agreeBg",
    },
    {
      id: 5,
      value: "Extremely aware",
      text: "Extremely aware",
      bgColor: "stronglyAgreeBg",
      bgColorHover: "hover:stronglyAgreeBg",
    },
  ];

  const mentalIllnessCausesOptions = [
    { id: 0, value: "Lack of willpower" },
    { id: 1, value: "Personal Weakness" },
    {
      id: 2,
      value:
        "A number of factors including biological factors, stressful or traumatic life events, and long-lasting health conditions such heart disease or cancer.",
    },
    { id: 3, value: "All of the above" },
  ];

  const confidentScaleOptions = [
    {
      id: 1,
      value: "Not at all confident",
      text: "Not at all confident",
      bgColor: "stronglyDisagreeBg",
      bgColorHover: "hover:stronglyDisagreeBg",
    },
    {
      id: 2,
      value: "A little confident",
      text: "A little confident",
      bgColor: "disagreeBg",
      bgColorHover: "hover:disagreeBg",
    },
    {
      id: 3,
      value: "Neutral",
      text: "Neutral",
      bgColor: "neitherAgreeOrDisagreeBg",
      bgColorHover: "hover:neitherAgreeOrDisagreeBg",
    },
    {
      id: 4,
      value: "Confident",
      text: "Confident",
      bgColor: "agreeBg",
      bgColorHover: "hover:agreeBg",
    },
    {
      id: 5,
      value: "Very confident",
      text: "Very confident",
      bgColor: "stronglyAgreeBg",
      bgColorHover: "hover:stronglyAgreeBg",
    },
  ];

  const satisfiedScaleOptions = [
    {
      id: 1,
      value: "Not at all likely",
      text: "Not at all likely",
      bgColor: "stronglyDisagreeBg",
      bgColorHover: "hover:stronglyDisagreeBg",
    },
    {
      id: 2,
      value: "Not likely",
      text: "Not likely",
      bgColor: "disagreeBg",
      bgColorHover: "hover:disagreeBg",
    },
    {
      id: 3,
      value: "Neutral",
      text: "Neutral",
      bgColor: "neitherAgreeOrDisagreeBg",
      bgColorHover: "hover:neitherAgreeOrDisagreeBg",
    },
    {
      id: 4,
      value: "Likely",
      text: "Likely",
      bgColor: "agreeBg",
      bgColorHover: "hover:agreeBg",
    },
    {
      id: 5,
      value: "Very likely",
      text: "Very likely",
      bgColor: "stronglyAgreeBg",
      bgColorHover: "hover:stronglyAgreeBg",
    },
  ];

  const confidentManagingIssues = [
    {
      id: 1,
      question: "Managing healthy relationships",
      stateValue: "managingHealthyRelationships",
      options: confidentScaleOptions,
    },
    {
      id: 2,
      question: "Looking after my mental health, nutrition and wellness",
      stateValue: "confidentLookingAfterMyMentalHealth",
      options: confidentScaleOptions,
    },
    {
      id: 3,
      question: "How satisfied were you with the workshop activities?",
      stateValue: "satisfiedEventActivities",
      options: satisfiedScaleOptions,
    },
    {
      id: 4,
      question:
        "How likely are you to recommend this workshop to your friends, family members, or peers?",
      stateValue: "recommendEvent",
      options: satisfiedScaleOptions,
    },
  ];
  console.log("yip session 1 form: ", eventForm);

  ///////NEW

  const roles = [
    { id: 1, value: "Program Leader" },
    { id: 2, value: "Lead Facilitator" },
    { id: 3, value: "Co-facilitator" },
    { id: 4, value: "Guest speaker" },
    { id: 5, value: "Program/workshop support staff or intern" },
    { id: 6, value: "Other" },
  ];

  const programLeaderStaffOptions = [
    {
      id: 1,
      value: "participantRegistrationForm",
      title:
        "All participants completed a sign in sheet at the start of the session.",
    },
    { id: 2, value: "eventStartedOnTime", title: "The event started on time." },
    {
      id: 3,
      value: "eventFinishedOnTime",
      title: "The event finished on time.",
    },
    {
      id: 4,
      value: "participantGreeted",
      title:
        "Participants were greeted by someone from the program when they entered.",
    },
    {
      id: 5,
      value: "resourcesAvailable",
      title: "Resources were available to participants.",
    },
    {
      id: 6,
      value: "photoRelease",
      title: "If photos were taken, participants signed a photo usage form.",
    },
    {
      id: 7,
      value: "handSanitizerAvailable",
      title: "Hand sanitizer was available.",
    },
    {
      id: 8,
      value: "reminderSafeSpace",
      title:
        "Participants were reminded that the workshop area is a safe space and to treat each other respectfully and within the workshop guidelines.",
    },
    {
      id: 9,
      value: "reminderPostEvaluationSurvey",
      title: "All participants completed a post-workshop evaluation form.",
    },
    {
      id: 10,
      value:
        "Are sign-in sheets from last week up to date and stored appropriately?",
      title:
        "Are sign-in sheets from last week up to date and stored appropriately?",
    },
    //{id:11,value:'Other (please specify)',title:'Other (please specify)'}
  ];

  const satisfiedRatingOptions = [
    {
      id: 1,
      value: "Very unsatisfied",
      text: "Very unsatisfied",
      bgColor: "stronglyDisagreeBg",
      bgColorHover: "hover:stronglyDisagreeBg",
    },
    {
      id: 2,
      value: "Unsatisfied",
      text: "Unsatisfied",
      bgColor: "disagreeBg",
      bgColorHover: "hover:disagreeBg",
    },
    {
      id: 3,
      value: "Neutral",
      text: "Neutral",
      bgColor: "neitherAgreeOrDisagreeBg",
      bgColorHover: "hover:neitherAgreeOrDisagreeBg",
    },
    {
      id: 4,
      value: "Satisfied",
      text: "Satisfied",
      bgColor: "agreeBg",
      bgColorHover: "hover:agreeBg",
    },
    {
      id: 5,
      value: "Very satisfied",
      text: "Very satisfied",
      bgColor: "stronglyAgreeBg",
      bgColorHover: "hover:stronglyAgreeBg",
    },
  ];

  const eventResponsiveOptions = [
    {
      id: 1,
      value: "Very unresponsive",
      text: "Very unresponsive",
      bgColor: "stronglyDisagreeBg",
      bgColorHover: "hover:stronglyDisagreeBg",
    },
    {
      id: 2,
      value: "Unresponsive",
      text: "Unresponsive",
      bgColor: "disagreeBg",
      bgColorHover: "hover:disagreeBg",
    },
    {
      id: 3,
      value: "Neutral",
      text: "Neutral",
      bgColor: "neitherAgreeOrDisagreeBg",
      bgColorHover: "hover:neitherAgreeOrDisagreeBg",
    },
    {
      id: 4,
      value: "Responsive",
      text: "Responsive",
      bgColor: "agreeBg",
      bgColorHover: "hover:agreeBg",
    },
    {
      id: 5,
      value: "Very Responsive",
      text: "Very Responsive",
      bgColor: "stronglyAgreeBg",
      bgColorHover: "hover:stronglyAgreeBg",
    },
  ];
  return (
    <>
      {/*   <Layout showStatusHeader={true}> */}
      {/* <ToastContainer autoClose={20000} /> */}

      <ExternalSurveyHeader pageTitle={"Edit YIP Facilitator Post-Workshop Survey"} yipLegend={true}/>
      <div
        id="event"
        className="container mx-auto rounded my-10 md:h-36 border-black rounded-tr-lg rounded-tl-lg"
      >
        <div className="grid grid-cols-2 bg-black font-bold text-white h-12 px-7 items-center rounded-tl-lg rounded-tr-lg">
          <h2 className="text-2xl">Event name</h2>
          <h2 className="flex justify-end text-2xl">Event date</h2>
        </div>
        <div className="grid grid-cols-2 py-6 px-7">
          <h2 className="text-black text-2xl">{event?.yipsession}</h2>
          <h2 className="flex justify-end text-2xl">
            {new Date(event?._eventdate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
            })}
          </h2>
        </div>
      </div>
      <div className="container mx-auto border-black rounded-lg mb-10">
        <div className="register-envent-form-container  grid gap-10 bg-white  rounded-lg px-7 my-10 ">
          <FacilitatorName
            eventForm={eventForm}
            setEventForm={setEventForm}
            stateValue={"externalFacilitatorName"}
          />

          <OneColumnCheckbox
            title={"What was your primary role today?"}
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            stateValue={"mainRoles"}
            options={roles}
          />
          <ProgramLeaders eventForm={eventForm} setEventForm={setEventForm} />
          {/*    <RadiogroupList 
       header={'Program Leader and Staff only: Please check off all of the following events that you are aware happened today.'}
       questions={programLeaderStaffOptions}
       surveyForm={eventForm} setSurveyForm={setEventForm}
       /> */}

          <TotalAttendees
            title={"How many participants attended?"}
            eventForm={eventForm}
            setEventForm={setEventForm}
            stateValue={"totalAttendees"}
          />

          <Rating
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            title={"How satisfied were you with how the event was organized?"}
            options={satisfiedRatingOptions}
            stateValue={"eventOrganization"}
          />

          <Rating
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            title={"How responsive and engaged do you think participants were?"}
            options={eventResponsiveOptions}
            stateValue={"eventResponsive"}
          />

          <TextArea
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            title="What do you think was the activity or discussion topic where the participants were most engaged?"
            stateValue={"engaged"}
          />

          <TextArea
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            title="Were there any topics or discussions that you would like to follow up on or prepare additional resources for in future?"
            stateValue={"topicsFollowup"}
          />

          <TextArea
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            title="What do you think was the activity or discussion topic that participants were least engaged?"
            stateValue={"leastEngaged"}
          />

          <TextArea
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            title="How could this be improved next time?"
            stateValue={"improveEngagement"}
          />

          <TextArea
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            title="Were there any other challenges in running the workshop?"
            stateValue={"eventChallenges"}
          />

          <TextArea
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            title="What other topics or discussions did participants raise?"
            stateValue={"eventQuestions"}
          />

          <DropboxDocumentUpload
            title="Please upload the meeting agenda. Choose File"
            path={event?.folderpath + '/Documents'}
            forValue={1}
            FileUploadedMessage={FileUploadedMessage}
          />
          <DropboxDocumentUpload
            title="Please upload any additional pictures or files.Choose File "
            path={event?.folderpath + '/Images'}
            forValue={2}
            FileUploadedMessage={FileUploadedMessage}

          />
        </div>
      </div>
      <div className="flex justify-center">{loading && <Loader />}</div>
      <div className="flex justify-center mb-10">
        {loading ? null : (
          <button
            className="py-2 px-16 flex items-center rounded bg-black text-white font-semibold text"
            //className="py-2"
            onClick={() => submitParticipantSurvey()}
          >
            Submit
          </button>
        )}
      </div>
      {/*   </Layout> */}
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
    </>
  );
}
export const getServerSideProps = async (ctx) => {
  const { id } = ctx.params;
  const [event] = await Promise.all([
    fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/post_event_report/oef/yip/event/${id}`
    ).then((r) => r.json()),
  ]);
  return {
    props: {
      event: event[0],
    },
  };
};
