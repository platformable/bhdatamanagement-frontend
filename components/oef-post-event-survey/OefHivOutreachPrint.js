import React, { useState } from "react";
import Layout from "../../components/Layout";
import PageTopHeading from "../../components/PageTopHeading";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
/* import AirsEventSession from "../../components/airsForm/AirsEventSession";
import AirsDemographics from "../../components/airsForm/AirsDemographics";
import AirsMaterials from "../../components/airsForm/AirsMaterials";
import { Footer } from "./Footer"; */
import Section1 from "../../components/oef-event-registration/Section1";
const OefHivOutreachPrint = React.forwardRef((props, ref) => {
  let { event } = props;
  console.log("event", event);

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
    covidVaccineSiteReferralDetails:event?.covidvaccinesitereferraldetails || 0,
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
  height: "13px !important"
}

  return (
    <div ref={ref} >
      <div className="flex items-center gap-x-52 container mx-auto px-5 py-3 my-1 ">
        <img src="/airs_toprint/airs-form-logo.png" alt="airs form logo" width={45} />
        <h4 className="font-black justify-self-center text-center mt-2 mb-2">
          OEF HIV Outreach
        </h4>
      </div>

      <div className="container mx-auto">
      
      <Section1 />
      </div>

    </div>
  );
});

OefHivOutreachPrint.displayName = "OefHivOutreachPrint";
export default OefHivOutreachPrint;

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const { id } = ctx.params;
    const [
      event
    ] = await Promise.all([
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/post_event_report/event/${id}`
      )
        .then((r) => r.json())
        .then((response) => response[0]),
    ]);
    return {
      props: {
        event: event,
        selectedEventId: id,
        programs: programs,
        locationTypes: locationTypes,
        areasOfFocus: areasOfFocus,
        eventTypes: eventTypes,
      },
    };
  },
});
