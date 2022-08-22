import React from 'react'

const PostEventReportSection4 = () => {
  return (
<div className="p-5 py-10">
      <h2 className="mb-3 font-black">
        <span className="">4</span> Is this part of:
      </h2>
      <div className="md:grid  gap-x-16 gap-y-5">
        <label className="flex  items-center p-2">
            <input 
            type="checkbox" 
            name="partof"
            value="leadership Training Institute" 
            id="1" 
            className='mr-2 w-4 h-4'


            />
            Leadership Training Institute       
        </label>

        <label className="flex items-center p-2">
            <input 
            type="checkbox" 
            name="partof"
            value="HIV Hight Impact" 
            id="2" 
            className='mr-2 w-4 h-4'
            />
            HIV Hight Impact       
        </label>
       
    
    

      </div>
    </div>
  )
}

export default PostEventReportSection4