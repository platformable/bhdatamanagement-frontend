import React from "react";
import Image from "next/image";

import { useRouter } from 'next/router';

const BackBtn = () => {
    const router= useRouter()
  return (
    <button
      onClick={() => router.back()}
      className="bg-black text-white rounded px-5 py-2 md:px-12 md:py-5 cursor-pointer"
    >
       <p className="flex bg-black gap-x-2 items-center font-black text-white rounded">
       Back

       </p>
       
    </button>
  );
};

export default BackBtn;
