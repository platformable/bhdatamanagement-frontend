import React from "react";

const PostEventReportSection39 = ({ eventForm, setEventForm }) => {
  const options = [
    { value: "Demographics known" },
    { value: "Demographics unknown" },
  ];
  return (
    <div className="question-body">
      <h2 className="font-black">Are the demographics known or unknown?</h2>
      <div>
        {options &&
          options.map((opt) => (
            <>
              <label>
                <input
                  type="radio"
                  name="demographicsKnown"
                  value={opt.value}
                  onChange={(e) => {
                    setEventForm((previous) => ({
                      ...previous,
                      [e.target.name]: e.target.value,
                    }));
                  }}
                  defaultChecked={
                    eventForm.demographicsKnown === opt.value? "checked":""
                  }
                />
                {opt.value}
              </label>
            </>
          ))}
      </div>
    </div>
  );
};

export default PostEventReportSection39;
