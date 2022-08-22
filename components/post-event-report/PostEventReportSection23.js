import React from "react";
import PostEventReportSection45 from "./PostEventReportSection45";

const PostEventReportSection23 = ({ setEventForm }) => {
  return (
    <div className="grid grid-cols-1 gap-7">
      <h2 className="font-black">HIV Testing</h2>
      <label className="grid grid-cols-4">
        <p>HIV Testing Agency</p>
        <input
          className="border-black ml-2"
          type="text"
          placeholder="Please specify"
          name="hivTestingAgency"
          onChange={(e) =>
            setEventForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />
      </label>
      <label className="grid grid-cols-4">
        <p>Total tested for HIV</p>
        <input
          className="border-black ml-2"
          type="number"
          placeholder="type a number"
          name="hivTestedTotal"
          onChange={(e) =>
            setEventForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />
      </label>
      <label className="grid grid-cols-4">
        <p>Total # of Reactive Results</p>
        <input
          className="border-black ml-2"
          type="number"
          placeholder="type a number"
          name="hivReactiveResults"
          onChange={(e) =>
            setEventForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />
      </label>
      <label className="grid grid-cols-4">
        <p>Total # of PrEP Referrals</p>
        <input
          className="border-black ml-2"
          type="number"
          placeholder="type a number"
          name="prepReferrals"
          onChange={(e) =>
            setEventForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />
      </label>
      <label className="grid grid-cols-4">
        <p>Total # Linked to Care</p>
        <input
          className="border-black ml-2"
          type="number"
          placeholder="type a number"
          name="hivLinkedToCare"
          onChange={(e) =>
            setEventForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />
      </label>
      <label className="grid grid-cols-4">
        <p>Which services were they referred to?</p>
        <input
          className="border-black ml-2"
          type="text"
          placeholder="Please specify"
          name="hivServicesReferredTo"
          onChange={(e) =>
            setEventForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />
      </label>
      <PostEventReportSection45 setEventForm={setEventForm} />
    </div>
  );
};

export default PostEventReportSection23;





