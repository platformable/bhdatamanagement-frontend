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
import OneColumnCheckbox from "../../../../../components/yip/OneColumnCheckbox";

export default function Session4({ event, fbos }) {
  // console.log("event", event);
  // const [showResponseStatus, setShowResponseStatus] = useState();
  const [responseStatus, setResponseStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [eventForm, setEventForm] = useState({
    surveyCreated: new Date(),
    surveyName: "yip-participant-session4",
    eventId: event?.id,
    eventDate: event?.eventdate,
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
    participantHivKnowledge: [],
    consentCanBeTakenAway: false,
    stiInfectionsAgeRange: false,
    knowHaveSti: false,
    pep28DaysAfter: false,
    condomWalletHandy: false,
    emergencyContraceptionAfterSex: false,
    confidentNegotiatingContraceptives: "",
    confidentPreventingHivAndStis: "",
    satisfiedEventActivities: "",
    recommendEvent: "",
    workshopDoDifferently: "",
    workshopShouldChange: "",
    participantSuggestions: "",
    participantGrade: "",
    participantGradeOther: "",
    participantAge: 0,
    participantAgeOther: "",
    canApply: "",
    informationUseful: "",
    thinkDifferently: "",
    presenterExplainWell: ''
  });
  const router = useRouter();

  const hivKnowledge = [
    { value: "Massaging, hugging, kissing" },
    { value: "Oral sex" },
    { value: "Sex with an HIV-positive sex partner" },
    { value: "Sex without a condom" },
    {
      value: "Sex without a condom with a partner whose HIV status is unknown",
    },
  ];

  const notifyMessage = () => {
    toast.success("Survey saved!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const submitParticipantSurvey = async () => {
      setLoading(true)
      setResponseStatus('')
    // if (!isEmpty) {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/participant_event_outputs/oef-yip-participant-session4-survey/create`,
        eventForm
      )
      .then((response) => {
        if (response.data.statusText === "OK") {
          notifyMessage();
          setTimeout(() => {
            setLoading(false)
            router.push(
              `/oef/yip/${event?.id}/participant-survey/success`
            );
          }, 1000);
        }
      })
      .catch(function (error) {
        setLoading(false)
        setResponseStatus('Network error')
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
      title:
        "You can take consent away at any point, even after you've given it",
    },
    {
      value: "stiInfectionsAgeRange",
      title:
        "Almost half of all sexually transmitted infections occur amongst people aged 15-24 years old",
    },
    {
      value: "knowHaveSti",
      title: "You will always know when you have an STI",
    },
    {
      value: "pep28DaysAfter",
      title:
        "Post exposure prophylaxis (PEP) can be taken any time within 28 days after unprotected sex",
    },
    {
      value: "condomWalletHandy",
      title: "It's always handy to keep a condom in your wallet",
    },
    {
      value: "emergencyContraceptionAfterSex",
      title:
        "Emergency contraception can be taken any time within 5 days after unprotected sex",
    },
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

  // const mentalIllnessCausesOptions = [
  //   { id: 0, value: "Lack of willpower" },
  //   { id: 1, value: "Personal Weakness" },
  //   {
  //     id: 2,
  //     value:
  //       "A number of factors including biological factors, stressful or traumatic life events, and long-lasting health conditions such heart disease or cancer.",
  //   },
  //   { id: 3, value: "All of the above" },
  // ];

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
      question: "Negotiating contraceptives",
      stateValue: "confidentNegotiatingContraceptives",
      options: confidentScaleOptions,
    },
    {
      id: 2,
      question: "Preventing risks of HIV and STIs",
      stateValue: "confidentPreventingHivAndStis",
      options: confidentScaleOptions,
    },
  ];
  const agreeOrDisagreeOptions = [
    {
      id: 1,
      value: "Strongly disagree",
      text: "Strongly disagree",
      bgColor: "stronglyDisagreeBg",
      bgColorHover: "hover:stronglyDisagreeBg",
    },
    {
      id: 2,
      value: "Disagree",
      text: "Disagree",
      bgColor: "disagreeBg",
      bgColorHover: "hover:disagreeBg",
    },
    {
      id: 3,
      value: "Neither agree nor disagree",
      text: "Neither agree nor disagree",
      bgColor: "neitherAgreeOrDisagreeBg",
      bgColorHover: "hover:neitherAgreeOrDisagreeBg",
    },
    {
      id: 4,
      value: "Agree",
      text: "Agree",
      bgColor: "agreeBg",
      bgColorHover: "hover:agreeBg",
    },
    {
      id: 5,
      value: "Strongly agree",
      text: "Strongly agree",
      bgColor: "stronglyAgreeBg",
      bgColorHover: "hover:stronglyAgreeBg",
    },
  ];
  const agreeOrDisagreeOptionsShort = [
    {
      id: 2,
      value: "Disagree",
      text: "Disagree",
      bgColor: "disagreeBg",
      bgColorHover: "hover:disagreeBg",
    },
    {
      id: 3,
      value: "Neither agree nor disagree",
      text: "Neither agree nor disagree",
      bgColor: "neitherAgreeOrDisagreeBg",
      bgColorHover: "hover:neitherAgreeOrDisagreeBg",
    },
    {
      id: 4,
      value: "Agree",
      text: "Agree",
      bgColor: "agreeBg",
      bgColorHover: "hover:agreeBg",
    },
  ];
  const yipSessionOptions = [
    { id: 1, value: "Sexual health and healthy relationships" },
    { id: 2, value: "Effective communication " },
    {
      id: 3,
      value: "Let’s make a choice: HIV (Health), Education, and Career Options",
    },
    { id: 4, value: "STI/HIV Reduction and Prevention" },
  ];
  const levelOfAgreement = [
    {
      id: 1,
      question: "The information and materials presented were useful",
      stateValue: "informationUseful",
      options: agreeOrDisagreeOptions,
    },
    {
      id: 2,
      question: "The presenters explained the topic well",
      stateValue: "thinkDifferently",
      options: agreeOrDisagreeOptions,
    },
    {
      id: 3,
      question: "I will apply the information I learned to my everyday life",
      stateValue: "canApply",
      options: agreeOrDisagreeOptions,
    },
  ];
  const workshopOptions = [
    {
      id: 0,
      stateValue: "workshopsHelpful",
      options: agreeOrDisagreeOptionsShort,
      question: "The trainings were helpful to me",
    },
    {
      id: 1,
      stateValue: "workshopsEnjoyed",
      options: agreeOrDisagreeOptionsShort,
      question: "I enjoyed the trainings",
    },
    {
      id: 2,
      stateValue: "workshopsLearnedFrom",
      options: agreeOrDisagreeOptionsShort,
      question: "I learned from the trainings",
    },
    {
      id: 3,
      stateValue: "workshopsRecommendToFriends",
      options: agreeOrDisagreeOptionsShort,
      question: "I would tell my friends to go to these training",
    },
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
  // console.log("yip session 3 form: ", eventForm);

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

      <ExternalSurveyHeader
        pageTitle={"YIP Participant Survey"}
        yipLegend={true}
      />
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
            widthForInput={{ width: "100px" }}
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
          {/*         <ParticipantSurveySection32
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
          <OneColumnCheckbox
            options={hivKnowledge}
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            title="Which of the following can put you at risk for sexually transmitted HIV? "
            stateValue="participantHivKnowledge"
            subheading={"Select all that apply."}
          />

          {/* <RadiogroupList
            header='Please reply with "True" or "False" to each of the following statements:'
            questions={[
              {
                value: "consentCanBeTakenAway",
                title:
                  "You can take consent away at any point, even after I’ve given it",
              },
            ]}
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
          /> */}
          <RadiogroupList
            header='Please reply with "True" or "False" to each of the following statements:'
            questions={radioQuestionsList}
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
          />
          <LeichardtScale
            title="How confident do you feel in managing issues related to the following topics:"
            options={confidentManagingIssues}
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
          /> 
          <Rating
            title="How satisfied were you with the workshop activities?"
            options={satisfiedScaleOptions}
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            stateValue="satisfiedEventActivities"
          />
          <Rating
            title="How likely are you to recommend this workshop to your friends, family members, or peers?"
            options={likeScaleOptions}
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            stateValue="recommendEvent"
          />
          {/* <LeichardtScale
            title="For the following statements, please indicate your level of agreement:"
            options={levelOfAgreement}
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
          /> */}

          <h2 className="font-black bg-black text-white px-5 rounded-tl-md rounded-tr-md">
            For the following statements, please indicate your level of
            agreement:
          </h2>

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
            title="The presenter explained the topic well"
          />
          <InformationUseful
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            state="thinkDifferently"
            title="The presenters explained the topic well"
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
            title="What would you like to see changed about this workshop?"
            stateValue={"workshopShouldChange"}
          />
          <TextArea
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            title="Do you have any other comments or suggestions?"
            stateValue={"participantSuggestions"}
          />
          <LeichardtScale
            title="Please answer how much you agree or disagree with the following statements"
            options={workshopOptions}
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
          />
          <RadioGroup
            options={yipSessionOptions}
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            title="Which workshop was your favorite?"
            stateValue={"workshopFavorite"}
            // IdStateValue={'programId'}
          />
          <RadioGroup
            options={yipSessionOptions}
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            title="Which workshop are you likely to tell a friend about?"
            stateValue={"workshopLikelyTellFriend"}
            // IdStateValue={'programId'}
          />
        </div>
      </div>
      <div className="flex justify-center">{loading && <Loader />}</div>
      <div className="flex flex-col items-center justify-center gap-y-3 mb-10">
      {responseStatus && <center className="text-red-700">{responseStatus}</center>}

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
      {/* {showResponseStatus && (
        <ResponseStatusModal
          setShowResponseStatus={setShowResponseStatus}
          responseStatus={responseStatus}
        />
      )} */}
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
