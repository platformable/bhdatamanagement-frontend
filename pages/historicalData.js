import React from 'react'
import Layout from '../components/Layout'
import Link from "next/link";
import Image from 'next/image';


export default function HistoricalData() {

  return (
    <Layout>
    <section id="historicalData">
    
     <section className="py-5 bg-white">
    
     <div className="container mx-auto ">   
     <div>
                <Link href="/dashboard">
                <a className="px-2 py-2 flex bg-light-purple items-center font-black" id="myBtn">
                <Image src="/supervisor/dashboard_icon.svg" width={22} height={20}/>
                  <p className='ml-2'>Dashboard</p>
                </a>
              </Link>
              </div>
                <h1 className="font-black py-5 md:px-0 px-5">
                  Wich dataset do you want to download?
                </h1>
                </div>
      </section>

    </section>
    </Layout>
  )
}
