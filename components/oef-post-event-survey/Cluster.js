import React from "react";

const Cluster = ({ eventForm, setEventForm }) => {
  const handleForm = (e) =>
    setEventForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const options = [
    {
      id: 1,
      value: "Not a Cluster Event",
    },
    {
      id: 2,
      value: "Cluster Event",
    },
  ];
  return (
    <div className="question-body">
      <h2 className="font-black">Was this event delivered by a cluster?</h2>
      <div>
        {options.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              name="isClusterEvent"
              value={option.value}
              onChange={handleForm}
              defaultChecked={eventForm?.isClusterEvent === option.value? "checked" : false}
            />
            <p>{option.value}</p>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Cluster;
