import React, { useEffect, useState } from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Layout from "../../../../components/Layout";
import PageTopHeading from "../../../../components/PageTopHeading";
import QuarterlyCsv from "../../../../components/csv-reports/QuarterlyCsv";

const YipParticipantFeedback = ({   }) => {
  // console.log("baseline data",preWorkshop, sixMonths)
  const [selectedDate, setSelectedDate] = useState({
    start: null,
    finish: null,
  });

  const [download, setDownload] = useState(false);
  const [selectedPreworkshop, setSelectedPreworkshop] = useState([]);
  const [selectedSixmonths, setSelectedSixmonths] = useState([]);


  const [errorRequest, setErrorRequest] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const csvNowDate = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
  });

  useEffect(() => {
   // console.log("selectedDate", selectedDate);
   setIsLoading(false);
   setErrorRequest("");
   async function getdata() {
     try {
      const [ preWorkshop, sixMonths] = await Promise.all([
     
        fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/csv/yip_pre_workshop/${selectedDate.start}&${selectedDate.finish}`
        ).then((r) => r.json()),
        fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/csv/yip_6months/${selectedDate.start}&${selectedDate.finish}`
        ).then((r) => r.json()),
      ]);
      if (preWorkshop?.statusText === "FAIL" ) {
        setSelectedPreworkshop(preWorkshop)
        setErrorRequest("Some sessions file may not have data");
      } else {
        setSelectedPreworkshop(preWorkshop)
      }
      if (sixMonths?.statusText === "FAIL" ) {
        setSelectedSixmonths(sixMonths)
        setErrorRequest("Some sessions file may not have data");

      } else {
        setSelectedSixmonths(sixMonths)
      }

        if (preWorkshop?.statusText === "FAIL" && sixMonths?.statusText === "FAIL") {
          setErrorRequest("No data founded")
        }
        setIsLoading(false);
       
     } catch (error) {
       setErrorRequest("Something went wrong try again");
       setIsLoading(false);
     }
   }

   if (selectedDate.start && selectedDate.finish) {
     getdata();
   }

     

    
  }, [selectedDate.start, selectedDate.finish]);
// console.log("states", selectedPreworkshop, selectedSixmonths)

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
          <section className={`${selectedPreworkshop.length > 0 || selectedSixmonths.length > 0 ? '' : 'pointer-events-none ' } grid grid-cols-3 gap-5`}>
          
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
                headers={selectedPreworkshop.length > 0 && Object.keys(selectedPreworkshop[0]) }
                fileName={`OEF_YIP_Participant_Pre_Workshop_${
                  csvNowDate.split("_")[0]
                }.csv`}
                buttonText="YIP Participant Pre-Workshop Baseline CSV"
                download={{ state: download, set: setDownload }}
              />
               <QuarterlyCsv
                csvData={selectedSixmonths}
                headers={selectedSixmonths.length > 0 && Object.keys(selectedSixmonths[0])}
                fileName={`OEF_YIP_Participant_6_month_follow_up_${
                  csvNowDate.split("_")[0]
                }.csv`}
                buttonText="6 Month Follow Up CSV"
                download={{ state: download, set: setDownload }}
              />
           </section> 
        </div>
        <span className="font-medium">{errorRequest !== '' && errorRequest}</span>

      </section>
    </Layout>
  );
};

export default YipParticipantFeedback;

export const getServerSideProps = withPageAuthRequired({
 
});
