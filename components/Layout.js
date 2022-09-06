import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import Header from './Header'

export default function Layout({children, showStatusHeader}) {
  const [showStatus, setShowStatus] = useState(showStatusHeader);

  return (
  <>
  <Header showStatus={showStatus}/>
    <main>{children}</main>
  </>
  )
}
