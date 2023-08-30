import React, { useState } from "react";
import axios from 'axios'
import { useRouter } from 'next/router'
import Loader from "./Loader";

export default function EditAuthUserModal({ selectedUser, setShowEditAuthUserModal, showEditAuthUserModal }) {
  const router = useRouter()
  const [userData, setUserData] = useState(selectedUser || {
    id: selectedUser.id,
    name: "",
    lastname: "",
    email: "",
    role: "",
    isactive: ''
  })
// console.log("userData", userData)
  const [saving, setSaving] = useState(false)

  const EditUser = (user) => {
    const isEmpty = Object.values(userData).some(value => !value)

    if(!isEmpty) {
      setSaving(!saving)
      axios.put(`${process.env.NEXT_PUBLIC_SERVER_URL}/authorizedusers`, userData)
      .then(function (response) {
        setShowEditAuthUserModal(!showEditAuthUserModal)
        router.reload()
      })
      .catch(function (error) {
        setSaving(false)
        console.log("client error", error);
      });
    }
   
  }



  return (
    <>
      <div className="modal">
        <div className="mt-8 relative max-w-sm mx-auto bg-white p-10 rounded-md">
          <button
            className="absolute  top-0 right-0"
            onClick={() => setShowEditAuthUserModal(!showEditAuthUserModal)}
          >
            <img src="/close-window-icon.svg" alt="close-window" title="close-window_" className="rounded-tr"  width="20" /> 
          </button>
          <div className="grid grid-cols-1 gap-6">
            <div className="flex ml-2.5 items-end">
              {/* <img src="/edit-user-icon.svg" className="mr-3" alt="" width="50" /> */}
              <h2 className="font-black">Edit Authorized User</h2>
            </div>
            <label className="block">
              <span className="ml-1 font-semibold">First name</span>
              <input
                type="text"
                className="mt-1 block w-full bg-[#f6e89e] rounded-md  p-2 pl-3 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Taylor"
                value={userData.name}
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
              />
            </label>
            <label className="block">
              <span className="ml-1 font-semibold">Last name</span>
              <input
                type="text"
                className="mt-1 block w-full bg-[#f6e89e] rounded-md p-2 pl-3 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Smith"
                value={userData.lastname}
                onChange={(e) =>
                  setUserData({ ...userData, lastname: e.target.value })
                }
              />
            </label>
            <label className="block">
              <span className="ml-1 font-semibold">Email address</span>
              <input
                type="email"
                className="mt-1 block w-full bg-[#f6e89e] rounded-md p-2 pl-3 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="taylor@example.com"
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
            </label>
            {/*  <label className="block">
            <span className="text-gray-700">When is your event?</span>
            <input
              type="date"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </label> */}
            <label className="block">
              <span className="ml-1 font-semibold">User role</span>
              <select
                value={userData.role}
                onChange={(e) =>
                  setUserData({ ...userData, role: e.target.value })
                }
                className="select-add-edit-supervisor block w-full mt-1 text-black rounded-md p-2 border-grey shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option value="Program Worker">Program Worker</option>
                <option value="Intern">Intern</option>
                <option value="Partner">Partner</option>
                <option value="Supervisor">Supervisor</option>

              </select>
            </label>

            <label className="block">
              <span className="ml-1 font-semibold">Active / No active</span>
              <select
                value={userData.isactive}
                onChange={(e) =>
                     setUserData({ ...userData, isactive: e.target.value })
                }
                className="select-add-edit-supervisor block w-full mt-1  text-black rounded-md p-2 border-grey shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option value="Active">Active</option>
                <option value="No Active">No Active</option>
              </select>
            </label>
            <div className="block">
              <div className="mt-2">
                <div className="flex justify-center ">
                  <button
                    className="px-4  py-2 mr-3 font-medium bg-black text-white hover:bg-green-500 text-sm flex shadow-xl rounded-md"
                    onClick={() => {
                      EditUser(selectedUser);
                      setSaving(!saving);
                    }}
                  >
                    {/* {saving ? (
                      <Loader />
                    ) : (
                      <img src="/update-icon.svg" className="mr-2" alt="" width="18" />


                    )} */}
                    Update
                  </button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div id="myModal" className="modal fade">
        <div className="modal-content rounded-xl bg-red-500">
          <span className="close" onClick={() => setShowModal(!showModal)}>
            &times;
          </span>
          <p className="font-black">Some text in the Modal..</p>
        </div>
      </div> */}
    </>
  );
}