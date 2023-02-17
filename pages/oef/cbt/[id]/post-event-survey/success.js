import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const success = () => {
  const router = useRouter()
  return (
    <div className='container mx-auto flex gap-10 flex-col justify-items-center h-screen'>
    <div className="h-88  py-10 px-10  mt-3 flex flex-col gap-5 items-center rounded-lg border-black">
          
          <h1 className="text-center font-black">
            CBT Register Event
          </h1>
          <div className="flex flex-col gap-5 md:flex-row items-center mt-5">
            <h2 className="pt-2">In partnership with</h2>
            <img
            src="/main/BH_logo.svg"
            alt="black health data app management logo"
            width={400}
            className=""
          /> </div>

          <section className='flex flex-col mt-10 py-7 w-full gap-5 bg-sky-blue rounded-lg items-center'>
            <img src="/saved-form.svg" alt="checked icon" />

            <h2 className='font-black text-center'>Thnak you for submitting your <br/> CBT Organizer Post-Event Survey</h2>
            <p className="text-center">You can see your submission in the
            <br/> Manage</p>
            {/* <p className='text-center'>Click here to see the answers you have submitted. <br/>
            You have also been emailed a copy. <br/>
            You are able to make changes to your submission until the end of today. </p> */}
          </section>
        </div>
        <Link href={'/oef/cbt'} ><button className='uppercase rounded shadow bg-black text-white text-2xl px-5 py-2 self-center'>Return to events page</button></Link>
        </div>
    
  )
}

export default success