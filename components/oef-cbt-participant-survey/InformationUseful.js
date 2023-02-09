import React from 'react';


const options= [
    {
        id:1,
        value:'Strongly disagree',
        bgColor:'stronglyDisagreeBg',
        bgColorHover:'hover:stronglyDisagreeBg'
    },
    {
        id:2,
        value:'Disagree',
        bgColor:'disagreeBg',
        bgColorHover:'hover:disagreeBg'
    },
    {
        id:3,
        value:'Neither agree nor disagree',
        bgColor:'neitherAgreeOrDisagreeBg',
        bgColorHover:'hover:neitherAgreeOrDisagreeBg'
    },
    {
        id:4,
        value:'Agree',
        bgColor:'agreeBg',
        bgColorHover:'hover:agreeBg'
    },
    {
        id:5,
        value:'Strongly agree',
        bgColor:'stronglyAgreeBg',
        bgColorHover:'hover:stronglyAgreeBg'
    }
]



const InformationUseful = ({surveyForm,setSurveyForm,title,state}) => {
    return (
        <div className="question-body">
        <h2 className="font-black">{title}</h2>
        <div className="grid md:grid-cols-5 gap-20">
          
          {options.map((option,indx)=>{
            return (
            <button className={`${surveyForm?.[state] === option.value ? option.bgColor : null} border-black py-4 rounded shadow-lg ${option.bgColorHover}`} 
            onClick={(e) => setSurveyForm(prev => ({...prev, [state]: e.target.value}))} value={option.value}>
            {option.value}
            </button>)
          })}
 
        </div>
      </div>
    );
}

export default InformationUseful;
