import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ExternalSurveyHeader from "../../../../components/ExternalSurveyHeader";
import Loader from "../../../../components/Loader";
import ResponseStatusModal from "../../../../components/ResponseStatusModal";
import axios from "axios";
import RadioGroup from "../../../../components/yip/RadioGroup";
import Zipcode from "../../../../components/yip/Zipcode";
import NumberLimits from "../../../../components/yip/NumberLimits";
import { ParticipantSurveySection3 } from "../../../../components/yip/ParticipantSurveySection3";
import { ParticipantSurveySection4 } from "../../../../components/yip/ParticipantSurveySection4";
import { ParticipantSurveySection5 } from "../../../../components/yip/ParticipantSurveySection5";
import { ParticipantSurveySection6 } from "../../../../components/yip/ParticipantSurveySection6";
import { ParticipantSurveySection32 } from "../../../../components/yip/ParticipantSurveySection32";
import RadiogroupList from "../../../../components/yip/RadiogroupList";
import DeliveryPartner from "../../../../components/yip/DeliveryPartner";
import LeichardtScale from "../../../../components/yip/LeichardtScale";
import Rating from "../../../../components/yip/Rating";
import InformationUseful from "../../../../components/oef-cbt-participant-survey/InformationUseful";
import { NYSZipCodesAndBoroughs } from "../../../../utils/sharedData";
import OneColumnCheckbox from "../../../../components/yip/OneColumnCheckbox";
import Month from "../../../../components/yip/Month";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TextArea from "../../../../components/yip/TextArea";

