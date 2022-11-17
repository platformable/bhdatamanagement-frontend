import React from "react";
import { handleMaxNumber, handleNumberWithLimitInForm, isNumberKey, disableWheelInputNumber } from "../../utils/helpers";
const PostEventReportSection17 = ({eventForm, setEventForm}) => {
  const handleForm = (e) => {
    let {value} = e.target
      let finalValue;
      value > 1000 ? finalValue = 1000:finalValue=value
      console.log("Send email value0", finalValue)
      setEventForm((previous) => ({
        ...previous,
        [e.target.name]:Number(finalValue)
      }))
  }
  return (
    <div className="px-7 mt-10 rounded">
      <h2 className="mb-7 font-black">
        How many people did you send an email blast to about the event?
      </h2>
      <label className='flex gap-5 justify-start'>
        {/* <img src='/post_event_report/email_icon.svg' alt='adult volunteers icon' /> */}
      <input
        type="number"
        onWheelCapture={disableWheelInputNumber}
        onKeyUp={handleMaxNumber}
        maxLength={4}
        className="p-4 border-black rounded w-20"
        // defaultChecked={program.id===event?.programid?'checked':""}
        defaultValue={eventForm?.sendEmail || 0 }
        name="sendEmail"
        onChange={(e) =>  setEventForm((previous) => ({
          ...previous,
          [e.target.name]: handleNumberWithLimitInForm(e, 1000)
        }))}
        onKeyDown={isNumberKey}
      />
    </label>
    </div>
  );
};

export default PostEventReportSection17;
