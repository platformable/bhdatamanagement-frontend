import React from 'react'

const success = () => {
  return (
    <div className="h-88 my-auto py-10 px-10 container mx-auto mt-3 flex flex-col gap-5 items-center rounded-lg border-black">
          
          <h1 className="text-center font-black">
            HIV Outreach Event Participant Sign-in Sheet
          </h1>
          <div className="flex flex-col md:flex-row items-center mt-5">
            <h2 className="pt-2">In partnership with</h2>
            <img
            src="/main/Black_Health_logo.svg"
            alt="black health data app management logo"
            width={400}
            className=""
          /> </div>

          <section className='flex flex-col mt-10 py-7 w-full gap-5 bg-light-blue rounded-lg items-center'>
            <h2 className='font-black text-center'>Your sign-in sheet was saved successfully! </h2>
            <p className='text-center'>Thank you for taking the time to provide feedback. <br/>
            Your input is valuable and used by us for <br/>
            reporting and program improvement. </p>
          </section>
        </div>
  )
}

export default success