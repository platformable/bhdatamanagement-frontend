import React, { useState } from "react";
import { useRouter } from 'next/router'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from "../../../../components/Layout";
import PageTopHeading from "../../../../components/PageTopHeading";
import axios from "axios";

import {ParticipantSurveySection1} from "../../../../components/participant-event-survey/ParticipantSurveySection1";
import { ParticipantSurveySection10 } from "../../../../components/participant-event-survey/ParticipantSurveySection10";
import { ParticipantSurveySection11 } from "../../../../components/participant-event-survey/ParticipantSurveySection11";
import { ParticipantSurveySection12 } from "../../../../components/participant-event-survey/ParticipantSurveySection12";
import { ParticipantSurveySection13 } from "../../../../components/participant-event-survey/ParticipantSurveySection13";
import { ParticipantSurveySection14 } from "../../../../components/participant-event-survey/ParticipantSurveySection14";
import { ParticipantSurveySection15 } from "../../../../components/participant-event-survey/ParticipantSurveySection15";
import { ParticipantSurveySection16 } from "../../../../components/participant-event-survey/ParticipantSurveySection16";
import { ParticipantSurveySection17 } from "../../../../components/participant-event-survey/ParticipantSurveySection17";
import { ParticipantSurveySection18 } from "../../../../components/participant-event-survey/ParticipantSurveySection18";
import { ParticipantSurveySection19 } from "../../../../components/participant-event-survey/ParticipantSurveySection19";
import { ParticipantSurveySection2 } from "../../../../components/participant-event-survey/ParticipantSurveySection2";
import { ParticipantSurveySection20 } from "../../../../components/participant-event-survey/ParticipantSurveySection20";
import { ParticipantSurveySection21 } from "../../../../components/participant-event-survey/ParticipantSurveySection21";
import { ParticipantSurveySection22 } from "../../../../components/participant-event-survey/ParticipantSurveySection22";
import { ParticipantSurveySection23 } from "../../../../components/participant-event-survey/ParticipantSurveySection23";
import { ParticipantSurveySection24 } from "../../../../components/participant-event-survey/ParticipantSurveySection24";
import { ParticipantSurveySection25 } from "../../../../components/participant-event-survey/ParticipantSurveySection25";
import { ParticipantSurveySection26 } from "../../../../components/participant-event-survey/ParticipantSurveySection26";
import { ParticipantSurveySection27 } from "../../../../components/participant-event-survey/ParticipantSurveySection27";
import { ParticipantSurveySection28 } from "../../../../components/participant-event-survey/ParticipantSurveySection28";
import { ParticipantSurveySection29 } from "../../../../components/participant-event-survey/ParticipantSurveySection29";
import { ParticipantSurveySection3 } from "../../../../components/participant-event-survey/ParticipantSurveySection3";
import { ParticipantSurveySection30 } from "../../../../components/participant-event-survey/ParticipantSurveySection30";
import { ParticipantSurveySection31 } from "../../../../components/participant-event-survey/ParticipantSurveySection31";
import { ParticipantSurveySection32 } from "../../../../components/participant-event-survey/ParticipantSurveySection32";
import { ParticipantSurveySection33 } from "../../../../components/participant-event-survey/ParticipantSurveySection33";
import { ParticipantSurveySection4 } from "../../../../components/participant-event-survey/ParticipantSurveySection4";
import { ParticipantSurveySection5 } from "../../../../components/participant-event-survey/ParticipantSurveySection5";
import { ParticipantSurveySection6 } from "../../../../components/participant-event-survey/ParticipantSurveySection6";
import { ParticipantSurveySection7 } from "../../../../components/participant-event-survey/ParticipantSurveySection7";
import { ParticipantSurveySection8 } from "../../../../components/participant-event-survey/ParticipantSurveySection8";
import { ParticipantSurveySection9 } from "../../../../components/participant-event-survey/ParticipantSurveySection9";

