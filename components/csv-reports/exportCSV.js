import React, { useEffect, useState} from "react";
import { CSVLink } from "react-csv";
const orderDataset = (data) => {
  const reverseDate = (date) => {
    const splitted = new Date(date).toISOString().split("T")
    const reverse = splitted[0].split('-');
    const result=reverse[1]+'/'+reverse[2]+'/'+reverse[0];
    return result;
  }
  return [
    data.eventid,
    data.userid,
    data.name,
    data.lastname,
    reverseDate(data.eventdatecreated),
    data.programid,
    data.programname,
    data.nysactivity,
    data.nysactivityother,
    data.workarea,
    data.workareaother,
    data.eventname,
    data.eventdescription,
    data.additionalmaterials,
    data.onlineinpersoneventtype,
    data.inpersoneventtypeid,
    data.inpersoneventtypename,
    data.eventlocationtypename,
    data.onlineeventtypeid,
    data.onlineeventtypename,
    data.locationname,
    data.locationnameother,
    data.locationaddress,
    data.borough,
    data.zipcode,
    data.additionalzipcodes,
    reverseDate(data.eventdate),
    data.eventstarttime,
    data.eventfinishtime,
    data.healthareaoffocusname,
    data.nameposteventsurvey,
    reverseDate(data.dateposteventsurvey),
    data.mainrole,
    data.mainroleother,
    data.sessionpresenter,
    data.guestspeakers,
    data.nameguestspeakers,
    data.partnerorganization1,
    data.nysprimaryriskgroup,
    data.staffpresent,
    data.staffpresentnames,
    data.internpresent,
    data.adultvolunteers,
    data.youthvolunteers,
    data.languages,
    data.masks,
    data.covidliterature,
    data.vaccinerelatedliterature,
    data.hivliterature,
    data.hepcliterature,
    data.prepliterature,
    data.safersexkits,
    data.healthdisparitiesliterature,
    data.bagsboxesfood,
    data.posters,
    data.othereventleaflets,
    data.preparedmeals,
    data.handsanitizers,
    data.covidvaccinesitereferraldetails,
    data.malecondoms,
    data.femalecondoms,
    data.lubricant,
    data.referrallists,
    data.dentaldam,
    data.promotionalmaterial,
    data.participantregistrationform,
    data.eventstartedontime,
    data.eventfinishedontime,
    data.participantgreeted,
    data.resourcesavailable,
    data.photorelease,
    data.handsanitizeravailable,
    data.remindersafespace,
    data.totalattendees,
    data.demographicsknown,
    data.airsformgender,
    data.airsformage,
    data.airsformraceethnicity,
    data.textorcall,
    data.sendemail,
    data.eventhighlights.split("\n").join(" "),
    data.eventchallenges,
    data.eventtestingdone,
    data.hivtesting,
    data.stitesting,
    data.hepctesting,
    data.covidtesting,
    data.hivtestingagency,
    data.hivtestedtotal,
    data.hivreactiveresults,
    data.prepreferrals,
    data.hivlinkedtocare,
    data.hivservicesreferredto,
    data.hivfemale,
    data.hivmale,
    data.hivtransgenderfemale,
    data.hivtransgendermale,
    data.hivgendernonconforming,
    data.hivnonbinary,
    data.hivgendernotsurequestioning,
    data.hivothergenderidentity,
    data.hivgenderdeclinedtoanswer,
    data.altagehivunder13,
    data.altagehiv13_18,
    data.altagehiv19_24,
    data.hiv25_29,
    data.hiv30_34,
    data.hiv35_39,
    data.hiv40_44,
    data.hiv45_49,
    data.hiv50_54,
    data.hiv55_59,
    data.hiv60_64,
    data.hiv65_69,
    data.hiv70,
    data.hivagedeclinedtoanswer,
    data.hivblackorafricanamerican,
    data.hivhispanic,
    data.hivasian,
    data.hivamericanindianoralaskanative,
    data.hivmiddleeasternornorthafrican,
    data.hivnativehawaiianorotherpacificislander,
    data.hivwhite,
    data.hivsomeotherrace,
    data.hivracedeclinedtoanswer,
    data.hivmorethanonerace,
    data.hivnothispanic,
    data.hivmexicanmexicanamericanorchicano,
    data.hivpuertorican,
    data.hivcuban,
    data.hivdominican,
    data.hivecuadorian,
    data.hivotherhispanic,
    data.hivethnicitydeclinedtoanswer,
    data.hivgayorlesbian,
    data.hivstraightorheterosexual,
    data.hivbisexual,
    data.hivqueer,
    data.hivquestioningornotsure,
    data.hivsexualorientationunknown,
    data.hivsexualorientationdeclinedtoanswer,
    data.stitestingagency,
    data.stitestedtotal,
    data.stireactiveresults,
    data.stilinkedtocare,
    data.stiservicesreferredto,
    data.stifemale,
    data.stimale,
    data.stitransgenderfemale,
    data.stitransgendermale,
    data.stigendernonconforming,
    data.stinonbinary,
    data.stigendernotsurequestioning,
    data.stiothergenderidentity,
    data.stigenderdeclinedtoanswer,
    data.altagestiunder13,
    data.altagesti13_18,
    data.altagesti19_24,
    data.sti25_29,
    data.sti30_34,
    data.sti35_39,
    data.sti40_44,
    data.sti45_49,
    data.sti50_54,
    data.sti55_59,
    data.sti60_64,
    data.sti65_69,
    data.sti70,
    data.stiagedeclinedtoanswer,
    data.stiblackorafricanamerican,
    data.stihispanic,
    data.stiasian,
    data.stiamericanindianoralaskanative,
    data.stimiddleeasternornorthafrican,
    data.stinativehawaiianorotherpacificislander,
    data.stiwhite,
    data.stisomeotherrace,
    data.stiracedeclinedtoanswer,
    data.stimorethanonerace,
    data.stinothispanic,
    data.stimexicanmexicanamericanorchicano,
    data.stipuertorican,
    data.sticuban,
    data.stidominican,
    data.stiecuadorian,
    data.stiotherhispanic,
    data.stiethnicitydeclinedtoanswer,
    data.stigayorlesbian,
    data.stistraightorheterosexual,
    data.stibisexual,
    data.stiqueer,
    data.stiquestioningornotsure,
    data.stisexualorientationunknown,
    data.stisexualorientationdeclinedtoanswer,
    data.hepctestingagency,
    data.hepctestedtotal,
    data.hepcreactiveresults,
    data.hepclinkedtocare,
    data.hepcservicesreferredto,
    data.hepcfemale,
    data.hepcmale,
    data.hepctransgenderfemale,
    data.hepctransgendermale,
    data.hepcgendernonconforming,
    data.hepcnonbinary,
    data.hepcgendernotsurequestioning,
    data.hepcothergenderidentity,
    data.hepcgenderdeclinedtoanswer,
    data.altagehepcunder13,
    data.altagehepc13_18,
    data.altagehepc19_24,
    data.hepc25_29,
    data.hepc30_34,
    data.hepc35_39,
    data.hepc40_44,
    data.hepc45_49,
    data.hepc50_54,
    data.hepc55_59,
    data.hepc60_64,
    data.hepc65_69,
    data.hepc70,
    data.hepcagedeclinedtoanswer,
    data.hepcblackorafricanamerican,
    data.hepchispanic,
    data.hepcasian,
    data.hepcamericanindianoralaskanative,
    data.hepcmiddleeasternornorthafrican,
    data.hepcnativehawaiianorotherpacificislander,
    data.hepcwhite,
    data.hepcsomeotherrace,
    data.hepcracedeclinedtoanswer,
    data.hepcmorethanonerace,
    data.hepcnothispanic,
    data.hepcmexicanmexicanamericanorchicano,
    data.hepcpuertorican,
    data.hepccuban,
    data.hepcdominican,
    data.hepcecuadorian,
    data.hepcotherhispanic,
    data.hepcethnicitydeclinedtoanswer,
    data.hepcgayorlesbian,
    data.hepcstraightorheterosexual,
    data.hepcbisexual,
    data.hepcqueer,
    data.hepcquestioningornotsure,
    data.hepcsexualorietnationunknown,
    data.hepcsexualorientationdeclinedtoanswer,
    data.covidtestingagency,
    data.covidtestedtotal,
  ]
};

