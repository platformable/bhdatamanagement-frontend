import React, { useState } from "react";
import Layout from "../../../components/Layout";
import PageTopHeading from "../../../components/PageTopHeading";
import Loader from "../../../components/Loader";
import axios from "axios";


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateFBO = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
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
    emailReligionsLeader: "",
    phoneReligionsLeader: "",
    nameKeyContact: "",
    phoneKeyContact: "",
    emailKeyContact: "",
    nameAlternateContact: "",
    phoneAlternateContact: "",
    emailAlternateContact: "",
    fboDropboxFolder: "",
    fboNotes: "",
    fboActive: "",
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
        if (response.data.status === 200) {
          setLoading(!loading)
          notifyMessage();
          //   setTimeout(() => {
          //     router.push("/oef/fbo");
          //   }, 15000);
        }
      })
      .catch(function (error) {
        setLoading(!loading)
        setError("An error ocurred, try again");
        console.error("error: ", error);
      });
  };

  const handleForm = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  console.log(form);
  return (
    <>
      <Layout>
        <ToastContainer autoClose={15000} />
        <PageTopHeading
          pageTitle={"Add a new FBO"}
          backBtn={true}
          dashboardBtn={true}
        />
        <section className="container mx-auto px-5 md:px-0 rounded-lg border-black pb-10">
          <div className="question-body">
              <h2 className="font-black">FBO name</h2>
            <div>
              <label>
                <input type="text" name="nameFBO" onChange={handleForm} />
              </label>
            </div>
          </div>
          <div className="question-body">
              <h2 className="font-black">FBO address</h2>
            <div>
              <label>
                <input type="text" name="addressFBO" onChange={handleForm} />
              </label>
            </div>
          </div>
          <div className="question-body">
              <h2 className="font-black">FBO address line 2</h2>
            <div>
              <label>
                <input type="text" name="address2FBO" onChange={handleForm} />
              </label>
            </div>
          </div>
          <div className="question-body">
          <h2 className="font-black">Borough</h2>

            <div>
              <label>
                <input type="radio" name="boroughFBO" value="Bronx" onChange={handleForm} />
                <p>Bronx</p>
              </label>
              <label>
                <input type="radio" name="boroughFBO" value="Brooklyn" onChange={handleForm} />
                <p>Brooklyn</p>
              </label>
              <label>
                <input type="radio" name="boroughFBO" value="Manhattan" onChange={handleForm} />
                <p>Manhattan</p>
              </label>
              <label>
                <input type="radio" name="boroughFBO" value="Staten Island" onChange={handleForm} />
                <p>Staten Island</p>
              </label>
              <label>
                <input type="radio" name="boroughFBO" value="Queens" onChange={handleForm} />
                <p>Queens</p>
              </label>
            </div>
          </div>
          <div className="question-body">
              <h2 className="font-black">Zip code</h2>
            <div>
              <label>
                <input 
                type="number" 
                placeholder="Eg. 10027"
                maxlength={5}
                name="zipcodeFBO"
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
                  name="emailReligionsLeader"
                  onChange={handleForm}
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
                  name="phoneReligionsLeader"
                  onChange={handleForm}
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
                  className="border-black p-4 rounded-lg"
                  name="fboActive"
                  onChange={(e) => setForm(prev=> ({...prev, fboActive: Boolean(e.target.value)}))}
                >

                    <option className="" value={true}>Active</option>
                    <option className="" value={false}>No active</option>

                </select>
              </label>
            </div>
          </div>
        </section>
        <div className="flex justify-center">{loading && <Loader />}</div>
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
      </Layout>
    </>
  );
};

export default CreateFBO;
