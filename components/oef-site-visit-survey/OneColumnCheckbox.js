import React,{useEffect,useState} from 'react';

const OneColumnCheckbox = ({options, surveyForm,dispatch,updateFunction,title,stateValue}) => {

    console.log("options",options)

    const [data,setData]=useState([...surveyForm?.fboAttendees])



      const handleForm=(value)=>{
        const isValueOnData=data?.includes(value)
       
        const filteredData=data.filter(oldValues=> oldValues != value) 
    
        isValueOnData?
        setData(filteredData) :
        setData((previous)=>([
          ...previous,value
        ]))
        
      }
    
      useEffect(()=>{
        dispatch(updateFunction({[stateValue]:data}))
      },[data])
    return (
        <div className="question-body">
      <h2 className=" font-black">
        {title}
      </h2>
      <div className="mt-7 grid grid-cols-1 space-between gap-5">
        {options &&
          options?.map((option, index) => {
            if(option.value==='Other'){
                return (
                  <div className="flex gap-x-5">
                  <label className="flex items-center gap-5 text-lg" key={index}>
              <input
                type="checkbox"
                name="mainRoles"
                className=""
                value={option.value}
                id={index}
                onChange={(e)=>handleForm(option.value)}
                defaultChecked={surveyForm?.mainRoles?.includes(option.value) ? 'checked' : ""}
              />
              {option?.value}
            </label>
                  <label className="flex items-center gap-5 text-lg" key={""}>
              <input
                type="text"
                name="mainRolesOther"
                className=""
                id={""}
                defaultValue={surveyForm?.mainRolesOther}
                onChange={(e)=> setEventForm(prev => ({...prev, mainRolesOther: e.target.value}))}
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
                name="mainRoles"
                className=""
                value={option?.value}
                id={index}
                onChange={(e)=>handleForm(option.value)}
                defaultChecked={surveyForm?.mainRoles?.includes(option.value) ? 'checked' : ""}
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

export default OneColumnCheckbox;
