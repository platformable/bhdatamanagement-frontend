import React from 'react';

const ReasonForRequest = ({form, setForm}) => {
    return (
        <div className="question-body">
        <h2 className="font-black">Notes:</h2>
         <label className='mt-7'>
       <textarea
         className="p-4 block w-full text-lg h-52 bg-white break-all border-black rounded-md overflow-hidden"
         role="textbox"
         name="taNotesBhStaff"
         placeholder="Write notes here. They will be sent to the FBO once you have clicked “Save and email FBO”"
         onChange={(e) =>
           setForm((previous) => ({
             ...previous,
             [e.target.name]:e.target.value
           }))
         }
        defaultValue={form?form.taNotesBhStaff:""}
       />
      </label>
     </div>
    );
}

export default ReasonForRequest;