const ExportCSV = ({ csvData, fileName}) => {
  console.log("csv data",csvData)
  const [orderedData, setOrdereData] = useState([]);
  const headers = [
    "eventID",
    "userID",
    "UserFirstName",
    "UserLastName",
    "eventDateCreated",
    "programID",
    "programName",
    "nysActivity",
    "nysActivityOther",
    "workArea",
    "workAreaOther",
    "eventName",
    "eventDescription",
    "additionalMaterials",
    "onlineInPersonEventType",
    "inPersonEventTypeID",
    "inPersonEventTypeName",
    "eventLocationTypeName",
    "onlineEventTypeID",
    "onlineEventTypeName",
    "locationName",
    "locationNameOther",
    "locationAddress",
    "borough",
    "eventZipCode",
    "additionalZipCodes",
    "eventDate",
    "eventStartTime",
    "eventFinishTime",
    "healthAreaOfFocusName",
    "namePostEventSurvey",
    "datePostEventSurvey",
    "mainRole",
    "MainRoleOther",
    "sessionPresenter",
    "guestSpeakers",
    "nameGuestSpeakers",
    "partnerOrganization1",
    "nysPrimaryRiskGroup",
    "staffPresent",
    "staffPresentNames",
    "internPresent",
    "adultVolunteers",
    "youthVolunteers",
    "languages",
    "masks",
    "covidLiterature",
    "vaccineRelatedLiterature",
    "hivLiterature",
    "hepCLiterature",
    "prepLiterature",
    "saferSexKits",
    "healthDisparitiesLiterature",
    "bagsBoxesFood",
    "posters",
    "otherEventLeaflets",
    "preparedMeals",
    "handSanitizers",
    "covidVaccineSiteReferralDetails",
    "maleCondoms",
    "femaleCondoms",
    "lubricant",
    "referralLists",
    "dentalDam",
    "promotionalMaterial",
    "participantRegistrationForm",
    "eventStartedOnTime",
    "eventFinishedOnTime",
    "participantGreeted",
    "resourcesAvailable",
    "photoRelease",
    "handSanitizerAvailable",
    "reminderSafeSpace",
    "totalAttendees",
    "demographicsKnown",
    "airsFormGender",
    "airsFormAge",
    "airsFormRaceEthnicity",
    "textOrCall",
    "sendEmail",
    "eventHighlights",
    "eventChallenges",
    "eventTestingDone",
    "hivTesting",
    "stiTesting",
    "hepCTesting",
    "covidTesting",
    "hivTestingAgency",
    "hivTestedTotal",
    "hivReactiveResults",
    "prepReferrals",
    "hivLinkedToCare",
    "hivServicesReferredTo",
    "hivFemale",
    "hivMale",
    "hivTransgenderFemale",
    "hivTransgenderMale",
    "hivGenderNonConforming",
    "hivNonBinary",
    "hivGenderNotSureQuestioning",
    "hivOtherGenderIdentity",
    "hivGenderDeclinedToAnswer",
    "altAgeHivUnder13",
    "altAgeHiv13_18",
    "altAgeHiv19_24",
    "hiv25_29",
    "hiv30_34",
    "hiv35_39",
    "hiv40_44",
    "hiv45_49",
    "hiv50_54",
    "hiv55_59",
    "hiv60_64",
    "hiv65_69",
    "hiv70+",
    "hivAgeDeclinedToAnswer",
    "hivBlackOrAfricanAmerican",
    "hivHispanic",
    "hivAsian",
    "hivAmericanIndianOrAlaskaNative",
    "hivMiddleEasternOrNorthAfrican",
    "hivNativeHawaiianOrOtherPacificIslander",
    "hivWhite",
    "hivSomeOtherRace",
    "hivRaceDeclinedToAnswer",
    "hivMoreThanOneRace",
    "hivNotHispanic",
    "hivMexicanMexicanAmericanOrChicano",
    "hivPuertoRican",
    "hivCuban",
    "hivDominican",
    "hivEcuadorian",
    "hivOtherHispanic",
    "hivEthnicityDeclinedToAnswer",
    "hivGayOrLesbian",
    "hivStraightOrHeterosexual",
    "hivBisexual",
    "hivQueer",
    "hivQuestioningOrNotSure",
    "hivSexualOrientationUnknown",
    "hivSexualOrientationDeclinedToAnswer",
    "stiTestingAgency",
    "stiTestedTotal",
    "stiReactiveResults",
    "stiLinkedToCare",
    "stiServicesReferredTo",
    "stiFemale",
    "stiMale",
    "stiTransgenderFemale",
    "stiTransgenderMale",
    "stiGenderNonConforming",
    "stiNonBinary",
    "stiGenderNotSureQuestioning",
    "stiOtherGenderIdentity",
    "stiGenderDeclinedToAnswer",
    "altAgeStiUnder13",
    "altAgeSti13_18",
    "altAgeSti19_24",
    "sti25_29",
    "sti30_34",
    "sti35_39",
    "sti40_44",
    "sti45_49",
    "sti50_54",
    "sti55_59",
    "sti60_64",
    "sti65_69",
    "sti70+",
    "stiAgeDeclinedToAnswer",
    "stiBlackOrAfricanAmerican",
    "stiHispanic",
    "stiAsian",
    "stiAmericanIndianOrAlaskaNative",
    "stiMiddleEasternOrNorthAfrican",
    "stiNativeHawaiianOrOtherPacificIslander",
    "stiWhite",
    "stiSomeOtherRace",
    "stiRaceDeclinedToAnswer",
    "stiMoreThanOneRace",
    "stiNotHispanic",
    "stiMexicanMexicanAmericanOrChicano",
    "stiPuertoRican",
    "stiCuban",
    "stiDominican",
    "stiEcuadorian",
    "stiOtherHispanic",
    "stiEthnicityDeclinedToAnswer",
    "stiGayOrLesbian",
    "stiStraightOrHeterosexual",
    "stiBisexual",
    "stiQueer",
    "stiQuestioningOrNotSure",
    "stiSexualOrientationUnknown",
    "stiSexualOrientationDeclinedToAnswer",
    "hepCTestingAgency",
    "hepCTestedTotal",
    "hepCReactiveResults",
    "hepCLinkedToCare",
    "hepCServicesReferredTo",
    "hepCFemale",
    "hepCMale",
    "hepCTransgenderFemale",
    "hepCTransgenderMale",
    "hepCGenderNonConforming",
    "hepCNonBinary",
    "hepCGenderNotSureQuestioning",
    "hepCOtherGenderIdentity",
    "hepCGenderDeclinedToAnswer",
    "altAgeHepCUnder13",
    "altAgeHepC13_18",
    "altAgeHepC19_24",
    "hepC25_29",
    "hepC30_34",
    "hepC35_39",
    "hepC40_44",
    "hepC45_49",
    "hepC50_54",
    "hepC55_59",
    "hepC60_64",
    "hepC65_69",
    "hepC70+",
    "hepCAgeDeclinedToAnswer",
    "hepCBlackOrAfricanAmerican",
    "hepCHispanic",
    "hepCAsian",
    "hepCAmericanIndianOrAlaskaNative",
    "hepCMiddleEasternOrNorthAfrican",
    "hepCNativeHawaiianOrOtherPacificIslander",
    "hepCWhite",
    "hepCSomeOtherRace",
    "hepCRaceDeclinedToAnswer",
    "hepCMoreThanOneRace",
    "hepCNotHispanic",
    "hepCMexicanMexicanAmericanOrChicano",
    "hepCPuertoRican",
    "hepCCuban",
    "hepCDominican",
    "hepCEcuadorian",
    "hepCOtherHispanic",
    "hepCEthnicityDeclinedToAnswer",
    "hepCGayOrLesbian",
    "hepCStraightOrHeterosexual",
    "hepCBisexual",
    "hepCQueer",
    "hepCQuestioningOrNotSure",
    "hepCSexualOrietnationUnknown",
    "hepCSexualOrientationDeclinedToAnswer",
    "covidTestingAgency",
    "covidTestedTotal"
   ]
  useEffect(() => {
    const data = csvData.map((dataset) => orderDataset(dataset));
    setOrdereData(data);
  }, [csvData]);

  return (
    //use ";" as separator for testing 
    <CSVLink headers={headers} data={orderedData} filename={fileName} separator=",">
      <button  className="text-2xl text-white bg-black rounded shadow-xl p-5 w-full md:w-52 h-full uppercase">
      Download <br/>NYS CMD<br/> dataset
      </button>
    </CSVLink>
  );
};

export default ExportCSV;