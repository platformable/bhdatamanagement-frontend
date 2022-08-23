import React from "react";
import Link from "next/link";
import Image from "next/image";


const DashboardBtn = () => {
  return (
    <div>
      <Link href="/dashboard">
        <a
          className="px-2 py-2  flex bg-black gap-x-2 items-center font-black text-white rounded"
          id=""
        >
      {/*     <Image src="/supervisor/dashboard_icon.svg" width={22} height={20} /> */}
          Dashboard
        </a>
      </Link>
    </div>
  );
};

export default DashboardBtn;
