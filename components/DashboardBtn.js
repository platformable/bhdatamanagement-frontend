import React from "react";
import { useRouter } from 'next/router';
import { useUser, getSession } from '@auth0/nextjs-auth0';

const DashboardBtn = () => {
  const router= useRouter()
  const { user, error, isLoading } = useUser();

  const loggedUserRole = user && user['https://lanuevatest.herokuapp.com/roles']

  return (
    <button
    onClick={() =>loggedUserRole !=='Supervisor' ?  router.push("/chooseProgram"): router.push("/dashboard")}
    className="bg-black text-white rounded px-5 py-2 md:px-12 md:py-5 cursor-pointer"
  >
     <p className="flex bg-black gap-x-2 items-center font-black text-white rounded">
     Home

     </p>
     
  </button>
  );
};

export default DashboardBtn;
