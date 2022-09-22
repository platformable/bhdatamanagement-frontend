import React from 'react';

const PostEventReportSection37 = ({
    eventForm,
    setEventForm,
    event,
    isNumberKey,
  }) => {
    return (
        <div className="question-body">
    <h2 className="font-black">
    Provide any additional zip codes that were covered
    </h2>
    <label>
    <input type="text" 
    name="additionalZipCodes" 
    className='border-black rounded mt-5  text-lg w-134'
    onChange={(e)=>{
      setEventForm((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }))}}
    placeholder='' 
    defaultValue={eventForm.additionalZipCodes}
/>
    </label>
    
  </div>
    );
}

export default PostEventReportSection37;
