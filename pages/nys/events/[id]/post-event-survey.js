import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Layout from "../../../../components/Layout";
import PageTopHeading from "../../../../components/PageTopHeading";
import TopEventsInfo from "../../../../components/TopEventsInfo";

import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";

import axios from "axios";
import ResponseStatusModal from "../../../../components/ResponseStatusModal";

import Link from "next/link";
import Image from "next/image";

import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import PostEventReportSection1 from "../../../../components/post-event-report/PostEventReportSection1";
import PostEventReportSection2 from "../../../../components/post-event-report/PostEventReportSection2";
import PostEventReportSection3 from "../../../../components/post-event-report/PostEventReportSection3";
import PostEventReportSection4 from "../../../../components/post-event-report/PostEventReportSection4";
import PostEventReportSection5 from "../../../../components/post-event-report/PostEventReportSection5";
import PostEventReportSection6 from "../../../../components/post-event-report/PostEventReportSection6";
import PostEventReportSection7 from "../../../../components/post-event-report/PostEventReportSection7";
import PostEventReportSection8 from "../../../../components/post-event-report/PostEventReportSection8";
import PostEventReportSection9 from "../../../../components/post-event-report/PostEventReportSection9";
import PostEventReportSection10 from "../../../../components/post-event-report/PostEventReportSection10";

import PostEventReportSection11 from "../../../../components/post-event-report/PostEventReportSection11";
import PostEventReportSection12 from "../../../../components/post-event-report/PostEventReportSection12";
import PostEventReportSection13 from "../../../../components/post-event-report/PostEventReportSection13";
import PostEventReportSection14 from "../../../../components/post-event-report/PostEventReportSection14";
import PostEventReportSection15 from "../../../../components/post-event-report/PostEventReportSection15";
import PostEventReportSection16 from "../../../../components/post-event-report/PostEventReportSection16";
import PostEventReportSection17 from "../../../../components/post-event-report/PostEventReportSection17";
import PostEventReportSection18 from "../../../../components/post-event-report/PostEventReportSection18";
import PostEventReportSection19 from "../../../../components/post-event-report/PostEventReportSection19";
import PostEventReportSection20 from "../../../../components/post-event-report/PostEventReportSection20";

import PostEventReportSection21 from "../../../../components/post-event-report/PostEventReportSection21";
import PostEventReportSection22 from "../../../../components/post-event-report/PostEventReportSection22";
import PostEventReportSection23 from "../../../../components/post-event-report/PostEventReportSection23";
import PostEventReportSection24 from "../../../../components/post-event-report/PostEventReportSection24";
import PostEventReportSection25 from "../../../../components/post-event-report/PostEventReportSection25";
import PostEventReportSection26 from "../../../../components/post-event-report/PostEventReportSection26";
import PostEventReportSection27 from "../../../../components/post-event-report/PostEventReportSection27";
import PostEventReportSection28 from "../../../../components/post-event-report/PostEventReportSection28";
import PostEventReportSection29 from "../../../../components/post-event-report/PostEventReportSection29";
import PostEventReportSection30 from "../../../../components/post-event-report/PostEventReportSection30";


import PostEventReportSection31 from "../../../../components/post-event-report/PostEventReportSection31";
import PostEventReportSection32 from "../../../../components/post-event-report/PostEventReportSection32";
import PostEventReportSection33 from "../../../../components/post-event-report/PostEventReportSection33";
import PostEventReportSection34 from "../../../../components/post-event-report/PostEventReportSection34";
import PostEventReportSection35 from "../../../../components/post-event-report/PostEventReportSection35";
import PostEventReportSection36 from "../../../../components/post-event-report/PostEventReportSection36";
import PostEventReportSection37 from "../../../../components/post-event-report/PostEventReportSection37";
import PostEventReportSection38 from "../../../../components/post-event-report/PostEventReportSection38";
import PostEventReportSection39 from "../../../../components/post-event-report/PostEventReportSection39";
import PostEventReportSection40 from "../../../../components/post-event-report/PostEventReportSection40";


