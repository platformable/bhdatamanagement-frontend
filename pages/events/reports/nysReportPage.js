import React from 'react';
import {  useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Layout from '../../../components/Layout';
import PageTopHeading from '../../../components/PageTopHeading';
const NysReportPage = () => {
    return (
       <Layout>
        <PageTopHeading pageTitle={'Create NYS Funding report'} backBtn={true} dashboardBtn={true}/>
       </Layout>
    );
}

export default NysReportPage;


export const getServerSideProps = withPageAuthRequired({});