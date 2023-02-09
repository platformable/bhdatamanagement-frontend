import React from 'react'

const PartnerOrganization2 = ({eventForm,setEventForm}) => {
    const handleForm = (e) => setEventForm((prev) =>({...prev, [e.target.name]: e.target.value}));

    return (
      <div className='question-body'>
      <h2 className="mb-7 font-black">List any co-sponsor/co-host who is not a grantee. Eg. Black Health, Health First, etc. Write N/A if none.</h2>
      <label htmlFor="partnerOrganization2">
        <textarea
          className="p-4 block md:w-full w-5/6 text-lg h-52 bg-white break-all border-black rounded-md overflow-hidden"
          role="textbox"
          name="partnerOrganization2"
          placeholder=""
          onChange={handleForm}
          defaultValue={eventForm?.partnerOrganization2}
        />
      </label>
    </div>
    );
}

export default PartnerOrganization2