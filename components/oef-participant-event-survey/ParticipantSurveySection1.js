import React from "react";
import { useState } from "react";

export const ParticipantSurveySection1 = ({ surveyForm, setSurveyForm }) => {
  const [errorField, setErrorField] = useState("")
  const handleForm = (e) => {

    (e.target.value.length === 0 || e.target.value.length === 5) && setErrorField("");

    if(e.target.value.length < 5) setErrorField("Must be 5 digits")
    if (e.target.value.length > 5 ) setErrorField("Only 5 digits allowed")
    e.target.value.length < 6 &&
    setSurveyForm({ ...surveyForm, [e.target.name]: Number(e.target.value) });
    
  };
  const isNumberKey = (e) => {
    const invalidChars = [
      "-",
      "+",
      "e",
    ];
    if (invalidChars.includes(e.key)) {
      e.preventDefault();
    } 
}
console.log(surveyForm.participantZipCode)
  return (
    <div className="px-7 ">
      <h2 className="font-black">
        {/* <span className="">1</span> */}
        What zip code do you live in or spend most of your time in?
      </h2>
      <div className="flex items-center gap-x-5 mt-7">
        <p>Zip code</p>
        <label className="flex flex-col gap-1">
          
          <input
            type="number"
            placeholder="Eg. 10027"
            className="border-black rounded text-xl px-2 self-start p-1 w-32"
            min="5"
            max="5"
            name="participantZipCode"
            onKeyUp={(e) => {
              e.target.value.length > 5 && (e.target.value = e.target.value.slice(0,5))
            }}
            onWheelCapture={(e) => e.target.blur()}
            onChange={handleForm}
            onKeyDown={isNumberKey}
          />
          { errorField && <p className="text-red-500 text-xs">{errorField}</p> }
        </label>
        
        
      </div>
    </div>
  );
};
