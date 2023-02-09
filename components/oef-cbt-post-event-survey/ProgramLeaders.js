import React,{useState,useEffect} from 'react';




const ProgramLeaders = ({eventForm,setEventForm}) => {

  const options = [
{id:1,value:"All participants completed a sign in sheet at the start of the session." ,dataPoint:'participantRegistrationForm'},
{id:2,value:"The event started on time." ,dataPoint:'eventStartedOnTime'},
{id:3,value:"The event finished on time." ,dataPoint:'eventFinishedOnTime'},
{id:4,value:"Participants were greeted by someone from the program when they entered." ,dataPoint:'participantGreeted'},
{id:5,value:"Resources were available to participants." ,dataPoint:'resourcesAvailable'},
{id:6,value:"If photos were taken, participants signed a photo usage form." ,dataPoint:'photoRelease'},
{id:7,value:"Hand sanitizer was available." ,dataPoint:'handSanitizerAvailable'},
{id:8,value:"Participants were reminded that the workshop area is a safe space and to treat each other respectfully and within the workshop guidelines." ,dataPoint:'reminderSafeSpace'},
{id:9,value:"All participants completed a post-workshop evaluation form." ,dataPoint:'reminderPostEvaluationSurvey'},
//{id:10,value:"Are sign-in sheets from last week up to date and stored appropriately?" ,state:''},
{id:10,value:"Other", dataPoint:'eventChecklistOther'}
]


    return (
        <div className="question-body">
      <h2 className=" font-black">
      Program Leader and Staff only: Please check off all of the following events that you are aware happened today.
      </h2>
      <div className="mt-7 grid md:grid-cols-2 space-between gap-5">
        {options &&
          options.map((option, index) => {
            if(option.value==='Other'){
                return (
                  <div className="flex flex-col md:flex-row gap-5">
                  <label className="flex items-center gap-5 text-lg" key={index}>
              <input
                type="checkbox"
                name={option.dataPoint}
                className=""
                value={option.value}
                id={index}
                onChange={(e)=> setEventForm(prev => ({...prev, [option.dataPoint]:!eventForm[option.dataPoint]}))}
                defaultChecked={eventForm[option.dataPoint]===true ? 'checked' : ""}
              />
              {option.value}
            </label>
                  <label className="flex items-center gap-5 text-lg" key={""}>
              <input
                type="text"
                name="programLeadersOther"
                className=""
                placeholder='Please specify'
                defaultValue={eventForm?.programLeadersOther}
                onChange={(e)=> setEventForm(prev => ({...prev, eventChecklistOtherText: e.target.value}))}
              />
            </label>
                  </div>
                )
            } else {
            return (
              <>
            <label className="flex items-center gap-5 text-lg" key={index}>
              <input
                type="checkbox"
                name={option.dataPoint}
                className=""
                value={option.value}
                id={index}
                onChange={(e)=> setEventForm(prev => ({...prev, [option.dataPoint]:!eventForm[option.dataPoint]}))}
                defaultChecked={eventForm[option.dataPoint]===true ? 'checked' : ""}
              />
              {option.value}
            </label>
            </>
          )}
            }
          )}
            
      </div>
    </div>
    );
}

export default ProgramLeaders;
