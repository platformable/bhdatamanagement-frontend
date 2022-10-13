import React from 'react'
import { crearFecha2 } from '../utils/helpers';

export const PrintQR = React.forwardRef((props, ref) => {
const {eventname,eventdate,qrcode}=props.event

  return (
    <div className="bg-white flex flex-col justify-center items-center my-10" ref={ref}>
      <h1>{eventname}</h1>
      <h1>{crearFecha2({eventdate})}</h1>
      <p>Please help us by filling in this survey</p>
      <div className="flex justify-center">
        <img src={qrcode} alt="qr" className="self-start" width={'50%'}/>
        </div>
    </div>
  )
})

PrintQR.displayName = 'PrintQR';
export default PrintQR;