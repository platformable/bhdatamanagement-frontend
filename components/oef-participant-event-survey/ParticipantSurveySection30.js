import React,{useState,useEffect} from 'react'

export const ParticipantSurveySection30 = ({surveyForm,setSurveyForm}) => {

  const [data,setData]=useState([])

  const handleForm=(value,ddbb_label)=>{
  /*   const isValueOnData=data?.includes(value)
   
    const filteredData=data.filter(oldValues=> oldValues !=value) 
    
    isValueOnData?
    setData(filteredData) :
    setData((previous)=>([
      ...previous,value
    ]))
 */

    console.log(value, ddbb_label)
    setSurveyForm((previous) => ({
      ...previous,
      [ddbb_label]: !surveyForm[ddbb_label]
    }))
  }

/*   useEffect(()=>{
    setSurveyForm((previous) => ({
      ...previous,
      participantPRePResourceKnowledge: data,
    }))
  },[data]) */



  const options=[
    {
      id:1,
      ddbb_label: "interestHIV",
      value:"HIV/STDs testing and prevention"
    },
    {
      id:2,
      ddbb_label: "interestPrEP",
      value:"PrEP (Pre-Exposure Prophylaxis) "
    },
    {
      id:3,
      ddbb_label: "interestHepC",
      value:"Hepatitis C Testing"
    },
    {
      id:4,
      ddbb_label: "interestImmigration",
      value:"Immigration services"
    },
    {
      id:5,
      ddbb_label: "interestScreens",
      value:"Health screens (Mammogram, prostate cancer screening, etc.)"
    },
    {
      id:6,
      ddbb_label: "interestVaccines",
      value:"Vaccines (Flu, Covid, etc.)"
    },
    {
      id:7,
      ddbb_label: "interestMentalHealth",
      value:"Mental health care"
    },
    {
      id:8,
      ddbb_label: "interestSubstance",
      value:"Substance use treatment/services"
    },
    {
      id:9,
      ddbb_label: "interestChronic",
      value:"Chronic disease management (Diabetes, high blood pressure, etc.)"
    },
    {
      id:10,
      ddbb_label: "interestOther",
      value:"Other"
    }
  ]
  return (
    <div className="px-7">
    <h2 className="font-black">
      {/* <span className="">30 </span>  */}
      What services would you like to obtain more information about?   
    </h2>
    <h3>Select all that apply</h3>
    <div className="mt-7 grid grid-cols-1 space-between gap-5">
    {options.map((option, index) => {

if(index===options.length-1){
  return (
    <label className="text-lg flex flex-col md:flex-row gap-y-5 md:gap-x-5 items-start md:items-center" key={index}>
      <div className='flex gap-x-5'>
      <input
        type="checkbox"
        name={"interestOther"}
        className=""
        value={option.value}
        id={index}
        //defaultChecked={program.id===event?.programid?'checked':""}
        onChange={(e)=>handleForm(e.target.value,'interestOther')}
      />
     {option.value}
      </div>
     <input type="text" 
          // placeholder="Please specify" 
          onChange={(e)=>setSurveyForm({...surveyForm,interestOtherText: e.target.value})}
          className="border-black rounded px-4 text-xl self-start p-1  w-134" />
    </label>

  )

} else {
          return (
            <label className="text-lg flex gap-x-5  items-center" key={index}>
              <input
                type="checkbox"
                name={option.ddbb_label}
                className=""
                value={option.value}
                id={index}
                //defaultChecked={program.id===event?.programid?'checked':""}
                onChange={(e)=>handleForm(e.target.value,option.ddbb_label)}
              />
             {option.value}
            </label>

          );}
        })}
    </div>
  </div>
  )
}

