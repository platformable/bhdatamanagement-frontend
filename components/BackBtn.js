import React from "react";
import Image from "next/image";

import { useRouter } from 'next/router';

const BackBtn = () => {
    const router= useRouter()
  return (
    <button
      onClick={() => router.back()}
      className="bg-light-violet rounded px-2 mr-2"
    >
      <a className="pr-5 py-2 flex  items-center font-bold" id="myBtn">
        <Image src="/main/back_button_icon.svg" width={22} height={20} />
        <p className="ml-2 font-black">Back</p>
      </a>
    </button>
  );
};

export default BackBtn;
