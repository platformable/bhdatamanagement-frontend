import React, { useEffect, useState } from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Layout from "../../../../components/Layout";
import PageTopHeading from "../../../../components/PageTopHeading";
import YipSessionCSV from "../../../../components/csv-reports/YipSessionCSV";

const YipParticipantFeedback = ({ session1, session2, session3, session4, }) => {
  console.log("sessions", session1,"sesion2", session2,"session3 ", session3,"session 4", session4);
  const [selectedDate, setSelectedDate] = useState({
    start: null,
    finish: null,
  });

  const [download, setDownload] = useState(false);
  const [selectedSession1, setSelectedSession1] = useState([]);
  const [selectedSession2, setSelectedSession2] = useState([]);
  const [selectedSession3, setSelectedSession3] = useState([]);
  const [selectedSession4, setSelectedSession4] = useState([]);


 console.log(selectedSession1)

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
        console.log(eventdate)
        // console.log("start", start)
        // console.log("end", end)
        // console.log("eventdate", eventdate)
        // console.log(eventdate >= start && eventdate <= end);
        return eventdate >= start && eventdate <= end;
      });
      const sess1 = selectReportsInDateRange(session1);
      const sess2 = selectReportsInDateRange(session2);
      const sess3 = selectReportsInDateRange(session3);
      const sess4 = selectReportsInDateRange(session4);

      setSelectedSession1(sess1)
      setSelectedSession2(sess2)
      setSelectedSession3(sess3)
      setSelectedSession4(sess4)
    
  }, [selectedDate]);


  return (
    <Layout showStatusHeader={true}>
      <PageTopHeading
        pageTitle={"Download YIP Participant Data"}
        backBtn={true}
        dashboardBtn={true}
      />
      <section className="container mx-auto px-5 md:px-0 pb-10">
        <p className="font-bold text-xl">Choose the data range:</p>
        <div className="grid md:flex md:flex-row my-7 gap-7">
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
          {selectedSession1
           && selectedSession2
           && selectedSession3
           && selectedSession4 && (
            <>
              <div>
                <button
                  onClick={() => setDownload(true)}
                  className="text-2xl text-white bg-black rounded shadow-xl p-5 w-full md:w-52 h-full uppercase"
                >
                  Download <br /> all <br /> datasets
                </button>
              </div>
              <YipSessionCSV
                csvData={selectedSession1}
                headers={Object.keys(session1[0])}
                fileName={`OEF_YIP_Session_1_${
                  csvNowDate.split("_")[0]
                }.csv`}
                sessionName="Sexual Health and Healthy Relationships"
                sessionNumber='session 1'
                download={{ state: download, set: setDownload }}
              />
              <YipSessionCSV
                csvData={selectedSession2}
                headers={Object.keys(session2[0])}
                fileName={`OEF_YIP_Session_2_${
                  csvNowDate.split("_")[0]
                }.csv`}
                sessionName="Effective Communication"
                sessionNumber='session 2'
                download={{ state: download, set: setDownload }}
              />
              <YipSessionCSV
                csvData={selectedSession3}
                headers={Object.keys(session3[0])}
                fileName={`OEF_YIP_Session_3_${
                  csvNowDate.split("_")[0]
                }.csv`}
                sessionName="Let’s Make a choice/ HIV (Health), Education and Careers"
                sessionNumber='session 3'
                download={{ state: download, set: setDownload }}
              />
              <YipSessionCSV
                csvData={selectedSession4}
                headers={Object.keys(session4[0])}
                fileName={`OEF_YIP_Session_4_${
                  csvNowDate.split("_")[0]
                }.csv`}
                sessionName="STI & HIV Risk Reduction and Prevention"
                sessionNumber='session 4'
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
    const [session1, session2, session3, session4, preWorshop, sixMonths] = await Promise.all([
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/csv/participant_survey_outputs_session1`
      ).then((r) => r.json()),
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/csv/participant_survey_outputs_session2`
      ).then((r) => r.json()),
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/csv/participant_survey_outputs_session3`
      ).then((r) => r.json()),
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/csv/participant_survey_outputs_session4`
      ).then((r) => r.json()),
     
    ]);

    return {
      props: {
        session1,
        session2,
        session3,
        session4,
      },
    };
  },
});
