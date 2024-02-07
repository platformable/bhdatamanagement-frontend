import React, { useEffect, useState } from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Layout from "../../../../components/Layout";
import PageTopHeading from "../../../../components/PageTopHeading";
import CSVHIVOutreachParticipantSignInSheet from "../../../../components/csv-reports/CSVHIVOutreachParticipantSignInSheet";
import QuarterlyCsv from "../../../../components/csv-reports/QuarterlyCsv";

const quarterlySubcontractorReport = ({ }) => {
  const [selectedDate, setSelectedDate] = useState({
    start: null,
    finish: null,
  });

  const [download, setDownload] = useState(false);
  const [selectedHivCSV, setSelectedHivCSV] = useState([]);
  const [selectedCabCSV, setSelectedCabCSV] = useState([]);
  const [errorRequest, setErrorRequest] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const csvNowDate = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
  });
  useEffect(() => {
    setIsLoading(false)
    setErrorRequest('')
    async function getdata() {
      try {
        const [hivOutreachCSV, cabCSV] = await Promise.all([
          fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/csv/quarterly_report_subcon/${selectedDate.start}&${selectedDate.finish}`
          ).then((r) => r.json()),
          fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/csv/cab_quarterly_report_subcon/${selectedDate.start}&${selectedDate.finish}`
          ).then((r) => r.json()),
        ]);
        
        if (
          hivOutreachCSV?.statusText === "FAIL" &&
          cabCSV?.statusText === "FAIL" 
        ) {
          setIsLoading(false);
          setErrorRequest("Not founded data");
        } else {
          setSelectedHivCSV(hivOutreachCSV);
           setSelectedCabCSV(cabCSV);

           setIsLoading(false);
          setErrorRequest("");
        }
        
      } catch (error) {
        setErrorRequest('Something went wrong try again')
        setIsLoading(false)

      }
    }

  
    if (selectedDate.start && selectedDate.finish) {
      getdata()
    }
   
    
  }, [selectedDate.start, selectedDate.finish]);


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
            <section className={`${selectedHivCSV.length > 0 || selectedCabCSV.length > 0 ? '' : 'pointer-events-none ' } grid grid-rows-2 gap-5`}>

              <QuarterlyCsv
                csvData={[...selectedHivCSV, ...selectedCabCSV]}
                headers={selectedHivCSV.length > 0 && Object.keys(selectedHivCSV[0])}
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
                  headers={selectedHivCSV.length > 0 && Object.keys(selectedHivCSV[0])}
                  fileName={`OEF_Outreach Event_Data_Quarterly_${
                    csvNowDate.split("_")[0]
                  }.csv`}
                  buttonText="Hiv Outreach"
                  download={{ state: download, set: setDownload }}
                />
                <QuarterlyCsv
                  csvData={selectedCabCSV}
                  headers={selectedCabCSV.length > 0 && Object.keys(selectedCabCSV[0])}
                  fileName={`OEF_CAB_Data_Quarterly_${
                    csvNowDate.split("_")[0]
                  }.csv`}
                  buttonText="CAB"
                  download={{ state: download, set: setDownload }}
                />
              </div>

            </section>
        </div>
        <span className="font-medium">{errorRequest !== '' && errorRequest}</span>

      </section>
    </Layout>
  );
};

export default quarterlySubcontractorReport;

export const getServerSideProps = withPageAuthRequired({
  
});
