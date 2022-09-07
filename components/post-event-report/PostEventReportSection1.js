import React from "react";
import { workArea } from "../../utils/sharedData";
const PostEventReportSection1 = ({eventForm, setEventForm}) => {
  
  const styles = {
    display: "grid",
    // gridTemplateColumns: "repeat(1,1fr)",
    justifyContent:'space-between',
    placeItems:'items-center',
    gap:'5px'
  };
  return (
    <div className="p-5 py-10">
      <h2 className="font-black">
        <span className="">1</span> Where do you work?
      </h2>
      <div className="mt-5 grid grid-cols-1 space-between gap-5">
        {workArea.map((area) => {
          return (
            <label className="text-lg flex items-center" key={area.id}>
              <input
                type="radio"
                name="workArea"
                className="mr-10 w-6 h-6"
                value={area.value}
                id={area.id}
                //defaultChecked={program.id===event?.programid?'checked':""}
                onChange={(e) =>
                  setEventForm((previous) => ({
                    ...previous,
                    [e.target.name]: area.value,
                  }))
                }
              />
             {area.value}
            </label>

          );
        })}
        <input type="text" placeholder="" className="border-black rounded self-start p-1"  />
      </div>
    </div>
  );
};

export default PostEventReportSection1;
