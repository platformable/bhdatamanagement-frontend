import React from 'react';

const ReasonForRequest = ({form, setForm,isEditPage}) => {
    return (
        <div className="question-body">
        <h2 className="font-black">Reason for Request:</h2>
        <p>Please provide specific details</p>
         <label className='mt-7'>
       <textarea
         className="p-4 block w-full text-lg h-52 bg-white break-all border-black rounded-md overflow-hidden"
         role="textbox"
         name="taReason"
         placeholder=""
         onChange={(e) =>
           setForm((previous) => ({
             ...previous,
             [e.target.name]:e.target.value
           }))
         }
        defaultValue={form?form.taReason:""}
        disabled={isEditPage?true:false}
       />
      </label>
     </div>
    );
}

export default ReasonForRequest;
