import React from "react";

const PostEventReportSection12 = ({eventForm, setEventForm, isNumberKey}) => {
  const handleForm = (e) => {
    let {value} = e.target
      let finalValue;
      value > 100 ? finalValue = 100:finalValue=value
      setEventForm((previous) => ({
        ...previous,
        [e.target.name]:Number(finalValue)
      }))
  }
  return (
    <div className="px-7 rounded mt-10">
      <h2 className="font-black">
         How many YOUTH volunteers (aged 13-18) helped you?
      </h2>
      <label className='flex mt-7 gap-5'>
        {/* <img src='/post_event_report/ADULT_volunteers_icon.svg' alt='adult volunteers icon' /> */}
      <input
        type="number"
        onWheelCapture={(e) => e.target.blur()}
        onKeyUp={(e) => {
          let {value} = e.target
          value > 100 && (e.target.value = 100) 
        }}
        maxLength={3}
        defaultValue={0 || eventForm.youthVolunteers}
        className="p-4 rounded border-black w-20"
        name="youthVolunteers"
        onChange={handleForm}
        onKeyDown={isNumberKey}

      />
    </label>
    </div>
  );
};

export default PostEventReportSection12;
