import React, { useEffect, useState } from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Layout from "../../../../../components/Layout";
import PageTopHeading from "../../../../../components/PageTopHeading";
import CSVHIVOutreachParticipantSignInSheet from "../../../../../components/csv-reports/CSVHIVOutreachParticipantSignInSheet";
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
  cbt_quarterly: [
    "programId",
    "programName",
    "surveyName",
    "surveyCompleted",
    "deliveryPartner",
    "fboPosition",
    "participantCbtActions",
    "participantHivKnowledge",
    "participantPrepKnowledge",
    "participantPrepResourceKnowledge",
    "participantConsentKnowledge",
    "participantStiInfectionKnowledge",
    "participantPepUsageKnowledge",
    "participantPrepUse",
    "participantCreateSurvey",
    "participantSurveyTool",
    "participantSurveyGoal",
    "participantDataCollecting",
    "participantDataComfort",
    "participantDataUse",
    "participantDataUseOther",
    "participantFboEngagement",
    "participantFboImprove",
    "participantFboFeedbackResponse",
    "participantInfoUnderstandable",
    "participantInfoAccessible",
    "participantCabCreation",
    "participantCabRecruitment",
    "participantCabImpact",
    "participantCabMembers",
    "participantFboStrategy",
    "participantTargetGroups",
    "participantTargetGroupsOther",
    "participantYouthMinistryCreation",
    "participantYouthMinistryRecruitment",
    "participantFboYouth",
    "participantGrantsIdentify",
    "participantGrantsApplied",
    "participantGrantsProcess",
    "participantGrantsMore",
    "participantGrantsSuccess",
    "participantGrantsWhySuccess",
    "participantGrantsLearned",
    "participantGrantsSuccessMore",
  ],
  technical_assistance_request: [
    "programId",
    "programName",
    "surveyName",
    "taDateSubmitted",
    "surveyCreated",
    "surveyModified",
    "taType",
    "taTypeOther",
    "taReason",
    "taContactName",
    "taEmail",
    "taPhone",
    "taFbo",
    "taFboOther",
    "taStatus",
    "taStatusCompleteDate",
    "taCompleteBhStaff",
    "taNotesBhStaff",
  ],
  site_visits: [
    "programId",
    "programName",
    "surveyName",
    "surveyCreated",
    "id",
    "userId",
    "boroughFbo",
    "eventDate",
    "eventstarttime",
    "eventfinishtime",
    "fbo",
    "fboAttendees",
    "fboAttendeesOther",
    "sanctuary",
    "privateTestingArea",
    "healthMinistry",
    "healthMinistryMembers",
    "healthMinistryActive",
    "healthMinistryCoordinators",
    "strategiesHealthDisparities",
    "targetAudience",
    "targetAudienceOther",
    "targetAudienceAdditional",
    "barriersEngagement",
    "barriersEngagementOther",
    "bestPractices",
    "eventChallenges",
    "fboChanges",
    "fboImprovements",
    "fboObservations",
    "fboBeyondGrant",
    "fboCabFeedback",
    "fboAliFeedback",
    "fboYipFeedback",
    "fboLeaderHivOpenness",
    "healthMinistryHivOpenness",
    "membershipHivOpenness",
    "communityHivOpenness",
    "faithLeaderDiversityOpenness",
    "healthMinistryDiversityOpenness",
    "membershipDiversityOpenness",
    "communityDiversityOpenness",
    "fboObservations",
    "submissionStatus",
    "submissionNotes",
  ],
  cbt_facilitator_feedback: [
    "programId",
    "programName",
    "surveyName",
    "id",
    "surveyCompleted",
    "eventName",
    "eventDate",
    "eventStartTime",
    "eventFinishTime",
    "onlineEventTypeId",
    "onlineInPersonEventType",
    "inPersonEventTypeId",
    "inPersonEventTypeName",
    "inPersonEventTypeNameOther",
    "onlineEventTypeName",
    "eventDescription",
    "locationAddress",
    "healthAreaOfFocusId",
    "healthAreaOfFocusName",
    "mainRoles",
    "mainRolesOther",
    "participantRegistrationForm",
    "eventStartedOnTime",
    "eventFinishedOnTime",
    "participantGreeted",
    "resourcesAvailable",
    "photoRelease",
    "handSanitizerAvailable",
    "reminderSafeSpace",
    "reminderPostEvaluationSurvey",
    "eventChecklistOther",
    "eventChecklistOtherText",
    "totalAttendees",
    "eventOrganization",
    "eventWorkedBest",
    "eventImprove",
    "eventDelivery",
    "eventResponsive",
    "engaged",
    "topicsFollowup",
    "leastEngaged",
    "improveEngagement",
    "eventChallenges",
    "eventQuestions",
    "organizerFeedback"
  ],
};
const ReportPicker = ({
  participantReport,
  pageTitle,
  surveyName,
  fileName,
}) => {
  // console.log(
  //   "******************error: does not have eventdate to filter",
  //   participantReport
  // );
  const [selectedDate, setSelectedDate] = useState({
    start: null,
    finish: null,
  });

  const [selectedCSV, setSelectedCSV] = useState([]);
  const csvNowDate = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
  });
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
      console.log(eventdate >= start && eventdate <= end);
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
              fileName={`${fileName}${csvNowDate.split(",")[0]}.csv`}
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

    console.log("surveyName", surveyName);

    const reportNameFromSurveyName = () => {
      switch (surveyName) {
        case "oef_participant_sign_in_sheet":
          return {
            surveyRoute: "fbo/participant_survey",
            pageTitle: "Download OEF Participant Sign-In sheet data",
            fileName: "OEF_Participant_Sign_In_Sheet",
          };
          break;
        case "cbt_participant_survey":
          return {
            surveyRoute: "cbt/participant_survey",
            pageTitle: "Download CBT Participant Feedback data",
            fileName: "CBT_Participant_Survey",
          };
          break;
        case "hiv_outreach_event":
          return {
            surveyRoute: "hiv/fbo_outreach",
            pageTitle: "Download HIV Outreach Event data",
            fileName: "HIV_Outreach_Event",
          };
          break;
        case "cbt_quarterly":
          return {
            surveyRoute: "cbt/cbt_quarterly",
            pageTitle: "Download CBT Quarterly Evaluation Data",
            fileName: "CBT_Quarterly_Evaluation",
          };
          break;
        case "technical_assistance_request":
          return {
            surveyRoute: "ta/technical_assitance",
            pageTitle: "Download OEF Technical Assistance Request Data",
            fileName: "Technical_Assistance_Request",
          };
          break;
        case "site_visits":
          return {
            surveyRoute: "sv/site_visits",
            pageTitle: "Download Site Visit Data",
            fileName: "Site_Visits",
          };
          break;
        case "cbt_facilitator_feedback":
          return {
            surveyRoute: "cbt/facilitator",
            pageTitle: "Download CBT Facilitator Feedback Data",
            fileName: "CBT_Facilitator_Feedback",
          };
          break;
      }
    };
    const { surveyRoute, pageTitle, fileName } = reportNameFromSurveyName();

    console.log("surveyRoute", surveyRoute);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/reports/oef/${surveyRoute}`
    );
    const participantReport = await response.json();
    return {
      props: {
        participantReport: participantReport,
        pageTitle: pageTitle,
        surveyName: surveyName,
        fileName,
      },
    };
  },
});
