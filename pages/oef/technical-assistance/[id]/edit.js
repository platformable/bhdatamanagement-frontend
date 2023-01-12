import React, { useState } from "react";
import Layout from "../../../../components/Layout";
import PageTopHeading from "../../../../components/PageTopHeading";
import Loader from "../../../../components/Loader";
import axios from "axios";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputValidationAddress from "../../../../components/InputValidationAddress";
import { useRouter } from "next/router";

import TypeOfTARequested from "../../../../components/technicalAssistance/TypeOfTARequested";
import ReasonForRequest from "../../../../components/technicalAssistance/ReasonForRequest";
import YourContactInformation from "../../../../components/technicalAssistance/YourContactInformation";
import FboName from "../../../../components/technicalAssistance/FboName";
import Outcome from "../../../../components/technicalAssistance/Outcome";
import DateResolved from "../../../../components/technicalAssistance/DateResolved";
import Complete from "../../../../components/technicalAssistance/Complete";
import ExternalSurveyHeader from "../../../../components/ExternalSurveyHeader";

const EditTA = ({ technicalAssistance,fbos }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  console.log("technicalAssistance",technicalAssistance)

  const isNumberKey = (e) => {
    const invalidChars = ["-", "+", "e"];
    if (invalidChars.includes(e.key)) {
      e.preventDefault();
    }
  };
  const [form, setForm] = useState({
    taType: technicalAssistance?.tatype,
    taTypeOther: technicalAssistance?.tatypeother,
    taReason: technicalAssistance?.tareason,
    taContactName: technicalAssistance?.tacontactname,
    taEmail: technicalAssistance?.taemail,
    taPhone: technicalAssistance?.taphone,
    taFbo: technicalAssistance?.tafbo ,
    taFboOther: technicalAssistance?.tafboother,
    taDateSubmitted: technicalAssistance.tadatesubmitted,
    taStatus: technicalAssistance.tastatus,
    taStatusCompleteDate:technicalAssistance?.tastatuscompletedate,
    taCompleteBhStaff: technicalAssistance?.tacompletebhstaff,
    taNotesBhStaff: technicalAssistance.tanotesbhstaff,
    programId: 1,
    programName: "OEF",
  });
  const notifyMessage = () => {
    toast.success("Technical assistance created", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const submitForm = async () => {
    setLoading(!loading);
  /*   await axios
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
            router.push("/oef");
          }, 1500);
        }
      })
      .catch(function (error) {
        setLoading(!loading);
        setError("An error ocurred, try again");
        console.error("error: ", error);
      }); */
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

  console.log(form);
  return (
    <>
      <Layout>
      <ToastContainer autoClose={1500} />
      <PageTopHeading
          pageTitle={"Edit Technical Assistance Request"}
          backBtn={true}
          dashboardBtn={true}
        />
      
      <section className="container mx-auto px-5  md:px-0 rounded-lg border-black pb-10">

   

            <div className="question-body">
        <h2 className="font-black">Status:</h2>
         <label className='mt-7'>
              <select
                onChange={(e) =>
                  setForm({ ...form, taStatus: e.target.value })
                }
                className="select-add-edit-supervisor block text-[#00000065] w-90 mt-1 rounded-md p-2 border-black shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option value={form?.taStatus} default>{form?.taStatus}</option>
                {form?.taStatus==="Submitted"?null:<option value="Submitted" >Submitted</option>}
                {form?.taStatus==="Pending"?null:<option value="Pending" >Pending</option>}
                {form?.taStatus==="Completed"?null:<option value="Completed" >Completed</option>}

              </select>
      </label>
     </div>

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
        <div className="flex justify-center my-10">
          <button
            className="py-2 px-5 flex items-center rounded bg-black text-white font-semibold"
            onClick={submitForm}
          >
            <img
              src="/check-save-and-finish.svg"
              alt="register event icon"
              className="mr-2"
            />
            Save and finish
          </button>
        </div>
      )}

      </Layout>
    </>
  );
};

export default EditTA;

export const getServerSideProps = async(ctx) => {
  let {id}=ctx.params
    const [technicalAssistance,fbos] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/technical_assistance/${id}`).then((r) => r.json()).then(res=>res[0]),
      fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/fbos`).then((r) => r.json()),
    ]);
    return { props: { technicalAssistance: technicalAssistance,fbos:fbos } };

  }