const Survey = ({data}) => {

  const notifyMessage= ()=>{
    toast.success("Survey saved!", {
      position: toast.POSITION.TOP_CENTER,
    });
   }

  console.log("data",data)

  const [surveyForm, setSurveyForm] = useState({
    eventID:data[0]?.id,
    eventName:data[0]?.eventname,
    eventDate:data[0]?.eventdate,
    participantZipCode: 0,
    ageID: 0,
    participantAgeRange: "",
    raceID: [],
    participantRace: [],
    ethnicityID: 0,
    participantEthnicity: "",
    genderID: 0,
    participantGender: "",
    orientationID: 0,
    participantOrientation: "",
    participantOrientationOther: "",
    roleID: 0,
    participantRole: "",
    educationID: 0,
    participantEducation: "",
    employmentID: [],
    participantEmployment: [],
    livingID: 0,
    participantLiving: "",
    housingID: 0,
    participantHousing: "",
    participantFoodInsecurity1: "",
    participantFoodInsecurity2: "",
    insuranceID: 0,
    participantInsurance: "",
    participantHealth: "",
    participantPCP: "",
    participantRoutine: "",
    participantComfortSex: 0,
    participantComfortMentalHealth: 0,
    participantComfortDiet: 0,
    participantComfortExercise: 0,
    participantComfortHealth: 0,
    participantComfortMedications: 0,
    participantComfortScreens: 0,
    participantComfortSubstances: 0,
    participantRelationship: "",
    participantPHQ2a: "",
    participantPHQ2b: "",
    participantHIVTest: "",
    participantHIV12: "",
    participantHIVKnowledge: [],
    participantCondomUse: "",
    participantPrEPKnowledge: "",
    participantPrEPUse: "",
    participantUKnowledge: "",
    participantTestResourceKnowledge: "",
    participantPRePResourceKnowledge: [],
    participantPRePResourceKnowledgeOther:"",
    interestHIV: false,
    interestPrEP: false,
    interestHepC: false,
    interestImmigration: false,
    interestScreens: false,
    interestVaccines: false,
    interestMentalHealth: false,
    interestSubstance: false,
    interestChronic: false,
    interestOther: "",
    participantVote: false,
    participantReferral: [],
    participantReferralOther:"",
    participantSuggestions: "",
  })
  console.log("form",surveyForm)

  const router = useRouter()


  const submitParticipantSurvey = async () => {


 
    // if (!isEmpty) {
      axios
        .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/participant_event_outputs/create`, surveyForm)
        .then((response) => {
          if (response.data.statusText === "OK") {
            // setResponseStatus({
            //   success: true,
            //   statusMessage: "Your Event has been saved",
            // });
            //setShowResponseStatus(!showResponseStatus);
            notifyMessage()
            /* setTimeout(()=>{
              router.back()
            },1500) */
          }
        })
        .catch(function (error) {
          // setResponseStatus({
          //   success: false,
          //   statusMessage: "Request Failed",
          // });
          // setShowResponseStatus(!showResponseStatus);
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

  return (
    <>
      <Layout showStatusHeader={false}>
        <ToastContainer autoClose={1500} />
        <PageTopHeading
          backBtn={false}
          dashboardBtn={false}
          pageTitle={"Participant event survey"}
        />

        <div id="event" className="container mx-auto rounded my-5 border-black-lg">
          <div className="grid grid-cols-2 bg-black text-white justify-between p-5 rounded-tl-lg rounded-tr-lg">
            <div>Event name</div>
            <div className="flex justify-end">Event date</div>
          </div>
          <div className="grid grid-cols-2  justify-between p-5 ">
            <div className="text-black">{data[0]?.eventname}</div>
            <div className="flex justify-end">{new Date(data[0]?.eventdate).toLocaleDateString('en-US',{year:'numeric',month:'numeric',day:'numeric'})}</div>
          </div>
        </div>
        <div className="container mx-auto border-black rounded-lg mb-10">
          <ParticipantSurveySection1 surveyForm={surveyForm} setSurveyForm={setSurveyForm}/>
          <ParticipantSurveySection2 surveyForm={surveyForm} setSurveyForm={setSurveyForm}/>
          <ParticipantSurveySection3 surveyForm={surveyForm} setSurveyForm={setSurveyForm}/>
          <ParticipantSurveySection4 surveyForm={surveyForm} setSurveyForm={setSurveyForm}/>
          <ParticipantSurveySection5 surveyForm={surveyForm} setSurveyForm={setSurveyForm}/>
          <ParticipantSurveySection6 surveyForm={surveyForm} setSurveyForm={setSurveyForm}/>
          <ParticipantSurveySection7 surveyForm={surveyForm} setSurveyForm={setSurveyForm}/>
          <ParticipantSurveySection8 surveyForm={surveyForm} setSurveyForm={setSurveyForm}/>
          <ParticipantSurveySection9 surveyForm={surveyForm} setSurveyForm={setSurveyForm}/>
          <ParticipantSurveySection10 surveyForm={surveyForm} setSurveyForm={setSurveyForm}/>
          <ParticipantSurveySection11 surveyForm={surveyForm} setSurveyForm={setSurveyForm}/>
          <ParticipantSurveySection12 surveyForm={surveyForm} setSurveyForm={setSurveyForm}/>
          <ParticipantSurveySection13 surveyForm={surveyForm} setSurveyForm={setSurveyForm}/>
          <ParticipantSurveySection14 surveyForm={surveyForm} setSurveyForm={setSurveyForm}/>
          <ParticipantSurveySection15 surveyForm={surveyForm} setSurveyForm={setSurveyForm}/>
          <ParticipantSurveySection16 surveyForm={surveyForm} setSurveyForm={setSurveyForm}/>
          <ParticipantSurveySection17 surveyForm={surveyForm} setSurveyForm={setSurveyForm}/>
          <ParticipantSurveySection18 surveyForm={surveyForm} setSurveyForm={setSurveyForm}/>
          <ParticipantSurveySection19 surveyForm={surveyForm} setSurveyForm={setSurveyForm}/>
          <ParticipantSurveySection20 surveyForm={surveyForm} setSurveyForm={setSurveyForm}/>
          <ParticipantSurveySection21 surveyForm={surveyForm} setSurveyForm={setSurveyForm}/>
          <ParticipantSurveySection22 surveyForm={surveyForm} setSurveyForm={setSurveyForm}/>
          <ParticipantSurveySection23 surveyForm={surveyForm} setSurveyForm={setSurveyForm}/>
          <ParticipantSurveySection24 surveyForm={surveyForm} setSurveyForm={setSurveyForm}/>
          <ParticipantSurveySection25 surveyForm={surveyForm} setSurveyForm={setSurveyForm}/>
          <ParticipantSurveySection26 surveyForm={surveyForm} setSurveyForm={setSurveyForm}/>
          <ParticipantSurveySection27 surveyForm={surveyForm} setSurveyForm={setSurveyForm}/>
          <ParticipantSurveySection28 surveyForm={surveyForm} setSurveyForm={setSurveyForm}/>
          <ParticipantSurveySection29 surveyForm={surveyForm} setSurveyForm={setSurveyForm}/>
          <ParticipantSurveySection30 surveyForm={surveyForm} setSurveyForm={setSurveyForm}/>
          <ParticipantSurveySection31 surveyForm={surveyForm} setSurveyForm={setSurveyForm}/>
          <ParticipantSurveySection32 surveyForm={surveyForm} setSurveyForm={setSurveyForm}/>
          <ParticipantSurveySection33 surveyForm={surveyForm} setSurveyForm={setSurveyForm}/>
          

         
        </div>

        <div className="flex justify-center">
        <h3>Thank you! Your answers help us plan our services, demonstrate our focus on our community, and help us meet our funding commitments.</h3>
        </div>

        <div className="flex justify-center my-10">
        
          <button
            className="py-2 px-5 flex items-center rounded bg-black text-white font-semibold"
            /* onClick={(e)=>{router.push("https://nblch.org/")}} */
            onClick={submitParticipantSurvey}
          >
            Save
          </button>
          </div>

         
      </Layout>
    </>
  );
};

export default Survey;

export async function getServerSideProps(req) {
  let {id}= req.params
  // Fetch data from external API
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/events/${id}`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}