import React from "react";

import { roles } from "../../utils/sharedData";

const PostEventReportSection2 = ({ eventForm, setEventForm }) => {
  const styles = {
    display: "grid",
    gridTemplateColumns: "repeat(5,1fr)",
    justifyContent: "space-between",
    placeItems: "items-center",
    gap: "5px",
  };
  return (
    <div className="px-7 mt-10">
      <h2 className="font-black">
        What was your role at the event? 
      </h2>
      <h3>If you had more than one role, what
        was your MAIN role at this event?</h3>
      <div className="mt-7 grid grid-cols-1  gap-5">
        {roles.map((role, index) => {
          if (index === roles.length - 1) {
            return (
              <label
                className="text-lg flex flex-col md:flex-row gap-y-5 md:gap-x-5 items-start md:items-center"
                key={role.id}
              >
                <div className="flex gap-5">
                  <input
                    type="radio"
                    name="mainRole"
                    className=""
                    value={role.value}
                    id={role.id}
                    //defaultChecked={program.id===event?.programid?'checked':""}
                    onChange={(e) =>
                      setEventForm((previous) => ({
                        ...previous,
                        [e.target.name]: role.value,
                      }))
                    }
                  />
                  {role.value}
                </div>

                <input
                  type="text"
                  // placeholder="Please specify"
                  onChange={(e) =>
                    setEventForm({
                      ...eventForm,
                      mainRoleOther: e.target.value,
                    })
                  }
                  className="border-black rounded self-start p-1 md:w-96"
                />
              </label>
            );
          } else {
            return (
              <label
                className="text-lg flex gap-x-5 items-center"
                key={role.id}
              >
                <input
                  type="radio"
                  name="mainRole"
                  className=""
                  value={role.value}
                  id={role.id}
                  //defaultChecked={program.id===event?.programid?'checked':""}
                  onChange={(e) =>
                    setEventForm((previous) => ({
                      ...previous,
                      [e.target.name]: role.value,
                    }))
                  }
                />
                {role.value}
              </label>
            );
          }
        })}
      </div>
    </div>
  );
};

export default PostEventReportSection2;
