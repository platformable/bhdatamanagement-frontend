import React, { useState } from "react";
import Layout from "../../../components/Layout";
import PageTopHeading from "../../../components/PageTopHeading";
import Loader from "../../../components/Loader";
import axios from "axios";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputValidationAddress from "../../../components/InputValidationAddress";
import { useRouter } from "next/router";

const CreateFBO = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const isNumberKey = (e) => {
    const invalidChars = [
      "-",
      "+",
      "e",
    ];
    if (invalidChars.includes(e.key)) {
      e.preventDefault();
    } 
}
  const [form, setForm] = useState({
    nameFBO: "",
    addressFBO: "",
    address2FBO: "",
    boroughFBO: "",
    zipcodeFBO: "",
    nameReligiousLeader: "",
    positionReligiousLeader: "",
    emailReligiousLeader: "",
    phoneReligiousLeader: "",
    nameKeyContact: "",
    phoneKeyContact: "",
    emailKeyContact: "",
    nameAlternateContact: "",
    phoneAlternateContact: "",
    emailAlternateContact: "",
    fboDropboxFolder: "",
    fboNotes: "",
    fboActive: true,
  });
  const notifyMessage = () => {
    toast.success("The fbo is being added", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const submitForm = async () => {
    setLoading(!loading)
    await axios
      .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/fbos`, form)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setLoading(!loading)
          notifyMessage();
            setTimeout(() => {
              router.push("/oef/fbo/directory");
            }, 1500);
        }
      })
      .catch(function (error) {
        setLoading(!loading)
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
  }

const handleAddress = (value, key) => {
    setForm((prev) => ({ ...prev, key: value }));
}

  console.log(form);
  return (
    <>
      <Layout>
        <ToastContainer autoClose={1500} />
        <PageTopHeading
          pageTitle={"Add a new FBO"}
          backBtn={true}
          dashboardBtn={true}
        />
        <section className="container mx-auto px-5  md:px-0 rounded-lg border-black pb-10">
          <div className="question-body">
              <h2 className="font-black">FBO name</h2>
            <div>
              <label >
                <input className="w-full md:w-96" type="text" name="nameFBO" onChange={handleForm} />
              </label>
            </div>
          </div>
          <div className="question-body">
              <h2 className="font-black">FBO address</h2>
            <div>
              <label>
                <InputValidationAddress setForm={setForm} name={'addressFBO'}/>
              </label>
            </div>
          </div>
          <div className="question-body">
              <h2 className="font-black">FBO address line 2</h2>
            <div>
              <label>
              <InputValidationAddress setForm={setForm} name={'address2FBO'}/>

              </label>
            </div>
          </div>
          <div className="question-body">
          <h2 className="font-black">Borough</h2>

            <div>
              {boroughs?.map((element) => (
                <>
                  <label>
                    <input
                      type="radio"
                      name="boroughFBO"
                      value={element}
                      onChange={handleForm}
                      
                    />
                    <p>{element}</p>
                  </label>
                </>
              ))}
            </div>
          </div>
          <div className="question-body">
              <h2 className="font-black">Zip code</h2>
            <div>
              <label>
                <input 
                type="number" 
                placeholder="Eg. 10027"
                maxLength={5}
                name="zipcodeFBO"
                className="w-full md:w-96"
                onKeyUp={(e) => {
                  e.target.value.length > 5 && (e.target.value = e.target.value.slice(0,5)) 
                }}
                onWheelCapture={(e) => e.target.blur()}
                onChange={(e)=>{
                  e.target.value.length < 6 &&
                  setForm((previous) => ({
                  ...previous,
                  [e.target.name]: Number(e.target.value),
                }))}}
                onKeyDown={isNumberKey}
                 />
              </label>
            </div>
          </div>
          <div className="question-body">
              <h2 className="font-black">Name of religious leader</h2>
            <div>
              <label>
                <input
                  type="text"
                  name="nameReligiousLeader"
                  onChange={handleForm}
                  className="w-full md:w-96"
                />
              </label>
            </div>
          </div>
          <div className="question-body">
              <h2 className="font-black">Religious leader’s position</h2>
            <div>
              <label>
                <input
                  type="text"
                  name="positionReligiousLeader"
                  onChange={handleForm}
                  className="w-full md:w-96"
                />
              </label>
            </div>
          </div>
          <div className="question-body">
              <h2 className="font-black">Religious leader email</h2>
            <div>
              <label>
                <input
                  type="email"
                  name="emailReligiousLeader"
                  onChange={handleForm}
                  className="w-full md:w-96"
                />
              </label>
            </div>
          </div>
          <div className="question-body">
              <h2 className="font-black">Religious leader phone No</h2>
            <div>
              <label>
                <input
                  type="phone"
                  name="phoneReligiousLeader"
                  onChange={handleForm}
                  className="w-full md:w-96"
                />
              </label>
            </div>
          </div>
          <div className="question-body">
              <h2 className="font-black">Key contact name</h2>
            <div>
              <label>
                <input
                  type="text"
                  name="nameKeyContact"
                  onChange={handleForm}
                  className="w-full md:w-96"
                />
              </label>
            </div>
          </div>
          <div className="question-body">
              <h2 className="font-black">Key contact email</h2>
            <div>
              <label>
                <input
                  type="email"
                  name="phoneKeyContact"
                  onChange={handleForm}
                  className="w-full md:w-96"
                />
              </label>
            </div>
          </div>
          <div className="question-body">
              <h2 className="font-black">Key contact phone No </h2>
            <div>
              <label>
                <input
                  type="phone"
                  name="emailKeyContact"
                  onChange={handleForm}
                  className="w-full md:w-96"
                />
              </label>
            </div>
          </div>
          <div className="question-body">
              <h2 className="font-black">Alternative contact name</h2>
            <div>
              <label>
                <input
                  type="text"
                  name="nameAlternateContact"
                  onChange={handleForm}
                  className="w-full md:w-96"
                />
              </label>
            </div>
          </div>
          <div className="question-body">
              <h2 className="font-black">Alternative contact email</h2>
            <div>
              <label>
                <input
                  type="email"
                  name="phoneAlternateContact"
                  onChange={handleForm}
                  className="w-full md:w-96"
                />
              </label>
            </div>
          </div>
          <div className="question-body">
              <h2 className="font-black">Alternative contact phone No</h2>
            <div>
              <label>
                <input
                  type="phone"
                  name="emailAlternateContact"
                  onChange={handleForm}
                  className="w-full md:w-96"
                />
              </label>
            </div>
          </div>
          <div className="question-body">
              <h2 className="font-black">Link to Dropbox folder for FBO</h2>
            <div>
              <label>
                <input
                  type="text"
                  name="fboDropboxFolder"
                  onChange={handleForm}
                  className="w-full md:w-96"
                />
              </label>
            </div>
          </div>
          <div className="question-body">
              <h2 className="font-black">Notes</h2>
            <div>
              <label>
                <textarea className="w-full h-52" name="fboNotes" onChange={handleForm} />
              </label>
            </div>
          </div>
          <div className="question-body">
              <h2 className="font-black">FBO Active or Not active</h2>
            <div>
              <label>
                <select
                  className="border-black p-4 rounded-lg w-full md:w-96"
                  name="fboActive"
                  onChange={(e) => setForm(prev=> ({...prev, fboActive: e.target.value === "true"? true : false}))}
                >

                    <option className="" value={true} selected={form?.fboActive === true}>Active</option>
                    <option className="" value={false} selected={form?.fboActive === false}>No active</option>

                </select>
              </label>
            </div>
          </div>
        </section>
        {loading ? (<div className="flex justify-center my-10"> <Loader /></div>  ): ( <div className="flex justify-center my-10">
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
        </div>)}
        
       
      </Layout>
      
    </>
  );
};

export default CreateFBO;

export const getServerSideProps = withPageAuthRequired();

