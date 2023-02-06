// import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import React from 'react';
import Layout from '../components/Layout';

const maintenanceStatus = () => {
  return (
  <Layout showStatusHeader={false}>
    <main className='container mx-auto text-center pt-64'>
    <h2 className='font-black'>The Black Health Data Management App is currently offline for upgrades and maintenance. It is estimated that it will be accessible again on Wednesday February 8, 2023. If you have any questions, please contact a member of the Data Team at Black Health</h2>      
    </main>
  </Layout>
    )
}

export default maintenanceStatus;

// export const getServerSideProps = withPageAuthRequired();
