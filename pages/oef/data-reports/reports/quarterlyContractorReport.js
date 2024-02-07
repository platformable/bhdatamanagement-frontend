import React, { useEffect, useState } from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Layout from "../../../../components/Layout";
import PageTopHeading from "../../../../components/PageTopHeading";
import CSVHIVOutreachParticipantSignInSheet from "../../../../components/csv-reports/CSVHIVOutreachParticipantSignInSheet";
import QuarterlyCsv from "../../../../components/csv-reports/QuarterlyCsv";

const quarterlyContractorReport = ({  }) => {
  const [selectedDate, setSelectedDate] = useState({
    start: null,
    finish: null,
  });

  const [download, setDownload] = useState(false);
  const [selectedCbtCSV, setSelectedCbtCSV] = useState([]);
  const [selectedTACSV, setSelectedTACSV] = useState([]);
  const [selectedSiteVisitCSV, setSelectedSiteVisitCSV] = useState([]);


  const [isLoading, setIsLoading] = useState(false);
  const [errorRequest, setErrorRequest] = useState("");
  
  const csvNowDate = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
  });
  useEffect(() => {
    setIsLoading(false)
    setErrorRequest('')
    async function getdata() {
      try {
        const [cbtCSV, siteVisitsCSV, TACSV] = await Promise.all([
          fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/csv/cbt_report_contractor/${selectedDate.start}&${selectedDate.finish}`
          ).then((r) => r.json()),
          fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/csv/sv_report_contractor/${selectedDate.start}&${selectedDate.finish}`
          ).then((r) => r.json()),
          fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/csv/ta_report_contractor/${selectedDate.start}&${selectedDate.finish}`
          ).then((r) => r.json()),
        ]);
        if (
          cbtCSV?.statusText === "FAIL" &&
          siteVisitsCSV?.statusText === "FAIL" &&
          TACSV?.statusText === "FAIL" 
        ) {
          setIsLoading(false);
          setErrorRequest("Not founded data");
        } else {
          setSelectedCbtCSV(cbtCSV);
          setSelectedSiteVisitCSV(siteVisitsCSV);
          setSelectedTACSV(TACSV)

          setIsLoading(false);
          setErrorRequest("");
        }
       
       
        
      } catch (error) {
        setErrorRequest('Something went wrong try again')
        setIsLoading(false)

        return {message: 'Error'}
      }
    }

  
    if (selectedDate.start && selectedDate.finish) {
      getdata()
    }
    
  }, [selectedDate.start, selectedDate.finish]);


  return (
    <Layout showStatusHeader={true}>
      <PageTopHeading
        pageTitle={"Download Quarterly Report on BH work (Contractor)"}
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
          
            <section className={`${selectedCbtCSV.length > 0 || selectedTACSV.length > 0 || selectedSiteVisitCSV.length > 0 ? '' : 'pointer-events-none ' } grid grid-rows-2 gap-5`}>

              <QuarterlyCsv
                csvData={[...selectedCbtCSV, ...selectedSiteVisitCSV, ...selectedTACSV]}
                headers={selectedCbtCSV.length > 0 && Object.keys(selectedCbtCSV[0])}
                fileName={`Quarterly_Report_BH_Work_${
                  csvNowDate.split("_")[0]
                }.csv`}
                buttonText="combined"
                download={{state:download, set: setDownload}}
              />

              <div className="flex flex-col md:flex-row gap-5">
              <button
                onClick={() => setDownload(true)}
                className="text-2xl text-white bg-black rounded shadow-xl p-5 w-full md:w-52 h-full uppercase"
              >
                Download <br /> all <br /> datasets
              </button>
              
              <QuarterlyCsv
                csvData={selectedCbtCSV}
                headers={selectedCbtCSV.length > 0 && Object.keys(selectedCbtCSV[0])}
                fileName={`OEF_CBT_Data_Quarterly_${
                  csvNowDate.split("_")[0]
                }.csv`}
                buttonText="CBT"
                download={{state:download, set: setDownload}}
              />
              <QuarterlyCsv
                csvData={selectedSiteVisitCSV}
                headers={selectedSiteVisitCSV.length > 0 && Object.keys(selectedSiteVisitCSV[0])}
                fileName={`OEF_Site Visit_Data_Quarterly_${
                  csvNowDate.split("_")[0]
                }.csv`}
                buttonText="Site Visit"
                download={{state:download, set: setDownload}}

              />
              <QuarterlyCsv
                csvData={selectedTACSV}
                headers={selectedTACSV.length > 0 && Object.keys(selectedTACSV[0])}
                fileName={`OEF_Technical_Assistance_Data_Quarterly_${
                  csvNowDate.split("_")[0]
                }.csv`}
                buttonText="Technical Assistance"
                download={{state:download, set: setDownload}}

              />
              </div>
            </section>
        </div>
        <span className="font-medium">{errorRequest !== '' && errorRequest}</span>
        
      </section>
    </Layout>
  );
};

export default quarterlyContractorReport;

export const getServerSideProps = withPageAuthRequired({
  
});
