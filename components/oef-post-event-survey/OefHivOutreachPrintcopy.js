import React, { useState } from "react";
import Layout from "../Layout";
import PageTopHeading from "../PageTopHeading";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
/* import AirsEventSession from "../../components/airsForm/AirsEventSession";
import AirsDemographics from "../../components/airsForm/AirsDemographics";
import AirsMaterials from "../../components/airsForm/AirsMaterials";
import { Footer } from "./Footer"; */
import Section1 from "../oef-event-registration/Section1";
const OefHivOutreachPrint = React.forwardRef((props, ref) => {
  let { event } = props;
  console.log("event en el print", event);

  const [formData, setFormData] = useState({
    id: event.id,
    eventDateCreated: new Date(),
    programID: "1",
    programName: "OEF",
    eventName: event?.eventname,
    eventDate: event?.eventdate,
    eventStartTime: event?.eventstarttime,
    eventFinishTime: event?.eventfinishtime,
    healthAreaOfFocusID: event?.healthareaoffocusid,
    healthAreaOfFocusName: event?.healthareaoffocusname,
    createdByName: event?.createdbyname,
    createdByLastname: event?.createdbylastname,
    eventZipCode: event?.eventzipcode,
    borough: event?.borough,
    oefEventEmail: event?.oefeventemail,
    deliveryPartner: event?.deliverypartner,
    locationAddress: event?.locationaddress,
    onlineInPersonEventType: event?.onlineinpersoneventtype,
    inPersonEventTypeName: event?.inpersoneventtypename,
    inPersonEventTypeNameOther: event?.inpersoneventtypenameother,
    inPersonEventTypeID: event?.inpersoneventtypeid,
    onlineEventTypeName: event?.onlineeventtypename,
    onlineEventTypeID: event?.onlineeventtypeid,

    isClusterEvent: event?.isclusterevent || "",
    cluster: event?.cluster || "",
    clusterFbos: event?.clusterfbos || [],
    partnerOrganization1: event?.partnerorganization1 || "",
    partnerOrganization1Other: event?.partnerorganization1other || "",
    partnerOrganization2: event?.partnerorganization2 || "",
    nationalAwarenessDay: event?.nationalawarenessday || "",
    targetAudience: event?.targetaudience || [],
    targetAudienceOther: event?.targetaudienceother || "",
    totalTalkedHivPrepSaferSex: event?.totaltalkedhivprepsafersex || 0,
    eventQuestions: event?.eventquestions || "",
    eventHighlights: event?.eventhighlights || "",
    capacityTrainingUseful: event?.capacitytraininguseful || "",
    lessonsLearned: event?.lessonslearned || "",
    nationalAwarenessDayOther: event?.nationalawarenessdayother || "",
    eventTypeName: event?.eventtypename || "",
    zipCode: event?.eventzipcode || 0,
    masks: event?.masks || 0,
    covidLiterature: event?.covidliterature || 0,
    vaccineRelatedLiterature: event?.vaccinerelatedliterature || 0,
    hivLiterature: event?.hivliterature || 0,
    hepCLiterature: event?.hepcliterature || 0,
    prepLiterature: event?.prepliterature || 0,
    saferSexKits: event?.safersexkits || 0,
    healthDisparitiesLiterature: event?.healthdisparitiesliterature || 0,
    bagsBoxesFood: event?.bagsboxesfood || 0,
    handSanitizers: event?.handsanitizers || 0,
    covidVaccineSiteReferralDetails:
      event?.covidvaccinesitereferraldetails || 0,
    totalAttendees: event?.totalattendees || 0,
    eventChallenges: event?.eventchallenges || "",
    eventTestingDone: event?.eventtestingdone || false,
    hivTesting: event?.hivtesting || false,
    hepCTesting: event?.hepctesting || false,
    covidTesting: event?.covidtesting || false,
    otherTesting: event?.othertesting || false,
    hivTestingAgency: event?.hivtestingagency || "",
    hivTestedTotal: event?.hivtestedtotal || 0,
    hivReactiveResults: event?.hivreactiveresults || 0,
    prepReferrals: event?.prepreferrals || 0,
    hivLinkedToCare: event?.hivlinkedtocare || 0,
    hivServicesReferredTo: event?.hivservicesreferredto || "",
    hivFemale: event?.hivfemale || 0,
    hivMale: event?.hivmale || 0,
    hivTransgenderFemale: event?.hivtransgenderfemale || 0,
    hivTransgenderMale: event?.hivtransgendermale || 0,
    hivGenderNonConforming: event?.hivgendernonconforming || 0,
    hivNonBinary: event?.hivnonbinary || 0,
    hivOtherGenderIdentity: event?.hivothergenderidentity || 0,
    hivGenderDeclinedToAnswer: event?.hivgenderdeclinedtoanswer || 0,
    hivUnder15: event?.hivunder15 || 0,
    hiv16_19: event?.hiv16_19 || 0,
    hiv20_24: event?.hiv20_24 || 0,
    hiv25_29: event?.hiv25_29 || 0,
    hiv30_34: event?.hiv30_34 || 0,
    hiv35_39: event?.hiv35_39 || 0,
    hiv40_44: event?.hiv40_44 || 0,
    hiv45_49: event?.hiv45_49 || 0,
    hiv50_54: event?.hiv50_54 || 0,
    hiv55_59: event?.hiv55_59 || 0,
    hiv60_64: event?.hiv60_64 || 0,
    hiv65_69: event?.hiv65_69 || 0,
    hiv70: event?.hiv70 || 0,
    hivAgeDeclinedToAnswer: event?.hivagedeclinedtoanswer || 0,
    hivBlackOrAfricanAmerican: event?.hivblackorafricanamerican || 0,
    hivHispanic: event?.hivhispanic || 0,
    hivAsian: event?.hivasian || 0,
    hivAmericanIndianOrAlaskaNative:
      event?.hivamericanindianoralaskanative || 0,
    hivMiddleEasternOrNorthAfrican: event?.hivmiddleeasternornorthafrican || 0,
    hivNativeHawaiianOrOtherPacificIslander:
      event?.hivnativehawaiianorotherpacificislander || 0,
    hivWhite: event?.hivwhite || 0,
    hivSomeOtherRace: event?.hivsomeotherrace || 0,
    hivRaceDeclinedToAnswer: event?.hivracedeclinedtoanswer || 0,
    hivNotHispanic: event?.hivnothispanic || 0,
    hivMexicanMexicanAmericanOrChicano:
      event?.hivmexicanmexicanamericanorchicano || 0,
    hivPuertoRican: event?.hivpuertorican || 0,
    hivCuban: event?.hivcuban || 0,
    hivDominican: event?.hivdominican || 0,
    hivEcuadorian: event?.hivecuadorian || 0,
    hivOtherHispanic: event?.hivotherhispanic || 0,
    hivEthnicityDeclinedToAnswer: event?.hivethnicitydeclinedtoanswer || 0,
    hivGayOrLesbian: event?.hivgayorlesbian || 0,
    hivStraightOrHeterosexual: event?.hivstraightorheterosexual || 0,
    hivBisexual: event?.hivbisexual || 0,
    hivQueer: event?.hivqueer || 0,
    hivQuestioningOrNotSure: event?.hivquestioningornotsure || 0,
    hivSexualOrientationUnknown: event?.hivsexualorientationunknown || 0,
    hivSexualOrientationDeclinedToAnswer:
      event?.hivsexualorientationdeclinedtoanswer || 0,
    hepCTestingAgency: event?.hepctestingagency || "",
    hepCTestedTotal: event?.hepctestedtotal || 0,
    hepCReactiveResults: event?.hepcreactiveresults || 0,
    hepCLinkedToCare: event?.hepclinkedtocare || 0,
    hepCServicesReferredTo: event?.hepcservicesreferredto || "",
    hepCFemale: event?.hepcfemale || 0,
    hepCMale: event?.hepcmale || 0,
    hepCTransgenderFemale: event?.hepctransgenderfemale || 0,
    hepCTransgenderMale: event?.hepctransgendermale || 0,
    hepCGenderNonConforming: event?.hepcgendernonconforming || 0,
    hepCNonBinary: event?.hepcnonbinary || 0,
    hepCOtherGenderIdentity: event?.hepcothergenderidentity || 0,
    hepCGenderDeclinedToAnswer: event?.hepcgenderdeclinedtoanswer || 0,
    hepCUnder15: event?.hepcunder15 || 0,
    hepC16_19: event?.hepc16_19 || 0,
    hepC20_24: event?.hepc20_24 || 0,
    hepC25_29: event?.hepc25_29 || 0,
    hepC30_34: event?.hepc30_34 || 0,
    hepC35_39: event?.hepc35_39 || 0,
    hepC40_44: event?.hepc40_44 || 0,
    hepC45_49: event?.hepc45_49 || 0,
    hepC50_54: event?.hepc50_54 || 0,
    hepC55_59: event?.hepc55_59 || 0,
    hepC60_64: event?.hepc60_64 || 0,
    hepC65_69: event?.hepc65_69 || 0,
    hepC70: event?.hepc70 || 0,
    hepCAgeDeclinedToAnswer: event?.hepcagedeclinedtoanswer || 0,
    hepCBlackOrAfricanAmerican: event?.hepcblackorafricanamerican || 0,
    hepCHispanic: event?.hepchispanic || 0,
    hepCAsian: event?.hepcasian || 0,
    hepCAmericanIndianOrAlaskaNative:
      event?.hepcamericanindianoralaskanative || 0,
    hepCMiddleEasternOrNorthAfrican:
      event?.hepcmiddleeasternornorthafrican || 0,
    hepCNativeHawaiianOrOtherPacificIslander:
      event?.hepcnativehawaiianorotherpacificislander || 0,
    hepCWhite: event?.hepcwhite || 0,
    hepCSomeOtherRace: event?.hepcsomeotherrace || 0,
    hepCRaceDeclinedToAnswer: event?.hepcracedeclinedtoanswer || 0,
    hepCNotHispanic: event?.hepcnothispanic || 0,
    hepCMexicanMexicanAmericanOrChicano:
      event?.hepcmexicanmexicanamericanorchicano || 0,
    hepCPuertoRican: event?.hepcpuertorican || 0,
    hepCCuban: event?.hepccuban || 0,
    hepCDominican: event?.hepcdominican || 0,
    hepCEcuadorian: event?.hepcecuadorian || 0,
    hepCOtherHispanic: event?.hepcotherhispanic || 0,
    hepCEthnicityDeclinedToAnswer: event?.hepcethnicitydeclinedtoanswer || 0,
    hepCGayOrLesbian: event?.hepcgayorlesbian || 0,
    hepCStraightOrHeterosexual: event?.hepcstraightorheterosexual || 0,
    hepCBisexual: event?.hepcbisexual || 0,
    hepCQueer: event?.hepcqueer || 0,
    hepCQuestioningOrNotSure: event?.hepcquestioningornotsure || 0,
    hepCSexualOrientationUnknown: event?.hepcsexualorientationunknown || 0,
    hepCSexualOrientationDeclinedToAnswer:
      event?.hepcsexualorientationdeclinedtoanswer || 0,
    otherTestingType: event?.othertestingtype || "",
    otherTestedTotal: event?.othertestedtotal || 0,
    hivGenderNotSureQuestioning: event?.hivgendernotsurequestioning || 0,
    altAgeHivUnder13: event?.altagehivunder13 || 0,
    altAgeHiv13_18: event?.altagehiv13_18 || 0,
    altAgeHiv19_24: event?.altagehiv19_24 || 0,
    hivMoreThanOneRace: event?.hivmorethanonerace || 0,
    hepCGenderNotSureQuestioning: event?.hepcgendernotsurequestioning || 0,
    altAgeHepCUnder13: event?.altagehepcunder13 || 0,
    altAgeHepC13_18: event?.altagehepc13_18 || 0,
    altAgeHepC19_24: event?.altagehepc19_24 || 0,
    hepCMoreThanOneRace: event?.hepcmorethanonerace || 0,
    datePostEventSurvey: event?.dateposteventsurvey,
    guestSpeakers: event?.guestspeakers || "",
    nameGuestSpeakers: event?.nameguestspeakers || "",
  });
  const smallCheckbox = {
    width: "13px !important",
    height: "13px !important",
  };

  return (
    <div ref={ref}>
      <div className="flex items-center gap-x-52 container mx-auto px-5 py-3 my-1 ">
        <img
          src="/airs_toprint/airs-form-logo.png"
          alt="airs form logo"
          width={45}
        />
        <h4 className="font-black justify-self-center text-center mt-2 mb-2">
          OEF HIV Outreach
        </h4>
      </div>

      <div className="container mx-auto px-7 text-xs">
        <div className="flex gap-x-1">
          <h3 className="font-black">Submitted by:</h3>
          <p>{event?.createdbyname}</p>
          <p>{event?.createdbylastname}</p>
        </div>

        <div className="flex gap-x-1 my-2">
          <h3 className="font-black">Enter your email address</h3>
          <p>{event?.oefeventemail}</p>
        </div>

        <div className="flex gap-x-1 my-2">
          <h3 className="font-black">
            {" "}
            The name of your Faith-Based Organization:
          </h3>
          <p>{event?.deliverypartner}</p>
        </div>

        <div className="flex my-2">
          <h3 className="font-black">
            Please list the primary zip code where the outreach was held, or
            where the majority of participants attending the event are expected
            to be living?:
          </h3>
          <p>{event?.eventzipcode}</p>
        </div>

        <div className="flex gap-x-1 my-2">
          <h3 className="font-black">Event Title:</h3>
          <p>{event?.eventname}</p>
        </div>

        <div className="flex gap-x-1 my-2">
          <h3 className="font-black">Event Date:</h3>
          <p>
            {new Date(event?.eventdate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
            })}
          </p>
        </div>

        <div className="flex gap-x-1 my-2">
          <h3 className="font-black">Event Start Time:</h3>
          <p>{event?.eventstarttime}</p>
        </div>

        <div className="flex gap-x-1 my-2">
          <h3 className="font-black">Event Finish Time:</h3>
          <p>{event?.eventfinishtime}</p>
        </div>

        <div className="flex gap-x-1 my-2">
          <h3 className="font-black"> Where did this event take place?:</h3>
          <p>{event?.inpersoneventtypename}</p>
        </div>

        <div className="flex gap-x-1 my-2">
          <h3 className="font-black">
            What is the event's health area of focus?:
          </h3>
          <p>{event?.healthareaoffocusname.join(", ")}</p>
        </div>

        {/* POST EVENT */}

        <div className="flex gap-x-1 my-2">
          <h3 className="font-black">
            Was this event delivered by a cluster?:
          </h3>
          <p>{event?.isclusterevent}</p>
        </div>

        {event?.isclusterevent === "Cluster Event" ? (
          <div className="flex gap-x-1 my-2">
            <h3 className="font-black">Which cluster delivered the event?:</h3>
            <p>{event?.cluster}</p>
          </div>
        ) : null}

        <div className=" my-2">
          <h3 className="font-black">Which FBOs were involved?</h3>
          <ol
            style={{ marginLeft: "1rem", listStyle: "ordinated" }}
            className="mt-2"
          >
            {event?.clusterfbos.map((fbo) => (
              <li>
                <p>{fbo}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="flex gap-x-1 my-2">
          <h3 className="font-black">
            Names of all presenters / facilitators:
          </h3>
          <p>{event?.nameguestspeakers}</p>
        </div>

        <div className=" my-2">
          <h3 className="font-black">
            List any co-sponsor/co-host who is also a grantee, or indicate N/A
            if not applicable.
          </h3>
          <p>{event?.partnerorganization1}</p>
          {event?.partnerorganization1 === "Other" && (
            <p>{event?.partnerorganizationother}</p>
          )}
        </div>
        <div className=" my-2">
          <h3 className="font-black">
            List any co-sponsor/co-host who is not a grantee. Eg. Black Health,
            Health First, etc. Write N/A if none.
          </h3>
          <p>{event?.partnerorganization2}</p>
        </div>

        <div className="my-2">
          <h3 className="font-black">
            Was this part of a National Awareness Day?
          </h3>
          <p>{event?.nationalawarenessday}</p>
          {event?.nationalawarenessday === "Other" && (
            <p>{event?.nationalawarenessdayother}</p>
          )}
        </div>
        <div className=" my-2">
          <h3 className="font-black">
            Who was your target audience? Select all that apply.
          </h3>
          <ol
            style={{ marginLeft: "1rem", listStyle: "ordinated" }}
            className="mt-2"
          >
            {event?.targetaudience.map((target) => (
              <li>
                <p>{target}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="flex gap-x-1 my-2">
          <h3 className="font-black">Total number of people at event:</h3>
          <p>{event?.totalattendees}</p>
        </div>
        <h3 className="font-black my-5">Resources Distributed</h3>
        <div className="flex gap-x-1 my-2">
          <h3 className="font-black">HIV literature</h3>
          <p>{event?.hivliterature}</p>
        </div>

        <div className="flex gap-x-1 my-2">
          <h3 className="font-black">HepC literature</h3>
          <p>{event?.hepcliterature}</p>
        </div>
        <div className="flex gap-x-1 my-2">
          <h3 className="font-black">Safer sex kits</h3>
          <p>{event?.safersexkits}</p>
        </div>
        <div className="flex gap-x-1 my-2">
          <h3 className="font-black">Health disparities literature</h3>
          <p>{event?.healthdisparitiesliterature}</p>
        </div>
        <div className="flex gap-x-1 my-2">
          <h3 className="font-black">Bags/boxes of food</h3>
          <p>{event?.bagsboxesfood}</p>
        </div>
        <div className="flex gap-x-1 my-2">
          <h3 className="font-black">Masks</h3>
          <p>{event?.masks}</p>
        </div>
        <div className="flex gap-x-1 my-2">
          <h3 className="font-black">Bags/boxes of food</h3>
          <p>{event?.handsanitizers}</p>
        </div>
        <div className="flex gap-x-1 my-2">
          <h3 className="font-black">COVID literature</h3>
          <p>{event?.covidliterature}</p>
        </div>
        <div className="flex gap-x-1 my-2">
          <h3 className="font-black">
            COVID vaccine site referral information/details
          </h3>
          <p>{event?.covidvaccinesitereferraldetails}</p>
        </div>
        {event?.hivtesting && (
          <div className="grid gap-y-5">
            <div className="mt-5">
              <h3 className="font-black">Hepatitis C Testing</h3>
            </div>
            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">HIV Testing Agency</h3>
              <p>{event?.hivtestingagency}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Total tested for Hepaptitis C</h3>
              <p>{event?.hivtestedtotal}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Total # of Reactive Results</h3>
              <p>{event?.hivreactiveresults}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Total # of PrEP Referrals</h3>
              <p>{event?.hiv}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Total # Linked to Care</h3>
              <p>{event?.hivlinkedtocare}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Which services were they referred to?</h3>
              <p>{event?.hivservicesreferredto}</p>
            </div>


            <div className="mt-5">
              <h3 className="font-black">Gender: How many people identified as the following for Hepatitis C Testing?</h3>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Female</h3>
              <p>{event?.hivfemale}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Male</h3>
              <p>{event?.hivmale}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Transgender female</h3>
              <p>{event?.hivtransgenderfemale}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Transgender male</h3>
              <p>{event?.hivtransgendermale}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Gender non-conforming</h3>
              <p>{event?.hivgendernonconforming}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Non-binary</h3>
              <p>{event?.hivnonbinary}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Not sure / Questioning</h3>
              <p>{event?.hivgendernotsurequestioning}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Other gender identity</h3>
              <p>{event?.hivothergenderidentity}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Decline to answer</h3>
              <p>{event?.hivgenderdeclinedtoanswer}</p>
            </div>

            <div className="mt-5">
              <h3 className="font-black">Age: How many people were in each of the following age groups for Hepatitis C Testing?</h3>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">13-18</h3>
              <p>{event?.altagehiv13_18}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">19-24</h3>
              <p>{event?.altagehiv19_24}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">25-29</h3>
              <p>{event?.hiv25_29}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">30-34</h3>
              <p>{event?.hiv30_34}</p>
            </div>


            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">35-39</h3>
              <p>{event?.hiv35_39}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">40-44</h3>
              <p>{event?.hiv40_44}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">45-49</h3>
              <p>{event?.hiv45_49}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">50-54</h3>
              <p>{event?.hiv50_54}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">55-59</h3>
              <p>{event?.hiv55_59}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">60-64</h3>
              <p>{event?.hiv60_64}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">65-69</h3>
              <p>{event?.hiv65_69}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">70+</h3>
              <p>{event?.hiv70}</p>
            </div>

            <div className="mt-5">
              <h3 className="font-black">Race: How many people identified with the following for racial identity during Hepatitis C Testing?</h3>
            </div>


            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Black or African American</h3>
              <p>{event?.hivblackorafricanamerican}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Hispanic, Latino/a or Spanish</h3>
              <p>{event?.hivhispanic}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Asian</h3>
              <p>{event?.hivasian}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">American Indian or Alaska Native</h3>
              <p>{event?.hivamericanindianoralaskanative}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Middle Eastern or North African</h3>
              <p>{event?.hivmiddleeasternornorthafrican}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">White</h3>
              <p>{event?.hivwhite}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Some other race or origin</h3>
              <p>{event?.hivsomeotherrace}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">More than one race/ethnicity</h3>
              <p>{event?.hivmorethanonerace}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Decline to answer</h3>
              <p>{event?.hivracedeclinedtoanswer}</p>
            </div>

            <div className="mt-5">
              <h3 className="font-black">Ethnicity: How many people doing Hepatitis C testing identified with the following Hispanic and Latin ethnicities?</h3>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Not of Hispanic, Latino/a or Spanish origin</h3>
              <p>{event?.hivnothispanic}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Mexican, Mexican American or Chicano</h3>
              <p>{event?.hivmexicanmexicanamericanorchicano}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Puerto Rican</h3>
              <p>{event?.hivpuertorican}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Cuban</h3>
              <p>{event?.hivcuban}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Dominican</h3>
              <p>{event?.hivdominican}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Ecuadorian</h3>
              <p>{event?.hivecuadorian}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Other Hispanic, Latino/a, or Spanish origin</h3>
              <p>{event?.hivotherhispanic}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Decline to answer</h3>
              <p>{event?.hivethnicitydeclinedtoanswer}</p>
            </div>

          </div>
        )}
        {event?.hepctesting && (
          <div className="grid gap-y-5">
            <div className="mt-5">
              <h3 className="font-black">Hepatitis C Testing</h3>
            </div>
            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">HIV Testing Agency</h3>
              <p>{event?.hepctestingagency}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Total tested for Hepaptitis C</h3>
              <p>{event?.hepctestedtotal}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Total # of Reactive Results</h3>
              <p>{event?.hepcreactiveresults}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Total # of PrEP Referrals</h3>
              <p>{event?.hepc}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Total # Linked to Care</h3>
              <p>{event?.hepclinkedtocare}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Which services were they referred to?</h3>
              <p>{event?.hepcservicesreferredto}</p>
            </div>


            <div className="mt-5">
              <h3 className="font-black">Gender: How many people identified as the following for Hepatitis C Testing?</h3>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Female</h3>
              <p>{event?.hepcfemale}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Male</h3>
              <p>{event?.hepcmale}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Transgender female</h3>
              <p>{event?.hepctransgenderfemale}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Transgender male</h3>
              <p>{event?.hepctransgendermale}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Gender non-conforming</h3>
              <p>{event?.hepcgendernonconforming}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Non-binary</h3>
              <p>{event?.hepcnonbinary}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Not sure / Questioning</h3>
              <p>{event?.hepcgendernotsurequestioning}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Other gender identity</h3>
              <p>{event?.hepcothergenderidentity}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Decline to answer</h3>
              <p>{event?.hepcgenderdeclinedtoanswer}</p>
            </div>

            <div className="mt-5">
              <h3 className="font-black">Age: How many people were in each of the following age groups for Hepatitis C Testing?</h3>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">13-18</h3>
              <p>{event?.altagehepc13_18}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">19-24</h3>
              <p>{event?.altagehepc19_24}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">25-29</h3>
              <p>{event?.hepc25_29}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">30-34</h3>
              <p>{event?.hepc30_34}</p>
            </div>


            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">35-39</h3>
              <p>{event?.hepc35_39}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">40-44</h3>
              <p>{event?.hepc40_44}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">45-49</h3>
              <p>{event?.hepc45_49}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">50-54</h3>
              <p>{event?.hepc50_54}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">55-59</h3>
              <p>{event?.hepc55_59}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">60-64</h3>
              <p>{event?.hepc60_64}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">65-69</h3>
              <p>{event?.hepc65_69}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">70+</h3>
              <p>{event?.hepc70}</p>
            </div>

            <div className="mt-5">
              <h3 className="font-black">Race: How many people identified with the following for racial identity during Hepatitis C Testing?</h3>
            </div>


            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Black or African American</h3>
              <p>{event?.hepcblackorafricanamerican}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Hispanic, Latino/a or Spanish</h3>
              <p>{event?.hepchispanic}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Asian</h3>
              <p>{event?.hepcasian}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">American Indian or Alaska Native</h3>
              <p>{event?.hepcamericanindianoralaskanative}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Middle Eastern or North African</h3>
              <p>{event?.hepcmiddleeasternornorthafrican}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">White</h3>
              <p>{event?.hepcwhite}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Some other race or origin</h3>
              <p>{event?.hepcsomeotherrace}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">More than one race/ethnicity</h3>
              <p>{event?.hepcmorethanonerace}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Decline to answer</h3>
              <p>{event?.hepcracedeclinedtoanswer}</p>
            </div>

            <div className="mt-5">
              <h3 className="font-black">Ethnicity: How many people doing Hepatitis C testing identified with the following Hispanic and Latin ethnicities?</h3>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Not of Hispanic, Latino/a or Spanish origin</h3>
              <p>{event?.hepcnothispanic}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Mexican, Mexican American or Chicano</h3>
              <p>{event?.hepcmexicanmexicanamericanorchicano}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Puerto Rican</h3>
              <p>{event?.hepcpuertorican}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Cuban</h3>
              <p>{event?.hepccuban}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Dominican</h3>
              <p>{event?.hepcdominican}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Ecuadorian</h3>
              <p>{event?.hepcecuadorian}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Other Hispanic, Latino/a, or Spanish origin</h3>
              <p>{event?.hepcotherhispanic}</p>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
              <h3 className="font-black">Decline to answer</h3>
              <p>{event?.hepcethnicitydeclinedtoanswer}</p>
            </div>

          </div>
        )}

        
      </div>
    </div>
  );
});

OefHivOutreachPrint.displayName = "OefHivOutreachPrint";
export default OefHivOutreachPrint;

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const { id } = ctx.params;
    const [event] = await Promise.all([
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/events/oef/hiv/data_to_print/${id}`
      )
        .then((r) => r.json())
        .then((response) => response[0]),
    ]);
    return {
      props: {
        event: event,
      },
    };
  },
});
