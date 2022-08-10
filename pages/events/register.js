import React, { useState } from "react";
import Section1 from "../../components/events/Section1";
import Section2 from "../../components/events/Section2";
import Section3 from "../../components/events/Section3";
import Section4 from "../../components/events/Section4";
import Section5 from "../../components/events/Section5";
import Section6 from "../../components/events/Section6";
import Section7 from "../../components/events/Section7";
import Section8 from "../../components/events/Section8";
import Layout from "../../components/Layout";
import PageTopHeading from "../../components/PageTopHeading";

const Register = () => {
  const [eventForm, setEventForm] = useState({});
  return (
    <Layout>
      <PageTopHeading
        backBtn={true}
        dashboardBtn={true}
        pageTitle={"Register an event"}
      />
      <div className="container mx-auto md:px-0 px-5">
        <div className="register-envent-form-container bg-white border rounded-lg px-3 my-10">
          <Section1 eventForm={eventForm} setEventForm={setEventForm} />
          <Section2 eventForm={eventForm} setEventForm={setEventForm} />
          <Section3 eventForm={eventForm} setEventForm={setEventForm} />
          <Section4 eventForm={eventForm} setEventForm={setEventForm} />
          <Section5 eventForm={eventForm} setEventForm={setEventForm} />
          <Section6 eventForm={eventForm} setEventForm={setEventForm} />
          <Section7 eventForm={eventForm} setEventForm={setEventForm} />
          <Section8 eventForm={eventForm} setEventForm={setEventForm} />
        </div>
      </div>
    </Layout>
  );
};

export default Register;
