import React from "react";

export const ParticipantSurveySection2 = () => {
  const options  = [
    {id:0,value:"16-19"}, 
    {id:1,value:"20-24"}, 
    {id:2,value:"25-29"}, 
    {id:3,value:"30-34"}, 
    {id:4,value:"35-39"}, 
    {id:5,value:"40-44"}, 
    {id:6,value:"45-49"}, 
    {id:7,value:"50-54"}, 
    {id:8,value:"55-59"}, 
    {id:9,value:"60-64"}, 
    {id:10,value:"65-69"}, 
    {id:11,value:"70+"}, 
    {id:12,value:"Decline to answer"}

]
  return (
    <div className="p-5 py-10">
      <h2 className="font-black">
        <span className="">2</span> What is your age?
      </h2>
      <div className="mt-5 grid grid-cols-1 space-between gap-5">
        {options.map(opt => (
          <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" name="participantAgeRange" />
          <p className="w-20">{opt.value}</p>
        </label>
        ))}
        {/* <label className="flex gap-x-5 items-center"> */}
          {/* <input type="radio" className="mr-10 w-4 h-4" name="participantAgeRange" /> */}
          {/* <p className="w-20">16-19</p> */}
        {/* </label> */}
        {/* <label className="flex gap-x-5 items-center"> */}
          {/* <input type="radio" className="mr-10 w-4 h-4" name="participantAgeRange" /> */}
          {/* <p className="w-20">20-24</p> */}
        {/* </label> */}
        {/* <label className="flex gap-x-5 items-center"> */}
          {/* <input type="radio" className="mr-10 w-4 h-4" name="participantAgeRange" /> */}
          {/* <p className="w-20">25-29</p> */}
        {/* </label> */}
        {/* <label className="flex gap-x-5 items-center"> */}
          {/* <input type="radio" className="mr-10 w-4 h-4" name="participantAgeRange" /> */}
          {/* <p className="w-20">30-34</p> */}
        {/* </label> */}
        {/* <label className="flex gap-x-5 items-center"> */}
          {/* <input type="radio" className="mr-10 w-4 h-4" name="participantAgeRange" /> */}
          {/* <p className="w-20">35-39</p> */}
        {/* </label> */}
        {/* <label className="flex gap-x-5 items-center"> */}
          {/* <input type="radio" className="mr-10 w-4 h-4" name="participantAgeRange" /> */}
          {/* <p className="w-20">40-44</p> */}
        {/* </label> */}
        {/* <label className="flex gap-x-5 items-center"> */}
          {/* <input type="radio" className="mr-10 w-4 h-4" name="participantAgeRange" /> */}
          {/* <p className="w-20">45-49</p> */}
        {/* </label> */}
        {/* <label className="flex gap-x-5 items-center"> */}
          {/* <input type="radio" className="mr-10 w-4 h-4" name="participantAgeRange" /> */}
          {/* <p className="w-20">50-54</p> */}
        {/* </label> */}
        {/* <label className="flex gap-x-5 items-center"> */}
          {/* <input type="radio" className="mr-10 w-4 h-4" name="participantAgeRange" /> */}
          {/* <p className="w-20">55-59</p> */}
        {/* </label> */}
        {/* <label className="flex gap-x-5 items-center"> */}
          {/* <input type="radio" className="mr-10 w-4 h-4" name="participantAgeRange" /> */}
          {/* <p className="w-20">60-64</p> */}
        {/* </label> */}
        {/* <label className="flex gap-x-5 items-center"> */}
          {/* <input type="radio" className="mr-10 w-4 h-4" name="participantAgeRange" /> */}
          {/* <p className="w-20">65-69</p> */}
        {/* </label> */}
        {/* <label className="flex gap-x-5 items-center"> */}
          {/* <input type="radio" className="mr-10 w-4 h-4" name="participantAgeRange" /> */}
          {/* <p className="w-20">70+</p> */}
        {/* </label> */}

        <label className="flex gap-x-5 items-center">
          <input type="radio" className="mr-10 w-4 h-4" name="participantAgeRange" />
          <p className="w-40">Decline to answer</p>
        </label>
      </div>
    </div>
  );
};
