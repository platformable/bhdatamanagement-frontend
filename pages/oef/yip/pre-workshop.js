import { useState,useEffect } from "react";
import { useRouter } from "next/router";
import ExternalSurveyHeader from "../../../components/ExternalSurveyHeader";
import Loader from "../../../components/Loader";
import ResponseStatusModal from "../../../components/ResponseStatusModal";
import axios from "axios";
import RadioGroup from "../../../components/yip/RadioGroup";

import Zipcode from "../../../components/yip/Zipcode";
import NumberLimits from "../../../components/yip/NumberLimits";
import { ParticipantSurveySection3 } from "../../../components/yip/ParticipantSurveySection3";
import { ParticipantSurveySection4 } from "../../../components/yip/ParticipantSurveySection4";
import { ParticipantSurveySection5 } from "../../../components/yip/ParticipantSurveySection5";
import { ParticipantSurveySection6 } from "../../../components/yip/ParticipantSurveySection6";
import { ParticipantSurveySection32 } from "../../../components/yip/ParticipantSurveySection32";
import RadiogroupList from "../../../components/yip/RadiogroupList";
import DeliveryPartner from "../../../components/yip/DeliveryPartner";
import LeichardtScale from "../../../components/yip/LeichardtScale";
import OneColumnCheckbox from "../../../components/yip/OneColumnCheckbox";

