import React from "react";
import Image from "next/image";

import { useRouter } from 'next/router';

const BackBtn = () => {
    const router= useRouter()
  return (
    <button
      onClick={() => router.back()}
      className="bg-black p-5 text-center text-white font-black rounded px-2 cursor-pointer md:text-lg"
    >
       
          Back
       
    </button>
  );
};

export default BackBtn;
