import React from "react";
import Link from "next/link";
import Image from "next/image";
import DashboardBtn from "./DashboardBtn";
import BackBtn from "./BackBtn";

const PageTopHeading = ({ pageTitle,dashboardBtn,backBtn }) => {
  return (
    <section className="py-5 bg-white">
      <div className="container mx-auto md:px-0 px-5">
        <div className="flex btn-dashboard gap-x-4">
          {backBtn && <BackBtn/>}
          {dashboardBtn && <DashboardBtn />} 
        </div>
        <div className="search-box grid  grid-cols-1  items-center my-5 space-between">
          <h1 className="font-black">{pageTitle}</h1>
        </div>
      </div>
    </section>
  );
};

export default PageTopHeading;
