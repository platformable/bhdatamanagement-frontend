import React from "react";
import { workArea } from "../../utils/sharedData";
const PostEventReportSection1 = () => {
  const styles = {
    display: "grid",
    gridTemplateColumns: "repeat(7,1fr)",
    justifyContent:'space-between',
    placeItems:'items-center',
    gap:'5px'
  };
  return (
    <div className="p-5">
      <h2 className="font-black">
        <span className="text-color-violet">1</span> Where do you work?
      </h2>
      <div className="" style={styles}>
        {workArea.map((area, index) => {
          return (
            <label className="text-lg flex items-center" key={index}>
              <input
                type="radio"
                name="program"
                className="mr-2 w-4 h-4"
                value={area}
                id={index}
                //defaultChecked={program.id===event?.programid?'checked':""}
              />
              {area}
            </label>

          );
        })}
        <input type="text" placeholder="other..." className="border-dark-violet rounded self-start p-1" />
      </div>
    </div>
  );
};

export default PostEventReportSection1;
