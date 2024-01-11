import React, { useEffect, useState } from "react";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Layout from "../../../../components/Layout";
import PageTopHeading from "../../../../components/PageTopHeading";
import ExportCSV from "../../../../components/csv-reports/exportCSV";
const NysReportPage = ({}) => {
  // console.log("post events",eventReport)
  const [selectedDate, setSelectedDate] = useState({
    start: null,
    finish: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorRequest, setErrorResquest] = useState("");
  const [selectedCSV, setSelectedCSV] = useState([]);
  const [headers, setHeaders] = useState([]);
  const csvNowDate = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
  });

  const fetchWithinRange = async () => {
    if (!selectedDate.start || !selectedDate.finish) {
      setErrorResquest("Select dates");
      return;
    }
    setErrorResquest(false);
    setIsLoading(true);

    try {
      const eventsOutput = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/post_event_report/nys_events_output/${selectedDate.start}&${selectedDate.finish}`
      )
        .then((r) => r.json())
        .catch((err) => {
          console.log(err);
        });
      if (eventsOutput?.statusText === "FAIL") {
        setIsLoading(false);
        setErrorResquest("No data founded");
      } else {
        setIsLoading(false);
        setSelectedCSV(eventsOutput);
      }
    } catch (err) {
      console.log("idnsandsaknsdk");
      setIsLoading(false);

      setErrorResquest(err.message);
    }
  };
  useEffect(() => {
    if (selectedDate.start || selectedDate.finish) {
      fetchWithinRange();
    }
  }, [selectedDate.start, selectedDate.finish]);

  return (
    <Layout showStatusHeader={true}>
      <PageTopHeading
        pageTitle={"Download the CSV for NYS events"}
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

                  setSelectedDate({ ...selectedDate, start: e.target.value });
                }}
              />
            </label>
            <label className="border-black p-5 flex justify-between">
              Finish date:
              <input
                type="date"
                onChange={(e) => {
                  setSelectedDate({ ...selectedDate, finish: e.target.value });
                }}
              />
            </label>
          </div>
          <div className={`${selectedCSV.length === 0 ? "pointer-events-none" : ""}`}>
            <ExportCSV
              csvData={selectedCSV}
              fileName={`NYS_CMP_Event_Data_${csvNowDate.split(",")[0]}.csv`}
            />
          </div>
        </div>
        <span className="font-medium">Select both dates to dowload report</span>
      </section>
    </Layout>
  );
};

export default NysReportPage;

export const getServerSideProps = withPageAuthRequired({});
