import React, {useState, useEffect} from "react";

const PartnerOrganization = ({ fbos, eventForm, setEventForm }) => {
  const [partners, setPartners] = useState([
    ...eventForm?.partnerOrganization1,
  ]);
  useEffect(() => {
    setEventForm((previous) => ({
      ...previous,
      partnerOrganization1: partners.join(),
    }));
  }, [partners]);

  
  const handleForm = (e) =>
    setEventForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleArray = (e) => {
    e.target.value === "Other" ? setEventForm(prev => ({...prev, partnerOrganization1Other: ''})) : null
    const isValueOnData = partners.includes(e.target.value);
    const filteredData = partners.filter(
      (oldValues) => oldValues != e.target.value
    );

    isValueOnData
      ? setPartners((previous) => ([...filteredData]))
      : setPartners((previous) => ([...filteredData, e.target.value]));
  };

  return (
    <div className="question-body">
      <h2 className="font-black">
        List any co-sponsor/co-host who is also a grantee, or indicate N/A if
        not applicable.
      </h2>
      <div className="grid grid-cols-2">
        <div className="grid gap-5">
          {fbos
            ?.slice(0, Math.round(fbos.length / 2))
            .sort((a, b) => a.namefbo.localeCompare(b.namefbo, "en"))
            .map((option, index) => (
              <label key={index} className="flex gap-x-5 items-center">
                <input
                  type="checkbox"
                  name="partnerOrganization1"
                  value={option.namefbo}
                  onChange={handleArray}
                />
                <p>{option.namefbo}</p>
              </label>
            ))}
        </div>
        <div className="grid gap-5">
          {fbos
            ?.slice(Math.round(fbos.length / 2))
            .sort((a, b) => a.namefbo.localeCompare(b.namefbo, "en"))
            .map((option, index) => (
              <>
                <label key={index} className="flex gap-x-5 items-center">
                  <input
                    type="checkbox"
                    name="partnerOrganization1"
                    value={option.namefbo}
                    onChange={handleArray}
                  />
                  <p>{option.namefbo}</p>
                </label>
              </>
            ))}
          <label className="flex gap-x-5 items-center">
            <input
              type="checkbox"
              name="partnerOrganization1"
              value={"Other"}
              onChange={handleArray}
            />
            <p>Other</p>
            <input
              type="text"
              name="partnerOrganization1Other"
              defaultValue=""
              onChange={handleForm}
              placeholder="Please specify"
            />
          </label>
          <label className="flex gap-x-5 items-center">
            <input
              type="checkbox"
              name="partnerOrganization1"
              value={"N/A"}
              onChange={handleArray}
            />
            <p>N/A</p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default PartnerOrganization;
