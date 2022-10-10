import React from 'react';

const AirsDemographics = ({event}) => {

    const genderOptions = [
        { value: "Woman/girl" },
        { value: "Transgender woman/girl" },
        { value: "Man/boy" },
        { value: "Transgender man/boy" },
        { value: "Non-binary person" },
        { value: "Gender non-conforming person" },
        { value: "No sure/questioning" },
        { value: "Gender not listed" },
        { value: "Chose not to respond" },
      ];
      
      const ageOptions = [
        { value: "Children (under 13)" },
        { value: "Adolescents (13 to 18)" },
        { value: "19 to 24" },
        { value: "25 to 34" },
        { value: "35 to 44" },
        { value: "45 and over" },
      ];
      
      const ethnicityOptions = [
        { value: "Hispanic" },
        { value: "(NH) White" },
        { value: "(NH) Black or African American" },
        { value: "(NH) Asian" },
        { value: "(NH) Native Hawaiian or Pacific Islander:" },
        { value: "(NH) American Indian or Alaskan Native:" },
        { value: "More than one race / ethnicity" },
        { value: "Unknown / unreported" },
      ];
    console.log(event.hivTestedTotal,event.stiTestedTotal,event.hepCTestedTotal,event.covidTestedTotal)
    const demographiscknown = event.hivtestedtotal+event.stitestedtotal+event.hepctestedtotal+event.covidtestedtotal
    return (
        <div className="border-black  mx-5 ">
            <p className="font-bold  text-center my-2 text-xs">* Demographics of participants</p>

   

            <div className="grid grid-cols-2 divide-x divide-y divide-black">
                <div id="left-container" className="border-t-black divide-y divide-black">
                    
                <div className="leading-5 py-2 border px-3 flex justify-between">
                    <p className="font-bold text-xxs">* TOTAL PARTICIPANTS</p>
                   <div className='pr-10 grid'>
                    <p className="flex gap-x-5 justify-end text-xxs font-bold ">DEMOGRAPHICS KNOWN: <p className='font-bold underline text-xxs'>{event.demographiscknown === "Demographics known" ? "X" : ""}</p> </p>
                    <p className="flex gap-x-5 justify-end text-xxs font-bold ">DEMOGRAPHICS UNKNOWN: <p className='font-bold underline text-xxs'>{event.demographiscknown === "Demographics unknown" ? "X" : ""}</p> </p>
                   </div>
                
                    </div>
                    <div id="gender" className="leading-5 py-2 px-3 flex justify-between">
                    


                    <p className="font-bold text-xxs">* GENDER</p>

                    <div className='pr-10'>
                    {genderOptions.map(opt => (
                        <>
                        <div className="flex gap-x-5 text-right "><p className="font-bold text-xxs w-60 uppercase">{opt.value}</p><p className="font-bold underline text-xxs">{event.airsformgender.includes(opt.value)? "X" : ""} </p></div>
                        </>
                    ))}
                    </div>
                    
                    </div>
                    <div id="gender" className="leading-5 py-2 px-3 flex justify-between">
                    <p className="font-bold grid text-xxs">* AGE GROUPS</p>

                    <div className='pr-10'>
                    {ageOptions.map(opt => (
                        <>
                        <div className="flex gap-x-5 text-right "><p className="font-bold text-xxs w-60 uppercase">{opt.value}</p><p className="font-bold underline text-xxs">{event.airsformage.includes(opt.value)? "X" : ""} </p></div>
                        </>
                    ))}
                    </div>
                    </div>
                </div>
                <div className="divide-y divide-black">
                
                    <div className='py-2 px-3  leading-5 flex justify-between'>
                    <p className="font-bold grid text-xxs">* RACE / ETHNICITY</p>

                        <div className='pr-10'>
                             <p className="italic text-xxs text-right">(NH) = NON-HISPANIC</p>
                             {ethnicityOptions.map(opt => (
                        <>
                        <div className="flex gap-x-5 text-right "><p className="font-bold text-xxs w-60 uppercase">{opt.value}</p><p className="font-bold underline text-xxs">{event.airsformraceethnicity.includes(opt.value)? "X" : ""} </p></div>
                        </>
                    ))}
                        </div>

                    </div>
               
                </div>
                
            </div>
            <p className="font-bold border-t border-t-black text-xxs py-1 px-3">* PRIMARY RISK</p>
        <div className="grid grid-cols-3 gap-x-5">

            <div className="py-2 px-3"> 
                
                <div className="flex gap-x-5"><p className="font-bold w-20 text-xxs">IDU:</p><input
                readOnly
                type="checkbox"
                checked={event?.nysprimaryriskgroup === "IDU" ? "checked" : ""}
                className="checkbox-normal-size pointer-events-none mr-2"
              /></div>
                    <div className="flex gap-x-5"><p className="font-bold w-20 text-xxs">MSM:</p><input
                readOnly
                type="checkbox"
                checked={event?.nysprimaryriskgroup === "MSM" ? "checked" : ""}
                className="checkbox-normal-size pointer-events-none mr-2"
              /></div>
            </div>

            <div className="py-2 px-3"> 
           
                <div className="flex gap-x-5"><p className="font-bold w-60 text-xxs">MSM / IDU:</p><input
                readOnly
                type="checkbox"
                checked={event?.nysprimaryriskgroup === "MSM / IDU" ? "checked" : ""}
                className="checkbox-normal-size pointer-events-none mr-2"
              /></div>
                    <div className="flex gap-x-5"><p className="font-bold w-60 text-xxs">SEX INVOLVING TRANSGENDER:</p><input
                readOnly
                type="checkbox"
                checked={event?.nysprimaryriskgroup === "SEX INVOLVING TRANSGENDER" ? "checked" : ""}
                className="checkbox-normal-size pointer-events-none mr-2"
              /></div>
            </div>

            <div className="py-2 px-3"> 
                
                <div className="flex gap-x-5"><p className="font-bold w-60 text-xxs">HETEROSEXUAL CONTACT:</p><input
                readOnly
                type="checkbox"
                checked={event?.nysprimaryriskgroup === "HETEROSEXUAL CONTACT" ? "checked" : ""}
                className="checkbox-normal-size pointer-events-none mr-2"
              /></div>
                    <div className="flex gap-x-5"><p className="font-bold w-60 text-xxs">OTHER / RISK NOT INDENTIFIED:</p><input
                readOnly
                type="checkbox"
                checked={event?.nysprimaryriskgroup === "OTHER / RISK NOT INDENTIFIED" ? "checked" : ""}
                className="checkbox-normal-size pointer-events-none mr-2"
              /></div>
            </div>

        </div>




        
            
           
        </div>
    );
}

export default AirsDemographics;
