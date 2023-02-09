import React,{useState,useEffect} from 'react';




const MainRoles = ({eventForm,setEventForm}) => {

  const options = [
    {id:1,value:"Program Leader"},
{id:2,value:"Lead Facilitator"},
{id:3,value:"Co-facilitator"},
{id:4,value:"Guest speaker"},
{id:5,value:"Program/workshop support staff or intern"},
{id:6,value:"Other"}]

const [data,setData]=useState([...eventForm.mainRoles])

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
    setEventForm((previous) => ({
      ...previous,
      mainRoles: data ,
    }))
  },[data])


    return (
        <div className="question-body">
      <h2 className=" font-black">
        What was your primary role today?
      </h2>
      <div className="mt-7 grid md:grid-cols-2 space-between gap-5">
        {options &&
          options.map((option, index) => {
            if(option.value==='Other'){
                return (
                  <div className="flex flex-col md:flex-row gap-5 md:items-center">
                     <label className="flex items-center gap-5 text-lg" key={index}>
                        <input
                          type="checkbox"
                          name="mainRoles"
                          className=""
                          value={option.value}
                          id={index}
                          onChange={(e)=>handleForm(e.target.value)}
                          defaultChecked={eventForm?.mainRoles?.includes(option.value) ? 'checked' : ""}
                        />
                        {option.value}
                      </label>
                     <label>
                     <input
                        type="text"
                        name="mainRolesOther"
                        placeholder='Please specify'
                        id={""}
                        defaultValue={eventForm?.mainRolesOther}
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
                value={option.value}
                id={index}
                onChange={(e)=>handleForm(e.target.value)}
                defaultChecked={eventForm?.mainRoles?.includes(option.value) ? 'checked' : ""}
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

export default MainRoles;
