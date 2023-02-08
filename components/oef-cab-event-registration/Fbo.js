import React from "react";

const FBO = ({ fbos, eventForm, setEventForm,stateValue }) => {

  const handleForm = (e) => {
    // setEventForm((prev) => ({ ...prev, deliveryPartner: e.target.value,locationAddress:fbo.addressfbo+' 'fbo.addressfbo2 }));
  };
  return (
    <div className="">
      <h2 className="font-black">Name of your Faith-Based Organization:</h2>
      <div className="grid grid-cols-2 mt-7 gap-5">
        <div className="grid gap-5">
        {fbos?.sort((a, b) => a.namefbo.localeCompare(b.namefbo, 'en')).slice(0, Math.round(fbos?.length / 2)).map((fbo, index) => (
          <label className="flex gap-5">
            <input
              type="radio"
              className=""
              defaultChecked={eventForm?.deliveryPartner===fbo.namefbo?true:false}
              value={fbo.namefbo}
              onChange={(e)=>setEventForm((prev) => ({ ...prev, [stateValue]: e.target.value}))}
              name="fbo"
            />
            <p className="">{fbo.namefbo}</p>
          </label>
        ))}
        </div>
        <div className="grid gap-5">
        {fbos?.sort((a, b) => a.namefbo.localeCompare(b.namefbo, 'en')).slice(Math.round(fbos?.length / 2)).map((fbo, index) => (
          <label className="flex gap-5">
            <input
              type="radio"
              className=""
            defaultChecked={eventForm?.deliveryPartner===fbo.namefbo?true:false}
              value={fbo.namefbo}
              onChange={(e)=>setEventForm((prev) => ({ ...prev, [stateValue]: e.target.value}))}
              name="fbo"
            />
            <p className="">{fbo?.namefbo}</p>
          </label>
        ))}
        </div>
      </div>
    </div>
  );
};

export default FBO;
