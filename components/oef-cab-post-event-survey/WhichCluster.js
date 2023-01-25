import React,{useState, useEffect } from "react";

const Cluster = ({ eventForm, setEventForm }) => {
  
  const handleForm = (e) => {
    setEventForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setEventForm((prev) => ({ ...prev, clusterFbos: [] }));

  }
  
  
  const options = [
    { id: 1, value: "Bronx Cluster" },
    { id: 2, value: "Brooklyn Cluster" },
    { id: 3, value: "Manhattan Cluster" },
    { id: 4, value: "Queens Cluster" },
    { id: 5, value: "Staten Island Cluster" },
    { id: 6, value: 'Other cluster'},
  ];
  return (
    <div className="px-7 question-body">
      <h2 className="font-black">Which cluster is this submission for?</h2>
      <div>
        {options.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              name="cluster"
              value={option.value}
              onChange={handleForm}
              defaultChecked={eventForm?.cluster === option.value? "checked" : false}
            />
            <p>{option.value}</p>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Cluster;
