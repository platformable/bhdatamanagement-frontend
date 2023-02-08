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

const EditFBO = ({ data }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const isNumberKey = (e) => {
    const invalidChars = ["-", "+", "e"];
    if (invalidChars.includes(e.key)) {
      e.preventDefault();
    }
  };
  console.log(data);
  const [form, setForm] = useState({
    nameFBO: data[0]?.namefbo || "",
    addressFBO: data[0]?.addressfbo || "",
    address2FBO: data[0]?.address2fbo || "",
    boroughFBO: data[0]?.boroughfbo || "",
    zipcodeFBO: data[0]?.zipcodefbo || "",
    nameReligiousLeader: data[0]?.namereligiousleader || "",
    positionReligiousLeader: data[0]?.positionreligiousleader || "",
    emailReligiousLeader: data[0]?.emailreligiousleader || "",
    phoneReligiousLeader: data[0]?.phonereligiousleader || "",
    nameKeyContact: data[0]?.namekeycontact || "",
    phoneKeyContact: data[0]?.phonekeycontact || "",
    emailKeyContact: data[0]?.emailkeycontact || "",
    nameAlternateContact: data[0]?.namealternatecontact || "",
    phoneAlternateContact: data[0]?.phonealternatecontact || "",
    emailAlternateContact: data[0]?.emailalternatecontact || "",
    fboDropboxFolder: data[0]?.fbodropboxfolder || "",
    fboNotes: data[0]?.fbonotes || "",
    fboActive: data[0]?.fboactive || "",
    numberfbo:data[0]?.numberfbo
  });
  const notifyMessage = () => {
    toast.success("The fbo is being added", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const submitForm = async () => {
    setLoading(!loading);
    await axios
      .put(`${process.env.NEXT_PUBLIC_SERVER_URL}/fbos`, form)
      .then((response) => {
        console.log(response);
        if (response.data.status === 200) {
          setLoading(false);
          notifyMessage();
          setTimeout(() => {
            router.push("/oef/fbo/directory");
          }, 1500);
        }
      })
      .catch(function (error) {
        setLoading(false);
        setError("An error ocurred, try again");
        console.error("error: ", error);
      });
  };

  const handleForm = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const boroughs = [
    "Bronx",
    "Brooklyn",
    "Manhattan",
    "Staten Island",
    "Queens",
  ];

  console.log(form);
  return (
    <>
      <Layout>
        <ToastContainer autoClose={1500} />
        <PageTopHeading
          pageTitle={"Edit FBO"}
          backBtn={true}
          dashboardBtn={true}
        />
        <section className="container mx-auto px-5 md:px-0 rounded-lg border-black pb-10">
          <div className="question-body">
            <h2 className="font-black">FBO name</h2>
            <div>
              <label>
                <input
                  className="w-full md:w-96"
                  type="text"
                  name="nameFBO"
                  onChange={handleForm}
                  defaultValue={form.nameFBO}
                />
              </label>
            </div>
          </div>
          <div className="question-body">
            <h2 className="font-black">FBO address</h2>
            <div>
              <label>
                <InputValidationAddress
                  setForm={setForm}
                  name={"addressFBO"}
                  defaultValue={form.addressFBO}
                />
              </label>
            </div>
          </div>
          <div className="question-body">
            <h2 className="font-black">FBO address line 2</h2>
            <div>
              <label>
                <InputValidationAddress
                  setForm={setForm}
                  name={"address2FBO"}
                  defaultValue={form.address2FBO}
                />
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
                      defaultChecked={
                        element === form?.boroughFBO ? "checked" : ""
                      }
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
                  defaultValue={form?.zipcodeFBO}
                  className="w-full md:w-96"
                  onKeyUp={(e) => {
                    e.target.value.length > 5 &&
                      (e.target.value = e.target.value.slice(0, 5));
                  }}
                  onWheelCapture={(e) => e.target.blur()}
                  onChange={(e) => {
                    e.target.value.length < 6 &&
                      setForm((previous) => ({
                        ...previous,
                        [e.target.name]: Number(e.target.value),
                      }));
                  }}
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
                  className="w-full md:w-96"
                  name="nameReligiousLeader"
                  onChange={handleForm}
                  defaultValue={form?.nameReligiousLeader}
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
                  defaultValue={form?.positionReligiousLeader}
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
                  className="w-full md:w-96"
                  defaultValue={form?.emailReligionsLeader}
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
                  className="w-full md:w-96"
                  defaultValue={form?.phoneReligionsLeader}
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
                  defaultValue={form?.nameKeyContact}
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
                  defaultValue={form?.emailKeyContact}
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
                  defaultValue={form?.phoneKeyContact}
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
                  defaultValue={form?.nameAlternateContact}
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
                  defaultValue={form?.emailAlternateContact}
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
                  defaultValue={form?.phoneAlternateContact}
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
                  defaultValue={form?.fboDropboxFolder}
                />
              </label>
            </div>
          </div>
          <div className="question-body">
            <h2 className="font-black">Notes</h2>
            <div>
              <label>
                <textarea
                  className="w-full h-52"
                  name="fboNotes"
                  onChange={handleForm}
                  defaultValue={form?.fboNotes}
                />
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
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      fboActive: e.target.value === "true" ? true : false,
                    }))
                  }
                >
                  <option
                    className=""
                    value={true}
                    selected={form?.fboActive === true}
                  >
                    Active
                  </option>
                  <option
                    className=""
                    value={false}
                    selected={
                      form?.fboActive === false || form?.fboActive === null
                    }
                  >
                    No active
                  </option>
                </select>
              </label>
            </div>
          </div>
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

export default EditFBO;

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const { id } = ctx.params;
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/fbos/${id}`);
    const data = await res.json();
    return { props: { data } };
  },
});
