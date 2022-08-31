import React, {useEffect, useState} from 'react';
import {  useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Layout from '../../../components/Layout';
import PageTopHeading from '../../../components/PageTopHeading';
const NysReportPage = ({eventReport}) => {
    console.log("report", eventReport)
    const [selectedDate, setSelectedDate] = useState({
        start: null,
        finish: null
    })
    const [selectedCSV, setSelectedCSV] = useState([])
    useEffect(() => {
        const selectedReports = eventReport.filter(report =>  report.eventdate <= selectedDate.finish)
        console.log("resultReports", selectedReports, selectedDate)
        setSelectedCSV(selectedReports)
    }, [selectedDate])
    console.log(selectedCSV)
    return (
       <Layout>
        <PageTopHeading pageTitle={'Download the CSV dataset for the NYS CMD report'} backBtn={true} dashboardBtn={true}/>
        <section className='container mx-auto'>
            <p className='font-black text-2xl'>Choose the data range</p>
            start
            <input type="date" onChange={(e) => setSelectedDate({...selectedDate, start: e.target.value})}/>
            finish
            <input type="date" onChange={(e) => setSelectedDate({...selectedDate, finish: e.target.value})}/>
        </section>
       </Layout>
    );
}

export default NysReportPage;


export const getServerSideProps = withPageAuthRequired({
    async getServerSideProps(ctx) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/post_event_report/nys_events_output`)
        const eventReport = await response.json()               
        return {
          props: {
            eventReport: eventReport,
          },
        };
      },
});