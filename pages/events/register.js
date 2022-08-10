import React from 'react';
import Section1 from '../../components/events/Section1';
import Section2 from '../../components/events/Section2';
import Section3 from '../../components/events/Section3';
import Section4 from '../../components/events/Section4';
import Section5 from '../../components/events/Section5';
import Section6 from '../../components/events/Section6';
import Section7 from '../../components/events/Section7';
import Section8 from '../../components/events/Section8';
import Layout from '../../components/Layout';
import PageTopHeading from '../../components/PageTopHeading';

const Register = () => {
    return (
        
        <Layout>
            <PageTopHeading backBtn={true} dashboardBtn={true} pageTitle={'Register an event'}/>
            <div className="container mx-auto md:px-0 px-5">
                <div className="register-envent-form-container bg-white border rounded-lg px-3 my-10">
                    <Section1/>
                    <Section2/>
                    <Section3/>
                    <Section4/>
                    <Section5/>
                    <Section6/>
                    <Section7/>
                    <Section8/>
                </div>
            </div>
        </Layout>
    );
}

export default Register;
