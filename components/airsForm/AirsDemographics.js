import React from 'react';

const AirsDemographics = ({event}) => {


    console.log(event.hivTestedTotal,event.stiTestedTotal,event.hepCTestedTotal,event.covidTestedTotal)
    const demographiscknown = event.hivtestedtotal+event.stitestedtotal+event.hepctestedtotal+event.covidtestedtotal
    return (
        <div className="border-black  ">
            <h2 className=" text-center my-5">* Demographics of participants</h2>

   

            <div className="grid grid-cols-2 ">
                <div id="totalParticipants" className="">
                    <div className="border-black p-5">
                    <h2 className="font-black">* Total Participants</h2>
                    <p>Demographics known: {demographiscknown} </p>
                    <p>Demographics unknown: {demographiscknown} </p>
                    </div>

                    <div id="gender" className="border-black p-5">
                    <h2 className="font-black mb-5">* GENDER</h2>

                    <div className="flex gap-x-5"><p className="w-60">WOMAN/GIRL:</p><p className="underline">{demographiscknown} </p></div>
                    <div className="flex gap-x-5"><p className="w-60">TRANSGENDER WOMAN/GIRL: </p><p className="underline">{demographiscknown} </p></div>
                    <div className="flex gap-x-5"><p className="w-60">MAN/BOY: </p><p className="underline">{demographiscknown} </p></div>
                    <div className="flex gap-x-5"><p className="w-60">TRANSGENDER MAN/BOY: </p><p className="underline">{demographiscknown} </p></div>
                    <div className="flex gap-x-5"><p className="w-60">NON-BINARY PERSON: </p><p className="underline">{demographiscknown} </p></div>
                    <div className="flex gap-x-5"><p className="w-60">GENDER NON-CONFORMING PERSON: </p><p className="underline">{demographiscknown} </p></div>
                    <div className="flex gap-x-5"><p className="w-60">NO SURE/QUESTIONING: </p><p className="underline">{demographiscknown} </p></div>
                    <div className="flex gap-x-5"><p className="w-60">GENDER NOT LISTED: </p><p className="underline">{demographiscknown} </p></div>
                    <div className="flex gap-x-5"><p className="w-60">CHOSE NOT TO RESPOND: </p><p className="underline">{demographiscknown} </p></div>
                    
                    </div>
                    <div id="gender" className="border-black p-5">
                    <h2 className="font-black mb-5">* AGE GROUPS</h2>

                    <div className="flex gap-x-5"><p className="w-60">WOMAN/GIRL:</p><p className="underline">{demographiscknown} </p></div>
                    <div className="flex gap-x-5"><p className="w-60">TRANSGENDER WOMAN/GIRL: </p><p className="underline">{demographiscknown} </p></div>
                    <div className="flex gap-x-5"><p className="w-60">MAN/BOY: </p><p className="underline">{demographiscknown} </p></div>
                    <div className="flex gap-x-5"><p className="w-60">TRANSGENDER MAN/BOY: </p><p className="underline">{demographiscknown} </p></div>
                    <div className="flex gap-x-5"><p className="w-60">NON-BINARY PERSON: </p><p className="underline">{demographiscknown} </p></div>
                    <div className="flex gap-x-5"><p className="w-60">GENDER NON-CONFORMING PERSON: </p><p className="underline">{demographiscknown} </p></div>
                    </div>
                </div>
                <div className="border-black p-5 ">
                <h2 className="font-black mb-5">* RACE / ETHNICITY</h2>

                <div className="flex gap-x-5"><p className="w-60">HISPANIC::</p><p className="underline">{demographiscknown} </p></div>
                    <div className="flex gap-x-5"><p className="w-60">(NH) WHITE: </p><p className="underline">{demographiscknown} </p></div>
                    <div className="flex gap-x-5"><p className="w-60">(NH) BLACK OR AFRICAN AMERICAN:</p><p className="underline">{demographiscknown} </p></div>
                    <div className="flex gap-x-5"><p className="w-60">(NH) ASIAN:</p><p className="underline">{demographiscknown} </p></div>
                    <div className="flex gap-x-5"><p className="w-60">(NH) NATIVE HAWAIIAN OR PACIFIC ISLANDER:</p><p className="underline">{demographiscknown} </p></div>
                    <div className="flex gap-x-5"><p className="w-60">(NH) AMERICAN INDIAN OR ALASKAN NATIVE:</p><p className="underline">{demographiscknown} </p></div>
                    <div className="flex gap-x-5"><p className="w-60">MORE THAN ONE RACE / ETHNICITY:</p><p className="underline">{demographiscknown} </p></div>
                    <div className="flex gap-x-5"><p className="w-60">OTHER:</p><p className="underline">{demographiscknown} </p></div>
                    <div className="flex gap-x-5"><p className="w-60">UNKNOWN / UNREPORTED:</p><p className="underline">{demographiscknown} </p></div>
                </div>
            </div>
            <h2 className="font-black  p-5">* PRIMARY RISK</h2>
        <div className="grid grid-cols-3 gap-x-5">

            <div className="p-5"> 
                
                <div className="flex gap-x-5"><p className="w-20">IDU:</p><p className="underline">{demographiscknown} </p></div>
                    <div className="flex gap-x-5"><p className="w-20">MSM:</p><p className="underline">{demographiscknown} </p></div>
            </div>

            <div className="p-5"> 
           
                <div className="flex gap-x-5"><p className="w-60">MSM / IDU:</p><p className="underline">{demographiscknown} </p></div>
                    <div className="flex gap-x-5"><p className="w-60">SEX INVOLVING TRANSGENDER:</p><p className="underline">{demographiscknown} </p></div>
            </div>

            <div className="p-5"> 
                
                <div className="flex gap-x-5"><p className="w-60">HETEROSEXUAL CONTACT:</p><p className="underline">{demographiscknown} </p></div>
                    <div className="flex gap-x-5"><p className="w-60">OTHER / RISK NOT INDENTIFIED:</p><p className="underline">{demographiscknown} </p></div>
            </div>

        </div>




        
            
           
        </div>
    );
}

export default AirsDemographics;
