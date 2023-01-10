import React from "react";

const Section3 = ({ fbos, eventForm, setEventForm }) => {

  const handleForm = (e) => {
    setEventForm((prev) => ({ ...prev, deliveryPartner: e.target.value }));
  };
  return (
    <div className="">
      <h2 className="font-black">The name of your Faith-Based Organization:</h2>
      <div className="grid grid-cols-2 mt-7 gap-5">
        <div className="grid gap-5">
        {fbos?.slice(0, Math.round(fbos?.length / 2)).sort((a, b) => a.namefbo.localeCompare(b.namefbo, 'en')).map((fbo, index) => (
          <label className="flex gap-5">
            <input
              type="radio"
              className=""
              defaultChecked={eventForm?.deliveryPartner===fbo.namefbo?true:false}
              value={fbo.namefbo}
              onChange={handleForm}
              name="fbo"
            />
            <p className="">{fbo.namefbo}</p>
          </label>
        ))}
        </div>
        <div className="grid gap-5">
        {fbos?.slice(Math.round(fbos?.length / 2)).sort((a, b) => a.namefbo.localeCompare(b.namefbo, 'en')).map((fbo, index) => (
          <label className="flex gap-5">
            <input
              type="radio"
              className=""
            defaultChecked={eventForm?.deliveryPartner===fbo.namefbo?true:false}
              value={fbo.namefbo}
              onChange={handleForm}
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

export default Section3;
