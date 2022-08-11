import React from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";
import PageTopHeading from "../../components/PageTopHeading";

const EventsIndex = () => {
  return (
    <Layout>
      <PageTopHeading pageTitle={"Manage Existing Events"} dashboardBtn={true} backBtn={false} />

      <div className="container mx-auto md:px-0 px-5 my-10">
        <div className="events-index-btn-container grid md:grid-cols-5 grid-cols-1">
        </div>   
      </div>
    </Layout>
  );
};

export default EventsIndex;
