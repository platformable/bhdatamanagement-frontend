import React,{useEffect,useState} from 'react';

const TwoColumnCheckbox = ({options, surveyForm,dispatch,updateFunction,title,stateValue,updateFunctionOther,message}) => {

    console.log("options",options)

    const [data,setData]=useState([...surveyForm?.[stateValue]])



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
      {message&& <p>{message}</p>}
      <div className="mt-7 grid grid-cols-1 md:grid-cols-2 space-between gap-5">
        {options &&
          options?.map((option, index) => {
            if(option.value==='Other'){
                return (
                  <div className="flex md:flex-row flex-col gap-x-5 md:gap-y-0 gap-y-5">
                  <label className="flex items-center gap-5 text-lg" key={index}>
              <input
                type="checkbox"
                name={stateValue}
                className=""
                value={option.value}
                id={index}
                onChange={(e)=>handleForm(option.value)}
                defaultChecked={surveyForm[stateValue]?.includes(option.value) ? 'checked' : ""}
              />
              {option?.value}
            </label>
                  <label className="flex items-center gap-5 text-lg" key={""}>
              <input
                type="text"
                name=""
                className=""
                id={""}
                //defaultValue={surveyForm[stateValue]+'Other'}
                onChange={(e)=>dispatch(updateFunctionOther({[stateValue+'Other']:e.target.value}))}
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
                name={stateValue}
                className=""
                value={option?.value}
                id={index}
                onChange={(e)=>handleForm(option.value)}
                defaultChecked={surveyForm[stateValue]?.includes(option.value) ? 'checked' : ""}
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

export default TwoColumnCheckbox;
