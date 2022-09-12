import React from "react";
import Link from "next/link";
import Image from "next/image";
import DashboardBtn from "./DashboardBtn";
import BackBtn from "./BackBtn";

const PageTopHeading = ({ pageTitle,dashboardBtn,backBtn }) => {
  return (
    <section className="pt-10 bg-white">
      <div className="container mx-auto md:px-0 px-5">
        <div className="grid grid-cols-2 md:grid-cols-8 btn-dashboard gap-x-7">
          {backBtn && <BackBtn/>}
          {dashboardBtn && <DashboardBtn />} 
        </div>
        <div className="search-box grid  grid-cols-1  items-center my-10 space-between">
          <h1 className="font-black">{pageTitle}</h1>
        </div>
      </div>
    </section>
  );
};

export default PageTopHeading;
