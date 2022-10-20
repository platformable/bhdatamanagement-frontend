import { useEffect, useState } from "react";
import Layout from "../../../components/Layout";

import {
  Document,
  Header,
  Paragraph,
  TextRun,
  Packer,
  AlignmentType,
  FrameAnchorType,
  HorizontalPositionAlign,
  VerticalPositionAlign,
  convertInchesToTwip,
  ShadingType,
  ImageRun,
  Table,
  TableCell,
  TableRow,
  BorderStyle,
  VerticalAlign,
  WidthType,
} from "docx";
import PageTopHeading from "../../../components/PageTopHeading";
import { saveAs } from "file-saver";
import TypeOfEventChart from "../../../components/nys-monthly-report/TypeOfEventChart";
import EventLocationChart from "../../../components/nys-monthly-report/EventLocationChart";
import ResourcesDistributedChart from "../../../components/nys-monthly-report/ResourcesDistributedChart";
import GenderIdentityChart from "../../../components/nys-monthly-report/GenderIdentityChart";
import AgeChart from "../../../components/nys-monthly-report/AgeChart";
import RaceChart from "../../../components/nys-monthly-report/RaceChart";
import SexualOrientationChart from "../../../components/nys-monthly-report/SexualOrientationChart";
import { Section5 } from "../../../components/nys-monthly-report/Section5";
import { Section4 } from "../../../components/nys-monthly-report/Section4";
import { Section3 } from "../../../components/nys-monthly-report/Section3";
import { Section2 } from "../../../components/nys-monthly-report/Section2";
import { Section1 } from "../../../components/nys-monthly-report/Section1";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import {TopSection} from "../../../components/nys-monthly-report/TopSection";

export default function nysMonthlyReport({ events, eventsOutput }) {
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [selectedEventsOutputs, setSelectedEventsOutputs] = useState([]);
  const [resourcesSums, setResourcesSums] = useState([]);


  const [selectedDate, setSelectedDate] = useState({
    start: null,
    finish: null,
  });
  const [imagesRefs, setImagesRefs] = useState({});
  console.log("events", eventsOutput);
  let doc = null;
  const resourcesCounts = {
    "Safer sex kits": 0,
    "HIV literature": 0,
    "HepC literature": 0,
    "PrEP literature": 0,
    "Health disparities literature": 0,
    "Masks": 0,
    "COVID literature": 0,
    "Vaccine related literature": 0,
    "Hand sanitizers": 0,
    "Male condoms": 0,
    "Female condoms": 0,
    "Lubricant": 0,
    "Referral lists": 0,
    "Dental dams": 0,
    "Promotional materials": 0,
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
    const resourcesCountsResults = selectedEventOutputsReports.map(event => { 
      resourcesCounts["Safer sex kits"] = resourcesCounts["Safer sex kits"] + event?.safersexkits
      resourcesCounts["HIV literature"] = resourcesCounts["HIV literature"] + event?.hivliterature
      resourcesCounts["HepC literature"] = resourcesCounts["HepC literature"] + event?.hepcliterature
      resourcesCounts["PrEP literature"] = resourcesCounts["HepC literature"] + event?.prepliterature
      resourcesCounts["Health disparities literature"] =resourcesCounts["Health disparities literature"] + event?.healthdisparitiesliterature
      resourcesCounts["Masks"] = resourcesCounts["Masks"] + event?.masks
      resourcesCounts["COVID literature"] = resourcesCounts["COVID literature"] + event?.covidliterature
      resourcesCounts["Vaccine related literature"] =resourcesCounts["Vaccine related literature"] + event?.vaccinerelatedliterature
      resourcesCounts["Hand sanitizers"] =resourcesCounts["Hand sanitizers"] + event?.handsanitizers
      resourcesCounts["Male condoms"] = resourcesCounts["Male condoms"] + event?.malecondoms
      resourcesCounts["Female condoms"] =resourcesCounts["Female condoms"] + event?.femalecondoms
      resourcesCounts["Lubricant"] = resourcesCounts["Lubricant"] + event?.lubricant
      resourcesCounts["Referral lists"] =resourcesCounts["Referral lists"] + event?.referrallists
      resourcesCounts["Dental dams"] = resourcesCounts["Dental dams"] + event?.dentaldam
      resourcesCounts["Promotional materials"] = resourcesCounts["Promotional materials"] + event?.promotionalmaterial
     })
    setSelectedEvents(selectedReports);
    setSelectedEventsOutputs(selectedEventOutputsReports);
    setResourcesSums(Object.values(resourcesCounts))
  }, [selectedDate]);

  const getHrefImage = async (link, name) => {
    console.log("file", link);
    setImagesRefs((prev) => ({ ...prev, [name]: link }));
  };

  async function generate() {
    doc = new Document({
      styles: {
        paragraphStyles: [],
      },
      sections: [
        {
          headers: {
            default: new Header({
              // The standard default header on every page or header on odd pages when the 'Different Odd & Even Pages' option is activated
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: "New York State Department of Health AIDS Institute",
                      break: 1,
                    }),
                    new TextRun({
                      text: "Bureau of Community Based Services",
                      break: 1,
                    }),
                    new TextRun({
                      text: "MONTHLY REPORT",
                      break: 1,
                      underline: true,
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
          },
          properties: {},
          children: [
            ...TopSection(),
            ...Section1(imagesRefs, events, resourcesSums),

            ...Section2(imagesRefs, ),

            ...Section3(imagesRefs),

            ...Section4(imagesRefs),

            ...Section5(imagesRefs),
          ],
        },
      ],
    });
  }

  const downloadDoc = async () => {
    await generate();

    await Packer.toBlob(doc).then((blob) => {
      console.log(blob);
      saveAs(blob, "example1.docx");
      console.log("Document created successfully");
    });
  };
  return (
    <Layout showStatusHeader={true}>
      <PageTopHeading
        pageTitle={"Download NYS CMD dataset"}
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
          <button className="text-2xl text-white bg-black rounded shadow-xl p-5 w-full md:w-52 h-full">
          Generate <br/>Data
      </button>
        </div>
      </section>
      <div>
          <button type="button" onClick={downloadDoc}>
        Click to generate document
      </button>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          margin: "2rem 5rem",
        }}
      >
        <TypeOfEventChart getHrefImage={getHrefImage} chartData={selectedEvents}/>
        <EventLocationChart getHrefImage={getHrefImage} chartData={selectedEvents}/>
        <ResourcesDistributedChart getHrefImage={getHrefImage} chartData={resourcesSums}/>
        <GenderIdentityChart getHrefImage={getHrefImage} chartData={selectedEventsOutputs}/>
        <AgeChart getHrefImage={getHrefImage} chartData={selectedEventsOutputs}/>
        <RaceChart getHrefImage={getHrefImage} chartData={selectedEventsOutputs}/>
        <SexualOrientationChart getHrefImage={getHrefImage} chartData={selectedEventsOutputs}/>
      </div>
          </div>
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
