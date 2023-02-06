import React, { useState ,useEffect} from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import Layout from "../../../../components/Layout";
//import PageTopHeading from "../../../../components/PageTopHeading";
import axios from "axios";
import { NYSZipCodesAndBoroughs } from "../../../../../utils/sharedData";

import { ParticipantSurveySection1 } from "../../../../../components/participant-event-survey/ParticipantSurveySection1";
import { ParticipantSurveySection10 } from "../../../../../components/participant-event-survey/ParticipantSurveySection10";
import { ParticipantSurveySection11 } from "../../../../../components/participant-event-survey/ParticipantSurveySection11";
import { ParticipantSurveySection12 } from "../../../../../components/participant-event-survey/ParticipantSurveySection12";
import { ParticipantSurveySection13 } from "../../../../../components/participant-event-survey/ParticipantSurveySection13";
import { ParticipantSurveySection14 } from "../../../../../components/participant-event-survey/ParticipantSurveySection14";
import { ParticipantSurveySection15 } from "../../../../../components/participant-event-survey/ParticipantSurveySection15";
import { ParticipantSurveySection16 } from "../../../../../components/participant-event-survey/ParticipantSurveySection16";
import { ParticipantSurveySection17 } from "../../../../../components/participant-event-survey/ParticipantSurveySection17";
import { ParticipantSurveySection18 } from "../../../../../components/participant-event-survey/ParticipantSurveySection18";
import { ParticipantSurveySection19 } from "../../../../../components/participant-event-survey/ParticipantSurveySection19";
import { ParticipantSurveySection2 } from "../../../../../components/participant-event-survey/ParticipantSurveySection2";
import { ParticipantSurveySection20 } from "../../../../../components/participant-event-survey/ParticipantSurveySection20";
import { ParticipantSurveySection21 } from "../../../../../components/participant-event-survey/ParticipantSurveySection21";
import { ParticipantSurveySection22 } from "../../../../../components/participant-event-survey/ParticipantSurveySection22";
import { ParticipantSurveySection23 } from "../../../../../components/participant-event-survey/ParticipantSurveySection23";
import { ParticipantSurveySection24 } from "../../../../../components/participant-event-survey/ParticipantSurveySection24";
import { ParticipantSurveySection25 } from "../../../../../components/participant-event-survey/ParticipantSurveySection25";
import { ParticipantSurveySection26 } from "../../../../../components/participant-event-survey/ParticipantSurveySection26";
import { ParticipantSurveySection27 } from "../../../../../components/participant-event-survey/ParticipantSurveySection27";
import { ParticipantSurveySection28 } from "../../../../../components/participant-event-survey/ParticipantSurveySection28";
import { ParticipantSurveySection29 } from "../../../../../components/participant-event-survey/ParticipantSurveySection29";
import { ParticipantSurveySection3 } from "../../../../../components/participant-event-survey/ParticipantSurveySection3";
import { ParticipantSurveySection30 } from "../../../../../components/participant-event-survey/ParticipantSurveySection30";
import { ParticipantSurveySection31 } from "../../../../../components/participant-event-survey/ParticipantSurveySection31";
import { ParticipantSurveySection32 } from "../../../../../components/participant-event-survey/ParticipantSurveySection32";
import { ParticipantSurveySection33 } from "../../../../../components/participant-event-survey/ParticipantSurveySection33";
import { ParticipantSurveySection4 } from "../../../../../components/participant-event-survey/ParticipantSurveySection4";
import { ParticipantSurveySection5 } from "../../../../../components/participant-event-survey/ParticipantSurveySection5";
import { ParticipantSurveySection6 } from "../../../../../components/participant-event-survey/ParticipantSurveySection6";
import { ParticipantSurveySection7 } from "../../../../../components/participant-event-survey/ParticipantSurveySection7";
import { ParticipantSurveySection8 } from "../../../../../components/participant-event-survey/ParticipantSurveySection8";
import { ParticipantSurveySection9 } from "../../../../../components/participant-event-survey/ParticipantSurveySection9";
import { ParticipantSurveySection34 } from "../../../../../components/participant-event-survey/ParticipantSurveySection34";

