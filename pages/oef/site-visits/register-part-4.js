import React, { useState, useEffect } from "react";
import Layout from "../../../components/Layout";
import PageTopHeading from "../../../components/PageTopHeading";
import Loader from "../../../components/Loader";
import axios from "axios";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import ResponseStatusModal from "../../../components/ResponseStatusModal";

import { useSelector, useDispatch } from "react-redux";

import {
  updateInitialState,
  updateStrategiesHealthDisparities,
} from "../../../slices/siteVisitsSlice";
import Rating from "../../../components/oef-site-visit-survey/Rating";
import TextArea from "../../../components/oef-site-visit-survey/TextArea";
import Status from "../../../components/oef-site-visit-survey/Status";

const RegisterSiteVisits = ({ fbos }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const [showResponseStatus, setShowResponseStatus] = useState(false);
  const [responseStatus, setResponseStatus] = useState({});

  const hivRatingOptions = [
    {
      id: 1,
      value: "1: Very closed: cannot discuss",
      text: "Very closed",
      bgColor: "stronglyDisagreeBg",
      bgColorHover: "hover:stronglyDisagreeBg",
    },
    {
      id: 2,
      value: "2: Somewhat closed: not easily discussed",
      text: "Somewhat closed",
      bgColor: "disagreeBg",
      bgColorHover: "hover:disagreeBg",
    },
    {
      id: 3,
      value: "3: Neutral",
      text: "Neutral",
      bgColor: "neitherAgreeOrDisagreeBg",
      bgColorHover: "hover:neitherAgreeOrDisagreeBg",
    },
    {
      id: 4,
      value: "4: Somewhat open: can be discussed",
      text: "Somewhat open",
      bgColor: "agreeBg",
      bgColorHover: "hover:agreeBg",
    },
    {
      id: 5,
      value: "5: Very open: All topics and discussions welcome",
      text: "Very open",
      bgColor: "stronglyAgreeBg",
      bgColorHover: "hover:stronglyAgreeBg",
    },
  ];
  const workingRatingOptions = [
    {
      id: 1,
      value: "1: Not welcome",
      text: "Not welcome",
      bgColor: "stronglyDisagreeBg",
      bgColorHover: "hover:stronglyDisagreeBg",
    },
    {
      id: 2,
      value: "2: Some leaders make some groups unwelcome",
      text: "Somewhat not welcome",
      bgColor: "disagreeBg",
      bgColorHover: "hover:disagreeBg",
    },
    {
      id: 3,
      value: "3: Neutral",
      text: "Neutral",
      bgColor: "neitherAgreeOrDisagreeBg",
      bgColorHover: "hover:neitherAgreeOrDisagreeBg",
    },
    {
      id: 4,
      value: "4: Welcome: most leaders and groups welcome", 
      text: "Welcome",
      bgColor: "agreeBg",
      bgColorHover: "hover:agreeBg",
    },
    {
      id: 5,
      value: "5: Very welcome and open",
      text: "Very welcome and open",
      bgColor: "stronglyAgreeBg",
      bgColorHover: "hover:stronglyAgreeBg",
    },
  ];

  const statusOptions = [
    {
      id: 1,
      value: "Pending",
      text: "Pending",
      bgColor: "saPendingBg",
      bgColorHover: "hover:saPendingBg",
    },
    {
      id: 2,
      value: "Complete",
      text: "Complete",
      bgColor: "stronglyAgreeBg",
      bgColorHover: "hover:stronglyAgreeBg",
    },
  ];
  const surveyForm = useSelector((state) => state.siteVisitsReducer.value);

  console.log("surveyForm", surveyForm);

  const notifyMessage = () => {
    toast.success("Site Visit Saving", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const submitForm = async () => {
    setLoading(!loading);
    await axios
      .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/site_visits`, surveyForm)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setLoading(!loading);
          notifyMessage();
          setTimeout(() => {
            router.push("/oef/site-visits");
          }, 1500);
        }
      })
      .catch(function (error) {
        setLoading(!loading);
        setError("An error ocurred, try again");
        console.error("error: ", error);
      });
  };

  const handleForm = (e) => {
    dispatch(
      updateStrategiesHealthDisparities({ [e.target.name]: e.target.value })
    );
  };

  return (
    <>
      <Layout showStatusHeader={true}>
        <ToastContainer autoClose={20000} />
        <PageTopHeading
          backBtn={true}
          dashboardBtn={true}
          pageTitle={"Stigma"}
        />
        <div className="container mx-auto border rounded-lg mb-10">
          <div className="register-envent-form-container  grid  bg-white  rounded-lg px-7 mt-10 ">
            <div>
              <h2 className="font-black mb-2">
                Rate how open the following are to discussing HIV.
              </h2>

              <p>
                <strong>Very closed:</strong> cannot discuss
              </p>
              <p>
                <strong>Somewhat closed:</strong> not easily discussed{" "}
              </p>
              <p>
                <strong>Neutral</strong>: Neither discussed or not discussed{" "}
              </p>
              <p>
                <strong>Somewhat open:</strong> can be discussed{" "}
              </p>
              <p>
                <strong>Very open:</strong> All topics and discussions welcome
              </p>
            </div>

            <Rating
              dispatch={dispatch}
              surveyForm={surveyForm}
              options={hivRatingOptions}
              stateValue="fboLeaderHivOpenness"
              updateFunction={updateStrategiesHealthDisparities}
              title="Faith leader"
            />
            <Rating
              dispatch={dispatch}
              surveyForm={surveyForm}
              options={hivRatingOptions}
              stateValue="healthMinistryHivOpenness"
              updateFunction={updateStrategiesHealthDisparities}
              title="Health Ministry"
            />
            <Rating
              dispatch={dispatch}
              surveyForm={surveyForm}
              options={hivRatingOptions}
              stateValue="membershipHivOpenness"
              updateFunction={updateStrategiesHealthDisparities}
              title="Membership"
            />
            <Rating
              dispatch={dispatch}
              surveyForm={surveyForm}
              options={hivRatingOptions}
              stateValue="communityHivOpenness"
              updateFunction={updateStrategiesHealthDisparities}
              title="Communities you serve"
            />



            <div className="mt-10">

              <h2 className="font-black my-2">
                Rate how open the following are to working with diverse populations
                </h2>
              <div>
                <p><strong>Not welcome: </strong>Leaders make groups unwelcome </p>
                <p><strong>Somewhat not wlcome: </strong>Some leaders make some groups unwelcome</p>
                <p><strong>Neutral: </strong>Neither welcome or not welcome</p>
                <p><strong>Welcome: </strong>Most leaders make some groups welcome</p>
                <p><strong>Very welcome: </strong>Leaders make all groups very welcome</p>

              </div>
            </div>
            <Rating
              dispatch={dispatch}
              surveyForm={surveyForm}
              options={workingRatingOptions}
              stateValue="faithLeaderDiversityOpenness"
              updateFunction={updateStrategiesHealthDisparities}
              title="Faith leader"
            />
            <Rating
              dispatch={dispatch}
              surveyForm={surveyForm}
              options={workingRatingOptions}
              stateValue="healthMinistryDiversityOpenness"
              updateFunction={updateStrategiesHealthDisparities}
              title="Health Ministry"
            />
            <Rating
              dispatch={dispatch}
              surveyForm={surveyForm}
              options={workingRatingOptions}
              stateValue="membershipDiversityOpenness"
              updateFunction={updateStrategiesHealthDisparities}
              title="Membership"
            />
            <Rating
              dispatch={dispatch}
              surveyForm={surveyForm}
              options={workingRatingOptions}
              stateValue="communityDiversityOpenness"
              updateFunction={updateStrategiesHealthDisparities}
              title="Communities you serve"
            />

            <Status
              dispatch={dispatch}
              surveyForm={surveyForm}
              options={statusOptions}
              stateValue="submissionStatus"
              updateFunction={updateStrategiesHealthDisparities}
              title={"Status"}
            />
            <TextArea
              dispatch={dispatch}
              surveyForm={surveyForm}
              stateValue="submissionNotes"
              updateFunction={updateStrategiesHealthDisparities}
              title="Additional observation / notes"
            />
          </div>
        </div>
        <div className="flex justify-center">{loading && <Loader />}</div>
        <div className="flex justify-center my-10">
          {loading ? null : (
            <div className="flex gap-x-5 justify-center mt-0 mb-10">
              <button
                className="py-2 px-5 flex items-center rounded bg-black text-white font-semibold"
                onClick={() => router.push("/oef/site-visits/register-part-3")}
              >
                Previous Page
              </button>
              <button
                className="py-2 px-10 flex items-center rounded bg-black text-white font-semibold"
                onClick={submitForm}
              >
                Save and finish
              </button>
            </div>
          )}
        </div>
      </Layout>
      {showResponseStatus && (
        <ResponseStatusModal
          setShowResponseStatus={setShowResponseStatus}
          responseStatus={responseStatus}
        />
      )}
    </>
  );
};

export default RegisterSiteVisits;

export const getServerSideProps = withPageAuthRequired({});
