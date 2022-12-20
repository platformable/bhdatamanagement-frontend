import React,{useState} from 'react'
import Layout from '../../../components/Layout'
import PageTopHeading from '../../../components/PageTopHeading'
import axios from 'axios'
import { useRouter } from 'next/router'
import Loader from "../../../components/Loader";
import {  withPageAuthRequired } from "@auth0/nextjs-auth0";


export default function EditUser({data, user}) {
console.log("user", data);
    const router = useRouter()
    const [userData,setUserData]= useState({
      name:data?.name||"",
      lastname:data?.lastname||"",
      email:data?.email || "",
      role:"Program Worker"||"",
      isactive: data?.isactive||"",
      userFbo:"",
      userAccessiblePrograms:""
    })

    const organizationOptions= [
        {
            id:1,
            name:'Amity Baptist Church'
        },
        {
            id:2,
            name:'Bethany Baptist Church (Manhattan)'
        },
        {
            id:2,
            name:'Bethany Baptist Church (Manhattan)'
        },
        {
            id:3,
            name:'Christ Apostolic Church Int. (Bronx)'
        },
        {
            id:4,
            name:'Community Church of Christ'
        }

    ]

    const programs=[
        {
            id:1,
            name:'OEF'
        },
        {
            id:2,
            name:'NYS CMP'
        }
    ]

    const [saving,setSaving] = useState(false)
    const addUser =  ()=> {
        const isEmpty = Object.values(userData).some(value => !value)
    
        if (!isEmpty) {
          setSaving(!saving)
          axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/create`,userData)
          .then(function (response) {
            setShowModal(!showModal)
            notifyMessage()
            setTimeout(()=>{
              router.reload()
            },3000)
            
          })
          .catch(function (error) {
            setSaving(false)
            console.log("Not possible to add user, try again",error);
          });
        }
        
      }
    
      console.log("userData",userData)

  return (
    <Layout showStatusHeader={true}>
      <PageTopHeading
        pageTitle={"Edit user"}
        dashboardBtn={true}
        backBtn={true}
      />

      <div className="container mx-auto">
        <div className="py-5">
          
          <div className="grid grid-cols-1 gap-6">

            <label className="block">
              <span className="ml-1 font-semibold">First name</span>
              <input
                type="text"
                className="mt-1 block  rounded-md border-grey p-2 w-60 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Taylor"
                defaultValue={userData?.name}
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
              />
            </label>
            <label className="block">
              <span className="ml-1 font-semibold">Last name</span>
              <input
                type="text"
                className="mt-1 block  rounded-md border-grey p-2 w-60 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Smith"
                defaultValue={userData?.lastname}
                onChange={(e) =>
                  setUserData({ ...userData, lastname: e.target.value })
                }
              />
            </label>
            
            <label className="block">
              <span className="ml-1 font-semibold">Email address</span>
              <input
                type="text"
                className="mt-1 block  rounded-md border-grey p-2 w-60 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="taylor@example.com"
                defaultValue={userData?.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
            </label>

            <label className="block">
              <span className="ml-1 font-semibold ">User role</span>
              <select
                onChange={(e) =>
                  setUserData({ ...userData, role: e.target.value })
                }
                className="select-add-edit-supervisor block text-[#00000065] border-black w-60 mt-1 rounded-md p-2 border-grey shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option value={null}  default>
                  Select
                </option>
                <option selected={userData?.role === "Supervisor"} value="Supervisor">Supervisor</option>
                <option selected={userData?.role === "Black Health Data Team"} value="Black Health Data Team">
                  Black Health Data Team
                </option>
                <option selected={userData?.role === "Black Health Program Worker"} value="Black Health Program Worker">Black Health Program Worker</option>
                <option selected={userData?.role === "FBO Login"} value="FBO Login">FBO Login</option>
                <option selected={userData?.role === "FBO Data Entry Specialist"} value="FBO Data Entry Specialist">FBO Data Entry Specialist</option>
              </select>
            </label>


            {userData?.role==='FBO Login' || userData?.role==='FBO Data Entry Specialist' ? (
            
            <div className="grid grid-cols-1 gap-1">
              <h3 className="ml-1 font-black">Organizations</h3>
              <p className="ml-1 mb-5">Choose on option</p>
              {organizationOptions &&
                organizationOptions.map((option, index) => {
                  return (
                    <label className="flex items-center  gap-x-5" key={index}>
                      <input
                        type="radio"
                        name="onlineInPersonEventType"
                        className=""
                        id={option.id}
                        onChange={(e)=>setUserData({...userData,userFbo:e.target.value})}
                        value={option.name}
                      />
                      <p className="">{option.name}</p>
                    </label>
                  );
                })}
            </div>)
            
            :null}

            {userData?.role==='Program Worker' ? (
            
            <div className="grid grid-cols-1 gap-1">
              <h3 className="ml-1 font-black">Black Health Program Worker</h3>
              <p className="ml-1 mb-5">Choose Program</p>
              {programs &&
                programs.map((program, index) => {
                  return (
                    <label className="flex items-center  gap-x-5" key={index}>
                      <input
                        type="radio"
                        name="onlineInPersonEventType"
                        className=""
                        id={program.id}
                        onChange={(e)=>setUserData({...userData,userAccessiblePrograms:e.target.value})}
                        value={program.name}
                      />
                      <p className="">{program.name}</p>
                    </label>
                  );
                })}
            </div>)
            
            :null}

            

            <label className="block">
              <span className="ml-1 font-semibold">Active / No active</span>
              <select
                onChange={(e) =>
                  setUserData({ ...userData, isactive: e.target.value })
                }
                className="select-add-edit-supervisor block border-black w-60 mt-1 text-[#00000065] rounded-md p-2 border-grey shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option selected={userData?.isactive === "Active"}>Active</option>
                <option selected={userData?.isactive === "No Active"}>No Active</option>
              </select>
            </label>

            <div className="block">
              <div className="mt-2">
                <div className="flex justify-center">
                  <button
                    className="px-4 py-2 mr-3 font-medium bg-[#23D3AA]  hover:bg-green-500 text-sm flex shadow-xl rounded-md"
                    onClick={() => addUser()}
                  >
                    {saving ? (
                      <Loader />
                    ) : (
                      <img
                        src="/save-icon.svg"
                        className="mr-3"
                        alt=""
                        width="18"
                      />
                    )}
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const {id}=ctx.params
    const res = await fetch(`http://localhost:3500/users/${id}`)
    const data = await res.json()
    return { props: { data } };

  },
});