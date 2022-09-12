import React from "react";
import Link from "next/link";
import Image from "next/image";


const DashboardBtn = () => {
  return (
    <button>
      <Link href="/dashboard">
        <div
          className="p-5 md:text-lg bg-black text-center font-black text-white rounded cursor-pointer"
          id=""
        >
      {/*     <Image src="/supervisor/dashboard_icon.svg" width={22} height={20} /> */}
          Dashboard
        </div>
      </Link>
    </button>
  );
};

export default DashboardBtn;
