import React, { useEffect, useState } from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Layout from "../../../../components/Layout";
import PageTopHeading from "../../../../components/PageTopHeading";
import CSVHIVOutreachParticipantSignInSheet from "../../../../components/csv-reports/CSVHIVOutreachParticipantSignInSheet";
export const allHeaders = {
  oef_participant_sign_in_sheet: [
    "id",
    "surveyname",
    "programId",
    "programName",
    "eventDate",
    "deliveryPartner",
    "participantZipCode",
    "ageId",
    "participantAgeRange",
    "raceId",
    "participantRace",
    "participantRaceOther",
    "ethnicityId",
    "participantEthnicity",
    "participantEthnicityOther",
    "genderId",
    "participantGender",
    "orientationId",
    "participantOrientation",
    "participantOrientationOther",
    "participantReferral",
    "participantReferralOther",
    "participantSuggestions",
  ],
  cbt_participant_survey: [
    "eventId",
    "surveyName",
    "programId",
    "programName",
    "eventName",
    "eventDate",
    "deliveryPartner",
    "fboPosition",
    "genderId",
    "participantGender",
    "participantGenderOther",
    "ageId",
    "participantAgeRange",
    "raceId",
    "participantRace",
    "participantRaceOther",
    "ethnicityId",
    "participantEthnicity",
    "participantEthnicityOther",
    "informationUseful",
    "canApply",
    "presenterExplainWell",
    "understoodTopics",
    "cbtChallenges",
    "cbtDealChallenges",
    "participantTools",
  ],
  hiv_outreach_event: [
    "eventId",
    "surveyName",
    "programId",
    "programName",
    "eventName",
    "eventDate",
    "deliveryPartner",
    "locationAddress",
    "createdByName",
    "createdbyLastName",
    "oefEventEmail",
    "eventZipCode",
    "eventStartTime",
    "eventFinishTime",
    "onlineInPersonEventType",
    "inPersonEventTypeId",
    "inPersonEventTypeName",
    "onlineEventTypeId",
    "onlineEventTypeName",
    "healthAreaOfFocusId",
    "healthAreaOfFocusName",
    "isClusterEvent",
    "cluster",
    "clusterFbos",
    "nameGuestSpeakers",
    "partnerOrganization1",
    "partnerOrganization1Other",
    "partnerOrganization2",
    "nationalAwarenessDay",
    "nationalAwarenessDayOther",
    "targetAudience",
    "targetAudienceOther",
    "totalAttendees",
    "hivLiterature",
    "hepCLiterature",
    "prepLiterature",
    "saferSexKits",
    "healthDisparitiesLiterature",
    "bagsBoxesFood",
    "masks",
    "handSanitizers",
    "covidLiterature",
    "vaccineRelatedLiterature",
    "totalTalkedHivPrepSaferSex",
    "eventQuestions",
    "eventHighlights",
    "eventChallenges",
    "capacityTrainingUseful",
    "lessonsLearned",
    "eventTestingDone",
    "hivTesting",
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
    "hiv70",
    "hivAgeDeclinedToAnswer",
    "hivBlackOrAfricanAmerican",
    "hivHispanic",
    "hivAsian",
    "hivAmericanIndianOrAlaskaNative",
    "hivMiddleEasternOrNorthAfrican",
    "hivNativeHawaiianOrOtherPacificIslander",
    "hivWhite",
    "hivSomeOtherRace",
    "hivMoreThanOnerace",
    "hivRaceDeclinedToAnswer",
    "hivNotHispanic",
    "hivMexicanMexicanAmericanOrChicano",
    "hivPuertoRican",
    "hivCuban",
    "hivDominican",
    "hivEcuadorian",
    "hivOtherHispanic",
    "hivEthnicityDeclinedToAnswer",
    "hepCTesting",
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
    "hepCOtherGenderIdentity",
    "hepCGenderDeclinedToAnswer",
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
    "hepC70",
    "hepCBlackOrAfricanAmerican",
    "hepCHispanic",
    "hepCAsian",
    "hepCAmericanIndianOrAlaskaNative",
    "hepCMiddleEasternOrNorthAfrican",
    "hepCNativeHawaiianOrOtherPacificIslander",
    "hepCWhite",
    "hepCSomeOtheRace",
    "hepCMoreThanOneRace",
    "hepCRaceDeclinedToAnswer",
    "hepCNotHispanic",
    "hepCMexicanMexicanAmericanOrChicano",
    "hepCPuertoRican",
    "hepCCuban",
    "hepCDominican",
    "hepCEcuadorian",
    "hepCOtherHispanic",
    "hepCEthnicityDeclinedToAnswer",
    "otherTesting",
    "otherTestingType",
    "otherTestedTotal",
    "submissionStatus",
    "submissionNotes",
    "onelineDescription",
    "oefEventPresentationTopic",
  ],
};
const ReportPicker = ({ participantReport, pageTitle, surveyName }) => {
  //   console.log("report", participantReport);
  const [selectedDate, setSelectedDate] = useState({
    start: null,
    finish: null,
  });

  const [selectedCSV, setSelectedCSV] = useState([]);
  // const [headers, setHeaders] = useState([]);
  const csvNowDate = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
  });
  // console.log();
  useEffect(() => {
    const cerohoursDate = new Date(selectedDate.start).setHours(0);
    console.log("selectedDate", selectedDate);
    const selectedReports = participantReport.filter((report) => {
      const start = new Date(new Date(selectedDate.start).setHours(0));
      const end = new Date(new Date(selectedDate.finish).setHours(23));
      const eventdate = new Date(report?.eventdate);
      // console.log("start", start)
      // console.log("end", end)
      // console.log("eventdate", eventdate)
      // console.log(eventdate >= start && eventdate <= end)
      return eventdate >= start && eventdate <= end;
    });
    setSelectedCSV(selectedReports);
  }, [selectedDate]);

  console.log("selected", selectedCSV);

  return (
    <Layout showStatusHeader={true}>
      <PageTopHeading
        pageTitle={pageTitle}
        backBtn={true}
        dashboardBtn={true}
      />
      <section className="container mx-auto px-5 md:px-0">
        <p className="font-bold text-xl">Choose the data range:</p>
        <div className="grid md:grid-cols-3 my-7 gap-7">
          <div className="grid grid-cols-1 gap-5">
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
          {selectedCSV && (
            <CSVHIVOutreachParticipantSignInSheet
              csvData={selectedCSV}
              headers={allHeaders[surveyName]}
              fileName={`OEF_HIV_Outreach_sign_in_sheet${
                csvNowDate.split(",")[0]
              }.csv`}
            />
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ReportPicker;

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const { surveyName } = ctx.params;

    const reportNameFromSurveyName = () => {
      switch (surveyName) {
        case "oef_participant_sign_in_sheet":
          return {
            surveyRoute: "fbo/participant_survey",
            pageTitle: "Download OEF Participant Sign-In sheet data",
          };
          break;
        case "cbt_participant_survey":
          return {
            surveyRoute: "cbt/participant_survey",
            pageTitle: "Download CBT Participant Feedback data",
          };
          break;
        case "hiv_outreach_event":
          return {
            surveyRoute: "hiv/fbo_outreach",
            pageTitle: "Download HIV Outreach Event data",
          };
          break;
      }
    };
    const { surveyRoute, pageTitle } = reportNameFromSurveyName();
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/reports/oef/${surveyRoute}`
    );
    const participantReport = await response.json();
    return {
      props: {
        participantReport: participantReport,
        pageTitle: pageTitle,
        surveyName: surveyName,
      },
    };
  },
});
