import React, { useEffect, useState } from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Layout from "../../../../components/Layout";
import PageTopHeading from "../../../../components/PageTopHeading";
import QuarterlyCsv from "../../../../components/csv-reports/QuarterlyCsv";

const YipParticipantFeedback = ({  preWorkshop, sixMonths }) => {
  // console.log("baseline data",preWorkshop, sixMonths)
  const [selectedDate, setSelectedDate] = useState({
    start: null,
    finish: null,
  });

  const [download, setDownload] = useState(false);
  const [selectedPreworkshop, setSelectedPreworkshop] = useState([]);
  const [selectedSixmonths, setSelectedSixmonths] = useState([]);


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
        const eventdate = new Date(report?.surveycreated);
        // console.log(eventdate)
        // console.log("start", start)
        // console.log("end", end)
        // console.log("eventdate", eventdate)
        // console.log(eventdate >= start && eventdate <= end);
        return eventdate >= start && eventdate <= end;
      });
      const preworkshop = preWorkshop && selectReportsInDateRange(preWorkshop);
      const sixmonths = sixMonths && selectReportsInDateRange(sixMonths);

      setSelectedPreworkshop(preworkshop)
      setSelectedSixmonths(sixmonths)

    
  }, [selectedDate]);


  return (
    <Layout showStatusHeader={true}>
      <PageTopHeading
        pageTitle={"Download YIP Participant Baseline Data"}
        backBtn={true}
        dashboardBtn={true}
      />
      <section className="container mx-auto px-5 md:px-0 pb-10">
        <p className="font-bold text-xl">Choose the data range:</p>
        <div className="grid md:flex md:flex-row my-7 gap-7">
          <div className="grid  gap-5">
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
          { selectedPreworkshop && selectedSixmonths
            && (
            <>
              <div>
                <button
                  onClick={() => setDownload(true)}
                  className="text-2xl text-white bg-black rounded shadow-xl p-5 w-full md:w-52 h-full uppercase"
                >
                  Download <br /> all <br /> datasets
                </button>
              </div>
            
               <QuarterlyCsv
                csvData={selectedPreworkshop}
                headers={Object.keys(preWorkshop[0])}
                fileName={`OEF_YIP_Participant_Pre_Workshop_${
                  csvNowDate.split("_")[0]
                }.csv`}
                buttonText="YIP Participant Pre-Workshop Baseline CSV"
                download={{ state: download, set: setDownload }}
              />
               <QuarterlyCsv
                csvData={selectedSixmonths}
                headers={Object.keys(sixMonths[0])}
                fileName={`OEF_YIP_Participant_6_month_follow_up_${
                  csvNowDate.split("_")[0]
                }.csv`}
                buttonText="6 Month Follow Up CSV"
                download={{ state: download, set: setDownload }}
              />
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default YipParticipantFeedback;

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const [ preWorkshop, sixMonths] = await Promise.all([
     
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/csv/yip_pre_workshop`
      ).then((r) => r.json()),
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/csv/yip_6months`
      ).then((r) => r.json()),
    ]);

    return {
      props: {
        preWorkshop,
        sixMonths
      },
    };
  },
});
