import React from 'react';

const AirsDemographics = ({event}) => {


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
                    <p className="flex gap-x-5 justify-end text-xxs font-bold ">DEMOGRAPHICS KNOWN: <p className='font-bold underline text-xxs'>{demographiscknown}</p> </p>
                    <p className="flex gap-x-5 justify-end text-xxs font-bold ">DEMOGRAPHICS UNKNOWN: <p className='font-bold underline text-xxs'>{demographiscknown}</p> </p>
                   </div>
                
                    </div>
                    <div id="gender" className="leading-5 py-2 px-3 flex justify-between">
                    


                    <p className="font-bold text-xxs">* GENDER</p>

                    <div className='pr-10'>
                    <div className="flex gap-x-5 text-right "><p className="font-bold text-xxs w-60">WOMAN/GIRL:</p><p className="font-bold underline text-xxs">{demographiscknown} </p></div>
                    <div className="flex gap-x-5 text-right "><p className="font-bold text-xxs w-60">TRANSGENDER WOMAN/GIRL: </p><p className="font-bold underline text-xxs">{demographiscknown} </p></div>
                    <div className="flex gap-x-5 text-right "><p className="font-bold text-xxs w-60">MAN/BOY: </p><p className="font-bold underline text-xxs">{demographiscknown} </p></div>
                    <div className="flex gap-x-5 text-right "><p className="font-bold text-xxs w-60">TRANSGENDER MAN/BOY: </p><p className="font-bold underline text-xxs">{demographiscknown} </p></div>
                    <div className="flex gap-x-5 text-right "><p className="font-bold text-xxs w-60">NON-BINARY PERSON: </p><p className="font-bold underline text-xxs">{demographiscknown} </p></div>
                    <div className="flex gap-x-5 text-right "><p className="font-bold text-xxs w-60">GENDER NON-CONFORMING PERSON: </p><p className="font-bold underline text-xxs">{demographiscknown} </p></div>
                    <div className="flex gap-x-5 text-right "><p className="font-bold text-xxs w-60">NO SURE/QUESTIONING: </p><p className="font-bold underline text-xxs">{demographiscknown} </p></div>
                    <div className="flex gap-x-5 text-right "><p className="font-bold text-xxs w-60">GENDER NOT LISTED: </p><p className="font-bold underline text-xxs">{demographiscknown} </p></div>
                    <div className="flex gap-x-5 text-right "><p className="font-bold text-xxs w-60">CHOSE NOT TO RESPOND: </p><p className="font-bold underline text-xxs">{demographiscknown} </p></div>
                    </div>
                    
                    </div>
                    <div id="gender" className="leading-5 py-2 px-3 flex justify-between">
                    <p className="font-bold grid text-xxs">* AGE GROUPS</p>

                    <div className='pr-10'>
                    <div className="flex gap-x-5 text-right "><p className="font-bold text-xxs w-60">CHILDREN (UNDER 13)</p><p className="font-bold underline text-xxs">{demographiscknown} </p></div>
                    <div className="flex gap-x-5 text-right "><p className="font-bold text-xxs w-60">ADOLESCENTS (13 TO 18)</p><p className="font-bold underline text-xxs">{demographiscknown} </p></div>
                    <div className="flex gap-x-5 text-right "><p className="font-bold text-xxs w-60">19 TO 24</p><p className="font-bold underline text-xxs">{demographiscknown} </p></div>
                    <div className="flex gap-x-5 text-right "><p className="font-bold text-xxs w-60">25 TO 34</p><p className="font-bold underline text-xxs">{demographiscknown} </p></div>
                    <div className="flex gap-x-5 text-right "><p className="font-bold text-xxs w-60">35 TO 44</p><p className="font-bold underline text-xxs">{demographiscknown} </p></div>
                    <div className="flex gap-x-5 text-right "><p className="font-bold text-xxs w-60">45 AND OVER</p><p className="font-bold underline text-xxs">{demographiscknown} </p></div>
                    </div>
                    </div>
                </div>
                <div className="divide-y divide-black">
                
                    <div className='py-2 px-3  leading-5 flex justify-between'>
                    <p className="font-bold grid text-xxs">* RACE / ETHNICITY</p>

                        <div className='pr-10'>
                             <p className="italic text-xxs text-right">(NH) = NON-HISPANIC</p>

                        <div className="flex gap-x-5 text-right"><p className="font-bold text-xxs w-60">HISPANIC:</p><p className="font-bold underline text-xxs">{demographiscknown} </p></div>
                        <div className="flex gap-x-5 text-right"><p className="font-bold text-xxs w-60">(NH) WHITE: </p><p className="font-bold underline text-xxs">{demographiscknown} </p></div>
                        <div className="flex gap-x-5 text-right"><p className="font-bold text-xxs w-60">(NH) BLACK OR AFRICAN AMERICAN:</p><p className="font-bold underline text-xxs">{demographiscknown} </p></div>
                        <div className="flex gap-x-5 text-right"><p className="font-bold text-xxs w-60">(NH) ASIAN:</p><p className="font-bold underline text-xxs">{demographiscknown} </p></div>
                        <div className="flex gap-x-5 text-right"><p className="font-bold text-xxs w-60">(NH) NATIVE HAWAIIAN OR PACIFIC ISLANDER:</p><p className="font-bold underline text-xxs">{demographiscknown} </p></div>
                        <div className="flex gap-x-5 text-right"><p className="font-bold text-xxs w-60">(NH) AMERICAN INDIAN OR ALASKAN NATIVE:</p><p className="font-bold underline text-xxs">{demographiscknown} </p></div>
                        <div className="flex gap-x-5 text-right"><p className="font-bold text-xxs w-60">MORE THAN ONE RACE / ETHNICITY:</p><p className="font-bold underline text-xxs">{demographiscknown} </p></div>
                        <div className="flex gap-x-5 text-right"><p className="font-bold text-xxs w-60">OTHER:</p><p className="font-bold underline text-xxs">{demographiscknown} </p></div>
                        <div className="flex gap-x-5 text-right"><p className="font-bold text-xxs w-60">UNKNOWN / UNREPORTED:</p><p className="font-bold underline text-xxs">{demographiscknown} </p></div>
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
