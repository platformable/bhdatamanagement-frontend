import React from "react";

const CapicityTraining = ({eventForm,setEventForm,event}) => {
  return (
    <div className='question-body'>
      <h2 className="mb-7 font-black">Capacity Trainings: What have you learned from the Black Health capacity trainings, including ALI and YIP, during this quarter? How was the information useful to you and the community you serve?</h2>
      <label htmlFor="CapicityTraining">
        <textarea
          className="p-4 block md:w-full w-5/6 text-lg h-52 bg-white break-all border-black rounded-md overflow-hidden"
          role="textbox"
          name="capacityTrainingUseful"
          placeholder=""
          onChange={(e) =>
            setEventForm((previous) => ({
              ...previous,
              [e.target.name]: e.target.value,
            }))
          }
          defaultValue={eventForm ? eventForm.capacityTrainingUseful : ""}
        />
      </label>
    </div>
  );
};

export default CapicityTraining;
