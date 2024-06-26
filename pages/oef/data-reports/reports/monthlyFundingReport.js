import { useEffect, useState } from "react";
import Layout from "../../../../components/Layout";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import PageTopHeading from "../../../../components/PageTopHeading";
import AdministrativeSection from "../../../../components/oef-monthly-report/AdministrativeSection";
import CABSection from "../../../../components/oef-monthly-report/CABSection";
import HIVOutreachSection from "../../../../components/oef-monthly-report/HIVOutreachSection";
import CBTSection from "../../../../components/oef-monthly-report/CBTSection";
import ExportCSV from "../../../../components/csv-reports/exportCSV";
import Yip from "../../../../components/oef-monthly-report/Yip";
import Highlights from "../../../../components/oef-monthly-report/Highlights";
import Challenges from "../../../../components/oef-monthly-report/Challenges";
import Conclusion from "../../../../components/oef-monthly-report/Conclusion";
import SiteVisits from "../../../../components/oef-monthly-report/SiteVisits";

export default function oefMonthlyReport({}) {
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [selectedEventsOutputs, setSelectedEventsOutputs] = useState([]);
  const [selectedSiteVisits, setSelectedSiteVisits] = useState([]);
  const [errorRequest, setErrorRequest] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [generateReport, setGenerateReport] = useState(false);
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
    "HIV testing events": 0,
  };
  const csvNowDate = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
  });

  // console.log("errorRequest", errorRequest);

  useEffect(() => {
    // console.log("selectedDate", selectedDate);
    setIsLoading(false);
    setErrorRequest("");
    async function getdata() {
      try {
        const [eventsOutput, participantEvents, siteVisits] = await Promise.all(
          [
            fetch(
              `${process.env.NEXT_PUBLIC_SERVER_URL}/reports/oef/events_output/report/${selectedDate.start}&${selectedDate.finish}`
            )
              .then((r) => r.json())
              .catch((e) => {
                // setErrorRequest('Something went wrong try again')
                // setIsLoading(false)
                console.log("error events_out", e);
              }),
            fetch(
              `${process.env.NEXT_PUBLIC_SERVER_URL}/reports/oef/participant_events_output/report/${selectedDate.start}&${selectedDate.finish}`
            )
              .then((r) => r.json())
              .catch((e) => {
                // setErrorRequest('Something went wrong try again')
                // setIsLoading(false)
                console.log("error events_out", e);
              }),

            fetch(
              `${process.env.NEXT_PUBLIC_SERVER_URL}/reports/oef/sv/site_visits/${selectedDate.start}&${selectedDate.finish}`
            )
              .then((r) => r.json())
              .catch((e) => {
                // setErrorRequest('Something went wrong try again')
                // setIsLoading(false)
                console.log("error events_out", e);
              }),
          ]
        );
        if (
          eventsOutput?.statusText === "FAIL" 
        ) {
          setIsLoading(false);
          setErrorRequest("Not founded data");
        } else {
          setSelectedEvents(eventsOutput);

          setIsLoading(false);
          setErrorRequest("");
        }

        if (
          eventsOutput?.statusText === "FAIL" 
        ) {
          setIsLoading(false);
          setErrorRequest("Not founded data");
        } else {
          setSelectedEventsOutputs(participantEvents);

          setIsLoading(false);
          setErrorRequest("");
        }

        if (
          siteVisits?.statusText === "FAIL"
        ) {
          setIsLoading(false);
          setErrorRequest("Not founded data");
        } else {
          setSelectedSiteVisits(siteVisits);

          setIsLoading(false);
          setErrorRequest("");
        }
      } catch (error) {
        setErrorRequest("Something went wrong try again");
        setIsLoading(false);
      }
    }

    if (selectedDate.start && selectedDate.finish) {
      getdata();
    }
  }, [selectedDate.start, selectedDate.finish]);

  return (
    <Layout showStatusHeader={true}>
      <PageTopHeading
        pageTitle={"Monthly Funding report data and charts"}
        backBtn={true}
        dashboardBtn={true}
        subTitle="Use the internet browser Google Chrome to copy and paste the charts"
      />

      <section className="container mx-auto px-5 md:px-0 mb-14">
        <p className="font-bold text-xl">Choose the data range:</p>
        <div className="flex  my-7 gap-7">
          <div className="grid grid-cols-1 gap-5">
            <label className="border-black p-5 flex justify-between">
              Start date:
              <input
                type="date"
                onChange={(e) =>
                  setSelectedDate({ ...selectedDate, start: e.target.value })
                }
              />
            </label>
            <label className="border-black p-5 flex justify-between">
              Finish date:
              <input
                type="date"
                onChange={(e) =>
                  setSelectedDate({ ...selectedDate, finish: e.target.value })
                }
              />
            </label>
          </div>
          <div id="">
            <button
              type="button"
              onClick={() => {
                setGenerateReport((prev) => !prev);
              }}
              className={` text-2xl text-white bg-black rounded shadow-xl p-5 w-full md:w-52 h-full`}
            >
              GENERATE <br />
              DATA AND CHARTS
            </button>
          </div>

          {/*   <ExportCSV  
        csvData={selectedEventsOutputs}
        fileName={`NYS_CMP_Event_Data_${csvNowDate.split(",")[0]}.csv`}
        /> */}
        </div>
        {/* <span className="font-medium">
          {errorRequest !== "" && errorRequest}
        </span> */}
      </section>
      {generateReport && selectedDate.start && selectedDate.finish && (
        <>
          {/* <CSVDownload 
          data={selectedEventsOutputs}
          filename={"dsadsa.csv"}
          separator=";"
          />; */}

          <section className="container mx-auto w-3/5 px-5 md:px-0 grid gap-24 mb-12">
            <AdministrativeSection
              selectedDate={selectedDate}
              selectedEvents={selectedEvents}
              selectedEventsOutputs={selectedEventsOutputs}
              getHrefImage={getHrefImage}
            />
            <HIVOutreachSection
              selectedDate={selectedDate}
              selectedEvents={selectedEvents}
              selectedEventsOutputs={selectedEventsOutputs}
              getHrefImage={getHrefImage}
            />
            <CABSection
              selectedDate={selectedDate}
              selectedEvents={selectedEvents}
              selectedEventsOutputs={selectedEventsOutputs}
              getHrefImage={getHrefImage}
            />
            <CBTSection
              selectedDate={selectedDate}
              selectedEvents={selectedEvents}
              selectedEventsOutputs={selectedEventsOutputs}
            />
            <Yip
              selectedDate={selectedDate}
              selectedEvents={selectedEvents}
              selectedEventsOutputs={selectedEventsOutputs}
            />

            <Highlights
              selectedDate={selectedDate}
              selectedEvents={selectedEvents}
              selectedEventsOutputs={selectedEventsOutputs}
            />
            <SiteVisits data={selectedSiteVisits} />
            <Challenges
              selectedDate={selectedDate}
              selectedEvents={selectedEvents}
              selectedEventsOutputs={selectedEventsOutputs}
            />
            <Conclusion
              selectedDate={selectedDate}
              selectedEvents={selectedEvents}
              selectedEventsOutputs={selectedEventsOutputs}
            />
          </section>
        </>
      )}
    </Layout>
  );
}
export const getServerSideProps = withPageAuthRequired({});
