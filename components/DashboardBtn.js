import React from "react";
import Link from "next/link";
import Image from "next/image";


const DashboardBtn = () => {
  return (
    <button>
      <Link href="/dashboard">
        <p
          className="p-5 bg-black text-center font-black text-white rounded cursor-pointer"
          id=""
        >
      {/*     <Image src="/supervisor/dashboard_icon.svg" width={22} height={20} /> */}
          Dashboard
        </p>
      </Link>
    </button>
  );
};

export default DashboardBtn;
