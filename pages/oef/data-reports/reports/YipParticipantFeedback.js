import React, { useEffect, useState } from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Layout from "../../../../components/Layout";
import PageTopHeading from "../../../../components/PageTopHeading";
import YipSessionCSV from "../../../../components/csv-reports/YipSessionCSV";
const keys = {
  session1: [
    "surveyname",
    "surveycreated",
    "eventid",
    "participantgrade",
    "participantgradeother",
    "participantage",
    "participantzipcode",
    "participantborough",
    "raceid",
    "participantrace",
    "participantraceother",
    "ethnicityid",
    "participantethnicity",
    "participantethnicityother",
    "orientationid",
    "participantorientation",
    "participantorientationother",
    "genderid",
    "participantgender",
    "participantgenderother",
    "satisfiedeventactivities",
    "recommendevent",
    "informationuseful",
    "presenterexplainwell",
    "thinkdifferently",
    "canapply",
    "workshopdodifferently",
    "workshopshouldchange",
    "participantsuggestions",
    "consentcanbetakenaway",
    "participantbodylanguageconsent",
    "partnercheckphoneemail",
    "preparationhelpsgoals",
    "lowenergysocialmediahelpful",
    "pubertydifferentexperiences",
    "eatinghabitsemotions",
    "stairsinsteadelevator",
    "peoplementallyillviolent",
    "selfcareawareness",
    "mentalillnesscausedby",
    "mentalhealthmeaning",
    "managinghealthyrelationships",
    "confidentlookingaftermymentalhealth",
  ],
  session2: [
    "surveyname",
    "surveycreated",
    "eventid",
    "participantgrade",
    "participantgradeother",
    "participantage",
    "participantzipcode",
    "participantborough",
    "raceid",
    "participantrace",
    "participantraceother",
    "ethnicityid",
    "participantethnicity",
    "participantethnicityother",
    "orientationid",
    "participantorientation",
    "participantorientationother",
    "genderid",
    "participantgender",
    "participantgenderother",
    "satisfiedeventactivities",
    "recommendevent",
    "informationuseful",
    "presenterexplainwell",
    "thinkdifferently",
    "canapply",
    "workshopdodifferently",
    "workshopshouldchange",
    "participantsuggestions",
    "smartgoalawareness",
    "phoneactivelistening",
    "participantlistening",
    "goodcommunicationimportantonlypublicspeakers",
    "poorcommunicationcanruinrelationships",
    "cyberbullyingonlynegativesocialmedia",
    "deletefrominternetgoneforever",
    "confidentcommunicatingeffectively",
  ],
  session3: [
    "surveyname",
    "surveycreated",
    "eventid",
    "participantgrade",
    "participantgradeother",
    "participantage",
    "participantzipcode",
    "participantborough",
    "raceid",
    "participantrace",
    "participantraceother",
    "ethnicityid",
    "participantethnicity",
    "participantethnicityother",
    "orientationid",
    "participantorientation",
    "participantorientationother",
    "genderid",
    "participantgender",
    "participantgenderother",
    "satisfiedeventactivities",
    "recommendevent",
    "informationuseful",
    "presenterexplainwell",
    "thinkdifferently",
    "canapply",
    "workshopdodifferently",
    "workshopshouldchange",
    "participantsuggestions",
    "awareoptionseducationcareer",
    "preparationhelpsgoals",
    "oneprovenpathtosuccess",
    "shouldknowfuturecareerinhighschool",
    "hbcumeaningknowledge",
    "mentorbenefits",
    "confidentfindingmentor",
    "hasmentor",
    "confidentjobandcareerchoices",
  ],
  session4: [
    "surveyname",
    "surveycreated",
    "eventid",
    "participantgrade",
    "participantgradeother",
    "participantage",
    "participantzipcode",
    "participantborough",
    "raceid",
    "participantrace",
    "participantraceother",
    "ethnicityid",
    "participantethnicity",
    "participantethnicityother",
    "orientationid",
    "participantorientation",
    "participantorientationother",
    "genderid",
    "participantgender",
    "participantgenderother",
    "satisfiedeventactivities",
    "recommendevent",
    "informationuseful",
    "presenterexplainwell",
    "thinkdifferently",
    "canapply",
    "workshopdodifferently",
    "workshopshouldchange",
    "participantsuggestions",
    "participanthivknowledge",
    "consentcanbetakenaway",
    "stiinfectionsagerange",
    "knowhavesti",
    "pep28daysafter",
    "condomwallethandy",
    "emergencycontraceptionaftersex",
    "confidentnegotiatingcontraceptives",
    "confidentpreventinghivandstis",
    "workshopshelpful",
    "workshopsenjoyed",
    "workshopslearnedfrom",
    "workshopsrecommendtofriends",
    "workshopfavorite",
    "workshoplikelytellfriend",
  ],
};
const YipParticipantFeedback = ({}) => {
  // console.log(
  //   "sessions",
  //   session1,
  //   "sesion2",
  //   session2,
  //   "session3 ",
  //   session3,
  //   "session 4",
  //   session4
  // );
  const [selectedDate, setSelectedDate] = useState({
    start: null,
    finish: null,
  });

  const [download, setDownload] = useState(false);
  const [selectedSession1, setSelectedSession1] = useState([]);
  const [selectedSession2, setSelectedSession2] = useState([]);
  const [selectedSession3, setSelectedSession3] = useState([]);
  const [selectedSession4, setSelectedSession4] = useState([]);

  const [errorRequest, setErrorRequest] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const csvNowDate = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
  });
  useEffect(() => {
    setIsLoading(false);
    setErrorRequest("");
    async function getdata() {
      try {
        const [session1, session2, session3, session4] = await Promise.all([
          fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/csv/participant_survey_outputs_session1/${selectedDate.start}&${selectedDate.finish}`
          ).then((r) => r.json()),
          fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/csv/participant_survey_outputs_session2/${selectedDate.start}&${selectedDate.finish}`
          ).then((r) => r.json()),
          fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/csv/participant_survey_outputs_session3/${selectedDate.start}&${selectedDate.finish}`
          ).then((r) => r.json()),
          fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/csv/participant_survey_outputs_session4/${selectedDate.start}&${selectedDate.finish}`
          ).then((r) => r.json()),
        ]);
        if (session1?.statusText === "FAIL") {
          setSelectedSession1([]);
          setErrorRequest("Some sessions file may not have data");
        } else {
          setSelectedSession1(session1);
        }
        if (session2?.statusText === "FAIL") {
          setSelectedSession2([]);
          setErrorRequest("Some sessions file may not have data");
        } else {
          setSelectedSession2(session2);
        }
        if (session3?.statusText === "FAIL") {
          setSelectedSession3([]);
          setErrorRequest("Some sessions file may not have data");
        } else {
          setSelectedSession3(session3);
        }
        if (session4?.statusText === "FAIL") {
          setSelectedSession4([]);
          setErrorRequest("Some sessions files may not have data");
        } else {
          setSelectedSession4(session4);
        }

        setIsLoading(false);
      } catch (error) {
        setErrorRequest("Something went wrong try again");
        setIsLoading(false);
      }
    }

    if (selectedDate.start && selectedDate.finish) {
      getdata();
    }
  }, [selectedDate]);

  return (
    <Layout showStatusHeader={true}>
      <PageTopHeading
        pageTitle={"Download YIP Participant Data"}
        backBtn={true}
        dashboardBtn={true}
      />
      <section className="container mx-auto px-5 md:px-0 pb-10">
        <p className="font-bold text-xl">Choose the data range:</p>
        <div className="grid md:flex md:flex-row my-7 gap-7">
          <div className="grid gap-5">
            <label className="border-black p-5 flex justify-between">
              Start date:
              <input
                type="date"
                onChange={(e) => {
                  // console.log(new Date(e.target.value))

                  setSelectedDate({ ...selectedDate, start: e.target.value });
                }}
              />
            </label>
            <label className="border-black p-5 flex justify-between">
              Finish date:
              <input
                type="date"
                onChange={(e) => {
                  // console.log(new Date(new Date(e.target.value).toLocaleString("en-US", {timeZone: "America/New_York"})).setHours(0), "new date")
                  setSelectedDate({ ...selectedDate, finish: e.target.value });
                }}
              />
            </label>
          </div>

          <section
            className={`${
              selectedSession1.length > 0 ||
              selectedSession2.length > 0 ||
              selectedSession3.length > 0 ||
              selectedSession4.length > 0
                ? ""
                : "pointer-events-none "
            } grid grid-cols-5 gap-5`}
          >
            <div>
              <button
                onClick={() => setDownload(true)}
                className="text-2xl text-white bg-black rounded shadow-xl p-5 w-full md:w-52 h-full uppercase"
              >
                Download <br /> all <br /> datasets
              </button>
            </div>
            <YipSessionCSV
              csvData={selectedSession1}
              headers={keys.session1}
              fileName={`OEF_YIP_Session_1_${csvNowDate.split("_")[0]}.csv`}
              sessionName="Sexual Health and Healthy Relationships"
              sessionNumber="session 1"
              download={{ state: download, set: setDownload }}
            />
            <YipSessionCSV
              csvData={selectedSession2}
              headers={keys.session2}
              fileName={`OEF_YIP_Session_2_${csvNowDate.split("_")[0]}.csv`}
              sessionName="Effective Communication"
              sessionNumber="session 2"
              download={{ state: download, set: setDownload }}
            />
            <YipSessionCSV
              csvData={selectedSession3}
              headers={keys.session3}
              fileName={`OEF_YIP_Session_3_${csvNowDate.split("_")[0]}.csv`}
              sessionName="Let’s Make a choice/ HIV (Health), Education and Careers"
              sessionNumber="session 3"
              download={{ state: download, set: setDownload }}
            />
            <YipSessionCSV
              csvData={selectedSession4}
              headers={keys.session4}
              fileName={`OEF_YIP_Session_4_${csvNowDate.split("_")[0]}.csv`}
              sessionName="STI & HIV Risk Reduction and Prevention"
              sessionNumber="session 4"
              download={{ state: download, set: setDownload }}
            />
          </section>
        </div>
        <span className="font-medium">
          {errorRequest !== "" && errorRequest}
        </span>
      </section>
    </Layout>
  );
};

export default YipParticipantFeedback;

export const getServerSideProps = withPageAuthRequired({});
