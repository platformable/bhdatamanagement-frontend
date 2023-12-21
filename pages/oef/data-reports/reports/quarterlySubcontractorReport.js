import React, { useEffect, useState } from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Layout from "../../../../components/Layout";
import PageTopHeading from "../../../../components/PageTopHeading";
import CSVHIVOutreachParticipantSignInSheet from "../../../../components/csv-reports/CSVHIVOutreachParticipantSignInSheet";
import QuarterlyCsv from "../../../../components/csv-reports/QuarterlyCsv";

const quarterlySubcontractorReport = ({ hivOutreachCSV, cabCSV }) => {
  const [selectedDate, setSelectedDate] = useState({
    start: null,
    finish: null,
  });

  const [download, setDownload] = useState(false);
  const [selectedHivCSV, setSelectedHivCSV] = useState([]);
  const [selectedCabCSV, setSelectedCabCSV] = useState([]);

  const csvNowDate = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
  });
  useEffect(() => {
    const cerohoursDate = new Date(selectedDate.start).setHours(0);
    // console.log("selectedDate", selectedDate);
    const selectReportsInDateRange = (reports) =>
      reports.filter((report) => {
        const start = new Date(new Date(selectedDate.start).setHours(0));
        const end = new Date(new Date(selectedDate.finish).setHours(23));
        const eventdate = new Date(report?.eventDate);
        // console.log("start", start)
        // console.log("end", end)
        // console.log("eventdate", eventdate)
        // console.log(eventdate >= start && eventdate <= end);
        return eventdate >= start && eventdate <= end;
      });
    const hivCsv = hivOutreachCSV && selectReportsInDateRange(hivOutreachCSV);
    const cabCsv = cabCSV && selectReportsInDateRange(cabCSV);
    setSelectedHivCSV(hivCsv);
    setSelectedCabCSV(cabCsv);
  }, [selectedDate]);


  return (
    <Layout showStatusHeader={true}>
      <PageTopHeading
        pageTitle={"Download Quarterly Report on FBO work (Subcontractor)"}
        backBtn={true}
        dashboardBtn={true}
      />
      <section className="container mx-auto px-5 md:px-0 pb-10">
        <p className="font-bold text-xl">Choose the data range:</p>
        <div className="grid md:flex md:flex-row my-7 gap-7">
          <div className="grid grid-cols-1 gap-5 h-32">
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
          {selectedHivCSV && selectedCabCSV && (
            <section className="grid grid-rows-2 gap-5">
              <QuarterlyCsv
                csvData={[...selectedHivCSV, ...selectedCabCSV]}
                headers={Object.keys(hivOutreachCSV[0])}
                fileName={`Quarterly_Report_FBO_Work_${csvNowDate.split("_")[0]}.csv`}
                buttonText="combined"
                download={{ state: download, set: setDownload }}
              />
              <div className="flex flex-col md:flex-row gap-5">
                <button
                  onClick={() => setDownload(true)}
                  className="text-2xl text-white bg-black rounded shadow-xl p-5 w-full md:w-52 h-full uppercase"
                >
                  Download <br /> all <br /> datasets
                </button>
                <QuarterlyCsv
                  csvData={selectedHivCSV}
                  headers={Object.keys(hivOutreachCSV[0])}
                  fileName={`OEF_Outreach Event_Data_Quarterly_${
                    csvNowDate.split("_")[0]
                  }.csv`}
                  buttonText="Hiv Outreach"
                  download={{ state: download, set: setDownload }}
                />
                <QuarterlyCsv
                  csvData={selectedCabCSV}
                  headers={Object.keys(cabCSV[0])}
                  fileName={`OEF_CAB_Data_Quarterly_${
                    csvNowDate.split("_")[0]
                  }.csv`}
                  buttonText="CAB"
                  download={{ state: download, set: setDownload }}
                />
              </div>
            </section>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default quarterlySubcontractorReport;

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const [hivOutreachCSV, cabCSV] = await Promise.all([
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/csv/quarterly_report_subcon`
      ).then((r) => r.json()),
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/csv/cab_quarterly_report_subcon`
      ).then((r) => r.json()),
    ]);

    return {
      props: {
        hivOutreachCSV: hivOutreachCSV,
        cabCSV: cabCSV,
      },
    };
  },
});