const Survey = ({ data }) => {
  const [showDemographicsForm, setShowDemographicsForm] = useState(false);
  const notifyMessage = () => {
    toast.success("Survey saved!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  console.log("data", data);

  const [surveyForm, setSurveyForm] = useState({
    eventID: data[0]?.id,
    eventName: data[0]?.eventname,
    eventDate: data[0]?.eventdate,
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
    participantPEPKnowledge: "",
    participantPrEPUse: "",
    participantUKnowledge: "",
    participantTestResourceKnowledge: "",
    participantPRePResourceKnowledge: "",
    participantPRePResourceKnowledgeOther: "",
    interestHIV: false,
    interestPrEP: false,
    interestHepC: false,
    interestImmigration: false,
    interestScreens: false,
    interestVaccines: false,
    interestMentalHealth: false,
    interestSubstance: false,
    interestChronic: false,
    participantVote: false,
    participantReferral: "",
    participantReferralOther: "",
    participantSuggestions: "",
    interestOther: false,
    interestOtherText: "",
    participantBorough:""
  });
  console.log("form", surveyForm);

  const router = useRouter();

  const handleDemographicsSurvey = (e) => {
    e.target.value === "true" ? 
    setShowDemographicsForm((prev) => true):
    setShowDemographicsForm((prev) => false)
  };

  const getCity = (zipcode, array) => {
    const searchZipcode = array.filter((code) => code.zipcode === zipcode);
    if (searchZipcode.length > 0) {
      setSurveyForm({ ...surveyForm, participantBorough: searchZipcode[0].borought });
    } else {
      setSurveyForm({ ...surveyForm, participantBorough: "" });
    }
  };


  const submitParticipantSurvey = async () => {
    // if (!isEmpty) {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/participant_event_outputs/create`,
        surveyForm
      )
      .then((response) => {
        if (response.data.statusText === "OK") {
          /* setResponseStatus({
            success: true,
            statusMessage: "Your Event has been saved",
          });
          setShowResponseStatus(!showResponseStatus); */
          notifyMessage();
          setTimeout(()=>{
            router.push("https://nblch.org")

            },1000) 
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

  useEffect(() => {

    getCity(surveyForm.participantZipCode, NYSZipCodesAndBoroughs);
  }, [surveyForm.participantZipCode,
  ]);

  return (
    <>
      <div>
        <div className="h-88 flex flex-col items-center grandient-violet">
          <img
            src="/main/BH_logo.svg"
            alt="black health data app management logo"
            width={400}
            className="pt-12"
          />
          <h2 className="leading-tight text-white py-12 text-center">
            <span className="italic">We want to hear from you</span> <br />
            Your answers help us plan our services, demonstrate our focus on our community, <br />
and help us meet our funding commitments <br />
All your answers are completely anonymous, we respect your privacy and thank you for your time and effort

          </h2>
        </div>
        <ToastContainer autoClose={1500} />
        {/* <PageTopHeading
          backBtn={false}
          dashboardBtn={false}
          pageTitle={"Participant event survey"}
        /> */}
        <main className="container mx-auto  md:px-0 px-5">
          <div
            id="event"
            className="container mx-auto rounded my-10 md:h-36 border-dark-violet"
          >
            <div className="grid grid-cols-2 bg-violet font-bold text-white h-12 px-7 items-center rounded-tl-lg rounded-tr-lg">
              <h2 className="text-2xl">Event name</h2>
              <h2 className="flex justify-end text-2xl">Event date</h2>
            </div>
            <div className="grid grid-cols-2 py-6 px-7">
              <h2 className="text-black text-2xl">{data[0]?.eventname}</h2>
              <h2 className="flex justify-end text-2xl">
                {new Date(surveyForm.eventDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                })}
              </h2>
            </div>
          </div>
          <div className="form-body border-dark-violet mb-10">
            <ParticipantSurveySection1
              surveyForm={surveyForm}
              setSurveyForm={setSurveyForm}
            />
            <ParticipantSurveySection2
              surveyForm={surveyForm}
              setSurveyForm={setSurveyForm}
            />
            <ParticipantSurveySection3
              surveyForm={surveyForm}
              setSurveyForm={setSurveyForm}
            />
            <ParticipantSurveySection4
              surveyForm={surveyForm}
              setSurveyForm={setSurveyForm}
            />
            <ParticipantSurveySection5
              surveyForm={surveyForm}
              setSurveyForm={setSurveyForm}
            />
            <ParticipantSurveySection6
              surveyForm={surveyForm}
              setSurveyForm={setSurveyForm}
            />
            <ParticipantSurveySection32
              surveyForm={surveyForm}
              setSurveyForm={setSurveyForm}
            />
            <ParticipantSurveySection23
              surveyForm={surveyForm}
              setSurveyForm={setSurveyForm}
            />
            <ParticipantSurveySection25
              surveyForm={surveyForm}
              setSurveyForm={setSurveyForm}
            />
            <ParticipantSurveySection34
              surveyForm={surveyForm}
              setSurveyForm={setSurveyForm}
            />
            <ParticipantSurveySection27
              surveyForm={surveyForm}
              setSurveyForm={setSurveyForm}
            />
            <ParticipantSurveySection28
              surveyForm={surveyForm}
              setSurveyForm={setSurveyForm}
            />
            <ParticipantSurveySection29
              surveyForm={surveyForm}
              setSurveyForm={setSurveyForm}
            />
            {/* <ParticipantSurveySection7 surveyForm={surveyForm} setSurveyForm={setSurveyForm}/> */}
            <div className="question-body">
              <h2 className="font-black">
                If you have time, could you please answer some further
                demographics and community health needs questions to help us
                better plan future services?
              </h2>
              <div>
                <label>
                  <input
                    type="radio"
                    name="demographicsForm"
                    onChange={handleDemographicsSurvey}
                    value={true}
                  />
                  <p>Yes</p>
                </label>
                <label>
                  <input
                    type="radio"
                    name="demographicsForm"
                    onChange={handleDemographicsSurvey}
                    value={false}
                  />
                  <p>No</p>
                </label>
              </div>
            </div>
            
            {showDemographicsForm && (
              <>
                <ParticipantSurveySection8
                  surveyForm={surveyForm}
                  setSurveyForm={setSurveyForm}
                />
                <ParticipantSurveySection9
                  surveyForm={surveyForm}
                  setSurveyForm={setSurveyForm}
                />
                <ParticipantSurveySection10
                  surveyForm={surveyForm}
                  setSurveyForm={setSurveyForm}
                />
                <ParticipantSurveySection11
                  surveyForm={surveyForm}
                  setSurveyForm={setSurveyForm}
                />
                <ParticipantSurveySection12
                  surveyForm={surveyForm}
                  setSurveyForm={setSurveyForm}
                />
                {/*    <ParticipantSurveySection13 surveyForm={surveyForm} setSurveyForm={setSurveyForm}/> */}
                <ParticipantSurveySection14
                  surveyForm={surveyForm}
                  setSurveyForm={setSurveyForm}
                />
                <ParticipantSurveySection15
                  surveyForm={surveyForm}
                  setSurveyForm={setSurveyForm}
                />
                <ParticipantSurveySection16
                  surveyForm={surveyForm}
                  setSurveyForm={setSurveyForm}
                />
                <ParticipantSurveySection17
                  surveyForm={surveyForm}
                  setSurveyForm={setSurveyForm}
                />
                <ParticipantSurveySection18
                  surveyForm={surveyForm}
                  setSurveyForm={setSurveyForm}
                />
                {/* <ParticipantSurveySection19 surveyForm={surveyForm} setSurveyForm={setSurveyForm}/> */}
                <ParticipantSurveySection20
                  surveyForm={surveyForm}
                  setSurveyForm={setSurveyForm}
                />
                {/* <ParticipantSurveySection21 surveyForm={surveyForm} setSurveyForm={setSurveyForm}/> */}
                {/* <ParticipantSurveySection22 surveyForm={surveyForm} setSurveyForm={setSurveyForm}/> */}
                {/* <ParticipantSurveySection24 surveyForm={surveyForm} setSurveyForm={setSurveyForm}/> */}
                {/* <ParticipantSurveySection26 surveyForm={surveyForm} setSurveyForm={setSurveyForm}/> */}
                <ParticipantSurveySection30
                  surveyForm={surveyForm}
                  setSurveyForm={setSurveyForm}
                />
                <ParticipantSurveySection31
                  surveyForm={surveyForm}
                  setSurveyForm={setSurveyForm}
                />
               
              </>
            )}
            <ParticipantSurveySection33
                  surveyForm={surveyForm}
                  setSurveyForm={setSurveyForm}
                />
          </div>

          <div className="flex justify-center">
            <h3>
              Thank you! Your answers help us plan our services, demonstrate our
              focus on our community, and help us meet our funding commitments.
            </h3>
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
        </main>
      </div>
    </>
  );
};

export default Survey;

export async function getServerSideProps(req) {
  let { id } = req.params;
  // Fetch data from external API
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/events/${id}`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
