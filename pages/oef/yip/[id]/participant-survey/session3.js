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
import InformationUseful from "../../../../../components/oef-cbt-participant-survey/InformationUseful";
import { NYSZipCodesAndBoroughs } from "../../../../../utils/sharedData";
import Rating from "../../../../../components/yip/Rating";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TextArea from "../../../../../components/yip/TextArea";

export default function Session3({ event, fbos }) {
  console.log("event", event);
  const [showResponseStatus, setShowResponseStatus] = useState();
  const [responseStatus, setResponseStatus] = useState();
  const [loading, setLoading] = useState();
  const [eventForm, setEventForm] = useState({
    surveyCreated: new Date(),
    surveyName: "yip-participant-session3",
    eventId: event?.id,
    eventDate: event?.eventdate,
    canApply: "",
    informationUseful: "",
    thinkDifferently: "",
    deliveryPartner: "",
    deliveryPartnerOther: "",
    participantZipCode: 0,
    participantBorough: "",
    raceID: [],
    participantRace: [],
    participantRaceOther: "",
    ethnicityID: 0,
    participantEthnicity: "",
    participantEthnicityOther: "",
    genderID: 0,
    participantGender: "",
    participantGenderOther: "",
    orientationID: 0,
    participantOrientation: "",
    participantOrientationOther: "",
    participantReferral: "",
    participantReferralOther: "",
    preparationHelpsGoals: false,
    oneProvenPathToSuccess: false,
    shouldKnowFutureCareerInHighSchool: false,
    hbcuMeaningKnowledge: false,
    participantSuggestions: "",
    workshopDoDifferently: "",
    participantGrade: "",
    participantGradeOther: "",
    participantAge: 0,
    participantAgeOther: "",
    hasMentor: false,
    confidentJobAndCareerChoices: "",
    awareOptionsEducationCareer: "",
    satisfiedEventActivities: "",
    recommendEvent: "",
    workshopShouldChange: "",
    mentorBenefits: "",
    confidentFindingMentor: "",
    presenterExplainWell:""
  });
  const router = useRouter();

  const notifyMessage = () => {
    toast.success("Survey saved!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const submitParticipantSurvey = async () => {
    // if (!isEmpty) {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/participant_event_outputs/oef-yip-participant-session3-survey/create`,
        eventForm
      )
      .then((response) => {
        if (response.data.statusText === "OK") {
          notifyMessage();
          setTimeout(() => {
            router.push(`/oef/yip/${event?.id}/participant-survey/success`);
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
    {value: "preparationHelpsGoals", title: "Preparing for obstacles, instead of ignoring them, will help me achieve my goals"},
    {value: "oneProvenPathToSuccess", title: "There is one proven path for success"},
    {value: "shouldKnowFutureCareerInHighSchool", title: "You should know exactly what you want to do for a career when you leave high school"},
    {value: "hbcuMeaningKnowledge", title: "HBCU stands for Historically Black College and University"},
    
  ];

  const awareScaleOptions = [
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


  const confidentManagingIssues = [
    {
      id: 1,
      question: "Making Job and Career Choices",
      stateValue: "confidentJobAndCareerChoices",
      options: confidentScaleOptions,
    },
    /* {
      id: 2,
      question: "How satisfied were you with the workshop activities?",
      stateValue: "satisfiedEventActivities",
      options: satisfiedScaleOptions,
    },
    {
      id: 3,
      question:
        "How likely are you to recommend this workshop to your friends, family members, or peers?",
      stateValue: "recommendEvent",
      options: satisfiedScaleOptions,
    }, */
  ];
  const ageOptions = [
    { value: "13", title: "13" },
    { value: "14", title: "14" },
    { value: "15", title: "15" },
    { value: "16", title: "16" },
    { value: "17", title: "17" },
    { value: "18", title: "18" },
    { value: "19", title: "19" },
    { value: "Other", title: "Other" },
  ];
  console.log("yip session 3 form: ", eventForm);

  const satisfiedScaleOptions = [
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

  const likeScaleOptions = [
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
  return (
    <>
      {/*   <Layout showStatusHeader={true}> */}
      {/* <ToastContainer autoClose={20000} /> */}

      <ExternalSurveyHeader pageTitle={"YIP Participant Survey"} yipLegend={true}/>
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
            {new Date(event?.eventdate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
            })}
          </h2>
        </div>
      </div>
      <div className="container mx-auto border-black rounded-lg mb-10">
        <div className="register-envent-form-container  grid gap-10 bg-white  rounded-lg px-7 my-10 ">
          <RadioGroup
            options={[...grades]}
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            title="What grade are you in?"
            stateValue={"participantGrade"}
            // IdStateValue={'programId'}
          />
         <RadioGroup
            options={ageOptions}
            stateValue={"participantAge"}
            title={"What is your age?"}
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            widthForInput={{width: '100px'}}

          />
          <Zipcode surveyForm={eventForm} setSurveyForm={setEventForm} />
          <ParticipantSurveySection3
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
          />
          <ParticipantSurveySection4
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
          />
          <ParticipantSurveySection5
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
          />
          <ParticipantSurveySection6
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
          />
      {/*     <ParticipantSurveySection32
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
          />
          {eventForm.participantReferral ===
            "Faith-Based Organization / Place of worship (Eg. church, mosque, etc.)" && (
            <DeliveryPartner
              fbos={fbos}
              surveyForm={eventForm}
              setSurveyForm={setEventForm}
              questionText="If you heard about this program through a Faith-Based Organisation, what is the name?"

            />
          )} */}
          
          <RadioGroup
            options={awareScaleOptions}
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            title="Are you aware about the different options you have for your education and career?"
            stateValue={"awareOptionsEducationCareer"}
            // IdStateValue={'programId'}
          />
          <RadiogroupList
            header='Please reply with "True" or "False" to each of the following statements:'
            questions={radioQuestionsList}
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
          />
          <TextArea
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            title="Describe two benefits that mentors can provide?"
            stateValue={"mentorBenefits"}
          />

          <RadioGroup
            options={confidentScaleOptions}
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            title="How confident do you feel identifying a mentor?"
            stateValue={"confidentFindingMentor"}
            // IdStateValue={'programId'}
          />

          <RadioGroup
            options={[{value: 'Yes', title: 'Yes'}, {value: 'No', title: 'No'}]}
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            title="Do you have any mentors?"
            stateValue={"hasMentor"}
            // IdStateValue={'programId'}
          />


          <LeichardtScale
            title="How confident do you feel in managing issues related to the following topics:"
            options={confidentManagingIssues}
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
          />

<Rating  title="How satisfied were you with the workshop activities?:"
            options={satisfiedScaleOptions}
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            stateValue={'satisfiedEventActivities'}/>

<Rating  title="How likely are you to recommend this workshop to your friends, family members, or peers?"
            options={likeScaleOptions}
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            stateValue={'recommendEvent'}/>

  <h2 className="font-black bg-black text-white px-5 rounded-tl-md rounded-tr-md">For the following statements, please indicate your level of agreement:</h2>

          <InformationUseful
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            state="informationUseful"
            title="The information and materials presented were useful"
          />
           <InformationUseful
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            state="presenterExplainWell"
            title="The presenter/s explained the topic well"
          />
           <InformationUseful
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            state="thinkDifferently"
            title="The presentation made me think differently about this topic"
          />
          <InformationUseful
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            state="canApply"
            title="I will apply the information I learned to my everyday life"
          />
         
          <TextArea
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            title="What do you think you'll do differently because of this workshop?"
            stateValue={"workshopDoDifferently"}
          />
          <TextArea
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            title="What would you like to see changed about this workshop?  "
            stateValue={"workshopShouldChange"}
          />
          <TextArea
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            title="Do you have any other comments or suggestions? "
            stateValue={"participantSuggestions"}
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
    </>
  );
}
export const getServerSideProps = async (ctx) => {
  const { id } = ctx.params;
  const [event, fbos] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/events/${id}`).then((r) =>
      r.json()
    ),
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/fbos`).then((r) => r.json()),
  ]);
  return {
    props: {
      event: event[0],
      fbos: fbos,
    },
  };
};
