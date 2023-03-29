import React from "react";

const DeliveryPartner = ({ fbos, surveyForm, setSurveyForm,questionText }) => {
  console.log();
  const handleForm = (e) => {
    if (e.target.value !== "Other")
      setSurveyForm((prev) => ({ ...prev, deliveryPartnerOther: "" }));
    setSurveyForm((prev) => ({ ...prev, deliveryPartner: e.target.value }));
  };
  return (
    <div className="">
      <h2 className="font-black">{questionText}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-7 gap-5">
        <div className="grid gap-5">
          {fbos
            ?.sort((a, b) => a.namefbo.localeCompare(b.namefbo, "en"))
            .slice(0, Math.round(fbos.length / 2) + 1)
            .map((fbo, index) => (
              <label className="flex gap-5">
                <input
                  type="radio"
                  className=""
                  //   defaultChecked={}
                  value={fbo.namefbo}
                  onChange={handleForm}
                  name="deliveryPartner"
                />
                <p className="">{fbo.namefbo}</p>
              </label>
            ))}
        </div>
        <div className="grid gap-5">
          {fbos
            ?.sort((a, b) => a.namefbo.localeCompare(b.namefbo, "en"))
            .slice(Math.round(fbos.length / 2) + 1)
            .map((fbo, index) => (
              <label className="flex gap-5">
                <input
                  type="radio"
                  className=""
                  value={fbo.namefbo}
                  onChange={handleForm}
                  name="deliveryPartner"
                />
                <p className="">{fbo.namefbo}</p>
              </label>
            ))}
          <label className="flex gap-5 items-center">
            <input
              type="radio"
              className=""
              value={"Other"}
              onChange={handleForm}
              name="deliveryPartner"
            />
            <p className="">Other</p>
            <input
              type="text"
              value={surveyForm?.deliveryPartnerOther}
              onChange={(e) => {
                setSurveyForm((prev) => ({
                  ...prev,
                  deliveryPartnerOther: e.target.value,
                }));
              }}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPartner;
