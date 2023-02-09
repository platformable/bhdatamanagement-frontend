import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { NYSZipCodesAndBoroughs } from "../../../../../utils/sharedData";
import Age from '../../../../../components/oef-cbt-participant-survey/Age'
import CanApply from '../../../../../components/oef-cbt-participant-survey/CanApply'
import CbtChallenges from '../../../../../components/oef-cbt-participant-survey/CbtChallenges'
import CbtDealChallenges from '../../../../../components/oef-cbt-participant-survey/CbtDealChallenges'
import Ethnicity from '../../../../../components/oef-cbt-participant-survey/Ethnicity'
import Fbo from '../../../../../components/oef-cbt-participant-survey/Fbo'
import FboPosition from '../../../../../components/oef-cbt-participant-survey/FboPosition'
import Gender from '../../../../../components/oef-cbt-participant-survey/Gender'
import InformationUseful from '../../../../../components/oef-cbt-participant-survey/InformationUseful'
import ParticipantSuggestions from '../../../../../components/oef-cbt-participant-survey/ParticipantSuggestions'
import PresenterExplainWell from '../../../../../components/oef-cbt-participant-survey/PresenterExplainWell'
import Race from '../../../../../components/oef-cbt-participant-survey/Race'
import ParticipantTools from '../../../../../components/oef-cbt-participant-survey/ParticipantTools'
import ExternalSurveyHeader from '../../../../../components/ExternalSurveyHeader'



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
    eventID:event.id,
eventName:event?.eventname,
eventDate:event?.eventdate,
ageID:"",
participantAgeRange:"",
raceID:"",
participantRace:"",
participantRaceOther:"",
ethnicityID:"",
participantEthnicity:"",
participantEthnicityOther:"",
genderID:"",
participantGender:"",
surveyname:"cbt-participant",
fboPosition:"",
participantGenderOther:"",
cbtChallenges:"",
cbtDealChallenges:"",
informationUseful:"",
canApply:"",
presenterExplainWell:"",
understoodTopics:"",
fbo:"",
participantSuggestions:"",
participantTools:""
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
    /* const isEmpty = Object.entries(surveyForm).some(([key, value]) =>
      key === "participantReferralOther" || key === "participantSuggestions"
        ? false
        : value === 0 || value.length === 0
    );
    if (isEmpty) {
      setError("Please complete all fields");
      return;
    } */
    axios
      .post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/participant_event_outputs/oef/cbt/participant-event-survey/create`,
        surveyForm
      )
      .then((response) => {
        if (response.data.statusText === "OK") {
          notifyMessage();
          setTimeout(() => {
            router.push(`/oef/cbt/${router.query.id}/participant-survey/success`);
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
        
        <ExternalSurveyHeader pageTitle={'CBT Post-Workshop Participation Survey'}/>
        <ToastContainer autoClose={1500} />
        
        <main className="container mx-auto  md:px-0 px-5">
            <div
            id="event"
            className="container mx-auto rounded my-10 md:h-36 border-black rounded-tr-lg rounded-tl-lg"
          >
            <div className="grid grid-cols-2 bg-black font-bold text-white h-12 px-7 items-center rounded-tl-lg rounded-tr-lg">
              <h2 className="text-2xl">Event name</h2>
              <h2 className="flex justify-end text-2xl">Event date</h2>
            </div>
            <div className="grid grid-cols-2 py-6 px-7">
              <h2 className="text-black text-2xl">{event?.eventname}</h2>
              <h2 className="flex justify-end text-2xl">
                {new Date(surveyForm.eventDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                })}
              </h2>
            </div>
          </div>
          <div className="form-body border-black my-10">

          <Fbo
              surveyForm={surveyForm}
              setSurveyForm={setSurveyForm}
              fbos={fbos}
            />
            <FboPosition
              surveyForm={surveyForm}
              setSurveyForm={setSurveyForm}
            />
             
             <Gender
              surveyForm={surveyForm}
              setSurveyForm={setSurveyForm}
            />
            <Age
              surveyForm={surveyForm}
              setSurveyForm={setSurveyForm}
            />

            <Race
              surveyForm={surveyForm}
              setSurveyForm={setSurveyForm}
            />
             <Ethnicity
              surveyForm={surveyForm}
              setSurveyForm={setSurveyForm}
            />
 
          
            <InformationUseful
              surveyForm={surveyForm}
              setSurveyForm={setSurveyForm}
              state='informationUseful'
              title='1. The information and materials presented were useful'
            />
            <InformationUseful
              surveyForm={surveyForm}
              setSurveyForm={setSurveyForm}
              state='canApply'
              title='2. I can apply what I learned today to my work at my faith-based or community organization.'
            />
            <InformationUseful
              surveyForm={surveyForm}
              setSurveyForm={setSurveyForm}
              state='presenterExplainWell'
              title='3. The presenter explained the topic well.'
            />
            <InformationUseful
              surveyForm={surveyForm}
              setSurveyForm={setSurveyForm}
              state='understoodTopics'
              title='4. I understood the topics and concepts being discussed.'
            />

            <CbtChallenges
              surveyForm={surveyForm}
              setSurveyForm={setSurveyForm}
            />
            <CbtDealChallenges
              surveyForm={surveyForm}
              setSurveyForm={setSurveyForm}
            />
            <ParticipantTools
              surveyForm={surveyForm}
              setSurveyForm={setSurveyForm}
            />
            <ParticipantSuggestions
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
      </div>
    </>
  );
};

export default Survey;

export const getServerSideProps = async (ctx) => {
  const { id } = ctx.params;
  const [event, fbos] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/events/${id}`).then((r) =>
      r.json().then(res=>res[0])
    ),
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/fbos`).then((r) => r.json()),
  ]);
  console.log(event);
  return {
    props: {
      event: event,
      fbos: fbos,
    },
  };
};
