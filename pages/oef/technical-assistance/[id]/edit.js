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
import Notes from "../../../../components/technicalAssistance/Notes";
import Outcome from "../../../../components/technicalAssistance/Outcome";
import DateResolved from "../../../../components/technicalAssistance/DateResolved";
import Complete from "../../../../components/technicalAssistance/Complete";
import ExternalSurveyHeader from "../../../../components/ExternalSurveyHeader";
import ResponseStatusModal from '../../../../components/ResponseStatusModal'

const EditTA = ({ technicalAssistance,fbos }) => {
  const [error, setError] = useState("");
  const [showResponseStatus, setShowResponseStatus] = useState(false);
  const [responseStatus, setResponseStatus] = useState({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const isEditPage=router.pathname.includes('edit')


  const isNumberKey = (e) => {
    const invalidChars = ["-", "+", "e"];
    if (invalidChars.includes(e.key)) {
      e.preventDefault();
    }
  };
  const [form, setForm] = useState({
    id:technicalAssistance.id,
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
    setResponseStatus({ success: true, statusMessage: "Please wait while your event information is being processed"})
    setShowResponseStatus(true)
    await axios
      .put(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/technical_assistance/update`,
        form
      )
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setLoading(!loading);
          setResponseStatus({ success: true, statusMessage: "Technical Assistance updated correctly"})
          setTimeout(() => {
            router.push("/oef/technical-assistance");
          }, 1500);
        }
      })
      .catch(function (error) {
        setLoading(!loading);
        setError("An error ocurred, try again");
        console.error("error: ", error);
      });
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

  const handleStatus = (e) => setForm(prev => ({...prev, taStatus: e.target.value,taStatusCompleteDate:null})) 
  console.log(form);

  console.log("technicalAssistance",technicalAssistance)
  return (
    <>
      <Layout>
      <ToastContainer autoClose={1500} />
      <PageTopHeading
          pageTitle={"Review Technical Assistance Request"}
          backBtn={true}
          dashboardBtn={true}
        />
      
      <section className="container mx-auto px-5  md:px-0 rounded-lg border-black pb-10">

   

      <div className="question-body">
      <h2 className="font-black">Status:</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
        <button className={`${form?.taStatus === 'Submitted'? 'submittedBg': null} border-black py-4 rounded shadow-lg`} onClick={handleStatus} value="Submitted">
          Submitted
        </button>
        <button className={`${form?.taStatus === 'Pending'? 'pendingBg': null} border-black py-4 rounded shadow-lg`} onClick={handleStatus} value="Pending">
          Pending
        </button>
        <button className={`${form?.taStatus === 'Complete'? 'completeBg': null} border-black py-4 rounded shadow-lg`} 
        onClick={(e) => setForm(prev => ({...prev, taStatus: e.target.value,taStatusCompleteDate:new Date()}))} 
        value="Complete">
          Complete
        </button>
      </div>
    </div>
        <Notes form={form} setForm={setForm} />
        <TypeOfTARequested form={form} setForm={setForm} isEditPage={isEditPage}/>
        <ReasonForRequest form={form} setForm={setForm} isEditPage={isEditPage}/>
        <YourContactInformation form={form} setForm={setForm} isEditPage={isEditPage}/>
        <FboName form={form} setForm={setForm} fbos={fbos} isEditPage={isEditPage}/>

      </section>
      {loading ? (
        <div className="flex justify-center my-10">
          {" "}
          <Loader />
        </div>
      ) : (
        <div className="flex justify-center my-10">
        {loading? null:<button
           className="py-2 px-5 flex items-center rounded bg-black text-white font-semibold"
           onClick={submitForm}
         >
           Submit
         </button> } 
       </div>
      )}

      {showResponseStatus && (
        <ResponseStatusModal
          setShowResponseStatus={setShowResponseStatus}
          responseStatus={responseStatus}
        />
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


