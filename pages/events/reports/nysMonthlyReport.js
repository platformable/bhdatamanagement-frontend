import { useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import PageTopHeading from "../../../components/PageTopHeading";
import PrioritiesSection from "../../../components/nys-monthly-report/PrioritiesSection";
import ResourcesSection from "../../../components/nys-monthly-report/ResourcesSection";
import CommunitySection from "../../../components/nys-monthly-report/CommunitySection";
import ChallengesSection from "../../../components/nys-monthly-report/ChallengesSection";

export default function nysMonthlyReport({ events, eventsOutput }) {
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [selectedEventsOutputs, setSelectedEventsOutputs] = useState([]);
  const [generateReport, setGenerateReport]  = useState(false)
  const [selectedDate, setSelectedDate] = useState({
    start: null,
    finish: null,
  });
  const [imagesRefs, setImagesRefs] = useState({});

    const getHrefImage = async (link, name) => {
        setImagesRefs((prev) => ({ ...prev, [name]: link }));
    };

  const TestsDoneSection = {
    "COVID testing events": 0,
    "HIV testing events": 0
  }
  useEffect(() => {
    console.log("selectedDate", selectedDate);
    const selectedReports = events.filter(
      (report) =>
        new Date(report.eventdate) >=
          new Date(
            new Date(selectedDate.start).toLocaleString("en-US", {
              timeZone: "America/New_York",
            })
          ).setHours(0) &&
        new Date(report.eventdate) <= new Date(selectedDate.finish)
      
    );
    const selectedEventOutputsReports = eventsOutput.filter(
      (report) =>
        new Date(report.eventdate) >=
          new Date(
            new Date(selectedDate.start).toLocaleString("en-US", {
              timeZone: "America/New_York",
            })
          ).setHours(0) &&
        new Date(report.eventdate) <= new Date(selectedDate.finish)

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
        <div className="grid md:grid-cols-3 my-7 gap-7">
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
          <button type="button" onClick={() => setGenerateReport(prev => (!prev))} className="text-2xl text-white bg-black rounded shadow-xl p-5 w-full md:w-52 h-full">
          Generate <br/>DATA AND CHARTS
      </button>
        </div>
      </section>
      {generateReport && selectedDate.start && selectedDate.finish && (
        <section className="container mx-auto px-5 md:px-0">
            <PrioritiesSection selectedEvents={selectedEvents} selectedEventsOutputs={selectedEventsOutputs} getHrefImage={getHrefImage}/>
            <ResourcesSection selectedEvents={selectedEvents} selectedEventsOutputs={selectedEventsOutputs} getHrefImage={getHrefImage}/>
            <CommunitySection selectedEvents={selectedEvents} selectedEventsOutputs={selectedEventsOutputs} getHrefImage={getHrefImage}/>
            <ChallengesSection selectedEvents={selectedEvents} selectedEventsOutputs={selectedEventsOutputs}/>
        </section>
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

