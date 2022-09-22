import React from "react";

const PostEventReportSection31 = ({eventForm, setEventForm, isNumberKey}) => {
  const options = ["Staff", "Guest professional"];
  return (
    <div className="px-7 question-body">
      <h2 className="font-black">
      Who was the session presented by:
      </h2>
      <div>
        {options.map((opt) => (
          <label>
            <input
              type="radio"
              name="sessionPresenter"
              className=""
              value={opt}
              onChange={(e) =>
                setEventForm((previous) => ({
                  ...previous,
                  [e.target.name]: e.target.value,
                }))
              }
              defaultChecked={
                opt === eventForm.sessionPresenter ? "checked" : ""
              }
            />
            <p className="">{opt}</p>
          </label>
        ))}
      </div>
    </div>
  );
};

export default PostEventReportSection31;
