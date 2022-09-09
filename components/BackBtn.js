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
       <p
          className="p-5 flex bg-black gap-x-2 items-center font-black text-white rounded"
          id=""
        >
          Back
        </p>
    </button>
  );
};

export default BackBtn;
