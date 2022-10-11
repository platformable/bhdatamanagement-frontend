import React from 'react';

const Section4 = ({eventForm, setEventForm,event}) => {
    // const date =new Date(event?.eventdate);
   /*  var ms = new Date(date).getTime() + 86400000; */
//    var ms = new Date(date).getTime()
//     var tomorrow = new Date(ms).toLocaleDateString().replace('/','-').replace('/','-');
//     const prefinaldate=tomorrow.split('-')
//     const finaldate=`${prefinaldate[2]}-${prefinaldate[1]}-${prefinaldate[0]}`
//     console.log("prefinaldate",finaldate)
    
    const crearFecha2 = () => {
        let options = { 
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          };
        options.timeZone = 'UTC';
        const date = new Date(event?.eventdate);
        const result = new Intl.DateTimeFormat('en-US', options).format(date);
        console.log("result", result)
        const splitted = result.split("/")
        return `${splitted[2]}-${splitted[0]}-${splitted[1]}`
      };

       

      const crearFecha = () => {
        const dates = new Date(event.eventdate);
      const newFinalDate=new Intl.DateTimeFormat('en-US').format(dates).replace('/','-').replace('/','-')
      const prefinaldate=newFinalDate.split('-')
      const finalfinal = `${prefinaldate[2]}-${prefinaldate[0]<10?0+prefinaldate[0]:prefinaldate[0]}-${prefinaldate[1]}`
      console.log('finalfinal',finalfinal)
        return finalfinal

      }
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

                defaultValue={crearFecha2()}
                />
        </label>
    );
}

export default Section4;
