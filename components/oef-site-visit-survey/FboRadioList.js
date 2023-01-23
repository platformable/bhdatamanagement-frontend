import React from "react";

const FboRadioList = ({ fbos, surveyForm,dispatch,updateFbo }) => {
  console.log();
  const handleForm = (e) => {
    dispatch(updateFbo({fbo:e.target.value}))
  };
  return (
    <div className="question-body">
      <h2 className="font-black">Fbo Name</h2>
      <div className="grid grid-cols-2 gap-5">
        <div className="grid gap-5">
        {fbos?.slice(0, Math.round(fbos.length / 2)).sort((a, b) => a.namefbo.localeCompare(b.namefbo, 'en')).map((fbo, index) => (
          <label className="flex gap-5 items-center">
            <input
              type="radio"
              className=""
            //   defaultChecked={}
              value={fbo.namefbo}
              onChange={handleForm}
              name="fbo"
            />
            <p className="">{fbo.namefbo}</p>
          </label>
        ))}
        </div>
        <div className="grid gap-5">
        {fbos?.slice(Math.round(fbos.length / 2)).sort((a, b) => a.namefbo.localeCompare(b.namefbo, 'en')).map((fbo, index) => (
          <label className="flex gap-5 items-center">
            <input
              type="radio"
              className=""
            //   defaultChecked={}
              value={fbo.namefbo}
              onChange={handleForm}
              name="fbo"
            />
            <p className="">{fbo.namefbo}</p>
          </label>
        ))}
        </div>
      </div>
    </div>
  );
};

export default FboRadioList;

