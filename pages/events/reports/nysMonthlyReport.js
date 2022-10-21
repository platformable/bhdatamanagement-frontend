import { useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import PageTopHeading from "../../../components/PageTopHeading";
import TypeOfEventChart from "../../../components/nys-monthly-report/TypeOfEventChart";
import EventLocationChart from "../../../components/nys-monthly-report/EventLocationChart";
import ResourcesDistributedChart from "../../../components/nys-monthly-report/ResourcesDistributedChart";
import GenderIdentityChart from "../../../components/nys-monthly-report/GenderIdentityChart";
import AgeChart from "../../../components/nys-monthly-report/AgeChart";
import RaceChart from "../../../components/nys-monthly-report/RaceChart";
import SexualOrientationChart from "../../../components/nys-monthly-report/SexualOrientationChart";


export default function nysMonthlyReport({ events, eventsOutput }) {
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [selectedEventsOutputs, setSelectedEventsOutputs] = useState([]);

  const [selectedDate, setSelectedDate] = useState({
    start: null,
    finish: null,
  });
  const [imagesRefs, setImagesRefs] = useState({});
  
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

  const getHrefImage = async (link, name) => {
    console.log("file", link);
    setImagesRefs((prev) => ({ ...prev, [name]: link }));
  };

 
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
          <button type="button" className="text-2xl text-white bg-black rounded shadow-xl p-5 w-full md:w-52 h-full">
          Generate <br/>DATA AND CHARTS
      </button>
        </div>
      </section>
      <section className="container mx-auto px-5 md:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2"
      >
        <TypeOfEventChart getHrefImage={getHrefImage} chartData={selectedEvents}/>
        <EventLocationChart getHrefImage={getHrefImage} chartData={selectedEvents}/>
        <ResourcesDistributedChart getHrefImage={getHrefImage} chartData={selectedEventsOutputs}/>
        <GenderIdentityChart getHrefImage={getHrefImage} chartData={selectedEventsOutputs}/>
        <AgeChart getHrefImage={getHrefImage} chartData={selectedEventsOutputs}/>
        <RaceChart getHrefImage={getHrefImage} chartData={selectedEventsOutputs}/>
        <SexualOrientationChart getHrefImage={getHrefImage} chartData={selectedEventsOutputs}/>
      </div>
          </section>
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

