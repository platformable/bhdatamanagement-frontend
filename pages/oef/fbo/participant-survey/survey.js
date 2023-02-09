import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { NYSZipCodesAndBoroughs } from "../../../../utils/sharedData";

import { ParticipantSurveySection1 } from "../../../../components/oef-participant-event-survey/ParticipantSurveySection1";
import { ParticipantSurveySection2 } from "../../../../components/oef-participant-event-survey/ParticipantSurveySection2";
import { ParticipantSurveySection3 } from "../../../../components/oef-participant-event-survey/ParticipantSurveySection3";
import { ParticipantSurveySection32 } from "../../../../components/oef-participant-event-survey/ParticipantSurveySection32";
import { ParticipantSurveySection33 } from "../../../../components/oef-participant-event-survey/ParticipantSurveySection33";
import { ParticipantSurveySection4 } from "../../../../components/oef-participant-event-survey/ParticipantSurveySection4";
import { ParticipantSurveySection5 } from "../../../../components/oef-participant-event-survey/ParticipantSurveySection5";
import { ParticipantSurveySection6 } from "../../../../components/oef-participant-event-survey/ParticipantSurveySection6";
import { ParticipantSurveySection35 } from "../../../../components/oef-participant-event-survey/ParticipantSurveySection35";
import ParticipantSurveySection36 from "../../../../components/oef-participant-event-survey/ParticipantSurveySection36";

const Survey = ({ event, fbos }) => {
  const [showDemographicsForm, setShowDemographicsForm] = useState(false);
  const [error, setError] = useState("");

  const notifyMessage = () => {
    toast.success("Saving", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  console.log("data", event);

  const [surveyForm, setSurveyForm] = useState({
    deliveryPartner: "",
    programName: "OEF",
    eventDate: new Date().toLocaleDateString(),
    programID: 1,
    participantZipCode: 0,
    ageID: 0,
    participantAgeRange: "",
    raceID: [],
    participantRace: [],
    ethnicityID: 0,
    participantEthnicity: "",
    genderID: 0,
    //participantSexualIdentity: "",
    orientationID: 0,
    participantOrientation: "",
    participantOrientationOther: "",
    participantReferral: "",
    participantReferralOther: "",
    participantSuggestions: "",
    participantRaceOther:"",
    participantEthnicityOther:"",
    participantGenderOther:"",
    surveyName:'oef-participant'
  });
  console.log("form", surveyForm);

  const router = useRouter();


  const handleDemographicsSurvey = (e) => {
    e.target.value === "true"
      ? setShowDemographicsForm((prev) => true)
      : setShowDemographicsForm((prev) => false);
  };

  // const getCity = (zipcode, array) => {
  //   const searchZipcode = array.filter((code) => code.zipcode === zipcode);
  //   if (searchZipcode.length > 0) {
  //     setSurveyForm({
  //       ...surveyForm,
  //       participantBorough: searchZipcode[0].borought,
  //     });
  //   } else {
  //     setSurveyForm({ ...surveyForm, participantBorough: "" });
  //   }
  // };

  const submitParticipantSurvey = async () => {
    setError('')

    const isEmpty = Object.entries(surveyForm).some(([key, value]) =>
      key === "participantReferralOther" || key === "participantSuggestions" || key === "participantGenderOther" || key === "participantRaceOther" || key === "participantEthnicityOther" || key === "participantRaceOther" || key === "participantOrientationOther"

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
 
        <div className="h-88 py-10 container mx-auto mt-3 flex flex-col items-center rounded-lg border-black">
          <h1 className="text-center font-black">
            HIV Outreach Event Participant Sign-in Sheet
          </h1>
          <div className="flex md:flex-row flex-col items-center gap-5 mt-5">
            <h2 className="pt-2">In partnership with</h2>
            <img
              src="/main/BH_logo.svg"
              alt="black health data app management logo"
              width={300}
              className=""
            />{" "}
          </div>
        </div>
        <ToastContainer autoClose={1500} />
        
        <main className="container mx-auto  md:px-0 px-5">
          {/*   <div
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
          </div> */}
          <div className="form-body border-black my-10">
            <ParticipantSurveySection35
              surveyForm={surveyForm}
              setSurveyForm={setSurveyForm}
            />
            <ParticipantSurveySection36
              surveyForm={surveyForm}
              setSurveyForm={setSurveyForm}
              fbos={fbos}
            />
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

          <div className="flex flex-col items-center gap-3 justify-center my-10">
            <button
              className="py-2 px-5 flex items-center rounded bg-black text-white font-semibold"
              /* onClick={(e)=>{router.push("https://nblch.org/")}} */
              onClick={submitParticipantSurvey}
            >
              Submit
            </button>
            {error && (
              <center className="text-red-500 text-lg font-bold">
                {error}
              </center>
            )}
          </div>
        </main>

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
