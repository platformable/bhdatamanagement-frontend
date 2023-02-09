import React from 'react';

const EventOrganization = ({eventForm,setEventForm,title,state}) => {


    const options= [
        {
            id:1,
            value:'Very unsatisfied',
            bgColor:'stronglyDisagreeBg',
            bgColorHover:'hover:stronglyDisagreeBg'
        },
        {
            id:2,
            value:'Unsatisfied',
            bgColor:'disagreeBg',
            bgColorHover:'hover:disagreeBg'
        },
        {
            id:3,
            value:'Neutral',
            bgColor:'neitherAgreeOrDisagreeBg',
            bgColorHover:'hover:neitherAgreeOrDisagreeBg'
        },
        {
            id:4,
            value:'Satisfied',
            bgColor:'agreeBg',
            bgColorHover:'hover:agreeBg'
        },
        {
            id:5,
            value:'Very satisfied',
            bgColor:'stronglyAgreeBg',
            bgColorHover:'hover:stronglyAgreeBg'
        }
    ]


    return (
        <div className="question-body">
        <h2 className="font-black">{title}</h2>
        <div className="grid md:grid-cols-5 gap-20">
          
          {options.map((option,indx)=>{
            return (
            <button className={`${eventForm?.[state] === option.value ? option.bgColor : null} border-black py-4 rounded shadow-lg ${option.bgColorHover}`} 
            onClick={(e) => setEventForm(prev => ({...prev, [state]: e.target.value}))} value={option.value}>
            {option.value}
            </button>)
          })}
 
        </div>
      </div>
    );
}

export default EventOrganization;
