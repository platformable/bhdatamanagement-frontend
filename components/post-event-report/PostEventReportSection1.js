import React from "react";
import { workArea } from "../../utils/sharedData";
const PostEventReportSection1 = ({ eventForm, setEventForm }) => {
  const styles = {
    display: "grid",
    // gridTemplateColumns: "repeat(1,1fr)",
    justifyContent: "space-between",
    placeItems: "items-center",
    gap: "5px",
  };
  return (
    <div className="px-7 mt-10">
      <h1 className="font-black">
      Where do you work?
      </h1>
      <div className="mt-7 grid grid-cols-1 space-between gap-5">
        {workArea.map((area, index) => {
          if(index === workArea.length - 1) {
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
                <input
                  type="text"
                  placeholder="Please specify"
                  onChange={(e) =>
                    setEventForm({
                      ...eventForm,
                      workAreaOther: e.target.value,
                    })
                  }
                  className="border-black rounded px-2 self-start p-1 ml-2 w-96"
                />
              </label>
            ) }
            else{
              return(
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
            )}
          
        })}
        
      </div>
    </div>
  );
};

export default PostEventReportSection1;