const PostEventReport = ({
  event,
  programs,
  locationTypes,
  areasOfFocus,
  eventTypes,
}) => {
  const { user, error, isLoading } = useUser();
  const [showResponseStatus, setShowResponseStatus] = useState(false);
  const [responseStatus, setResponseStatus] = useState({});

console.log("event",event)

  const loggedUsername=user && user['https://lanuevatest.herokuapp.com/name']
  const loggedUserLastname=user && user['https://lanuevatest.herokuapp.com/lastname']


  const [eventForm, setEventForm] = useState({
    // userID: "",
    eventID : Number(event?.id),
    eventDateCreated: new Date(),
    // programID: event?.programid,
    programName: event?.programname,
    eventName: event?.eventname,
    eventDate: event && new Date(event.eventdate),
    eventStartTime: event?.eventstarttime,
    eventFinishTime: event?.eventfinishtime,
    // eventLocationTypeID: event?.eventlocationtypeid,
    eventLocationTypeName: event?.eventlocationtypename,
    // healthAreaOfFocusID: event?.healthareaoffocusid,
    healthAreaOfFocusName: event?.healthareaoffocusname.join(', '),
    // eventTypeID: event?.eventtypeid,
        eventTypeName: event?.eventtypename,
        workArea : event?.workarea,
        workAreaOther : event?.workareaother,
        mainRole : '',
        mainRoleOther: '',
        nysActivity : event?.nysactivity,
        nysActivityOther : event?.nysactivityother,
        nysPrograms : [],
        zipCode : 0 || event?.eventzipcode,
        locationAddress : '' || event?.locationaddress,
        locationName : '' || event?.locationname,
        locationNameOther : '' || event?.locationnameother,
        nysPrimaryRiskGroup: "",
        masks : 0,
        covidLiterature : 0,
        vaccineRelatedLiterature : 0,
        hivLiterature : 0,
        hepCLiterature : 0,
        prepLiterature : 0,
        saferSexKits : 0,
        healthDisparitiesLiterature : 0,
        bagsBoxesFood : 0,
        posters : 0,
        otherEventLeaflets : 0,
        preparedMeals : 0,
        handSanitizers : 0,
        covidVaccineSiteReferralDetails : 0,
        maleCondoms: 0,
        femaleCondoms: 0,
        lubricant: 0,
        referralLists: 0,
        dentalDam: 0,
        promotionalMaterial: 0,
        staffPresent : 0,
        internPresent : 0,
        adultVolunteers : 0,
        youthVolunteers : 0,
        languages : [],
        participantRegistrationForm : false,
        eventStartedOnTime : false,
        eventFinishedOnTime : false,
        participantGreeted : false,
        resourcesAvailable : false,
        photoRelease : false,
        handSanitizerAvailable : false,
        reminderSafeSpace : false,
        reminderPostEvaluationSurvey : false,
        totalAttendees : 0,
        textOrCall : 0,
        sendEmail : 0,
        eventHighlights : '',
        eventChallenges : '',
        eventQuestions : '',
        eventTestingDone : false,
        hivTesting : false,
        stiTesting : false,
        hepCTesting : false,
        bloodPressureTesting : false,
        cholesterolTesting : false,
        covidTesting : false,
        otherTesting : false,
        hivTestingAgency : '',
        hivTestedTotal : 0,
        hivReactiveResults : 0,
        prepReferrals : 0,
        hivLinkedToCare : 0,
        hivServicesReferredTo : '',
        hivFemale : 0,
        hivMale : 0,
        hivTransgenderFemale : 0,
        hivTransgenderMale : 0,
        hivGenderNonConforming : 0,
        hivNonBinary : 0,
        hivOtherGenderIdentity : 0,
        hivGenderDeclinedToAnswer : 0,
        hivUnder15 : 0,
        hiv16_19 : 0,
        hiv20_24 : 0,
        hiv25_29 : 0,
        hiv30_34 : 0,
        hiv35_39 : 0,
        hiv40_44 : 0,
        hiv45_49 : 0,
        hiv50_54 : 0,
        hiv55_59 : 0,
        hiv60_64 : 0,
        hiv65_69 : 0,
        hiv70 : 0,
        hivAgeDeclinedToAnswer : 0,
        hivBlackOrAfricanAmerican : 0,
        hivHispanic : 0,
        hivAsian : 0,
        hivAmericanIndianOrAlaskaNative : 0,
        hivMiddleEasternOrNorthAfrican : 0,
        hivNativeHawaiianOrOtherPacificIslander : 0,
        hivWhite : 0,
        hivSomeOtherRace : 0,
        hivRaceDeclinedToAnswer : 0,
        hivNotHispanic : 0,
        hivMexicanMexicanAmericanOrChicano : 0,
        hivPuertoRican : 0,
        hivCuban : 0,
        hivDominican : 0,
        hivEcuadorian : 0,
        hivOtherHispanic : 0,
        hivEthnicityDeclinedToAnswer : 0,
        hivGayOrLesbian : 0,
        hivStraightOrHeterosexual : 0,
        hivBisexual : 0,
        hivQueer : 0,
        hivQuestioningOrNotSure : 0,
        hivSexualOrientationUnknown : 0,
        hivSexualOrientationDeclinedToAnswer : 0,
        stiTestingAgency : '',
        stiTestedTotal : 0,
        stiReactiveResults : 0,
        stiLinkedToCare : 0,
        stiServicesReferredTo : '',
        stiFemale : 0,
        stiMale : 0,
        stiTransgenderFemale : 0,
        stiTransgenderMale : 0,
        stiGenderNonConforming : 0,
        stiNonBinary : 0,
        stiOtherGenderIdentity : 0,
        stiGenderDeclinedToAnswer : 0,
        stiUnder15 : 0,
        sti16_19 : 0,
        sti20_24 : 0,
        sti25_29 : 0,
        sti30_34 : 0,
        sti35_39 : 0,
        sti40_44 : 0,
        sti45_49 : 0,
        sti50_54 : 0,
        sti55_59 : 0,
        sti60_64 : 0,
        sti65_69 : 0,
        sti70 : 0,
        stiAgeDeclinedToAnswer : 0,
        stiBlackOrAfricanAmerican : 0,
        stiHispanic : 0,
        stiAsian : 0,
        stiAmericanIndianOrAlaskaNative : 0,
        stiMiddleEasternOrNorthAfrican : 0,
        stiNativeHawaiianOrOtherPacificIslander : 0,
        stiWhite : 0,
        stiSomeOtherRace : 0,
        stiRaceDeclinedToAnswer : 0,
        stiNotHispanic : 0,
        stiMexicanMexicanAmericanOrChicano : 0,
        stiPuertoRican : 0,
        stiCuban : 0,
        stiDominican : 0,
        stiEcuadorian : 0,
        stiOtherHispanic : 0,
        stiEthnicityDeclinedToAnswer : 0,
        stiGayOrLesbian : 0,
        stiStraightOrHeterosexual : 0,
        stiBisexual : 0,
        stiQueer : 0,
        stiQuestioningOrNotSure : 0,
        stiSexualOrientationUnknown : 0,
        stiSexualOrientationDeclinedToAnswer : 0,
        hepCTestingAgency : '',
        hepCTestedTotal : 0,
        hepCReactiveResults : 0,
        hepCLinkedToCare : 0,
        hepCServicesReferredTo : '',
        hepCFemale : 0,
        hepCMale : 0,
        hepCTransgenderFemale : 0,
        hepCTransgenderMale : 0,
        hepCGenderNonConforming : 0,
        hepCNonBinary : 0,
        hepCOtherGenderIdentity : 0,
        hepCGenderDeclinedToAnswer : 0,
        hepCUnder15 : 0,
        hepC16_19 : 0,
        hepC20_24 : 0,
        hepC25_29 : 0,
        hepC30_34 : 0,
        hepC35_39 : 0,
        hepC40_44 : 0,
        hepC45_49 : 0,
        hepC50_54 : 0,
        hepC55_59 : 0,
        hepC60_64 : 0,
        hepC65_69 : 0,
        hepC70 : 0,
        hepCAgeDeclinedToAnswer : 0,
        hepCBlackOrAfricanAmerican : 0,
        hepCHispanic : 0,
        hepCAsian : 0,
        hepCAmericanIndianOrAlaskaNative : 0,
        hepCMiddleEasternOrNorthAfrican : 0,
        hepCNativeHawaiianOrOtherPacificIslander : 0,
        hepCWhite : 0,
        hepCSomeOtherRace : 0,
        hepCRaceDeclinedToAnswer : 0,
        hepCNotHispanic : 0,
        hepCMexicanMexicanAmericanOrChicano : 0,
        hepCPuertoRican : 0,
        hepCCuban : 0,
        hepCDominican : 0,
        hepCEcuadorian : 0,
        hepCOtherHispanic : 0,
        hepCEthnicityDeclinedToAnswer : 0,
        hepCGayOrLesbian : 0,
        hepCStraightOrHeterosexual : 0,
        hepCBisexual : 0,
        hepCQueer : 0,
        hepCQuestioningOrNotSure : 0,
        hepCSexualOrientationUnknown : 0,
        hepCSexualOrientationDeclinedToAnswer : 0,
        bloodPressureTestingAgency : '',
        bloodPressureTestedTotal : 0,
        bloodPressureLinkedToCare : 0,
        bloodPressureServicesReferredTo : '',
        bloodPressureFemale : 0,
        bloodPressureMale : 0,
        bloodPressureTransgenderFemale : 0,
        bloodPressureTransgenderMale : 0,
        bloodPressureGenderNonConforming : 0,
        bloodPressureNonBinary : 0,
        bloodPressureOtherGenderIdentity : 0,
        bloodPressureGenderDeclinedToAnswer : 0,
        bloodPressureUnder15 : 0,
        bloodPressure16_19 : 0,
        bloodPressure20_24 : 0,
        bloodPressure25_29 : 0,
        bloodPressure30_34 : 0,
        bloodPressure35_39 : 0,
        bloodPressure40_44 : 0,
        bloodPressure45_49 : 0,
        bloodPressure50_54 : 0,
        bloodPressure55_59 : 0,
        bloodPressure60_64 : 0,
        bloodPressure65_69 : 0,
        bloodPressure70 : 0,
        bloodPressureAgeDeclinedToAnswer : 0,
        bloodPressureBlackOrAfricanAmerican : 0,
        bloodPressureHispanic : 0,
        bloodPressureAsian : 0,
        bloodPressureAmericanIndianOrAlaskaNative : 0,
        bloodPressureMiddleEasternOrNorthAfrican : 0,
        bloodPressureNativeHawaiianOrOtherPacificIslander : 0,
        bloodPressureWhite : 0,
        bloodPressureSomeOtherRace : 0,
        bloodPressureRaceDeclinedToAnswer : 0,
        bloodPressureNotHispanic : 0,
        bloodPressureMexicanMexicanAmericanOrChicano : 0,
        bloodPressurePuertoRican : 0,
        bloodPressureCuban : 0,
        bloodPressureDominican : 0,
        bloodPressureEcuadorian : 0,
        bloodPressureOtherHispanic : 0,
        bloodPressureEthnicityDeclinedToAnswer : 0,
        bloodPressureGayOrLesbian : 0,
        bloodPressureStraightOrHeterosexual : 0,
        bloodPressureBisexual : 0,
        bloodPressureQueer : 0,
        bloodPressureQuestioningOrNotSure : 0,
        bloodPressureSexualOrientationUnknown : 0,
        bloodPressureSexualOrientationDeclinedToAnswer : 0,
        cholesterolTestingAgency : '',
        cholesterolTestedTotal : 0,
        cholesterolLinkedToCare : 0,
        cholesterolServicesReferredTo : '',
        cholesterolFemale : 0,
        cholesterolMale : 0,
        cholesterolTransgenderFemale : 0,
        cholesterolTransgenderMale : 0,
        cholesterolGenderNonConforming : 0,
        cholesterolNonBinary : 0,
        cholesterolOtherGenderIdentity : 0,
        cholesterolGenderDeclinedToAnswer : 0,
        cholesterolUnder15 : 0,
        cholesterol16_19 : 0,
        cholesterol20_24 : 0,
        cholesterol25_29 : 0,
        cholesterol30_34 : 0,
        cholesterol35_39 : 0,
        cholesterol40_44 : 0,
        cholesterol45_49 : 0,
        cholesterol50_54 : 0,
        cholesterol55_59 : 0,
        cholesterol60_64 : 0,
        cholesterol65_69 : 0,
        cholesterol70 : 0,
        cholesterolAgeDeclinedToAnswer : 0,
        cholesterolBlackOrAfricanAmerican : 0,
        cholesterolHispanic : 0,
        cholesterolAsian : 0,
        cholesterolAmericanIndianOrAlaskaNative : 0,
        cholesterolMiddleEasternOrNorthAfrican : 0,
        cholesterolNativeHawaiianOrOtherPacificIslander : 0,
        cholesterolWhite : 0,
        cholesterolSomeOtherRace : 0,
        cholesterolRaceDeclinedToAnswer : 0,
        cholesterolNotHispanic : 0,
        cholesterolMexicanMexicanAmericanOrChicano : 0,
        cholesterolPuertoRican : 0,
        cholesterolCuban : 0,
        cholesterolDominican : 0,
        cholesterolEcuadorian : 0,
        cholesterolOtherHispanic : 0,
        cholesterolEthnicityDeclinedToAnswer : 0,
        cholesterolGayOrLesbian : 0,
        cholesterolStraightOrHeterosexual : 0,
        cholesterolBisexual : 0,
        cholesterolQueer : 0,
        cholesterolQuestioningOrNotSure : 0,
        cholesterolSexualOrientationUnknown : 0,
        cholesterolSexualOrientationDeclinedToAnswer : 0,
        covidTestingAgency : '',
        covidTestedTotal : 0,
        otherTestingType : '',
        otherTestingAgency : '',
        otherTestedTotal : 0,
        otherLinkedToCare : 0,
        otherServicesReferredTo : '',
        otherFemale : 0,
        otherMale : 0,
        otherTransgenderFemale : 0,
        otherTransgenderMale : 0,
        otherGenderNonConforming : 0,
        otherNonBinary : 0,
        otherOtherGenderIdentity : 0,
        otherGenderDeclinedToAnswer : 0,
        otherUnder15 : 0,
        other16_19 : 0,
        other20_24 : 0,
        other25_29 : 0,
        other30_34 : 0,
        other35_39 : 0,
        other40_44 : 0,
        other45_49 : 0,
        other50_54 : 0,
        other55_59 : 0,
        other60_64 : 0,
        other65_69 : 0,
        other70 : 0,
        otherAgeDeclinedToAnswer : 0,
        otherBlackOrAfricanAmerican : 0,
        otherHispanic : 0,
        otherAsian : 0,
        otherAmericanIndianOrAlaskaNative : 0,
        otherMiddleEasternOrNorthAfrican : 0,
        otherNativeHawaiianOrOtherPacificIslander : 0,
        otherWhite : 0,
        otherSomeOtherRace : 0,
        otherRaceDeclinedToAnswer : 0,
        otherNotHispanic : 0,
        otherMexicanMexicanAmericanOrChicano : 0,
        otherPuertoRican : 0,
        otherCuban : 0,
        otherDominican : 0,
        otherEcuadorian : 0,
        otherOtherHispanic : 0,
        otherEthnicityDeclinedToAnswer : 0,
        otherGayOrLesbian : 0,
        otherStraightOrHeterosexual : 0,
        otherBisexual : 0,
        otherQueer : 0,
        otherQuestioningOrNotSure : 0,
        otherSexualOrientationUnknown : 0,
        otherSexualOrientationDeclinedToAnswer : 0,
        reminderPostEvaluationSurvy :false,
        hivGenderNotSureQuestioning : 0,
        altAgeHivUnder13 : 0,
        altAgeHiv13_18 : 0,
        altAgeHiv19_24 : 0,
        hivMoreThanOneRace : 0,
        stiGenderNotSureQuestioning : 0,
        altAgeStiUnder13 : 0,
        altAgeSti13_18 : 0,
        altAgeSti19_24 : 0,
        stiMoreThanOneRace : 0,
        hepCGenderNotSureQuestioning : 0,
        altAgeHepCUnder13 : 0,
        altAgeHepC13_18 : 0,
        altAgeHepC19_24 : 0,
        hepCMoreThanOneRace : 0,
        datePostEventSurvey:new Date(),
        namePostEventSurvey:loggedUsername + ' ' + loggedUserLastname,
        sessionPresenter:"",
        guestSpeakers:"",
        nameGuestSpeakers:"",
        partnerOrganization1:"",
        additionalZipCodes:"",
        totalEventAttendees:0,
        staffPresentNames:"",
        demographicsKnown: "",
        airsFormGender: [],
        airsFormAge: [],
        airsFormRaceEthnicity: [],
  });
  const userId = user && user.sub;



const router = useRouter()


  const isNumberKey = (e) => {
    const invalidChars = [
      "-",
      "+",
      "e",
    ];
    if (invalidChars.includes(e.key)) {
      e.preventDefault();
    } 
}

  const notifyMessage= ()=>{
    toast.success("Survey saved!", {
      position: toast.POSITION.TOP_CENTER,
    });
   }

  const submitPostEventForm = async () => {
    const isEmpty = Object.values(eventForm).some((value) => !value);

 
    // if (!isEmpty) {
      axios
        .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/post_event_report/create`, eventForm)
        .then((response) => {
          if (response.data.statusText === "OK") {
            setResponseStatus({
              success: true,
              statusMessage: "Your Event has been saved",
            });
            setShowResponseStatus(!showResponseStatus);
            notifyMessage()
            setTimeout(()=>{
              router.back()
            },1500)
          }
        })
        .catch(function (error) {
          setResponseStatus({
            success: false,
            statusMessage: "Request Failed",
          });
          setShowResponseStatus(!showResponseStatus);
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

  const programAndAreaStyles = {
    display: "grid",
    gridTemplateColumns: "2fr 3fr",
    gap: "20px",
  };


console.log("eventForm",eventForm)
  return (
    <>
      <Layout showStatusHeader={true}>
      <ToastContainer autoClose={1500}/>
        <PageTopHeading
          backBtn={true}
          dashboardBtn={true}
          pageTitle={"Post-event survey"}

        />
        <div className="container mx-auto md:px-0 px-5 items-center">


      <TopEventsInfo event={event} editPath={`/events/${event?.eventid || event?.id}/nys_cmp/edit`}/>



          <div className="post-envent-form-container mt-10 border-black grid gap-1 bg-white rounded-lg p-1 mb-10 pb-10 shadow-lg">
            {/* <section className="event pb-5 rounded"> */}
             {/*  <div className="flex justify-between items-center ">
                <h3 className="mb-3 font-black ">Event</h3>
              </div>
              <div style={programAndAreaStyles}>
                <div>
                  <p className="font-black">Program</p>
                  <input
                    type="text"
                    value={event?.programname}
                    id="program"
                    className=" rounded self-start p-1 w-full  px-2 "
                    disabled
                  />
                </div>
                <div>
                  <p className="font-black">Health area of focus</p>
                  <input
                    type="text"

                    value={event.healthareaoffocusname.join(", ")}

                    id="program"
                    className=" rounded self-start p-1 w-full  px-2 "
                    disabled
                  />
                </div>
              </div>
              <div className="my-5">
                <p className="font-black">Event name</p>
                <input
                  type="text"
                  value={event?.eventname}
                  id="program"
                  className=" rounded self-start p-1 w-full  px-2 "
                  disabled
                />
              </div>

              <div className="grid md:grid-cols-2 grid-cols-1">
                <div className="grid md:grid-cols-3 grid-cols1 gap-5">
                  <div>
                    <p className="font-black">Event date</p>
                    <input
                      type="text"
                      value={event && new Date(event?.eventdate).toLocaleDateString('en-US',{year:'numeric',month:'numeric',day:'numeric'})}
                      id="program"
                      className=" rounded self-start p-1 w-full  px-2 "
                      disabled
                    />
                  </div>

                  <div>
                    <p className="font-black">Start time</p>
                    <input
                      type="time"
                      value={event?.eventstarttime}
                      id="program"
                      className=" rounded self-start p-1 w-full  px-2 "
                      disabled
                    />
                  </div>

                  <div>
                    <p className="font-black">End time</p>
                    <input
                      type="time"
                      value={event?.eventfinishtime}
                      id="program"
                      className=" rounded self-start p-1 w-full  px-2 "
                      disabled
                    />
                  </div>
                </div>
              </div>

              <div className="my-5">
                <p className="font-black">Event location</p>
                <input
                  type="text"
                  value={event?.eventlocationtypename}
                  id="program"
                  className=" rounded self-start p-1 w-full  px-2 "
                  disabled
                />
              </div>

              <div className="my-5">
                <p className="font-black">Type of event</p>
                <input
                  type="text"
                  value={event?.eventtypename}
                  id="program"
                  className=" rounded self-start p-1 w-full  px-2 "
                  disabled
                />
              </div>

              <div className="flex justify-center ">
                <Link href={`/events/${event?.id}/edit`}>

                  <button className="bg-black text-white rounded px-2 mr-2 ">

                    <a
                      className="px-10 py-2 flex  justify-center items-center font-bold"
                      id="myBtn"
                    >
                      <p className="ml-2 font-black">Edit event</p>
                    </a>
                  </button>
                </Link>
              </div> */}
            {/* </section> */}

            <div className="rounded-tl-md rounded-tr-md">
            {/* <h3 className="px-7 mt-10 font-black">Event details</h3> */}
            
            {/* <PostEventReportSection1 eventForm={eventForm} setEventForm={setEventForm} isNumberKey={isNumberKey}/> */}
            <PostEventReportSection2 eventForm={eventForm} setEventForm={setEventForm} isNumberKey={isNumberKey}/>
            <PostEventReportSection31 eventForm={eventForm} setEventForm={setEventForm} isNumberKey={isNumberKey}/>
            <PostEventReportSection32 eventForm={eventForm} setEventForm={setEventForm} isNumberKey={isNumberKey}/>
            <PostEventReportSection35 eventForm={eventForm} setEventForm={setEventForm} isNumberKey={isNumberKey}/>

            {/* <PostEventReportSection3 eventForm={eventForm} setEventForm={setEventForm} isNumberKey={isNumberKey} /> */}
            {/* <PostEventReportSection4 eventForm={eventForm} setEventForm={setEventForm} isNumberKey={isNumberKey}/> */}
            <PostEventReportSection5 eventForm={eventForm} setEventForm={setEventForm} isNumberKey={isNumberKey}/>
            <PostEventReportSection37 eventForm={eventForm} setEventForm={setEventForm} isNumberKey={isNumberKey}/>
            
            <PostEventReportSection6 eventForm={eventForm} setEventForm={setEventForm} isNumberKey={isNumberKey}/>
            <PostEventReportSection7 eventForm={eventForm} setEventForm={setEventForm} isNumberKey={isNumberKey}/>
            
            <PostEventReportSection30 eventForm={eventForm} setEventForm={setEventForm} isNumberKey={isNumberKey}/>
            <PostEventReportSection8 eventForm={eventForm} setEventForm={setEventForm} isNumberKey={isNumberKey}/>
            </div>
            
            {/* <h3 className="px-7 font-black">Event organization and promotion</h3> */}
            <PostEventReportSection9 eventForm={eventForm} setEventForm={setEventForm} isNumberKey={isNumberKey}/>
            <PostEventReportSection38 eventForm={eventForm} setEventForm={setEventForm} isNumberKey={isNumberKey}/>
           
            <PostEventReportSection10 eventForm={eventForm} setEventForm={setEventForm} isNumberKey={isNumberKey}/>
            <PostEventReportSection11 eventForm={eventForm} setEventForm={setEventForm} isNumberKey={isNumberKey}/>
            <PostEventReportSection12 eventForm={eventForm} setEventForm={setEventForm} isNumberKey={isNumberKey}/>
            <PostEventReportSection13 eventForm={eventForm} setEventForm={setEventForm} isNumberKey={isNumberKey}/>
            <PostEventReportSection14 eventForm={eventForm} setEventForm={setEventForm} isNumberKey={isNumberKey}/>
            <PostEventReportSection15 eventForm={eventForm} setEventForm={setEventForm} isNumberKey={isNumberKey}/>
            <PostEventReportSection39 eventForm={eventForm} setEventForm={setEventForm} isNumberKey={isNumberKey}/>
            {eventForm.demographicsKnown === "Demographics known" && 
            <PostEventReportSection40 eventForm={eventForm} setEventForm={setEventForm} isNumberKey={isNumberKey}/>
          }            
            <PostEventReportSection16 eventForm={eventForm} setEventForm={setEventForm} isNumberKey={isNumberKey}/>
            <PostEventReportSection17 eventForm={eventForm} setEventForm={setEventForm} isNumberKey={isNumberKey}/>
            <PostEventReportSection18 eventForm={eventForm} setEventForm={setEventForm} isNumberKey={isNumberKey}/>
           
            <PostEventReportSection19 eventForm={eventForm} setEventForm={setEventForm} isNumberKey={isNumberKey}/>
           
           
           {/*  <PostEventReportSection20 eventForm={eventForm} setEventForm={setEventForm} isNumberKey={isNumberKey}/> */}
            <PostEventReportSection21 eventForm={eventForm} setEventForm={setEventForm} isNumberKey={isNumberKey}/>
            
            {eventForm.eventTestingDone && 
            <PostEventReportSection22  eventForm={eventForm} setEventForm={setEventForm} isNumberKey={isNumberKey}/> } 
            
            {(eventForm.hivTesting && eventForm.eventTestingDone) && 
            <PostEventReportSection23 eventForm={eventForm} setEventForm={setEventForm} isNumberKey={isNumberKey}/>}
            
            {(eventForm.stiTesting && eventForm.eventTestingDone) && 
            <PostEventReportSection26 eventForm={eventForm} setEventForm={setEventForm} isNumberKey={isNumberKey}/>}

            {(eventForm.hepCTesting && eventForm.eventTestingDone) && 
            <PostEventReportSection25 eventForm={eventForm} setEventForm={setEventForm} isNumberKey={isNumberKey}/>}

            {(eventForm.bloodPressureTesting && eventForm.eventTestingDone) && 
            <PostEventReportSection27 eventForm={eventForm} setEventForm={setEventForm} isNumberKey={isNumberKey}/>}

            {(eventForm.cholesterolTesting && eventForm.eventTestingDone) && 
            <PostEventReportSection28 eventForm={eventForm} setEventForm={setEventForm} isNumberKey={isNumberKey}/>}
          
            {(eventForm.covidTesting && eventForm.eventTestingDone) && 
            <PostEventReportSection29 eventForm={eventForm} setEventForm={setEventForm} isNumberKey={isNumberKey}/>}

            {(eventForm.otherTesting && eventForm.eventTestingDone) && 
            <PostEventReportSection24 eventForm={eventForm} setEventForm={setEventForm} isNumberKey={isNumberKey}/>}
          </div>
          <div className="flex justify-center my-10">
          <button
            className="py-2 px-5 flex items-center rounded bg-black text-white font-semibold"
            onClick={submitPostEventForm}
          >
           {/*  <img
              src="/check-save-and-finish.svg"
              alt="register event icon"
              className="mr-2"
            /> */}
            Save
          </button>
          </div>
        </div>
      </Layout>
      {showResponseStatus && (
        <ResponseStatusModal
          setShowResponseStatus={setShowResponseStatus}
          responseStatus={responseStatus}
        />
      )}
    </>
  );
};

export default PostEventReport;

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const { id } = ctx.params;
    const [event, programs, locationTypes, areasOfFocus, eventTypes] =
      await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/events/${id}`)
          .then((r) => r.json())
          .then((response) => response[0]),
        fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/programs`).then((r) =>
          r.json()
        ),

        fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/event_location_type`).then(
          (r) => r.json()
        ),
        fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/health_area_of_focus`
        ).then((r) => r.json()),
        fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/event_type`).then((r) =>
          r.json()
        ),
      ]);
    return {
      props: {
        event: event,
        programs: programs,
        locationTypes: locationTypes,
        areasOfFocus: areasOfFocus,
        eventTypes: eventTypes,
      },
    };
  },
});
