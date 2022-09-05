import React from "react";

export const ParticipantSurveySection2 = () => {
  return (
    <div className="p-5 py-10">
      <h2 className="font-black">
        <span className="">2</span> What is your age?
      </h2>
      <div className="mt-5 grid grid-cols-1 space-between gap-5">
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" />
          <p className="w-20">Under 15</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" />
          <p className="w-20">16-19</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" />
          <p className="w-20">20-24</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" />
          <p className="w-20">25-29</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" />
          <p className="w-20">30-34</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" />
          <p className="w-20">35-39</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" />
          <p className="w-20">40-44</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" />
          <p className="w-20">45-49</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" />
          <p className="w-20">50-54</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" />
          <p className="w-20">55-59</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" />
          <p className="w-20">60-64</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" />
          <p className="w-20">65-69</p>
        </label>
        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" />
          <p className="w-20">70+</p>
        </label>

        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" />
          <p className="w-20">Declined to answer</p>
        </label>
      </div>
    </div>
  );
};
