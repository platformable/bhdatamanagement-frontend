import React from 'react'
import styles from "../styles/Home.module.css";
import { useRouter } from 'next/router'
import axios from 'axios'

import deleteIcon from '../public/delete-icon.svg'
import editIcon from '../public/edit-icon.svg'
import Image from 'next/image';


export default function UserListRow({setSelectedEntity,authorizeduser,setSelectedUser,setShowEditUserModal,showEditUserModal,index,showDeleteUsermodal, setShowDeleteUserModal}) {
  const {name,lastname,role,email,isactive,dateaccountactivated,datelastlogin,userid,id} = authorizeduser
  const router = useRouter()

  const handleSelectedUser =(selectedUser, action)=>{
    setSelectedEntity("users")
    setSelectedUser(authorizeduser)
    action === 'EDIT'?
    setShowEditUserModal(!showEditUserModal):
    setShowDeleteUserModal(!showDeleteUsermodal)
  }

  return (
    <> 

    <div className="dashboardActiveUsersListHeadRow  hidden border  rounded-md py-4 px-5 my-1 bg-white">
                <div className="head-row flex justify-start items-center ">
                  <p className="text-xs md:text-base text-left">{name}</p>
                </div>
                <div className="head-row flex justify-start items-center ">
                  <p className="text-xs md:text-base text-left">{lastname}</p>
                </div>
                 <div className="head-row flex justify-start items-center">
                  <p className="text-xs md:text-base text-left">{role}</p>
                </div>  
                <div className="head-row flex justify-start items-center overflow-x-hidden">
                  <p className="text-xs md:text-base text-left ">{email ? email : "-"}</p>
                </div>
                <div className="head-row items-center">
                  <p className="text-xs md:text-base text-center">{dateaccountactivated?dateaccountactivated.split('T')[0]:"-"}</p>
                </div>
                <div className="head-row items-center">
                  <p className="text-xs md:text-base text-center">{datelastlogin?datelastlogin.split('T')[0]:"-"}</p>
                </div>
                <div className="head-row flex justify-center items-center">
                  <p className="text-xs md:text-base text-left flex cursor-pointer" 
                   onClick={()=>router.push(`/users/${id}/edit`)}>
                    <Image src={editIcon} alt="edit-icon"></Image>
                  </p>
                </div>
                <div className="head-row flex justify-center items-center">
                  <p className="text-left flex cursor-pointer" onClick={()=>handleSelectedUser(authorizeduser, 'DELETE')}>
                  <Image src={deleteIcon} alt="delete-icon"></Image>
                  </p>
                </div>
              </div>
    </>
  )
}