import { NYSZipCodesAndBoroughs } from "../../../utils/sharedData";


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function preWorkshop({ fbos }) {

  const router = useRouter();
  const [showResponseStatus, setShowResponseStatus] = useState();
  const [responseStatus, setResponseStatus] = useState();
  const [loading, setLoading] = useState();
  const [eventForm, setEventForm] = useState({
    participantBorough: "",
    participantHivKnowledge: "",
    deliveryPartner: "",
    deliveryPartnerOther: "",
    surveyCreated:new Date(),
    participantZipCode: "",
    raceID: "",
    participantRace: "",
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
    participantSuggestions: "",
    consentCanBeTakenAway: "",
    yipId: 4,
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
    surveyName:'yip-pre-workshop',
    awareOptionsEducationCareer:""
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

  const radiosList2 = [
    {
      value: "phoneActiveListening",
      title:
        "Being on your phone while a friend is talking is an example of active listening",
    },
    {
      value: "participantListening",
      title:
        "When you're listening to someone, the best thing to do is think about what you're going to say next",
    },
    {
      value: "goodCommunicationImportantOnlyPublicSpeakers",
      title:
        "Good communication is only important for people who do public speaking, like teachers or politicians",
    },
    {
      value: "poorCommunicationCanRuinRelationships",
      title: "Poor communication can ruin relationships",
    },
    {
      value: "cyberBullyingOnlyNegativeSocialMedia",
      title: "Cyber bullying is the only negative part of social media",
    },
    {
      value: "deleteFromInternetGoneForever",
      title: "When you delete something off the Internet, it’s gone forever",
    },
  ];

  const radiosList3 = [
    {
      value: "preparationHelpsGoals",
      title:
        "Preparing for obstacles, instead of ignoring them, will help me achieve my goals",
    },
    {
      value: "oneProvenPathToSuccess",
      title: "There is one proven path for success",
    },
    {
      value: "shouldKnowFutureCareerInHighSchool",
      title:
        "You should know exactly what you want to do for a career when you leave high school",
    },
    {
      value: "hbcuMeaningKnowledge",
      title: "HBCU stands for Historically Black College and University",
    },
  ];

  const radiosList4 = [
    {value: 'stiInfectionsAgeRange', title: "Almost half of all sexually transmitted infections occur amongst people aged 15-24 years old"},
    {value: 'knowHaveSti', title: "You will always know when you have an STI"},
    {value: 'pep28DaysAfter', title: "Post exposure prophylaxis (PEP) can be taken any time within 28 days after unprotected sex"},
    {value: 'condomWalletHandy', title: "It's always handy to keep a condom in your wallet"},
    {value: 'emergencyContraceptionAfterSex', title: "Emergency contraception can be taken any time within 5 days after unprotected sex"},

  ]

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

  const confidentManagingIssues = [
    {
      id: 1,
      question: "Managing healthy relationships",
      stateValue: "managingHealthyRelationships",
      options: confidentScaleOptions,
    },
    {
      id: 2,
      question: "Communicating effectively",
      stateValue: "confidentCommunicatingEffectively",
      options: confidentScaleOptions,
    },
    {
      id: 3,
      question: "Looking after my mental health, nutrition and wellness",
      stateValue: "confidentMentalHealthToolsResources",
      options: confidentScaleOptions,
    },
    {
      id: 3,
      question: "Negotiating contraceptives",
      stateValue: "confidentNegotiatingContraceptives",
      options: confidentScaleOptions,
    },
    {
      id: 3,
      question: "Preventing risks of HIV and STIs",
      stateValue: "confidentPreventingHivAndStis",
      options: confidentScaleOptions,
    },
    {
      id: 3,
      question: "Making Job and Career Choices",
      stateValue: "confidentJobAndCareerChoices",
      options: confidentScaleOptions,
    },
  ];



  const getCity = (zipcode, array) => {
    const searchZipcode = array.filter((code) => code.zipcode === zipcode);
    if (searchZipcode.length > 0) {
      setEventForm({ ...eventForm, participantBorough: searchZipcode[0].borought });
    } else {
      setEventForm({ ...eventForm, participantBorough: "" });
    }
  };


  useEffect(() => {

    getCity(eventForm.participantZipCode, NYSZipCodesAndBoroughs);
  }, [eventForm.participantZipCode,
  ]);


  const notifyMessage = () => {
    toast.success("Survey saved!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const submitParticipantSurvey = async () => {
    // if (!isEmpty) {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/participant_event_outputs/oef-pre-workout-survey/create`,
        eventForm
      )
      .then((response) => {
        if (response.data.statusText === "OK") {

          notifyMessage();
          setTimeout(()=>{
            router.push("https://nblch.org")

            },1000) 
        }
      })
      .catch(function (error) {
        console.error("error: ", error);
      });

  };


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
          <NumberLimits
            stateValue={"participantAge"}
            title={"What is your age?"}
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
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
            />
          )}
          <RadiogroupList
            header='Please reply with "True" or "False" to each of the following statements:'
            questions={radioQuestionsList}
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
          />

     {/*      <RadioGroup
            options={[...grades]}
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            title="What grade are you in?"
            stateValue={"participantGrade"}
            // IdStateValue={'programId'}
          /> */}

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

          <RadiogroupList
            header='Please reply with "True" or "False" to each of the following statements:'
            questions={radiosList2}
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
          />

          <RadioGroup
            options={smartGoalsOptions}
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
            title="Are you aware about the different options you have for your education and career?"
            stateValue={"awareOptionsEducationCareer"}
            // IdStateValue={'programId'}
          />

          <RadiogroupList
            header='Please reply with "True" or "False" to each of the following statements:'
            questions={radiosList3}
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
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

          <RadiogroupList
            header='Please reply with "True" or "False" to each of the following statements:'
            questions={radiosList4}
            surveyForm={eventForm}
            setSurveyForm={setEventForm}
          />

          <LeichardtScale
            title="How confident do you feel in managing issues related to the following topics:"
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
            className="py-2 px-5 flex items-center rounded bg-black text-white font-semibold text"
            //className="py-2"
            onClick={()=>submitParticipantSurvey()}
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
    //   fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/events/${id}`).then((r) =>
    //     r.json()
    //   ),
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/fbos`).then((r) => r.json()),
  ]);
  return {
    props: {
      // event: event,
      fbos: fbos,
    },
  };
};
