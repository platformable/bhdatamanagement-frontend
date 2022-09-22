import React from "react";

const PostEventReportSection36 = ({
  eventForm,
  setEventForm,
  event,
  isNumberKey,
}) => {
  const handleForm = (e) => {
    let { value } = e.target;
    let finalValue;
    value > 500 ? (finalValue = 500) : (finalValue = value);
    setEventForm((previous) => ({
      ...previous,
      [e.target.name]: Number(finalValue),
    }));
  };
  return (
    <div className="question-body">
      <h2 className="font-black">
        How many people attended or participated in your event? <br />
      </h2>

      <label className="mt-7 flex gap-5">
        <input
          type="number"
          onWheelCapture={(e) => e.target.blur()}
          onKeyUp={(e) => {
            let { value } = e.target;
            value > 500 && (e.target.value = 500);
          }}
          maxLength={4}
          defaultValue={0 || eventForm.totalEventAttendees}
          className="p-4 border-black rounded w-20"
          name="totalEventAttendees"
          onChange={handleForm}
          onKeyDown={isNumberKey}
        />
      </label>
    </div>
  );
};

export default PostEventReportSection36;
