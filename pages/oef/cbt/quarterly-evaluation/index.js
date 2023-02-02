import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { NYSZipCodesAndBoroughs } from "../../../../utils/sharedData";


import FboRadioList from "../../../../components/oef-cbt-quarterly-evaluation-survey/FboRadioList";


const Survey = ({ event, fbos }) => {
  const [showDemographicsForm, setShowDemographicsForm] = useState(false);
  const [error, setError] = useState("");

  const notifyMessage = () => {
    toast.success("Survey saved!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  console.log("data", event);

  const [surveyForm, setSurveyForm] = useState({
    participantPrepKnowledge:"",
participantPrepUse:"",
participantPrepResourceKnowledge:"",
participantHivKnowledge:"",
fboPosition:"",
participantCbtActions:"",
participantCreateSurvey:"",
programId:"",
programName:"",
deliveryPartner:"",
participantSurveyTool:"",
participantSurveyGoal:"",
participantConsentKnowledge:"",
participantStiInfectionKnowledge:"",
participantPepUsageKnowledge:"",
participantDataCollecting:"",
participantDataComfort:"",
participantDataUse:"",
participantDataUseOther:"",
participantFboEngagement:"",
participantFboImprove:"",
participantFboFeedbackResponse:"",
participantInfoUnderstandable:"",
participantInfoAccessible:"",
participantCabCreation:"",
participantCabRecruitment:"",
participantCabImpact:"",
participantCabMembers:"",
participantFboStrategy:"",
participantTargetGroups:"",
participantTargetGroupsOther:"",
participantYouthMinistryCreation:"",
participantYouthMinistryRecruitment:"",
participantFboYouth:"",
participantGrantsIdentify:"",
participantGrantsApplied:"",
participantGrantsProcess:"",
participantGrantsMore:"",
participantGrantsSuccess:"",
participantGrantsWhySuccess:"",
participantGrantsLearned:"",
    surveyName:'cbt-quarterly-evaluation',
  });
  console.log("form", surveyForm);

  const router = useRouter();


  const handleDemographicsSurvey = (e) => {
    e.target.value === "true"
      ? setShowDemographicsForm((prev) => true)
      : setShowDemographicsForm((prev) => false);
  };



  const submitParticipantSurvey = async () => {
    setError('')

    const isEmpty = Object.entries(surveyForm).some(([key, value]) =>
      key === "participantReferralOther" || key === "participantSuggestions" || key === "participantSexualIdentityOther" || key === "participantRaceOther" || key === "participantEthnicityOther" || key === "participantRaceOther" || key === "participantOrientationOther"

        ? false
        : value === 0 || value.length === 0
    );
    if (isEmpty) {
      setError("Please complete all fields");
      return;
    } 
    axios
      .post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/participant_event_outputs/oef/participant-event-survey/create`,
        surveyForm
      )
      .then((response) => {
        if (response.data.statusText === "OK") {
          notifyMessage();
          setTimeout(() => {
            router.push(`/oef/fbo/participant-survey/success`);
          }, 1000);
        }
      })
      .catch(function (error) {
        // setResponseStatus({
        //   success: false,
        //   statusMessage: "Request Failed",
        // });
        // setShowResponseStatus(!showResponseStatus);
        setError('Something went wrong, try again')
        console.error("error: ", error);
      });
    //   } else {
    //     setResponseStatus({
    //       success: false,
    //       statusMessage: "Please complete all the fields",
    //     });
    //     setShowResponseStatus(!showResponseStatus);
    //  }
  };

  // useEffect(() => {
  //   getCity(surveyForm.participantZipCode, NYSZipCodesAndBoroughs);
  // }, [surveyForm.participantZipCode]);

  return (
    <>
      <div>
        <div className="h-88 py-10 container mx-auto mt-3 flex flex-col items-center rounded-lg border-black">
          <h1 className="text-center font-black">
            HIV Outreach Event Participant Sign-in Sheet
          </h1>
          <div className="flex items-center gap-5 mt-5">
            <h2 className="pt-2">In partnership with</h2>
            <img
              src="/main/BH_logo.svg"
              alt="black health data app management logo"
              width={400}
              className=""
            />{" "}
          </div>
        </div>
        <ToastContainer autoClose={1500} />
        
        <main className="container mx-auto  md:px-0 px-5">
       
          <div className="form-body border-black my-10">
       
       <FboRadioList surveyForm={surveyForm} setSurveyForm={setSurveyForm} fbos={fbos} title='Which FBO are you from?' stateValue='deliveryPartner'/>
        <RadioGroup surveyForm={surveyForm} setSurveyForm={setSurveyForm} options={roleOptions} title='Which FBO are you from?' stateValue='deliveryPartner'/> 
          </div>

          <div className="flex justify-center">
            <h3>
              Thank you! Your answers help us plan our services, demonstrate our
              focus on our community, and help us meet our funding commitments.
            </h3>
          </div>

          <div className="flex flex-col items-center gap-3 justify-center my-10">
            <button
              className="py-2 px-5 flex items-center rounded bg-black text-white font-semibold"
              /* onClick={(e)=>{router.push("https://nblch.org/")}} */
              onClick={submitParticipantSurvey}
            >
              Save
            </button>
            {error && (
              <center className="text-red-500 text-lg font-bold">
                {error}
              </center>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default Survey;

export const getServerSideProps = async (ctx) => {
  const res = await  fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/fbos`)
  const fbos = await res.json()  
 return {
    props: {
      fbos: fbos,
    },
  };
};
