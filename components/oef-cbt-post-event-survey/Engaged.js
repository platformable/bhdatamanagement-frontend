import React from "react";

const Engaged = ({ eventForm, setEventForm }) => {
  return (
    <div className="question-body">
      <h2 className="mb-7 font-black">
        What do you think was the activity or discussion topic where the
        participants were most engaged?
      </h2>
      <label >
        <textarea
          className="p-4 block w-full text-lg h-52 bg-white break-all border-black rounded-md overflow-hidden"
          role="textbox"
          name="engaged"
          placeholder=""
          onChange={(e) =>
            setEventForm((previous) => ({
              ...previous,
              [e.target.name]: e.target.value,
            }))
          }
          defaultValue={eventForm?.engaged}
        />
      </label>
    </div>
  );
};

export default Engaged;
