import { useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import PageTopHeading from "../../../components/PageTopHeading";
import PrioritiesSection from "../../../components/nys-monthly-report/PrioritiesSection";
import ResourcesSection from "../../../components/nys-monthly-report/ResourcesSection";
import CommunitySection from "../../../components/nys-monthly-report/CommunitySection";
import ChallengesSection from "../../../components/nys-monthly-report/ChallengesSection";
import ExportCSV from "../../../components/csv-reports/exportCSV";




export default function nysMonthlyReport({ events, eventsOutput }) {
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [selectedEventsOutputs, setSelectedEventsOutputs] = useState([]);
  const [generateReport, setGenerateReport]  = useState(false)
  const [selectedDate, setSelectedDate] = useState({
    start: null,
    finish: null,
  });
  const [imagesRefs, setImagesRefs] = useState({});
  console.log("events output", eventsOutput)
    const getHrefImage = async (link, name) => {
        setImagesRefs((prev) => ({ ...prev, [name]: link }));
    };

  const TestsDoneSection = {
    "COVID testing events": 0,
    "HIV testing events": 0
  }
  const csvNowDate = new Date().toLocaleString("en-US", {timeZone: "America/New_York"})

  useEffect(() => {
    console.log("selectedDate", selectedDate);
    const selectedReports = events.filter(
      (report) => {
        const start = new Date(new Date(selectedDate.start).setHours(0))
        const end = new Date(new Date(selectedDate.finish).setHours(23))
        const eventdate = new Date(report?.eventdate)
        return eventdate >= start && eventdate <= end
      } 
    );
    const selectedEventOutputsReports = eventsOutput.filter(
      (report) => {
        const start = new Date(new Date(selectedDate.start).setHours(0))
        const end = new Date(new Date(selectedDate.finish).setHours(23))
        const eventdate = new Date(report?.eventdate)
        return eventdate >= start && eventdate <= end
      } 
    );
    
    setSelectedEvents(selectedReports);
    setSelectedEventsOutputs(selectedEventOutputsReports);
  }, [selectedDate]);
 
  return (
    <Layout showStatusHeader={true}>
      <PageTopHeading
        pageTitle={"Generate the NYS CMP monthly report data and charts"}
        backBtn={true}
        dashboardBtn={true}
      />
      <section className="container mx-auto px-5 md:px-0 mb-14">
        <p className="font-bold text-xl">Choose the data range:</p>
        <div className="flex  my-7 gap-7">
          <div className="grid grid-cols-1 gap-5">
            <label className="border-black p-5 flex justify-between">
              Start date:
              <input
                type="date"
                onChange={(e) =>  setSelectedDate({ ...selectedDate, start: e.target.value })}
              />
            </label>
            <label className="border-black p-5 flex justify-between">
              Finish date: 
              <input
                type="date"
                onChange={(e) => setSelectedDate({ ...selectedDate, finish: e.target.value })}
              />
            </label>
          </div>
          <div id="">
          <button type="button" onClick={() => {
            setGenerateReport(prev => (!prev))
          }} className="text-2xl text-white bg-black rounded shadow-xl p-5 w-full md:w-52 h-full">
          GENERATE <br/>DATA AND CHARTS
      </button>
          </div>
      <ExportCSV  
        csvData={selectedEventsOutputs}
        fileName={`NYS_CMP_Event_Data_${csvNowDate.split(",")[0]}.csv`}
        />

        </div>
      </section>
      {generateReport && selectedDate.start && selectedDate.finish && (
        <>
          {/* <CSVDownload 
          data={selectedEventsOutputs}
          filename={"dsadsa.csv"}
          separator=";"
          />; */}
        
          <section className="container mx-auto w-3/5 px-5 md:px-0 grid gap-24 mb-12">
              <PrioritiesSection selectedDate={selectedDate} selectedEvents={selectedEvents} selectedEventsOutputs={selectedEventsOutputs} getHrefImage={getHrefImage}/>
              <ResourcesSection selectedDate={selectedDate} selectedEvents={selectedEvents} selectedEventsOutputs={selectedEventsOutputs} getHrefImage={getHrefImage}/>
              <CommunitySection selectedDate={selectedDate} selectedEvents={selectedEvents} selectedEventsOutputs={selectedEventsOutputs} getHrefImage={getHrefImage}/>
              <ChallengesSection selectedDate={selectedDate} selectedEvents={selectedEvents} selectedEventsOutputs={selectedEventsOutputs}/>
          </section>
          
        </>
      )}
    </Layout>
  );
}
export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const [events, eventsOutput,] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/events`).then((r) =>
        r.json()
      ),
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/post_event_report/nys_events_output`
      ).then((r) => r.json()),
      
    ]);
    return { props: { events, eventsOutput } };
  },
});

