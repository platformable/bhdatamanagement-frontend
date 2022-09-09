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
      <div className="mt-7 grid grid-cols-1  gap-5">
        {workArea.map((area, index) => {
          if(index === workArea.length - 1) {
            return (
              <label className="text-lg flex flex-col md:flex-row gap-y-5 md:gap-x-5 items-start md:items-center" key={area.id}>
                <div className="flex gap-5">
                <input
                  type="radio"
                  name="workArea"
                  className=""
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
                <h3>{area.value}</h3>
                
                </div>
                
                <input
                  type="text"
                  placeholder="Please specify"
                  onChange={(e) =>
                    setEventForm({
                      ...eventForm,
                      workAreaOther: e.target.value,
                    })
                  }
                  className="border-black rounded px-4 self-start p-1  md:w-96"
                />
              </label>
            ) }
            else{
              return(
              <label className="text-lg flex gap-x-5 items-center" key={area.id}>
                <input
                  type="radio"
                  name="workArea"
                  className=""
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
                <h3>{area.value}</h3>
              </label>
            )}
          
        })}
        
      </div>
    </div>
  );
};

export default PostEventReportSection1;
