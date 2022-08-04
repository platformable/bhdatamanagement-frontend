import React from 'react'
import Layout from '../components/Layout'
import Link from "next/link";
import Image from 'next/image';
import ProgramCard from '../components/ProgramCard';


export default function HistoricalData() {

  return (
    <Layout>
    <section id="historicalData">
    
     <section className="py-5 bg-white">
    
     <div className="container mx-auto ">   
       <div>
          <Link href="/dashboard">
          <a className="px-2 py-2 flex bg-light-purple items-center font-black" id="myBtn">
          <Image src="/supervisor/dashboard_icon.svg" width={22} height={20}/>
            Dashboard
          </a>
          </Link>
        </div>
        <div className='flex items-center justify-between'>
          <h1 className="font-black py-5 md:px-0 px-5">
            Wich dataset do you want to download?
          </h1>
          <label className='font-bold'>
            Search by program
            <input className="border border-black rounded p-1 ml-2" type="search" placeholder='text'/>
          </label>
        </div>
      </div>
    </section>
      <section className='h-full py-10 bg-light-violet'>
        <div className='container mx-auto grid grid-cols-1 gap-10'>
          <ProgramCard program="T2" datasetName="Test and Trace (T2) Database" description="COVID-19 Outreach activities for the T2 program" dateRange="08/06/2020-06/30/2022" records="2.674" programImage="/historical_data/T2_HRSA_icon.svg"/> 
          
          <ProgramCard program="HRSA" datasetName="HRSA Outreach Worker Daily Activity" description="Daily Outreach Worker reports for activities from the HRSA program in NY, AL, SC, LA, GA" dateRange="09/27/2021-07/30/2022" records="884" programImage="/historical_data/T2_HRSA_icon.svg"/>
          
          <ProgramCard program="HRSA" datasetName="Vaccine Profile: HRSA Community Based Vaccine Outreach Database" description="Referrals to COVID-19 vaccines and boosters as part of the HRSA program in NY, AL, SC, LA, GA" dateRange="09/03/2021-08/02/2022" records="1.708" programImage="/historical_data/T2_HRSA_icon.svg"/> 
          
          <ProgramCard program="OEF" datasetName="OEF FBOs Directory 2021/22 Public" description="OEF Program directory participating FBOs" dateRange="2021-2022" records="35" programImage="/historical_data/OEF_icon.svg"/> 
          
          <ProgramCard program="OEF" datasetName="OEF HIV Outreach Events FY 2021-2022 Database" description="OEF HIV Outreach Events data" dateRange="2021-2022" records="159" programImage="/historical_data/OEF_icon.svg"/> 
          
          <ProgramCard program="OEF" datasetName="OEF HIV Outreach Events Participant (sign-in-sheet) 2021/22" description="OEF HIV Outreach Events Participant Sign in Sheets" dateRange="2021-2022" records="6.820" programImage="/historical_data/OEF_icon.svg"/> 
          
          <ProgramCard program="OEF" datasetName="OEF FBO Site Visits Database 2021-2022" description="OEF FBO Site Visit Evaluations" dateRange="2021-2022" records="30" programImage="/historical_data/OEF_icon.svg"/> 
          
          <ProgramCard program="NYS" datasetName="NYS HIV Activity Database September 2021 to end of June 2022" description="Outreach activities for the NYS HIV program" dateRange="09/30/2022-06/30/2022" records="74" programImage="/historical_data/NYS_programs_icon.svg"/> 
          
          <ProgramCard program="NYS" datasetName="NYS HIV Activity Database January 2021 - November 2021" description="Outreach activities for the NYS HIV program" dateRange="01/27/2021-11/05/2021" records="86" programImage="/historical_data/NYS_programs_icon.svg"/> 
          
          <ProgramCard program="NYS" datasetName="Social Media Database Black Health" description="Record of Black Health social media posts from Facebook, Instagram, Twitter, Youtube and Mailchimp" dateRange="07/23//21-06/30/2022" records="1.119" programImage="/historical_data/BH_social_media_icon.svg"/> 
        </div>  
      </section>
    </section>
    </Layout>
  )
}