export default function MonthsFollowUp({ event, fbos }) {
  // console.log("event", event);
  const [showResponseStatus, setShowResponseStatus] = useState();
  const [responseStatus, setResponseStatus] = useState();
  const [loading, setLoading] = useState();
  const [eventForm, setEventForm] = useState({
    surveyCreated: new Date(),
    surveyName: "yip-6month-follow-up",
    // eventId: event?.id,
    participantHivKnowledge: [],
    deliveryPartner: "",
    deliveryPartnerOther: "",
    participantZipCode: "",
    participantBorough: "",
    raceID: [],
    participantRace: [],
    participantRaceOther: "",
    ethnicityID: "",
    participantEthnicity: "",
    participantEthnicityOther: "",
    genderID: "",
    participantGender: "",
    participantGenderOther: "",
    orientationID: "",
    participantOrientation: "",
    participantOrientationOther: "",
    participantReferral: "",
    participantReferralOther: "",
    selfCareAwareness: '',
    smartGoalAwareness: '', 
    awareOptionsEducationCareer: '',
    confidentCondom: '',
    consentCanBeTakenAway: false,
    participantBodyLanguageConsent: false,
    goodCommunicationImportantOnlyPublicSpeakers: false,
    oneProvenPathToSuccess: false,
    knowHaveSti: false,
    managingHealthyRelationships: '',
    confidentCommunicatingEffectively: '',
    confidentLookingAfterMyMentalHealth: '',
    confidentNegotiatingContraceptives: '',
    confidentPreventingHivAndStis: '',
    confidentJobAndCareerChoices: '',
    workshopsRating: '',
    workshopContentFamiliar: '',
    workshopsUseful: '',
    workshopsMostUseful: '',
    workshopLeastUseful: '',
    workshopLikelyUseInfoLearned: '',
    likelyDiscussWithFriends6MonthsAfter: '',
    workshopsPlanToUseInfoLearned: '',
    workshopShouldChange: '',
    participantSuggestions: '',
    startMonthYip:""

  });
  const router = useRouter();

  const notifyMessage = () => {
    toast.success("Survey saved!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const submitParticipantSurvey = async () => {
    // if (!isEmpty) {
      setLoading(true)
    axios
      .post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/participant_event_outputs/oef-yip-6month-follow-up/create`,
        eventForm
      )
      .then((response) => {
        if (response.data.statusText === "OK") {
          notifyMessage();
          setTimeout(() => {
            router.push(
              `/oef/yip/6month-follow-up/success`
            );
          }, 1000);
        setLoading(false)

        }
      })
      .catch(function (error) {
      setLoading(false)
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
      title: "You can take consent away at any point, even after you've given it",
    },
    {
      value: "participantBodyLanguageConsent",
      title: "Body language is a good indicator of consent",
    },
    {
      value: "goodCommunicationImportantOnlyPublicSpeakers",
      title: "Good communication is only important for people who do public speaking, like teachers or politicians.",
    },
    {
      value: "oneProvenPathToSuccess",
      title: "There is one proven path for success",
    },
    {
      value: "knowHaveSti",
      title: "You will always know when you have an STI.",
    },
    /* {
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
    }, */
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
      question: "Communicating effectively",
      stateValue: "confidentCommunicatingEffectively",
      options: confidentScaleOptions,
    },
    {
      id: 4,
      question: "Negotiating contraceptives",
      stateValue: "confidentNegotiatingContraceptives",
      options: confidentScaleOptions,
    },
    {
      id: 5,
      question: "Preventing risks of HIV and STIs",
      stateValue: "confidentPreventingHivAndStis",
      options: confidentScaleOptions,
    },
    {
      id: 6,
      question: "Making Job and Career Choices",
      stateValue: "confidentJobAndCareerChoices",
      options: confidentScaleOptions,
    },
/*     {
      id: 3,
      question: "How satisfied were you with the workshop activities?",
      stateValue: "satisfiedEventActivities",
      options: confidentScaleOptions,
    },
    {
      id: 4,
      question:
        "How likely are you to recommend this workshop to your friends, family members, or peers?",
      stateValue: "recommendEvent",
      options: confidentScaleOptions,
    }, */
  ];
  console.log("6 motnh form: ", eventForm); 
  const smartGoalsOptions = [
    { id: 0, value: "Not at all aware" },
    { id: 1, value: "Not so aware" },
    { id: 2, value: "Somewhat aware" },
    { id: 3, value: "Very aware" },
    { id: 4, value: "Extremely aware" },
  ];

  const confidentOptions = [
    { id: 0, value: "Not confident at all " },
    { id: 1, value: "A little confident" },
    { id: 2, value: "Neutral" },
    { id: 3, value: "Confident" },
    { id: 4, value: "Very Confident" },
  ];

  const riskSexuallHivOptions = [
    { id: 0, value: "Massaging, hugging, kissing" },
    { id: 1, value: "Oral sex" },
    { id: 2, value: "Sex with an HIV-positive sex partner" },
    { id: 3, value: "Sex without a condom" },
    {
      id: 4,
      value: "Sex without a condom with a partner whose HIV status is unknown",
    },
  ];

  const programRatingOptions = [
    {
      id: 1,
      value: "Poor",
      text: "Poor",
      bgColor: "stronglyDisagreeBg",
      bgColorHover: "hover:stronglyDisagreeBg",
    },
    {
      id: 2,
      value: "Below Average",
      text: "Below Average",
      bgColor: "disagreeBg",
      bgColorHover: "hover:disagreeBg",
    },
    {
      id: 3,
      value: "Average",
      text: "Average",
      bgColor: "neitherAgreeOrDisagreeBg",
      bgColorHover: "hover:neitherAgreeOrDisagreeBg",
    },
    {
      id: 4,
      value: "Good",
      text: "Good",
      bgColor: "agreeBg",
      bgColorHover: "hover:agreeBg",
    },
    {
      id: 5,
      value: "Great",
      text: "Great",
      bgColor: "stronglyAgreeBg",
      bgColorHover: "hover:stronglyAgreeBg",
    },
  ];

  const familiarOptions = [
    {
      id: 1,
      value: "Not Familiar",
      text: "Not Familiar",
      bgColor: "stronglyDisagreeBg",
      bgColorHover: "hover:stronglyDisagreeBg",
    },
    {
      id: 2,
      value: "Somewhat familiar",
      text: "Somewhat familiar",
      bgColor: "disagreeBg",
      bgColorHover: "hover:disagreeBg",
    },
    {
      id: 3,
      value: "Familiar",
      text: "Familiar",
      bgColor: "neitherAgreeOrDisagreeBg",
      bgColorHover: "hover:neitherAgreeOrDisagreeBg",
    },
    {
      id: 4,
      value: "Very Familiar",
      text: "Very Familiar",
      bgColor: "agreeBg",
      bgColorHover: "hover:agreeBg",
    },
  ];

  const usefullOptions = [
    {
      id: 1,
      value: "Not useful",
      text: "Not useful",
      bgColor: "stronglyDisagreeBg",
      bgColorHover: "hover:stronglyDisagreeBg",
    },
    {
      id: 2,
      value: "Somewhat useful",
      text: "Somewhat useful",
      bgColor: "disagreeBg",
      bgColorHover: "hover:disagreeBg",
    },
    {
      id: 3,
      value: "Useful",
      text: "Useful",
      bgColor: "neitherAgreeOrDisagreeBg",
      bgColorHover: "hover:neitherAgreeOrDisagreeBg",
    },
    {
      id: 4,
      value: "Very useful",
      text: "Very useful",
      bgColor: "agreeBg",
      bgColorHover: "hover:agreeBg",
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



  console.log("eventForm", eventForm);

  return (
    <>
      {/*   <Layout showStatusHeader={true}> */}
      {/* <ToastContainer autoClose={20000} /> */}

      <ExternalSurveyHeader pageTitle={"YIP 6-Month Follow Up Survey"} yipLegend={true}/>

      <div className="container mx-auto border-black rounded-lg mb-10">
        <div className="register-envent-form-container  grid gap-10 bg-white  rounded-lg px-7 my-10 ">
        <Month
            eventForm={eventForm}
            setEventForm={setEventForm}
            stateValue={"startMonthYip"}
          />
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
          <ParticipantSurveySection32
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
          />
          {eventForm.participantReferral ===
            "Faith-Based Organization / Place of worship (Eg. church, mosque, etc.)" && (
            <DeliveryPartner
              fbos={fbos}
              surveyForm={eventForm}
              setSurveyForm={setEventForm}
              questionText={"If you heard about this program through a Faith-Based Organization, what is the name?"}
            />
          )}
          {/* REPEATED CONTEND END */}

          <RadioGroup
            options={selfCareOptions}
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            title="Are you aware of the different ways to practice self-care routine?"
            stateValue={"selfCareAwareness"}
            // IdStateValue={'programId'}
          />

          <RadioGroup
            options={smartGoalsOptions}
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            title="Are you aware about setting SMART goals?"
            stateValue={"smartGoalAwareness"}
            // IdStateValue={'programId'}
          />

          <RadioGroup
            options={smartGoalsOptions}
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            title="Are you aware about the different options you have for your education and career?"
            stateValue={"awareOptionsEducationCareer"}
            // IdStateValue={'programId'}
          />

          <RadioGroup
            options={confidentOptions}
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            title="How confident are you in using a condom?"
            stateValue={"confidentCondom"}
            // IdStateValue={'programId'}
          />

          <RadiogroupList
            header='Please reply with "True" or "False" to each of the following statements:'
            questions={radioQuestionsList}
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
          />

          <OneColumnCheckbox
            options={riskSexuallHivOptions}
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            title="Which of the following can put you at risk for sexually transmitted HIV? (Select all that apply.)"
            stateValue={"participantHivKnowledge"}
          />

          <LeichardtScale
            title="How confident do you feel in managing issues related to the following topics:"
            options={confidentManagingIssues}
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
          />

          <Rating
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            title={"Overall, how would you rate this program?"}
            options={programRatingOptions}
            stateValue={"workshopsRating"}
          />

          <RadioGroup
            options={familiarOptions}
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            title="How familiar were you with the content of this program before attending?"
            stateValue={"workshopContentFamiliar"}
            // IdStateValue={'programId'}
          />

          <Rating
            options={usefullOptions}
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            title="How useful did you find the content of this program?"
            stateValue={"workshopsUseful"}
            // IdStateValue={'programId'}
          />

          <TextArea
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            title="What did you find most useful about this program?"
            stateValue={"workshopsMostUseful"}
          />
          <TextArea
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            title={"What did you find least useful about this program?"}
            stateValue={"workshopLeastUseful"}
          />

          <RadioGroup
            options={satisfiedScaleOptions}
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            title="How likely are you to use what you have learned in this program?"
            stateValue={"workshopLikelyUseInfoLearned"}
            // IdStateValue={'programId'}
          />

          <RadioGroup
            options={satisfiedScaleOptions}
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            title="How likely are you to still discuss the topics learned with your friends?"
            stateValue={"likelyDiscussWithFriends6MonthsAfter"}
            // IdStateValue={'programId'}
          />

          <TextArea
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            title="What do you plan to use from this program?"
            stateValue={"workshopsPlanToUseInfoLearned"}
          />

          <TextArea
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            title="What, if anything, could be improved about this program?"
            stateValue={"workshopShouldChange"}
          />

          <TextArea
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            title="Additional comments"
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
  const [fbos] = await Promise.all([
    /*     fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/events/${id}`).then((r) =>
      r.json()
    ), */
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/fbos`).then((r) => r.json()),
  ]);
  return {
    props: {
      fbos: fbos,
    },
  };
};
