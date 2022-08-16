import React from 'react'

const PostEventReportSection4 = () => {
  return (
<div className="p-5">
      <h2 className="mb-3 font-black">
        <span className="text-color-violet">4</span> Is this part of:
      </h2>
      <div className="md:grid md:grid-cols-4 gap-x-16 gap-y-5">
        <label className="flex  items-center p-2">
            <input 
            type="checkbox" 
            name="partof"
            value="leadership Training Institute" 
            id="1" 
            className='mr-2 w-6 h-6'


            />
            <p className="">Leadership Training Institute</p>       
        </label>

        <label className="flex items-center p-2">
            <input 
            type="checkbox" 
            name="partof"
            value="HIV Hight Impact" 
            id="2" 
            className='mr-2 w-6 h-6'
            />
            <p className="">HIV Hight Impact</p>       
        </label>
       
    
    

      </div>
    </div>
  )
}

export default PostEventReportSection4