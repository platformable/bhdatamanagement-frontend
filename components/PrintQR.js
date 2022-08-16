import React from 'react'

export const PrintQR = React.forwardRef((props, ref) => {
  return (
    <div className="flex justify-center" ref={ref}>
        <img src="/events/qrcode_www.surveymonkey.com.png" alt="qr" />
    </div>
  )
})

PrintQR.displayName = 'PrintQR';
export default PrintQR;