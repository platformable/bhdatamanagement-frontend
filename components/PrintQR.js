import React from 'react'

export const PrintQR = React.forwardRef((props, ref) => {
const {eventname,eventdate}=props.event

  return (
    <div className="bg-white flex flex-col justify-center items-center my-10" ref={ref}>
      <h1>{eventname}</h1>
      <h1>{new Date(eventdate).toLocaleDateString('en-US',{year:'numeric',month:'numeric',day:'numeric'})}</h1>
      <p>Please help us by filling in this survey</p>
      <div className="flex justify-center">
        <img src="/events/qrcode_www.surveymonkey.com.png" alt="qr" className="self-start" />
        </div>
    </div>
  )
})

PrintQR.displayName = 'PrintQR';
export default PrintQR;