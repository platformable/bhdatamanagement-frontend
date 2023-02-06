import React from 'react';

const LeastEngaged = ({ eventForm, setEventForm }) => {
    return (
        <div className='question-body'>
        <h2 className="mb-7 font-black">What do you think was the activity or discussion topic that participants were least engaged?</h2>
        <label >
          <textarea
            className="p-4 block w-full text-lg h-52 bg-white break-all border-black rounded-md overflow-hidden"
            role="textbox"
            name="leastEngaged"
            placeholder=""
            onChange={(e) =>
              setEventForm((previous) => ({
                ...previous,
                [e.target.name]: e.target.value,
              }))
            }
            defaultValue={eventForm?.leastEngaged }
          />
        </label>
      </div>
    );
}

export default LeastEngaged;
