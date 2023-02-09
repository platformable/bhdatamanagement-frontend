import React from 'react'

const NationalAwarenessDay = ({eventForm,setEventForm}) => {
    const handleForm = (e) => setEventForm((prev) =>({...prev, [e.target.name]: e.target.value}));
    const options=[
      {id:0,value:"No, this was not for one of these awareness days."},
{id:1,value:"National Black HIV/AIDS Awareness Day (NBHAAD) - February 7"},
{id:2,value:"National Women and Girls HIV/AIDS Awareness Day - March 10"},
{id:3,value:"National Youth HIV and AIDS Awareness Day - April 10"},
{id:4,value:"HIV Vaccine Awareness Day - May 18"},
{id:5,value:"Hepatitis Testing Day - May 19"},
{id:6,value:"Caribbean American HIV/AIDS Awareness Day - June 8"},
{id:7,value:"National HIV Testing Day - June 27"},
{id:8,value:"National Aging Awareness Day - September 23"},
{id:9,value:"National Gay Men's HIV/AIDS Awareness Day - September 27"},
{id:10,value:"National Latino Awareness Day - October 15"},
{id:11,value:"World AIDS Day - December 1"},
{id:12,value:"Other (please specify)"},

    ]
    return (
      <div className='p-7'>
            <h2 className=' font-black mb-7'>Was this part of a National Awareness Day?</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            {options && options.map(option => {
               
                return (
                option.value !== "Other (please specify)" ? 
                (<label className='text-lg flex items-center gap-5' key={options.id}>
                    <input type="radio" 
                    name="nationalAwarenessDay" 
                    className='' 
                    value={option.value} 
                    id={option.id} 
                    onChange={(e) => {
                        setEventForm((prev) =>({...prev, [e.target.name]: e.target.value, nationalAwarenessDayOther: ''}))
                    }}
                    defaultChecked={option.value===eventForm.nationalAwarenessDay ?'checked':""}
                    />
                    {option.value}
                    
                </label>) :
                
                (<label className="flex flex-col md:flex-row md:items-center gap-5" key={options.id}>
                    <div className='flex gap-x-5 md:items-center mb-5'>
                    <input type="radio" 
                    name="nationalAwarenessDay" 
                    className='' 
                    id={options.id}
                    onChange={handleForm}
                    value="Other"
                    defaultChecked={eventForm.nationalAwarenessDay === 'Other'?'checked':""}
                    />
                    <p className="">Other</p>
                    </div>
                    <input type="text" 
                    name="nationalAwarenessDayOther" 
                    onChange={(e) =>
                        setEventForm(previous => ({...previous, nationalAwarenessDayOther: e.target.value}))
                    }
                    className='border rounded md:w-3/6 w-5/6' 
                    defaultValue={eventForm?.nationalAwarenessDayOther}
/>
                 </label>)
            )})}
             
            </div>
        </div>
    );
}

export default NationalAwarenessDay