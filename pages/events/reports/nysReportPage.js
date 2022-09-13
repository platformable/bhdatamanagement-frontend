import React, { useEffect, useState } from "react";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Layout from "../../../components/Layout";
import PageTopHeading from "../../../components/PageTopHeading";
import ExportCSV from "../../../components/exportCSV";
const NysReportPage = ({ eventReport }) => {
  console.log("report", eventReport);
  const [selectedDate, setSelectedDate] = useState({
    start: null,
    finish: null,
  });
  const [selectedCSV, setSelectedCSV] = useState([]);
  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    const cerohoursDate = new Date(selectedDate.start).setHours(0)
    console.log("selectedDate", selectedDate)
    const selectedReports = eventReport.filter(
      (report) => 
          new Date(report.eventdate) >= new Date(new Date(selectedDate.start).toLocaleString("en-US", {timeZone: "America/New_York"})).setHours(0) &&
          new Date(report.eventdate) <= new Date(selectedDate.finish)
    );
    setSelectedCSV(selectedReports);

    // const headers = Object.keys(eventReport[0]).map(key => ({"label": key, "key": key}))
    // setHeaders(headers)
  }, [selectedDate]);

  console.log("selected", selectedCSV);

  return (
    <Layout showStatusHeader={true}>
      <PageTopHeading
        pageTitle={"Download the CSV dataset for the NYS CMD report"}
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
            <ExportCSV
              csvData={selectedCSV}
              fileName="event_post_survey_report.csv"
            />
          )}
        </div>
      </section>
    </Layout>
  );
};

export default NysReportPage;

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/post_event_report/nys_events_output`
    );
    const eventReport = await response.json();
    return {
      props: {
        eventReport: eventReport,
      },
    };
  },
});
