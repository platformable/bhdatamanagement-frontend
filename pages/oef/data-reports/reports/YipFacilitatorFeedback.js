import React, { useEffect, useState } from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Layout from "../../../../components/Layout";
import PageTopHeading from "../../../../components/PageTopHeading";
import QuarterlyCsv from "../../../../components/csv-reports/QuarterlyCsv";

const YipFacilitatorFeedback = ({}) => {
  // console.log("baseline data",postWorkshop )
  const [selectedDate, setSelectedDate] = useState({
    start: null,
    finish: null,
  });

  const [download, setDownload] = useState(false);
  const [selectedPostworkshop, setSelectedPostworkshop] = useState([]);
  // console.log("SElected workshopps", selectedPostworkshop)


  const [errorRequest, setErrorRequest] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const csvNowDate = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
  });

  useEffect(() => {
    setIsLoading(false);
    setErrorRequest("");
    async function getdata() {
      try {
        const postWorkshop = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/csv/post_event/${selectedDate.start}&${selectedDate.finish}`
        ).then((r) => r.json());

        if (postWorkshop?.statusText === "FAIL") {
          setIsLoading(false);
          setErrorRequest("Not founded data");
        } else {
          setSelectedPostworkshop(postWorkshop);

        }
      } catch (error) {
        setErrorRequest("Something went wrong try again");
        setIsLoading(false);
      }
    }

    if (selectedDate.start && selectedDate.finish) {
      getdata();
    }

  }, [selectedDate]);

  return (
    <Layout showStatusHeader={true}>
      <PageTopHeading
        pageTitle={"YIP Event and Facilitator Data"}
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
          {selectedPostworkshop && (
            <>
              {/* <div>
                <button
                  onClick={() => setDownload(true)}
                  className="text-2xl text-white bg-black rounded shadow-xl p-5 w-full md:w-52 h-full uppercase"
                >
                  Download <br /> all <br /> datasets
                </button>
              </div> */}

              <QuarterlyCsv
                csvData={selectedPostworkshop}
                headers={selectedPostworkshop.length > 0 && Object.keys(selectedPostworkshop[0])}
                fileName={`OEF_YIP_Event_Facilitator_Feedback_${
                  csvNowDate.split("_")[0]
                }.csv`}
                buttonText="CSV"
                download={{ state: download, set: setDownload }}
              />
            </>
          )}
        </div>
        <span className="font-medium">{errorRequest !== '' && errorRequest}</span>

      </section>
    </Layout>
  );
};

export default YipFacilitatorFeedback;

export const getServerSideProps = withPageAuthRequired({});
