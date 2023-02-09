import React, {useState, useEffect} from "react";

const PartnerOrganization = ({ fbos, eventForm, setEventForm }) => {
  const [partners, setPartners] = useState(eventForm?.partnerOrganization1);
  useEffect(() => {
    setEventForm((previous) => ({
      ...previous,
      partnerOrganization1: partners.replace(/,/g,', ').replace(",",'').replace(" ",''),
    }));
  }, [partners]);

  
  const handleForm = (e) =>
    setEventForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleArray = (e) => {
    e.target.value === "Other" ? setEventForm(prev => ({...prev, partnerOrganization1Other: ''})) : null

    let partnersArray = partners.split(',')

    const isValueOnData = partnersArray.includes(e.target.value);
    const filteredData = partnersArray.filter(
      (oldValues) => oldValues != e.target.value
    );

    isValueOnData
      ? setPartners((previous) => ([...filteredData].toString()))
      : setPartners((previous) => ([...filteredData, e.target.value].toString()));
  };

  return (
    <div className="question-body">
      <h2 className="font-black">
        List any co-sponsor/co-host who is also a grantee, or indicate N/A if
        not applicable.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="grid gap-5">
          {fbos
            ?.sort((a, b) => a.namefbo.localeCompare(b.namefbo, "en"))
            .slice(0, Math.round(fbos.length / 2))
            .map((option, index) => (
              <label key={index} className="flex gap-x-5 items-center">
                <input
                  type="checkbox"
                  name="partnerOrganization1"
                  value={option.namefbo}
                  onChange={handleArray}
                  defaultChecked={eventForm?.partnerOrganization1.includes(option.namefbo)? "checked":false}

                />
                <p>{option.namefbo}</p>
              </label>
            ))}
        </div>
        <div className="grid gap-5">
          {fbos
            ?.sort((a, b) => a.namefbo.localeCompare(b.namefbo, "en"))
            .slice(Math.round(fbos.length / 2))
            .map((option, index) => (
              <>
                <label key={index} className="flex gap-x-5 items-center">
                  <input
                    type="checkbox"
                    name="partnerOrganization1"
                    value={option.namefbo}
                    onChange={handleArray}
                    defaultChecked={eventForm?.partnerOrganization1.includes(option.namefbo)? "checked":false}
                  />
                  <p>{option.namefbo}</p>
                </label>
              </>
            ))}
          <label className="flex gap-x-5 md:items-center flex-col md:flex-row">
            <div className='flex gap-x-5 items-center mb-5'>
            <input
            className=""
              type="checkbox"
              name="partnerOrganization1"
              value={"Other"}
              onChange={handleArray}
              defaultChecked={eventForm?.partnerOrganization1.includes('Other')? "checked":false}
            />
            <p>Other</p>
            </div>
            <input
            className="md:w-1/3 w-2/3"
              type="text"
              name="partnerOrganization1Other"
              onChange={handleForm}
              placeholder="Please specify"
              defaultValue={eventForm?.partnerOrganization1Other}
            />
          </label>
          <label className="flex gap-x-5 md:items-center">
            <input
              type="checkbox"
              name="partnerOrganization1"
              value={"N/A"}
              onChange={handleArray}
              defaultChecked={eventForm?.partnerOrganization1.includes('N/A')? "checked":false}
            />
            <p>N/A</p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default PartnerOrganization;
