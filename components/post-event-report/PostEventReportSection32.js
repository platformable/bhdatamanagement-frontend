import React from "react";

const PostEventReportSection32 = ({ eventForm, setEventForm, isNumberKey }) => {
  const options = ["Yes", "No"];
  return (
    <div className="px-7 question-body">
      <h2 className="font-black">Were there any guest speakers?</h2>
      <div>
        {options.map((opt) => (
          <label>
            <input
              type="radio"
              name="guestSpeakers"
              className=""
              value={opt}
              onChange={(e) =>
                setEventForm((previous) => ({
                  ...previous,
                  [e.target.name]: e.target.value,
                }))
              }
              defaultChecked={opt === eventForm.guestSpeakers ? "checked" : ""}
            />
            <p className="">{opt}</p>
          </label>
        ))}

        {eventForm.guestSpeakers === "Yes" && (
          <>
              <label className="flex items-center gap-x-5">
                <p className="">Name/s of guest speaker/s</p>

                <input
                  type="text"
                  name="nameGuestSpeakers"
                  onChange={(e) =>
                    setEventForm((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }))
                  }
                />
              </label>
          </>
        )}
      </div>
    </div>
  );
};

export default PostEventReportSection32;
