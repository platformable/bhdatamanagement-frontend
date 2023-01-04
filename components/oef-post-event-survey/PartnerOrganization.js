import React from 'react'

const PartnerOrganization = ({fbos,eventForm,setEventForm}) => {
    const handleForm = (e) => setEventForm((prev) =>({...prev, [e.target.name]: e.target.value}));
console.log("fbos",fbos)
    return (
      <div className="px-7 question-body">
        <h2 className="font-black">
        List any co-sponsor/co-host who is also a grantee, or indicate N/A if not applicable.
        </h2>
        <div className="grid grid-cols-2">
          {fbos?.map((option, index) => (
            <label key={index}>
            <input type="radio" name="partnerorganization1" value={option.namefbo} onChange={handleForm}/>
            <p>{option.namefbo}</p>
          </label>
          ))}
          <label>
            <input type="radio" name="partnerorganization1" value={"Other"} onChange={handleForm}/>
            <p>Other</p>
            <input type="text" name="" value="" onChange={handleForm} placeholder="Please specify"/>
          </label>
          <label>
            <input type="radio" name="partnerorganization1" value={"N/A"} onChange={handleForm}/>
          <p>N/A</p>
            
          </label>
        </div>
      </div>
    );
}

export default PartnerOrganization