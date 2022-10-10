import React, {useEffect, useState} from "react";
const genderOptions = [
  { value: "Woman/girl" },
  { value: "Transgender woman/girl" },
  { value: "Man/boy" },
  { value: "Transgender man/boy" },
  { value: "Non-binary person" },
  { value: "Gender non-conforming person" },
  { value: "No sure/questioning" },
  { value: "Gender not listed" },
  { value: "Chose not to respond" },
];

const ageOptions = [
  { value: "Children (under 13)" },
  { value: "Adolescents (13 to 18)" },
  { value: "19 to 24" },
  { value: "25 to 34" },
  { value: "35 to 44" },
  { value: "45 and over" },
];

const ethnicityOptions = [
  { value: "Hispanic" },
  { value: "(NH) White" },
  { value: "(NH) Black or African American" },
  { value: "(NH) Asian" },
  { value: "(NH) Native Hawaiian or Pacific Islander:" },
  { value: "(NH) American Indian or Alaskan Native:" },
  { value: "More than one race / ethnicity" },
  { value: "Unknown / unreported" },
];
const PostEventReportSection40 = ({ eventForm, setEventForm }) => {
  const [data, setData] = useState({
    gender: eventForm.airsFormGender && [...eventForm.airsFormGender],
    age: eventForm.airsFormAge && [...eventForm.airsFormAge],
    ethnicity: eventForm.airsFormRaceEthnicity && [...eventForm.airsFormRaceEthnicity],
  });

  useEffect(() => {
    setEventForm((previous) => ({
      ...previous,
      airsFormGender: data.gender,
      airsFormAge: data.age,
      airsFormRaceEthnicity: data.ethnicity,
    }));
  }, [data]);

  const handleFormGender = (e) => {
    const isValueOnGender = data.gender.includes(e.target.value);

    const filteredGenderData = data.gender.filter(
      (oldValues) => oldValues != e.target.value
    );

    isValueOnGender 
      ? setData((previous) => ({ ...previous, gender: filteredGenderData, }))
      : setData((previous) => ({
          ...previous,
          gender: [...filteredGenderData, e.target.value],
        }));
  };
  const handleFormAge = (e) => {
    const isValueOnAge = data.age.includes(e.target.value);

    const filteredAgeData = data.age.filter(
        (oldValues) => oldValues != e.target.value
      );
 
   isValueOnAge 
      ? setData((previous) => ({ ...previous, age: filteredAgeData,}))
      : setData((previous) => ({
          ...previous,
          age: [...filteredAgeData, e.target.value],
        }));
  };
  const handleFormEthnicity = (e) => {
    const isValueOnEthnicity = data.ethnicity.includes(e.target.value);

      const filteredEthnicityData = data.ethnicity.filter(
        (oldValues) => oldValues != e.target.value
      );

    isValueOnEthnicity 
      ? setData((previous) => ({ ...previous, ethnicity: filteredEthnicityData}))
      : setData((previous) => ({
          ...previous,
          ethnicity: [...filteredEthnicityData, e.target.value],
        }));
  };
  return (
    <>
      <div className="question-body">
        <h2 className="font-black">Which of the following population groups attended this event:</h2>
        <h2 className="font-black">Gender</h2>
        <div className="mb-10">
          {genderOptions.map((opt) => (
            <>
              <label>
                <input
                  type="checkbox"
                  name="airsFormGender"
                  value={opt.value}
                  onChange={handleFormGender}
                  defaultChecked={eventForm.airsFormGender.includes(opt.value)? "checked" : ""}
                />
                {opt.value}
              </label>
            </>
          ))}
        </div>
        <h2 className="font-black">Age groups</h2>
        <div className="mb-10">
          {ageOptions.map((opt) => (
            <>
              <label>
                <input
                  type="checkbox"
                  name="airsFormAge"
                  value={opt.value}
                  onChange={handleFormAge}
                  defaultChecked={eventForm.airsFormAge.includes(opt.value)? "checked" : ""}
                />
                {opt.value}
              </label>
            </>
          ))}
        </div>
        
        <h2 className="font-black">Race / Ethnicity (NH = Non-Hispanic)</h2>
        <div className="mb-10">
          {ethnicityOptions.map((opt) => (
            <>
              <label>
                <input
                  type="checkbox"
                  name="airsFormRaceEthnicity"
                  value={opt.value}
                  onChange={handleFormEthnicity}
                  defaultChecked={eventForm.airsFormRaceEthnicity.includes(opt.value)? "checked" : ""}
                />
                {opt.value}
              </label>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default PostEventReportSection40;
