import React from 'react'
import { useRouter } from 'next/router'
import Header from './Header'

export default function Layout({children}) {

  return (
  <>
  <Header/>
    <main>{children}</main>
  </>
  )
}
