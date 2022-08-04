import React,{useState} from 'react'
import Layout from '../components/Layout'
import Link from "next/link";
import Image from 'next/image';
import nysProgramIcon from '../public/NYS_programs_icon.svg'
import oefIcon from '../public/OEF_icon.svg'
import bhIcon from '../public/BH_social_media_icon.svg'
import Search from '../components/Search';
import ProgramCard from '../components/ProgramCard';
import { data } from 'autoprefixer';


export default function HistoricalData() {

    const [searchWord,setSearchWord]=useState("")

    const datasets=[
        {
            program:"T2",
            datasetName:"Test and Trace (T2) Database",            
            link:'https://drive.google.com/uc?export=download&id=1hrMVh2Kpwm1pK64h9Eggi3NlDcusJcXl',
            description:"COVID-19 Outreach activities for the T2 program",
            records:"2674 records",
            dateRange:"8/6/2020-6/30/2022",
            programImage:'/NYS_programs_icon.svg'
        },
        {
            program:"HRSA",
            datasetName:"HRSA Outreach Worker Daily Activity",
            link:"https://drive.google.com/uc?export=download&id=1-SWEeEeftx8MN5MemkqWnHlL01tMZPE1",
            description:"Daily Outreach Worker reports for activities from the HRSA program in NY, AL, SC, LA, GA ",
            records:"884 records",
            dateRange:"9/27/2021-7/30/2022",
            programImage:'/NYS_programs_icon.svg'
        },
        {
            program:"HRSA",
            datasetName:"Vaccine Profile: HRSA Community Based Vaccine Outreach Database",
            link:"https://drive.google.com/uc?export=download&id=1JoE5B6gXCcBQq41zHExHaJdabxgYNNQW",
            description:"Referrals to COVID-19 vaccines and boosters as part of the HRSA program in NY, AL, SC, LA, GA ",
            records:"1708 records",
            dateRange:"9/3/2021-08/02/2022",
            programImage:'/NYS_programs_icon.svg'
        },
        {
            program:"OEF",
            datasetName:"OEF FBOs Directory 2021/22 Public",
            link:"https://drive.google.com/uc?export=download&id=1C1iwPps51qKmjljRLrQWb_g2aDJLC7M3",
            description:"OEF Program directory participating FBOs",
            records:"35 records",
            date:"FY 2021-2022",
            programImage:'/OEF_icon.svg'
        },
        {
            program:"OEF",
            datasetName:"OEF HIV Outreach Events FY 2021-2022 Database",
            link:"https://drive.google.com/uc?export=download&id=1r-N6nPLuGo972j9YB4LOxUnif0a9SmtR",
            description:"OEF HIV Outreach Events data",
            records:"159 records",
            dateRange:"FY 2021-2022",
            programImage:'/OEF_icon.svg'
        },
        {
            program:"OEF",
            datasetName:"OEF HIV Outreach Events Participant (sign-in sheet) 2021/22",
            link:"https://drive.google.com/uc?export=download&id=1WYZlDAlFNGVPpoRNCICamlpUcMx5ML38",
            description:"OEF HIV Outreach Events Participant Sign in Sheets",
            records:"6820 records",
            dateRange:"FY 2021-2022",
            programImage:'/OEF_icon.svg'
        },
        {
            program:"OEF",
            datasetName:"OEF FBO Site Visits Database 2021-2022",
            link:"https://drive.google.com/uc?export=download&id=1YBgvbbPhMHBU17zvKYKKAh7JsTsl3DPk",
            description:"OEF FBO Site Visit Evaluations",
            records:"30 records",
            dateRange:"FY 2021-2022",
            programImage:'/OEF_icon.svg'
        },
        {
            program:"NYS",
            datasetName:"NYS HIV Activity Database September 2021 to end of June 2022",
            link:"https://drive.google.com/uc?export=download&id=1ZPrCLaKt6b5cd24kbjyuw4tDhUi6qPtO",
            description:"Outreach activities for the NYS HIV program",
            records:"74 records",
            dateRange:"09/30/2022-06/30/2022",
            programImage:'/NYS_programs_icon.svg'
        },
        {
            program:"NYS",
            datasetName:"NYS HIV Activity Database January 2021 - November 2021",
            link:"https://drive.google.com/uc?export=download&id=1p6qKJ-R6EBm4t3qH2TuBYIrguItBfD5R",
            description:"Outreach activities for the NYS HIV program",
            records:"86 records",
            dateRange:"01/27/2021-11/05/2021",
            programImage:'/NYS_programs_icon.svg'
        },
        {
            program:"Social Media",
            datasetName:"Social Media Database Black Health",
            link:"https://drive.google.com/uc?export=download&id=1qUeiOTzUaMAJf1vQc0K0UU_CdTWLuDJq",
            description:"Record of Black Health social media posts from Facebook, Instagram, Twitter, YouTube and Mailchimp.",
            records:"1119 records",
            dateRange:"7/23/21-06/30/2022",
            programImage:'/BH_social_media_icon.svg'
        },
      
    ]

const searchFunction=(word)=>{
setSearchWord(word)
}

  return (
    <Layout>
      <div id="historicalData">
        <section className="py-5 bg-white">
          <div className="container mx-auto ">
            <div className="flex btn-dashboard">
              <Link href="/dashboard">
                <a
                  className="px-2 py-2  flex bg-light-purple gap-x-2 items-center font-black"
                  id=""
                >
                  <Image
                    src="/supervisor/dashboard_icon.svg"
                    width={22}
                    height={20}
                  />
                  Dashboard
                </a>
              </Link>
            </div>

            <div className="search-box grid md:grid-cols-2 grid-cols-1  items-center my-5 space-between">
              <h2 className="font-black">
                Which dataset do you want to download?
              </h2>

              <Search searchFunction={searchFunction}/>
            </div>
          </div>
        </section>

        <section className='h-full py-10 bg-light-violet'>
        <div className='container mx-auto grid grid-cols-1 gap-10'>

            {
                datasets?.filter((program,index)=>{
                    if(searchWord===""){
                        return program
                    } else if(program.program.toLowerCase().includes(searchWord.toLowerCase())){
                        return program
                    }
                }).map((program,index)=>{
                    return (
                <ProgramCard key ={index} program={program.program} 
                datasetName={program.datasetName} 
                description={program.description} 
                dateRange={program.dateRange} 
                records={program.records} 
                programImage={program.programImage}
                link={program.link}/> 
                    )
                })
            }
          
          
         {/*  <ProgramCard program="HRSA" datasetName="HRSA Outreach Worker Daily Activity" description="Daily Outreach Worker reports for activities from the HRSA program in NY, AL, SC, LA, GA" dateRange="09/27/2021-07/30/2022" records="884" programImage="/historical_data/T2_HRSA_icon.svg"/>
          
          <ProgramCard program="HRSA" datasetName="Vaccine Profile: HRSA Community Based Vaccine Outreach Database" description="Referrals to COVID-19 vaccines and boosters as part of the HRSA program in NY, AL, SC, LA, GA" dateRange="09/03/2021-08/02/2022" records="1.708" programImage="/historical_data/T2_HRSA_icon.svg"/> 
          
          <ProgramCard program="OEF" datasetName="OEF FBOs Directory 2021/22 Public" description="OEF Program directory participating FBOs" dateRange="2021-2022" records="35" programImage="/historical_data/OEF_icon.svg"/> 
          
          <ProgramCard program="OEF" datasetName="OEF HIV Outreach Events FY 2021-2022 Database" description="OEF HIV Outreach Events data" dateRange="2021-2022" records="159" programImage="/historical_data/OEF_icon.svg"/> 
          
          <ProgramCard program="OEF" datasetName="OEF HIV Outreach Events Participant (sign-in-sheet) 2021/22" description="OEF HIV Outreach Events Participant Sign in Sheets" dateRange="2021-2022" records="6.820" programImage="/historical_data/OEF_icon.svg"/> 
          
          <ProgramCard program="OEF" datasetName="OEF FBO Site Visits Database 2021-2022" description="OEF FBO Site Visit Evaluations" dateRange="2021-2022" records="30" programImage="/historical_data/OEF_icon.svg"/> 
          
          <ProgramCard program="NYS" datasetName="NYS HIV Activity Database September 2021 to end of June 2022" description="Outreach activities for the NYS HIV program" dateRange="09/30/2022-06/30/2022" records="74" programImage="/historical_data/NYS_programs_icon.svg"/> 
          
          <ProgramCard program="NYS" datasetName="NYS HIV Activity Database January 2021 - November 2021" description="Outreach activities for the NYS HIV program" dateRange="01/27/2021-11/05/2021" records="86" programImage="/historical_data/NYS_programs_icon.svg"/> 
          
          <ProgramCard program="NYS" datasetName="Social Media Database Black Health" description="Record of Black Health social media posts from Facebook, Instagram, Twitter, Youtube and Mailchimp" dateRange="07/23//21-06/30/2022" records="1.119" programImage="/historical_data/BH_social_media_icon.svg"/>  */}
        </div>  
      </section>
      </div>
    </Layout>
  );
}
