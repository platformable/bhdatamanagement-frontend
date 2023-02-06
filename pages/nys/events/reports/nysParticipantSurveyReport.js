import React, { useEffect, useState } from "react";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Layout from "../../../../components/Layout";
import PageTopHeading from "../../../../components/PageTopHeading";
import ExportPaticipantCSV from "../../../../components/csv-reports/ExportParticipantCSV";
const NysParticipantSurveyReport = ({ participantReport }) => {
  console.log("report", participantReport);
  const [selectedDate, setSelectedDate] = useState({
    start: null,
    finish: null,
  });
  const [selectedCSV, setSelectedCSV] = useState([]);
  const [headers, setHeaders] = useState([]);
  const csvNowDate = new Date().toLocaleString("en-US", {timeZone: "America/New_York"})
  useEffect(() => {
    const cerohoursDate = new Date(selectedDate.start).setHours(0)
    console.log("selectedDate", selectedDate)
    const selectedReports = participantReport.filter(
      (report) => {
        const start = new Date(new Date(selectedDate.start).setHours(0))
        const end = new Date(new Date(selectedDate.finish).setHours(23))
        const eventdate = new Date(report?.eventdate)
        // console.log("start", start)
        // console.log("end", end)
        // console.log("eventdate", eventdate)
        // console.log(eventdate >= start && eventdate <= end)
        return eventdate >= start && eventdate <= end
      } 
    );
    setSelectedCSV(selectedReports);

  }, [selectedDate]);

  console.log("selected", selectedCSV);

  return (
    <Layout showStatusHeader={true}>
      <PageTopHeading
        pageTitle={"Download the CSV for NYS CMD participant survey outputs"}
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

                  setSelectedDate({ ...selectedDate, start: e.target.value })
                }}
              />
            </label>
            <label className="border-black p-5 flex justify-between">
              Finish date:
              <input
                type="date"
                onChange={(e) =>{
                  // console.log(new Date(new Date(e.target.value).toLocaleString("en-US", {timeZone: "America/New_York"})).setHours(0), "new date")
                  setSelectedDate({ ...selectedDate, finish: e.target.value })
                }}
              />
            </label>
          </div>
          {selectedCSV && (
            <ExportPaticipantCSV
              csvData={selectedCSV}
              fileName={`NYS_CMP_Participant_Survey_Data_${csvNowDate.split(",")[0]}.csv`}
            />
          )}
        </div>
      </section>
    </Layout>
  );
};

export default NysParticipantSurveyReport;

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/participant_event_outputs`
    )
    const participantReport = await response.json()   
    return {
      props: {
        participantReport: participantReport
      },
    };
  },
});
