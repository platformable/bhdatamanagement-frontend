import React from "react";

export const ParticipantSurveySection34 = () => {
  return (
    <div className="px-7 question-body">
      <h2 className="font-black">
      Have you ever heard of PEP (Post-Exposure Prophylaxis)?
      </h2>
      <div>
        <label >
          <input type="radio"name="pep" />
          <p>Yes</p>
        </label>
        <label name="pep">
          <input type="radio"name="pep" />
          <p>No</p>
        </label>
        <label name="pep">
          <input type="radio" name="pep" />
          <p>Don’t know / Not sure</p>
        </label>
      </div>
    </div>
  );
};
