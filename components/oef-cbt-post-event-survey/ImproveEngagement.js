import React from 'react';


const ImproveEngagement = ({ eventForm, setEventForm }) => {
    return (
        <div className='question-body'>
        <h2 className="mb-7 font-black">How could this be improved next time?</h2>
        <label >

          <textarea
            className="p-4 block w-full text-lg h-52 bg-white break-all border-black rounded-md overflow-hidden"
            role="textbox"
            name="improveEngagement"
            placeholder=""
            onChange={(e) =>
              setEventForm((previous) => ({
                ...previous,
                [e.target.name]: e.target.value,
              }))
            }

            defaultValue={eventForm ? eventForm.improveEngagement : ""}

          />
        </label>
      </div>
    );
}

export default ImproveEngagement;
