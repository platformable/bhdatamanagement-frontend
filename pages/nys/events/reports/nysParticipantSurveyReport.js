import React, { useEffect, useState } from "react";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Layout from "../../../../components/Layout";
import PageTopHeading from "../../../../components/PageTopHeading";
import ExportPaticipantCSV from "../../../../components/csv-reports/ExportParticipantCSV";

const NysParticipantSurveyReport = () => {
  // console.log("report", participantReport);
  const [selectedDate, setSelectedDate] = useState({
    start: null,
    finish: null,
  });
  const [selectedCSV, setSelectedCSV] = useState([]);
  const [headers, setHeaders] = useState([]);
  const csvNowDate = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorRequest, setErrorResquest] = useState("");
  const [generateReport, setGenerateReport] = useState(false);

  const fetchWithinRange = async () => {

    console.log("action")
    if (!selectedDate.start || !selectedDate.finish) {
      setErrorResquest("Select dates");
      return;
    }
    setGenerateReport(false);
    setErrorResquest(false);
    setIsLoading(true);

    try {
      const participantReport = await fetch(
        `http://localhost:3500/participant_event_outputs/report/${selectedDate.start}&${selectedDate.finish}`
      )
        .then((r) => r.json())
        .catch((err) => {
          console.log(err);
        });

      if (participantReport?.statusText === "FAIL") {
        setIsLoading(false);
        setErrorResquest("No data founded");
      } else {
        setIsLoading(false);
        setSelectedCSV(participantReport);
        // setGenerateReport((prev) => !prev);
      }
    } catch (err) {
      setIsLoading(false);

      setErrorResquest(err.message);
    }
  };

  /*   useEffect(() => {
    const cerohoursDate = new Date(selectedDate.start).setHours(0)
    // console.log("selectedDate", selectedDate)
    const selectedReports = participantReport.filter(
      (report) => {
        const start = new Date(new Date(selectedDate.start).setHours(0))
        const end = new Date(new Date(selectedDate.finish).setHours(23))
        const eventdate = new Date(report?.eventdate)

        return eventdate >= start && eventdate <= end
      } 
    );
    setSelectedCSV(selectedReports);

  }, [selectedDate]); */

  // console.log("selected", selectedCSV);

  useEffect(() => {
    if (selectedDate.start || selectedDate.finish) {
      fetchWithinRange();
    }
  }, [selectedDate.start, selectedDate.finish]);

  console.log("selectedCSV",selectedCSV)
  

  return (
    <Layout showStatusHeader={true}>
      <PageTopHeading
        pageTitle={"Download the CSV for NYS participant survey outputs"}
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
            <div
              className={`${
                selectedCSV.length === 0 ? "pointer-events-none" : ""
              }`}
            >
              <ExportPaticipantCSV
                csvData={selectedCSV}
                fileName={`NYS_CMP_Participant_Survey_Data_${
                  csvNowDate.split(",")[0]
                }.csv`}
              />
            </div>
          )}
        </div>
       {errorRequest && <center>{errorRequest}</center>}
      </section>
    </Layout>
  );
};

export default NysParticipantSurveyReport;

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/participant_event_outputs`
    );
    const participantReport = await response.json();
    return {
      props: {
        participantReport: participantReport,
      },
    };
  },
});
