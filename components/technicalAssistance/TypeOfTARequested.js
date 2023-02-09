import React from 'react';
import { useEffect, useState } from 'react';


const TypeOfTARequested = ({form, setForm,isEditPage}) => {
    const [data, setData] = useState(form?.taType || [])
console.log("form",form)
    useEffect(() => {
        setForm(prev=> ({...prev, taType: data}))
    }, [data])

    const options = [
        {value: 'Event Flier'},
        {value: 'Training Resources'},
        {value: 'HIV/Hep C Testing'},
        {value: 'Outreach & Engagement'},
        {value: 'Information and Referral'},
        {value: 'Data Management and Surveys'},
        {value: 'Forms/documentation'},
        {value: 'Payment'},
        // {value: 'Other'}

    ];
    const handleForm = (e) => {
        const {value} = e.target
        if (value === 'Other') setForm(prev => ({...prev, taTypeOther: ''}))
        const isValueOnData = data?.includes(value);

        const filteredData = data.filter((oldValues) => oldValues !== value);
    
        isValueOnData
          ? setData(filteredData)
          : setData((previous) => [...previous, value]);
    };

    return (
        <div className='p-7'>
            <h2 className='font-black mb-7'>Type of TA Requested:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="grid gap-5 items-start">
          {options
            .slice(0, Math.round(options.length / 2))
            .map((option, index) => (
              <label key={index} className="flex gap-x-5 items-center">
                <input
                  type="checkbox"
                  name="taType"
                  value={option.value}
                  onChange={handleForm}
                 defaultChecked={form.taType.includes(option.value) ? 'checked' : ""}
                 disabled={isEditPage?true:false}
                />
                <p>{option.value}</p>
              </label>
            ))}
        </div>
        <div className="grid gap-5 items-start">
          {options.slice(Math.round(options.length / 2)).map((option, index) => (
            <label key={index} className="flex gap-x-5 items-center">
              <input
                type="checkbox"
                name="taType"
                value={option.value}
                onChange={handleForm}
                defaultChecked={form.taType.includes(option.value) ? 'checked' : ""}
                disabled={isEditPage?true:false}
              />
              <p>{option.value}</p>
            </label>
          ))}
          <label  className="flex md:flex-row flex-col gap-x-5 md:items-center md:gap-y-0 gap-y-5">
            <div className="flex md:flex-row gap-x-5 ">
              <input
                type="checkbox"
                name="taType"
                value={'Other'}
                onChange={handleForm}
                defaultChecked={form.taType.includes('Other') ? 'checked' : ""}
                disabled={isEditPage?true:false}
              />
              <p>Other</p>
              </div>
              <input type="text" placeholder='Please specify' 
              onChange={(e) => setForm(prev => ({...prev, taTypeOther: e.target.value}))} 
              defaultValue={form?.taTypeOther}
              disabled={isEditPage?true:false}
              />
            </label>
        </div>
      </div>
      </div>
    );
}

export default TypeOfTARequested;
