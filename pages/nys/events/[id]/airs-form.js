import React, { useState } from "react";
import Layout from "../../../../components/Layout";
import PageTopHeading from "../../../../components/PageTopHeading";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import AirsEventSession from "../../../../components/airsForm/AirsEventSession";
import AirsDemographics from "../../../../components/airsForm/AirsDemographics";
import AirsMaterials from "../../../../components/airsForm/AirsMaterials";

const AirsForm = ({ event, selectedEventId }) => {
  console.log("event", event);

  const [formData, setFormData] = useState({
    startTime: event?.eventstarttime,
    endTime: event?.eventsendtime,
    programName: event?.programname,
    eventName: event?.eventname,
    eventDate: event && new Date(event.eventdate),
    eventStartTime: event?.eventstarttime,
    eventFinishTime: event?.eventfinishtime,
    // eventLocationTypeID: event?.eventlocationtypeid,
    eventLocationTypeName: event?.eventlocationtypename,
    // healthAreaOfFocusID: event?.healthareaoffocusid,
    healthAreaOfFocusName: event?.healthareaoffocusname,
    // eventTypeID: event?.eventtypeid,
    eventTypeName: event?.eventtypename,
    workArea: event?.workarea,
    workAreaOther: event?.workareaother,
    mainRole: event?.mainrole,
    mainRoleOther: event?.mainroleother,
    nysActivity: "",
    nysActivityOther: "",
    nysPrograms: [],
    zipCode: 0 || event?.zipcode,
    locationAddress: event?.locationaddress,
    locationName: event?.locationname,
    locationNameOther: event?.locationnameother,
    nysPrimaryRiskGroup: event?.nysprimaryriskgroup,
    masks: 0 || event?.masks,
    covidLiterature: 0 || event?.covidliterature,
    vaccineRelatedLiterature: 0 || event?.vaccinerelatedliterature,
    hivLiterature: 0 || event.hivliterature,
    hepCLiterature: 0 || event?.hepcliterature,
    prepLiterature: 0 || event?.prepliterature,
    saferSexKits: 0 || event?.safersexkits,
    healthDisparitiesLiterature: 0 || event?.healthdisparitiesliterature,
    bagsBoxesFood: 0,
    posters: 0,
    otherEventLeaflets: 0,
    preparedMeals: 0,
    handSanitizers: 0 || event?.handsanitizers,
    covidVaccineSiteReferralDetails: 0,
    maleCondoms: 0 || event?.malecondoms,
    femaleCondoms: 0 || event?.femalecondoms,
    lubricant: 0 || event?.lubricant,
    referralLists: 0 || event?.referrallists,
    dentalDam: 0 || event?.dentaldam,
    promotionalMaterial: 0 || event?.promotionalmaterial,
    staffPresent: 0 || event?.staffpresent,
    internPresent: 0 || event?.internpresent,
    adultVolunteers: 0 || event?.adultvolunteers,
    youthVolunteers: 0 || event?.youthvolunteers,
    languages: event?.languages,
    participantRegistrationForm: false || event?.participantregistrationform,
    eventStartedOnTime: false || event?.eventstartedontime,
    eventFinishedOnTime: false || event?.eventfinishedontime,
    participantGreeted: false || event?.participantgreeted,
    resourcesAvailable: false || event?.resourcesavailable,
    photoRelease: false || event?.photorelease,
    handSanitizerAvailable: false || event?.handsanitizeravailable,
    reminderSafeSpace: false || event?.remindersafespace,
    reminderPostEvaluationSurvey: false || event?.reminderpostevaluationsurvey,
    totalAttendees: 0 || event?.totalattendees,
    textOrCall: 0 || event?.textorcall,
    sendEmail: 0 || event?.sendemail,
    eventHighlights: event?.eventhighlights,
    eventChallenges: event?.eventchallenges,
    eventQuestions: event?.eventquestions,
    eventTestingDone: false || event?.eventtestingdone,
    hivTesting: false || event?.hivtesting,
    stiTesting: false || event?.stitesting,
    hepCTesting: false || event?.hepctesting,
    bloodPressureTesting: false || event?.bloodpressuretesting,
    cholesterolTesting: false || event?.cholesteroltesting,
    covidTesting: false || event?.covidtesting,
    otherTesting: false || event?.othertesting,
    hivTestingAgency: event?.hivtestingagency,
    hivTestedTotal: 0 || event?.hivtestedtotal,
    hivReactiveResults: 0 || event?.hivreactiveresults,
    prepReferrals: 0 || event?.prepreferrals,
    hivLinkedToCare: 0 || event?.hivlinkedtocare,
    hivServicesReferredTo: event?.hivservicesreferredto,
    hivFemale: 0 || event?.hivfemale,
    hivMale: 0 || event?.hivmale,
    hivTransgenderFemale: 0 || event?.hivtransgenderfemale,
    hivTransgenderMale: 0 || event?.hivtransgendermale,
    hivGenderNonConforming: 0 || event?.hivgendernonconforming,
    hivNonBinary: 0 || event?.hivnonbinary,
    hivOtherGenderIdentity: 0 || event?.hivothergenderidentity,
    hivGenderDeclinedToAnswer: 0 || event?.hivgenderdeclinedtoanswer,
    hivUnder15: 0 || event?.hivunder15,
    hiv16_19: 0 || event?.hiv16_19,
    hiv20_24: 0 || event?.hiv20_24,
    hiv25_29: 0 || event?.hiv25_29,
    hiv30_34: 0 || event?.hiv30_34,
    hiv35_39: 0 || event?.hiv35_39,
    hiv40_44: 0 || event?.hiv40_44,
    hiv45_49: 0 || event?.hiv45_49,
    hiv50_54: 0 || event?.hiv50_54,
    hiv55_59: 0 || event?.hiv55_59,
    hiv60_64: 0 || event?.hiv60_64,
    hiv65_69: 0 || event?.hiv65_69,
    hiv70: 0 || event?.hiv70,
    hivAgeDeclinedToAnswer: 0 || event?.hivagedeclinedtoanswer,
    hivBlackOrAfricanAmerican: 0 || event?.hivblackorafricanamerican,
    hivHispanic: 0 || event?.hivhispanic,
    hivAsian: 0 || event?.hivasian,
    hivAmericanIndianOrAlaskaNative:
      0 || event?.hivamericanindianoralaskanative,
    hivMiddleEasternOrNorthAfrican: 0 || event?.hivmiddleeasternornorthafrican,
    hivNativeHawaiianOrOtherPacificIslander:
      0 || event?.hivnativehawaiianorotherpacificislander,
    hivWhite: 0 || event?.hivwhite,
    hivSomeOtherRace: 0 || event?.hivsomeotherrace,
    hivRaceDeclinedToAnswer: 0 || event?.hivracedeclinedtoanswer,
    hivNotHispanic: 0 || event?.hivnothispanic,
    hivMexicanMexicanAmericanOrChicano:
      0 || event?.hivmexicanmexicanamericanorchicano,
    hivPuertoRican: 0 || event?.hivpuertorican,
    hivCuban: 0 || event?.hivcuban,
    hivDominican: 0 || event?.hivdominican,
    hivEcuadorian: 0 || event?.hivecuadorian,
    hivOtherHispanic: 0 || event?.hivotherhispanic,
    hivEthnicityDeclinedToAnswer: 0 || event?.hivethnicitydeclinedtoanswer,
    hivGayOrLesbian: 0 || event?.hivgayorlesbian,
    hivStraightOrHeterosexual: 0 || event?.hivstraightorheterosexual,
    hivBisexual: 0 || event?.hivbisexual,
    hivQueer: 0 || event?.hivqueer,
    hivQuestioningOrNotSure: 0 || event?.hivquestioningornotsure,
    hivSexualOrientationUnknown: 0 || event?.hivsexualorientationunknown,
    hivSexualOrientationDeclinedToAnswer:
      0 || event?.hivsexualorientationdeclinedtoanswer,
    stiTestingAgency: event?.stitestingagency,
    stiTestedTotal: 0 || event?.stitestedtotal,
    stiReactiveResults: 0 || event?.stireactiveresults,
    stiLinkedToCare: 0 || event?.stilinkedtocare,
    stiServicesReferredTo: event?.stiservicesreferredto,
    stiFemale: 0 || event?.stifemale,
    stiMale: 0 || event?.stimale,
    stiTransgenderFemale: 0 || event?.stitransgenderfemale,
    stiTransgenderMale: 0 || event?.stitransgendermale,
    stiGenderNonConforming: 0 || event?.stigendernonconforming,
    stiNonBinary: 0 || event?.stinonbinary,
    stiOtherGenderIdentity: 0 || event?.stiothergenderidentity,
    stiGenderDeclinedToAnswer: 0 || event?.stigenderdeclinedtoanswer,
    stiUnder15: 0 || event?.stiunder15,
    sti16_19: 0 || event?.sti16_19,
    sti20_24: 0 || event?.sti20_24,
    sti25_29: 0 || event?.sti25_29,
    sti30_34: 0 || event?.sti30_34,
    sti35_39: 0 || event?.sti35_39,
    sti40_44: 0 || event?.sti40_44,
    sti45_49: 0 || event?.sti45_49,
    sti50_54: 0 || event?.sti50_54,
    sti55_59: 0 || event?.sti55_59,
    sti60_64: 0 || event?.sti60_64,
    sti65_69: 0 || event?.sti65_69,
    sti70: 0 || event?.sti70,
    stiAgeDeclinedToAnswer: 0 || event?.stiagedeclinedtoanswer,
    stiBlackOrAfricanAmerican: 0 || event?.stiblackorafricanamerican,
    stiHispanic: 0 || event?.stihispanic,
    stiAsian: 0 || event?.stiasian,
    stiAmericanIndianOrAlaskaNative:
      0 || event?.stiamericanindianoralaskanative,
    stiMiddleEasternOrNorthAfrican: 0 || event?.stimiddleeasternornorthafrican,
    stiNativeHawaiianOrOtherPacificIslander:
      0 || event?.stinativehawaiianorotherpacificislander,
    stiWhite: 0 || event?.stiwhite,
    stiSomeOtherRace: 0 || event?.stisomeotherrace,
    stiRaceDeclinedToAnswer: 0 || event?.stiracedeclinedtoanswer,
    stiNotHispanic: 0 || event?.stinothispanic,
    stiMexicanMexicanAmericanOrChicano:
      0 || event?.stimexicanmexicanamericanorchicano,
    stiPuertoRican: 0 || event?.stipuertorican,
    stiCuban: 0 || event?.sticuban,
    stiDominican: 0 || event?.stidominican,
    stiEcuadorian: 0 || event?.stiecuadorian,
    stiOtherHispanic: 0 || event?.stiotherhispanic,
    stiEthnicityDeclinedToAnswer: 0 || event?.stiethnicitydeclinedtoanswer,
    stiGayOrLesbian: 0 || event?.stigayorlesbian,
    stiStraightOrHeterosexual: 0 || event?.stistraightorheterosexual,
    stiBisexual: 0 || event?.stibisexual,
    stiQueer: 0 || event?.stiqueer,
    stiQuestioningOrNotSure: 0 || event?.stiquestioningornotsure,
    stiSexualOrientationUnknown: 0 || event?.stisexualorientationunknown,
    stiSexualOrientationDeclinedToAnswer:
      0 || event?.stisexualorientationdeclinedtoanswer,
    hepCTestingAgency: event.hepctestingagency,
    hepCTestedTotal: 0 || event?.hepctestedtotal,
    hepCReactiveResults: 0 || event?.hepcreactiveresults,
    hepCLinkedToCare: 0 || event?.hepclinkedtocare,
    hepCServicesReferredTo: event?.hepcservicesreferredto,
    hepCFemale: 0 || event?.hepcfemale,
    hepCMale: 0 || event?.hepcmale,
    hepCTransgenderFemale: 0 || event?.hepctransgenderfemale,
    hepCTransgenderMale: 0 || event?.hepctransgendermale,
    hepCGenderNonConforming: 0 || event?.hepcgendernonconforming,
    hepCNonBinary: 0 || event?.hepcnonbinary,
    hepCOtherGenderIdentity: 0 || event?.hepcothergenderidentity,
    hepCGenderDeclinedToAnswer: 0 || event?.hepcgenderdeclinedtoanswer,
    hepCUnder15: 0 || event?.hepcunder15,
    hepC16_19: 0 || event?.hepc16_19,
    hepC20_24: 0 || event?.hepc20_24,
    hepC25_29: 0 || event?.hepc25_29,
    hepC30_34: 0 || event?.hepc30_34,
    hepC35_39: 0 || event?.hepc35_39,
    hepC40_44: 0 || event?.hepc40_44,
    hepC45_49: 0 || event?.hepc45_49,
    hepC50_54: 0 || event?.hepc50_54,
    hepC55_59: 0 || event?.hepc55_59,
    hepC60_64: 0 || event?.hepc60_64,
    hepC65_69: 0 || event?.hepc65_69,
    hepC70: 0 || event?.hepc70,
    hepCAgeDeclinedToAnswer: 0 || event?.hepcagedeclinedtoanswer,
    hepCBlackOrAfricanAmerican: 0 || event?.hepcblackorafricanamerican,
    hepCHispanic: 0 || event?.hepchispanic,
    hepCAsian: 0 || event?.hepcasian,
    hepCAmericanIndianOrAlaskaNative:
      0 || event?.hepcamericanindianoralaskanative,
    hepCMiddleEasternOrNorthAfrican:
      0 || event?.hepcmiddleeasternornorthafrican,
    hepCNativeHawaiianOrOtherPacificIslander:
      0 || event?.hepcnativehawaiianorotherpacificislander,
    hepCWhite: 0 || event?.hepcwhite,
    hepCSomeOtherRace: 0 || event?.hepcsomeotherrace,
    hepCRaceDeclinedToAnswer: 0 || event?.hepcracedeclinedtoanswer,
    hepCNotHispanic: 0 || event?.hepcnothispanic,
    hepCMexicanMexicanAmericanOrChicano:
      0 || event?.hepcmexicanmexicanamericanorchicano,
    hepCPuertoRican: 0 || event?.hepcpuertorican,
    hepCCuban: 0 || event?.hepccuban,
    hepCDominican: 0 || event?.hepcdominican,
    hepCEcuadorian: 0 || event?.hepcecuadorian,
    hepCOtherHispanic: 0 || event?.hepcotherhispanic,
    hepCEthnicityDeclinedToAnswer: 0 || event?.hepcethnicitydeclinedtoanswer,
    hepCGayOrLesbian: 0 || event?.hepcgayorlesbian,
    hepCStraightOrHeterosexual: 0 || event?.hepcstraightorheterosexual,
    hepCBisexual: 0 || event?.hepcbisexual,
    hepCQueer: 0 || event?.hepcqueer,
    hepCQuestioningOrNotSure: 0 || event?.hepcquestioningornotsure,
    hepCSexualOrientationUnknown: 0 || event?.hepcsexualorientationunknown,
    hepCSexualOrientationDeclinedToAnswer:
      0 || event?.hepcsexualorientationdeclinedtoanswer,
    bloodPressureTestingAgency: event.bloodpressuretestingagency,
    bloodPressureTestedTotal: 0 || event?.bloodpressuretestedtotal,
    bloodPressureLinkedToCare: 0 || event?.bloodpressurelinkedtocare,
    bloodPressureServicesReferredTo: event?.bloodpressureservicesreferredto,
    bloodPressureFemale: 0 || event?.bloodpressurefemale,
    bloodPressureMale: 0 || event?.bloodpressuremale,
    bloodPressureTransgenderFemale: 0 || event?.bloodpressuretransgenderfemale,
    bloodPressureTransgenderMale: 0 || event?.bloodpressuretransgendermale,
    bloodPressureGenderNonConforming:
      0 || event?.bloodpressuregendernonconforming,
    bloodPressureNonBinary: 0 || event?.bloodpressurenonbinary,
    bloodPressureOtherGenderIdentity:
      0 || event?.bloodpressureothergenderidentity,
    bloodPressureGenderDeclinedToAnswer:
      0 || event?.bloodpressuregenderdeclinedtoanswer,
    bloodPressureUnder15: 0 || event?.bloodpressureunder15,
    bloodPressure16_19: 0 || event?.bloodpressure16_19,
    bloodPressure20_24: 0 || event?.bloodpressure20_24,
    bloodPressure25_29: 0 || event?.bloodpressure25_29,
    bloodPressure30_34: 0 || event?.bloodpressure30_34,
    bloodPressure35_39: 0 || event?.bloodpressure35_39,
    bloodPressure40_44: 0 || event?.bloodpressure40_44,
    bloodPressure45_49: 0 || event?.bloodpressure45_49,
    bloodPressure50_54: 0 || event?.bloodpressure50_54,
    bloodPressure55_59: 0 || event?.bloodpressure55_59,
    bloodPressure60_64: 0 || event?.bloodpressure60_64,
    bloodPressure65_69: 0 || event?.bloodpressure65_69,
    bloodPressure70: 0 || event?.bloodpressure70,
    bloodPressureAgeDeclinedToAnswer:
      0 || event?.bloodpressureagedeclinedtoanswer,
    bloodPressureBlackOrAfricanAmerican:
      0 || event?.bloodpressureblackorafricanamerican,
    bloodPressureHispanic: 0 || event?.bloodpressurehispanic,
    bloodPressureAsian: 0 || event?.bloodpressureasian,
    bloodPressureAmericanIndianOrAlaskaNative:
      0 || event?.bloodpressureamericanindianoralaskanative,
    bloodPressureMiddleEasternOrNorthAfrican:
      0 || event?.bloodpressuremiddleeasternornorthafrican,
    bloodPressureNativeHawaiianOrOtherPacificIslander:
      0 || event?.bloodpressurenativehawaiianorotherpacificislander,
    bloodPressureWhite: 0 || event?.bloodpressurewhite,
    bloodPressureSomeOtherRace: 0 || event?.bloodpressuresomeotherrace,
    bloodPressureRaceDeclinedToAnswer:
      0 || event?.bloodpressureracedeclinedtoanswer,
    bloodPressureNotHispanic: 0 || event?.bloodpressurenothispanic,
    bloodPressureMexicanMexicanAmericanOrChicano:
      0 || event?.bloodpressuremexicanmexicanamericanorchicano,
    bloodPressurePuertoRican: 0 || event?.bloodpressurepuertorican,
    bloodPressureCuban: 0 || event?.bloodpressurecuban,
    bloodPressureDominican: 0 || event?.bloodpressuredominican,
    bloodPressureEcuadorian: 0 || event?.bloodpressureecuadorian,
    bloodPressureOtherHispanic: 0 || event?.bloodpressureotherhispanic,
    bloodPressureEthnicityDeclinedToAnswer:
      0 || event?.bloodpressureethnicitydeclinedtoanswer,
    bloodPressureGayOrLesbian: 0 || event?.bloodpressuregayorlesbian,
    bloodPressureStraightOrHeterosexual:
      0 || event?.bloodpressurestraightorheterosexual,
    bloodPressureBisexual: 0 || event?.bloodpressurebisexual,
    bloodPressureQueer: 0 || event?.bloodpressurequeer,
    bloodPressureQuestioningOrNotSure:
      0 || event?.bloodpressurequestioningornotsure,
    bloodPressureSexualOrientationUnknown:
      0 || event?.bloodpressuresexualorientationunknown,
    bloodPressureSexualOrientationDeclinedToAnswer:
      0 || event?.bloodpressuresexualorientationdeclinedtoanswer,
    cholesterolTestingAgency: event?.cholesteroltestingagency,
    cholesterolTestedTotal: 0 || event?.cholesteroltestedtotal,
    cholesterolLinkedToCare: 0 || event?.cholesterollinkedtocare,
    cholesterolServicesReferredTo: event?.cholesterolservicesreferredto,
    cholesterolFemale: 0 || event?.cholesterolfemale,
    cholesterolMale: 0 || event?.cholesterolmale,
    cholesterolTransgenderFemale: 0 || event?.cholesteroltransgenderfemale,
    cholesterolTransgenderMale: 0 || event?.cholesteroltransgendermale,
    cholesterolGenderNonConforming: 0 || event?.cholesterolgendernonconforming,
    cholesterolNonBinary: 0 || event?.cholesterolnonbinary,
    cholesterolOtherGenderIdentity: 0 || event?.cholesterolothergenderidentity,
    cholesterolGenderDeclinedToAnswer:
      0 || event?.cholesterolgenderdeclinedtoanswer,
    cholesterolUnder15: 0 || event?.cholesterolunder15,
    cholesterol16_19: 0 || event?.cholesterol16_19,
    cholesterol20_24: 0 || event?.cholesterol20_24,
    cholesterol25_29: 0 || event?.cholesterol25_29,
    cholesterol30_34: 0 || event?.cholesterol30_34,
    cholesterol35_39: 0 || event?.cholesterol35_39,
    cholesterol40_44: 0 || event?.cholesterol40_44,
    cholesterol45_49: 0 || event?.cholesterol45_49,
    cholesterol50_54: 0 || event?.cholesterol50_54,
    cholesterol55_59: 0 || event?.cholesterol55_59,
    cholesterol60_64: 0 || event?.cholesterol60_64,
    cholesterol65_69: 0 || event?.cholesterol65_69,
    cholesterol70: 0 || event?.cholesterol70,
    cholesterolAgeDeclinedToAnswer: 0 || event?.cholesterolagedeclinedtoanswer,
    cholesterolBlackOrAfricanAmerican:
      0 || event?.cholesterolblackorafricanamerican,
    cholesterolHispanic: 0 || event?.cholesterolhispanic,
    cholesterolAsian: 0 || event?.cholesterolasian,
    cholesterolAmericanIndianOrAlaskaNative:
      0 || event?.cholesterolamericanindianoralaskanative,
    cholesterolMiddleEasternOrNorthAfrican:
      0 || event?.cholesterolmiddleeasternornorthafrican,
    cholesterolNativeHawaiianOrOtherPacificIslander:
      0 || event?.cholesterolnativehawaiianorotherpacificislander,
    cholesterolWhite: 0 || event?.cholesterolwhite,
    cholesterolSomeOtherRace: 0 || event?.cholesterolsomeotherrace,
    cholesterolRaceDeclinedToAnswer:
      0 || event?.cholesterolracedeclinedtoanswer,
    cholesterolNotHispanic: 0 || event?.cholesterolnothispanic,
    cholesterolMexicanMexicanAmericanOrChicano:
      0 || event?.cholesterolmexicanmexicanamericanorchicano,
    cholesterolPuertoRican: 0 || event?.cholesterolpuertorican,
    cholesterolCuban: 0 || event?.cholesterolcuban,
    cholesterolDominican: 0 || event?.cholesteroldominican,
    cholesterolEcuadorian: 0 || event?.cholesterolecuadorian,
    cholesterolOtherHispanic: 0 || event?.cholesterolotherhispanic,
    cholesterolEthnicityDeclinedToAnswer:
      0 || event?.cholesterolethnicitydeclinedtoanswer,
    cholesterolGayOrLesbian: 0 || event?.cholesterolgayorlesbian,
    cholesterolStraightOrHeterosexual:
      0 || event?.cholesterolstraightorheterosexual,
    cholesterolBisexual: 0 || event?.cholesterolbisexual,
    cholesterolQueer: 0 || event?.cholesterolqueer,
    cholesterolQuestioningOrNotSure:
      0 || event?.cholesterolquestioningornotsure,
    cholesterolSexualOrientationUnknown:
      0 || event?.cholesterolsexualorientationunknown,
    cholesterolSexualOrientationDeclinedToAnswer:
      0 || event?.cholesterolsexualorientationdeclinedtoanswer,
    covidTestingAgency: event?.covidtestingagency,
    covidTestedTotal: 0 || event?.covidtestedtotal,
    otherTestingType: event?.othertestingtype,
    otherTestingAgency: event?.othertestingagency,
    otherTestedTotal: 0 || event?.othertestedtotal,
    otherLinkedToCare: 0 || event?.otherlinkedtocare,
    otherServicesReferredTo: event?.otherservicesreferredto,
    otherFemale: 0 || event?.otherfemale,
    otherMale: 0 || event?.othermale,
    otherTransgenderFemale: 0 || event?.othertransgenderfemale,
    otherTransgenderMale: 0 || event?.othertransgendermale,
    otherGenderNonConforming: 0 || event?.othergendernonconforming,
    otherNonBinary: 0 || event?.othernonbinary,
    otherOtherGenderIdentity: 0 || event?.otherothergenderidentity,
    otherGenderDeclinedToAnswer: 0 || event?.othergenderdeclinedtoanswer,
    otherUnder15: 0 || event?.otherunder15,
    other16_19: 0 || event?.other16_19,
    other20_24: 0 || event?.other20_24,
    other25_29: 0 || event?.other25_29,
    other30_34: 0 || event?.other30_34,
    other35_39: 0 || event?.other35_39,
    other40_44: 0 || event?.other40_44,
    other45_49: 0 || event?.other45_49,
    other50_54: 0 || event?.other50_54,
    other55_59: 0 || event?.other55_59,
    other60_64: 0 || event?.other60_64,
    other65_69: 0 || event?.other65_69,
    other70: 0 || event?.other70,
    otherAgeDeclinedToAnswer: 0 || event?.otheragedeclinedtoanswer,
    otherBlackOrAfricanAmerican: 0 || event?.otherblackorafricanamerican,
    otherHispanic: 0 || event?.otherhispanic,
    otherAsian: 0 || event?.otherasian,
    otherAmericanIndianOrAlaskaNative:
      0 || event?.otheramericanindianoralaskanative,
    otherMiddleEasternOrNorthAfrican:
      0 || event?.othermiddleeasternornorthafrican,
    otherNativeHawaiianOrOtherPacificIslander:
      0 || event?.othernativehawaiianorotherpacificislander,
    otherWhite: 0 || event?.otherwhite,
    otherSomeOtherRace: 0 || event?.othersomeotherrace,
    otherRaceDeclinedToAnswer: 0 || event?.otherracedeclinedtoanswer,
    otherNotHispanic: 0 || event?.othernothispanic,
    otherMexicanMexicanAmericanOrChicano:
      0 || event?.othermexicanmexicanamericanorchicano,
    otherPuertoRican: 0 || event?.otherpuertorican,
    otherCuban: 0 || event?.othercuban,
    otherDominican: 0 || event?.otherdominican,
    otherEcuadorian: 0 || event?.otherecuadorian,
    otherOtherHispanic: 0 || event?.otherotherhispanic,
    otherEthnicityDeclinedToAnswer: 0 || event?.otherethnicitydeclinedtoanswer,
    otherGayOrLesbian: 0 || event?.othergayorlesbian,
    otherStraightOrHeterosexual: 0 || event?.otherstraightorheterosexual,
    otherBisexual: 0 || event?.otherbisexual,
    otherQueer: 0 || event?.otherqueer,
    otherQuestioningOrNotSure: 0 || event?.otherquestioningornotsure,
    otherSexualOrientationUnknown: 0 || event?.othersexualorientationunknown,
    otherSexualOrientationDeclinedToAnswer:
      0 || event?.othersexualorientationdeclinedtoanswer,
    reminderPostEvaluationSurvy: false || event?.reminderpostevaluationsurvy,
    hivGenderNotSureQuestioning: 0 || event?.hivgendernotsurequestioning,
    altAgeHivUnder13: 0 || event?.altagehivunder13,
    altAgeHiv13_18: 0 || event?.altagehiv13_18,
    altAgeHiv19_24: 0 || event?.altagehiv19_24,
    hivMoreThanOneRace: 0 || event?.hivmorethanonerace,
    stiGenderNotSureQuestioning: 0 || event?.stigendernotsurequestioning,
    altAgeStiUnder13: 0 || event?.altagestiunder13,
    altAgeSti13_18: 0 || event?.altagesti13_18,
    altAgeSti19_24: 0 || event?.altagesti19_24,
    stiMoreThanOneRace: 0 || event?.stimorethanonerace,
    hepCGenderNotSureQuestioning: 0 || event?.hepcgendernotsurequestioning,
    altAgeHepCUnder13: 0 || event?.altagehepcunder13,
    altAgeHepC13_18: 0 || event?.altagehepc13_18,
    altAgeHepC19_24: 0 || event?.altagehepc19_24,
    hepCMoreThanOneRace: 0 || event?.hepcmorethanonerace,
    username: event?.username,
    userlastname: event?.userlastname,
    datePostEventSurvey: event?.dateposteventsurvey,
    namePostEventSurvey: event?.nameposteventsurvey,
    sessionPresenter: event?.sessionpresenter,
    guestSpeakers: event?.guestspeakers,
    nameGuestSpeakers: event?.nameguestspeakers,
    partnerOrganization1: event?.partnerorganization1,
    additionalZipCodes: event?.additionalzipcodes,
    totalEventAttendees: 0 || event?.totaleventattendees,
    staffPresentNames: event?.staffpresentnames,
  });

  console.log("formData", formData);
  return (
    <Layout>
      <PageTopHeading
        backBtn={true}
        dashboardBtn={true}
        pageTitle={"AIRS form"}
      />


<h2 className="font-black text-center my-5">
      Community Level Intervention 
      </h2>
      <div className="container mx-auto ">
     
        <div className="airs-form-container  border-black grid  bg-white rounded-lg shadow-lg py-10 my-10">
            <AirsEventSession event={event}/>
            <AirsDemographics event={event}/>
            <AirsMaterials event={event} />

        </div>
      </div>
    </Layout>
  );
};

export default AirsForm;

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const { id } = ctx.params;
    const [
      event,
      programs,
      locationTypes,
      areasOfFocus,
      eventTypes,
      selectedEventId,
    ] = await Promise.all([
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/post_event_report/event/${id}`
      )
        .then((r) => r.json())
        .then((response) => response[0]),
      fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/programs`).then((r) =>
        r.json()
      ),

      fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/event_location_type`).then(
        (r) => r.json()
      ),
      fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/health_area_of_focus`).then(
        (r) => r.json()
      ),
      fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/event_type`).then((r) =>
        r.json()
      ),
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
