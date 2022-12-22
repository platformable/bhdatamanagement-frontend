import React,{useState,useEffect} from 'react'
import Layout from '../../../components/Layout'
import PageTopHeading from '../../../components/PageTopHeading'
import axios from 'axios'
import { useRouter } from 'next/router'
import Loader from "../../../components/Loader";
import { useUser, getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function edit({data,fbos}) {

  console.log("data",data)

    const router = useRouter()
    const [userData,setUserData]= useState({
      id:data.id,
      name:data.name,
      lastname:data.lastname,
      email:data.email,
      role:data.role,
      isactive: data.isactive,
      userFbo:data.userfbo,
      userAccessiblePrograms:data.useraccessibleprograms
    })
    const [program, setProgram] = useState(data?.useraccessibleprograms)
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

    const notifyMessage = () => {
      toast.success("User updated!", {
        position: toast.POSITION.TOP_CENTER,
      });
    };
    const [saving,setSaving] = useState(false)
    const addUser =  ()=> {
        const isEmpty = Object.values(userData).some(value => !value)
    
        if (!isEmpty) {
          setSaving(!saving)
          axios.put(`${process.env.NEXT_PUBLIC_SERVER_URL}/authorizedusers/`,userData)
          .then(function (response) {
            notifyMessage()
            setTimeout(()=>{
              router.push('/authorizedusers')
            },3000)
            
          })
          .catch(function (error) {
            setSaving(false)
            console.log("client error",error);
          });
        }
        
      }
    
      console.log("userData",userData)

      useEffect(() => {
        setUserData((prev)=> ({...prev, userAccessiblePrograms: program}))
      }, [program])


      const handleForm=(e)=>{
        const {value} = e.target 
        const isValueOnData=program?.includes(value)
        const filteredData=program.filter(oldValues=> oldValues != value)
        isValueOnData?
        setProgram(filteredData) :
        setProgram((previous)=>([
          ...previous,value
        ]))
      }
  return (
    <Layout showStatusHeader={true}>
      <ToastContainer autoClose={3000} />
      <PageTopHeading
        pageTitle={"Edit authorized user"}
        dashboardBtn={true}
        backBtn={true}
      />

      <div className="container mx-auto">
        <div className="pb-5">
          {/*     <button
                    className="absolute  top-0 right-0 "
                    onClick={() => setShowModal(!showModal)}
                   >
                   <img src="/close-window-icon.svg" className="rounded-tr" alt="" width="20"/>
                  </button> */}
          <div className="grid grid-cols-1 gap-6">
            {/*   <div className="flex ml-2.5 items-end">
            <img src="/add-new-user-icon.svg" className="mr-3" alt="" width="50"/>
            <h2 className="font-black">Add New User</h2>
            </div> */}
            <label className="block">
              <span className="ml-1 font-semibold">First name</span>
              <input
                type="text"
                className="mt-1 block  rounded-md border-grey p-2 w-60 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Taylor"
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
                value={userData.name}
              />
            </label>
            <label className="block">
              <span className="ml-1 font-semibold">Last name</span>
              <input
                type="text"
                className="mt-1 block  rounded-md border-grey p-2 w-60 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Smith"
                onChange={(e) =>
                  setUserData({ ...userData, lastname: e.target.value })
                }
                value={userData.lastname}
              />
            </label>
            {/*   <label className="block">
              <span className="ml-1 font-semibold">Email address</span>
              <input
                type="email"
                className="mt-1 block  rounded-md border-grey p-2 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="taylor@example.com"
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
            </label> */}
            <label className="block">
              <span className="ml-1 font-semibold">Email address</span>
              <input
                type="text"
                className="mt-1 block  rounded-md border-grey p-2 w-60 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="taylor@example.com"
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                value={userData.email}
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
                <option value={userData.role}  default>
                {userData.role}
                </option>
                {userData.role==='Supervisor'?null:<option value="Supervisor">Supervisor</option>}
                {userData.role==='Program Worker'?null:<option value="Program Worker">Program Worker</option>}
                {userData.role==='Data Team'?null:  <option value="Data Team">Data Team</option>}
                {userData.role==='Intern'?null: <option value="Intern">Intern</option>}
              </select>
            </label>

      

            {userData?.role==='FBO Login' || userData?.role==='FBO Data Entry Specialist' ? (
            
            <div className="grid grid-cols-1 gap-1">
              <h3 className="ml-1 font-black">Organizations</h3>
              <p className="ml-1 mb-5">Choose on option</p>
              {fbos &&
                fbos.map((option, index) => {
                  return (
                    <label className="flex items-center  gap-x-5" key={index}>
                      <input
                        type="radio"
                        name=""
                        className=""
                        id={option.id}
                        onChange={(e)=>setUserData({...userData,userFbo:e.target.value})}
                        value={option.namefbo}
                        checked={userData.userFbo===option.namefbo?true:false}
                      />
                      <p className="">{option.namefbo}</p>
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
                  console.log('program', program)
                  return (
                    <label className="flex items-center  gap-x-5" key={index}>
                      <input
                        type="checkbox"
                        name="onlineInPersonEventType"
                        className=""
                        id={program.id}
                        onChange={handleForm}
                        value={program.name}
                        defaultChecked={userData.userAccessiblePrograms.includes(program.name) ? 'checked' : ""}
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
               value={userData.isactive}
                onChange={(e) =>
                  setUserData({ ...userData, isactive: e.target.value })
                }
                className="select-add-edit-supervisor block border-black w-60 mt-1 text-[#00000065] rounded-md p-2 border-grey shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option>Active</option>
                <option>No Active</option>
              </select>
            </label>

            <div className="block">
              <div className="mt-2">
                <div className="flex justify-center">
                  <button
                    className="px-4  py-2 mr-3 font-medium bg-[#23D3AA]  hover:bg-green-500 text-sm flex shadow-xl rounded-md"
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
    const {id} =ctx.params
    const [data,fbos] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/authorizedusers/${id}`).then((r) =>
        r.json()
      ),
      fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/fbos`).then((r) =>
          r.json()
        ),
    ]);
    return { props: { data: data,fbos:fbos } };

    /*  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/clients`);
    const data = await res.json();
    return { props: { data } }; */
  },
});