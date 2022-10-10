import React from 'react';

const Section4 = ({eventForm, setEventForm,event}) => {
    const date =new Date(event.eventdate);
   /*  var ms = new Date(date).getTime() + 86400000; */
   var ms = new Date(date).getTime()
    var tomorrow = new Date(ms).toLocaleDateString().replace('/','-').replace('/','-');
    const prefinaldate=tomorrow.split('-')
    const finaldate=`${prefinaldate[2]}-${prefinaldate[1]}-${prefinaldate[0]}`
    console.log("prefinaldate",finaldate)
    

    const handleForm = (e) => {
        setEventForm(previous => ({...previous, eventDate: e.target.value}))
      }
    return (
        <label className='mb-7 flex flex-col'>            
                <h2 className='font-black mb-5'>What date is the event? </h2>
                <input type="date" 
                name="eventDate" 
                className='border rounded p-2 text-lg w-48 uppercase' 
                onChange={handleForm}

                defaultValue={finaldate}
                />
        </label>
    );
}

export default Section4;
