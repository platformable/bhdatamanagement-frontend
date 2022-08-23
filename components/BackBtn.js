import React from "react";
import Image from "next/image";

import { useRouter } from 'next/router';

const BackBtn = () => {
    const router= useRouter()
  return (
    <button
      onClick={() => router.back()}
      className="bg-black text-white rounded px-2"
    >
       <a
          className="px-2 py-2  flex bg-black gap-x-2 items-center font-black text-white rounded"
          id=""
        >
          Back
        </a>
    </button>
  );
};

export default BackBtn;
