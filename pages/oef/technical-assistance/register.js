import React, { useState } from "react";
import Layout from "../../../components/Layout";
import PageTopHeading from "../../../components/PageTopHeading";
import Loader from "../../../components/Loader";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputValidationAddress from "../../../components/InputValidationAddress";
import { useRouter } from "next/router";

import TypeOfTARequested from "../../../components/technicalAssistance/TypeOfTARequested";
import ReasonForRequest from "../../../components/technicalAssistance/ReasonForRequest";
import YourContactInformation from "../../../components/technicalAssistance/YourContactInformation";
import FboName from "../../../components/technicalAssistance/FboName";
import Outcome from "../../../components/technicalAssistance/Outcome";
import DateResolved from "../../../components/technicalAssistance/DateResolved";
import Complete from "../../../components/technicalAssistance/Complete";
import ExternalSurveyHeader from "../../../components/ExternalSurveyHeader";

const RegisterTA = ({ fbos }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [isEmpty,setIsEmpty]=useState(false)

  const isNumberKey = (e) => {
    const invalidChars = ["-", "+", "e"];
    if (invalidChars.includes(e.key)) {
      e.preventDefault();
    }
  };
  const [form, setForm] = useState({
    taType: [],
    taTypeOther: "",
    taReason: "",
    taContactName: "",
    taEmail: "",
    taPhone: "",
    taFbo: [],
    taFboOther: "",
    taDateSubmitted: new Date(),
    taStatus: "",
    taStatusCompleteDate: null,
    taCompleteBhStaff: "",
    taNotesBhStaff: "",
    programId: 1,
    programName: "OEF",
  });

  const [messageToCompleteForm,setMessageToCompleteForm]=useState({
    status:false,
    message:""
  })
  const notifyMessage = () => {
    toast.success("Technical assistance created", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const submitForm = async () => {
    setLoading(!loading);

  /*   const isEmpty = Object.values(form).some(value => !value) */

   

    if (form.taType.length===0 || 
      form.taReason==='' || 
      form.taContactName==='' || 
      form.taEmail==='' ||
      form.taPhone==='' ||
      form.taFbo.length===0 ){
        console.log('isEmpty yesss',isEmpty)
        setLoading(false)
        setMessageToCompleteForm({status:true,message:"Please complete all the fields"})
    } else {
      setMessageToCompleteForm({status:false,message:"All fields completed"})
      console.log('isEmpty NOOOO',isEmpty)
    const send = await axios
      .post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/technical_assistance/create`,
        form
      )
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setLoading(!loading);
          notifyMessage();
          setTimeout(() => {
            router.push("/oef/technical-assistance/success");
          }, 1500);
        }
      })
      .catch(function (error) {
        setLoading(!loading);
        setError("An error ocurred, try again");
        console.error("error: ", error);
      });
    }



      

  };
  const boroughs = [
    "Bronx",
    "Brooklyn",
    "Manhattan",
    "Staten Island",
    "Queens",
  ];
  const handleForm = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAddress = (value, key) => {
    setForm((prev) => ({ ...prev, key: value }));
  };


  return (
    <>
      {/* <Layout> */}
      <ToastContainer autoClose={1500} />
      {/* <PageTopHeading
          pageTitle={"FBO Technical Assistance Request Form- FY 2022-2023"}
          backBtn={true}
          dashboardBtn={true}
        /> */}
      <ExternalSurveyHeader pageTitle="Technical Assistance Request Form
"/>
      <section className="container mx-auto px-5  md:px-0 rounded-lg border-black pb-10">
        <TypeOfTARequested form={form} setForm={setForm} />
        <ReasonForRequest form={form} setForm={setForm} />
        <YourContactInformation form={form} setForm={setForm} />
        <FboName form={form} setForm={setForm} fbos={fbos} />
        {/* <Outcome/>
<DateResolved/>
<Complete/> */}
      </section>
      {loading ? (
        <div className="flex justify-center my-10">
          {" "}
          <Loader />
        </div>
      ) : (
        <>
        <div className="grid justify-center mt-10">
          <button
            className="py-2 px-5 flex items-center rounded bg-black text-white font-semibold"
            onClick={submitForm}
          >
            <img
              src="/check-save-and-finish.svg"
              alt="register event icon"
              className="mr-2"
            />
            Submit
          </button>
        </div>
        {messageToCompleteForm.status===true && <p className="red-100 text-red-500 text-center my-5">{messageToCompleteForm.message}</p> }
        </>
      )}

      {/* </Layout> */}
    </>
  );
};

export default RegisterTA;

export const getServerSideProps = async(ctx) => {
    const [fbos] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/fbos`).then((r) => r.json()),
    ]);
    return { props: { fbos: fbos } };

  }


