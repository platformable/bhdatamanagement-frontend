import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const success = () => {
  const router = useRouter()
  return (
    <div className='container mx-auto flex gap-10 flex-col justify-items-center h-screen'>
    <div className="h-88  py-10 px-10  mt-3 flex flex-col gap-5 items-center rounded-lg border-black">
          
          <h1 className="text-center font-black">
            YIP Pre-Workshop Survey
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

            <h2 className='font-black text-center'>Thank you for submitting your YIP Facilitator Post-Workshop Survey</h2>
            <p className='text-center'>Thank you for taking the time to provide feedback. <br/>
            Your input is valuable and used by us for <br/>
            reporting and program improvement. </p>
            {/* <p className='text-center'>Click here to see the answers you have submitted. <br/>
            You have also been emailed a copy. <br/>
            You are able to make changes to your submission until the end of today. </p> */}
          </section>
        </div>
        </div>
    
  )
}

export default success