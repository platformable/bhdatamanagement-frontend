import { useState } from "react";
import ExternalSurveyHeader from "../../../components/ExternalSurveyHeader";
import Loader from "../../../components/Loader";
import ResponseStatusModal from "../../../components/ResponseStatusModal";

import RadioGroup from "../../../components/yip/RadioGroup";
import TextArea from "../../../components/yip/TextArea";
import TimeComponent from "../../../components/yip/TimeComponent";
import InputValidationAddress from "../../../components/InputValidationAddress";
import DateComponent from "../../../components/yip/DateComponent";
import OnlineOrInPerson from "../../../components/yip/OnlineOrInPerson";
OneColumnCheckbox;
import OneColumnCheckbox from "../../../components/yip/OneColumnCheckbox";
import LeichardtScale from "../../../components/yip/LeichardtScale";
import Rating from "../../../components/yip/Rating";

export default function preWorkshop() {
  const [showResponseStatus, setShowResponseStatus] = useState();
  const [responseStatus, setResponseStatus] = useState();
  const [loading, setLoading] = useState();
  const [eventForm, setEventForm] = useState({
    participantBorough: "",

    participantHivKnowledge: [],
    deliveryPartner: "",
    participantZipCode: "",
    raceId: "",
    participantRace: "",
    participantRaceOther: "",
    ethnicityId: "",
    participantEthnicity: "",
    participantEthnicityOther: "",
    genderId: "",
    participantGender: "",
    participantGenderOther: "",
    orientationId: "",
    participantOrientation: "",
    participantOrientationOther: "",
    participantReferral: "",
    participantReferralOther: "",
    participantSuggestions: "",
    participantConsentKnowledge: "",
    yipId: "",
    confidentCondom: "",
    confidentRelationshipsCommunicating: "",
    noGymBodyImage: "",
    fitnessIsGymDaily: "",
    familiarHealthyFoodPlate: "",
    allBodiesBeautifulPowerfulCapable: "",
    confidentMentalHealthToolsResources: "",
    keepTrackExpenses: "",
    putMoneyAside: "",
    comparisonShop: "",
    confidentMonthlyBudget: "",
    preparationHelpsGoals: "",
    hasMentor: "",
    confidentFindingMentor: "",
    participantGrade: "",
    participantGradeOther: "",
    participantAge: "",
    speakingClearlyImportantForCommunication: "",
    seeSidesInConflictsHelps: "",
    twoCondomsGoodIdea: "",
    openCondomsWithTeeth: "",
    dontSuspectStiStillTest: "",
    trustFriendsHealthAdvice: "",
    trustFamilyHealthAdvice: "",
    trustCommunityHealthServicesHealthAdvice: "",
    trustTeachersHealthAdvice: "",
    trustSocialMediaHealthAdvice: "",
    trustNursesHealthAdvice: "",
    trustDoctorsHealthAdvice: "",
    trustTvAndNewsHealthAdvice: "",
    trustGovernmentDepartmentsHealthAdvice: "",
    confidentLookingAfterMentalMyHealth: "",
    confidentNutritionAndWellness: "",
    confidentNegotiatingContraceptives: "",
    confidentPreventingHivAndStis: "",
    confidentJobAndCareerChoices: "",
    expectedBenefits: "",
    partnerCheckPhoneEmail: "",
    managingHealthyRelationships:"",
    confidentCommunicatingEffectively:""
  });
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


const confidentManagingIssues =[
  {
  id:1,
  question:'Managing healthy relationships',
  stateValue:'managingHealthyRelationships',
  options:confidentScaleOptions
},
{
  id:2,
  question:'Communicating effectively',
  stateValue:'confidentCommunicatingEffectively',
  options:confidentScaleOptions
},
{
  id:3,
  question:'Looking after my mental health, nutrition and wellness',
  stateValue:'confidentMentalHealthToolsResources',
  options:confidentScaleOptions
},
{
  id:3,
  question:'Negotiating contraceptives',
  stateValue:'confidentNegotiatingContraceptives',
  options:confidentScaleOptions
},
{
  id:3,
  question:'Preventing risks of HIV and STIs',
  stateValue:'confidentPreventingHivAndStis',
  options:confidentScaleOptions
},
{
  id:3,
  question:'Making Job and Career Choices',
  stateValue:'confidentJobAndCareerChoices',
  options:confidentScaleOptions
}

]

console.log("eventForm",eventForm)

  return (
    <>
      {/*   <Layout showStatusHeader={true}> */}
      {/* <ToastContainer autoClose={20000} /> */}

      <ExternalSurveyHeader pageTitle={"YIP Pre-Workshop Survey"} />
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
            options={selfCareOptions}
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            title="Are you aware of the different ways to practice self-care routine?"
            stateValue={"selfCareAwareness"}
            // IdStateValue={'programId'}
          />

          <RadioGroup
            options={mentalIllnessCausesOptions}
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            title="Mental illness is caused by:"
            stateValue={"mentalIllnessCausedBy"}
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
            stateValue={"deleteFromInternetGoneForever"}
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

          <OneColumnCheckbox
            options={riskSexuallHivOptions}
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            title="Which of the following can put you at risk for sexually transmitted HIV? (Select all that apply.)"
            stateValue={"participantHivKnowledge"}
          />


          <LeichardtScale
            title="Are you aware of the different ways to practice self-care routine?"
            options={confidentManagingIssues}
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
          />
        </div>
      </div>
      <div className="flex justify-center">{loading && <Loader />}</div>
      <div className="flex justify-center my-10">
        {loading ? null : (
          <button
            className="py-2 px-5 flex items-center rounded bg-black text-white font-semibold"
            //className="py-2"
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
