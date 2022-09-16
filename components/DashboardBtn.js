import React from "react";
import { useRouter } from 'next/router';


const DashboardBtn = () => {
  const router= useRouter()

  return (
    <button
    onClick={() => router.push("/dashboard")}
    className="bg-black text-white rounded px-12 py-5 cursor-pointer"
  >
     <p className="flex bg-black gap-x-2 items-center font-black text-white rounded">
     Home

     </p>
     
  </button>
  );
};

export default DashboardBtn;
