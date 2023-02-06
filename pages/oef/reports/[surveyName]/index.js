import React, { useEffect, useState } from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Layout from "../../../../components/Layout";
import PageTopHeading from "../../../../components/PageTopHeading";
import CSVHIVOutreachParticipantSignInSheet from "../../../../components/csv-reports/CSVHIVOutreachParticipantSignInSheet";

const ReportPicker = ({ participantReport, pageTitle }) => {
//   console.log("report", participantReport);
  const [selectedDate, setSelectedDate] = useState({
    start: null,
    finish: null,
  });
  const [selectedCSV, setSelectedCSV] = useState([]);
  const [headers, setHeaders] = useState([]);
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
              fileName={`OEF_HIV_Outreach_sign_in_sheet${
                csvNowDate.split(",")[0]
              }.csv`}
              headers={headers}
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
        case "oef-participant-sign-in-sheet":
          return {
            surveyRoute: "participant_survey",
            pageTitle: "Download OEF Participant Sign-In sheet data"
          };
          break;
      }
   };
   const {surveyRoute, pageTitle} = reportNameFromSurveyName()
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/reports/oef/fbo/${surveyRoute}`
    );
    const participantReport = await response.json();
    return {
      props: {
        participantReport: participantReport,
        pageTitle: pageTitle
      },
    };
  },
});
