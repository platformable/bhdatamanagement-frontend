import React from 'react';

const PostEventReportSection38 = ({ eventForm,
    setEventForm,
    event,
    isNumberKey}) => {
    return (
        <div className='question-body'>
        <h2 className="mb-7 font-black">Names of staff members</h2>
        <label htmlFor="staffPresentNames">
          <textarea
            className="p-4 block w-full text-lg h-52 bg-white break-all border-black rounded-md overflow-hidden"
            role="textbox"
            name="staffPresentNames"
            placeholder=""
            onChange={(e) =>
              setEventForm((previous) => ({
                ...previous,
                [e.target.name]: e.target.value,
              }))
            }
            defaultValue={eventForm ? eventForm.staffPresentNames : ""}
          />
        </label>
      </div>
    );
}

export default PostEventReportSection38;
