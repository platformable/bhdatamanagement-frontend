import React from "react";
import Link from "next/link";
import Image from "next/image";
import DashboardBtn from "./DashboardBtn";
import BackBtn from "./BackBtn";

const PageTopHeading = ({ pageTitle,dashboardBtn,backBtn }) => {
  return (
    <section className="py-5 bg-white">
      <div className="container mx-auto ">
        <div className="flex btn-dashboard gap-x-4">
          {backBtn && <BackBtn/>}
          {dashboardBtn && <DashboardBtn />} 
        </div>
        <div className="search-box grid md:grid-cols-2 grid-cols-1  items-center my-5 space-between">
          <h2 className="font-black">{pageTitle}</h2>
        </div>
      </div>
    </section>
  );
};

export default PageTopHeading;
