import { useState } from 'react';
import ExternalSurveyHeader from '../../../components/ExternalSurveyHeader'
import Loader from '../../../components/Loader';
import ResponseStatusModal from '../../../components/ResponseStatusModal';

import RadioGroup from "../../../components/yip/RadioGroup";
import TextArea from "../../../components/yip/TextArea";
import TimeComponent from "../../../components/yip/TimeComponent";
import InputValidationAddress from '../../../components/InputValidationAddress';
import DateComponent from "../../../components/yip/DateComponent";
import OnlineOrInPerson from "../../../components/yip/OnlineOrInPerson";

export default function preWorkshop() {
    const [showResponseStatus, setShowResponseStatus] = useState()
    const [responseStatus, setResponseStatus] = useState()
    const [loading, setLoading] = useState()
    const [surveyData, setSurveyData] = useState({
        
        participantBorough: '',

        participantHivKnowledge: '',
        deliveryPartner: '',
        participantZipCode: '',
        raceId: '',
        participantRace: '',
        participantRaceOther: '',
        ethnicityId: '',
        participantEthnicity: '',
        participantEthnicityOther: '',
        genderId: '',
        participantGender: '',
        participantGenderOther: '',
        orientationId: '',
        participantOrientation: '',
        participantOrientationOther: '',
        participantReferral: '',
        participantReferralOther: '',
        participantSuggestions: '',
        participantConsentKnowledge: '',
        yipId: '',
        confidentCondom: '',
        confidentRelationshipsCommunicating: '',
        noGymBodyImage: '',
        fitnessIsGymDaily: '',
        familiarHealthyFoodPlate: '',
        allBodiesBeautifulPowerfulCapable: '',
        confidentMentalHealthToolsResources: '',
        keepTrackExpenses: '',
        putMoneyAside: '',
        comparisonShop: '',
        confidentMonthlyBudget: '',
        preparationHelpsGoals: '',
        hasMentor: '',
        confidentFindingMentor: '',
        participantGrade: '',
        participantGradeOther: '',
        participantAge: '',
        speakingClearlyImportantForCommunication: '',
        seeSidesInConflictsHelps: '',
        twoCondomsGoodIdea: '',
        openCondomsWithTeeth: '',
        dontSuspectStiStillTest: '',
        trustFriendsHealthAdvice: '',
        trustFamilyHealthAdvice: '',
        trustCommunityHealthServicesHealthAdvice: '',
        trustTeachersHealthAdvice: '',
        trustSocialMediaHealthAdvice: '',
        trustNursesHealthAdvice: '',
        trustDoctorsHealthAdvice: '',
        trustTvAndNewsHealthAdvice: '',
        trustGovernmentDepartmentsHealthAdvice: '',
        confidentLookingAfterMentalMyHealth: '',
        confidentNutritionAndWellness: '',
        confidentNegotiatingContraceptives: '',
        confidentPreventingHivAndStis: '',
        confidentJobAndCareerChoices: '',
        expectedBenefits: '',
        partnerCheckPhoneEmail: '',
    })
    const grades = [
        {

        },
    ]
    return (
        <>
        {/*   <Layout showStatusHeader={true}> */}
            {/* <ToastContainer autoClose={20000} /> */}
            
            <ExternalSurveyHeader pageTitle={'YIP Pre-Workshop Survey'} />
            <div className="container mx-auto border-black rounded-lg mb-10">
              <div className="register-envent-form-container  grid gap-10 bg-white  rounded-lg px-7 my-10 ">
              <RadioGroup 
                options={[{id:3,value:'NYS CMP'},{id:1,value:'OEF'}]} 
                surveyForm={eventForm}
                setSurveyForm={setEventForm}
                title='What grade are you in?'
                stateValue={'participantGrade'}
                IdStateValue={'programId'}

            />
              </div>
            </div>
            <div className="flex justify-center">{loading && <Loader />}</div>
            <div className="flex justify-center my-10">
             {loading? null:<button
                className="py-2 px-5 flex items-center rounded bg-black text-white font-semibold"
                // onClick={submitEventForm}
                 >
                Submit
              </button> } 
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

