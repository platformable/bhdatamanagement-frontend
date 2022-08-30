import React, {useState,useEffect} from 'react'
import {  useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Layout from '../../../components/Layout';
import PageTopHeading from "../../../components/PageTopHeading";

import Link from "next/link";


export const Upload_event = ({event}) => {
  const [file, setFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [fileName, setFileName] = useState("");
  console.log("event",event)

  const onSubmitFile = async(e) => {
  
    // setLoading(true)
    const form = new FormData();
    const blob = new Blob([file], {
        type: "text/plain"
    })
    form.append('file', blob);  
    const fileFormat= fileName.split(".")[1];

    const dateNow = JSON.stringify(new Date());
   
    const headerDataForUpload = {
        "autorename": false,
        "mode": "add",
        "mute": false,
        "path": `${event?.folderpath}/${fileName}`,
        "strict_conflict": false
    };
    
    try {
        const tokenResponse = await fetch (`${process.env.NEXT_PUBLIC_SERVER_URL}/access_token`)
        const token = await tokenResponse.json()
        const response = await fetch("https://content.dropboxapi.com/2/files/upload", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token.access_token}`,
                "Content-Type":"application/octet-stream",
                'Dropbox-API-Arg': JSON.stringify(headerDataForUpload),
          },
          body: blob

        })
        // setLoading(false)
        console.log("response",response)
        if(response.status === 200) {
   
            const data = await response.json();
            setFile(null);
            setFileName("")
            console.log("saved")
            // setUploadSuccess(!uploadSuccess)
        }
    } catch(error) {
        // setLoading(false)
        // setError(error.message)
        console.error("upload error",error)
    };
};

const onSubmitImageFile = async(e) => {
  
  // setLoading(true)
  const form = new FormData();
  const blob = new Blob([imageFile], {
      type: "text/plain"
  })
  form.append('file', blob);  
  const fileFormat= fileName.split(".")[1];

  const dateNow = JSON.stringify(new Date());
 
  const headerDataForUpload = {
      "autorename": false,
      "mode": "add",
      "mute": false,
      "path": `${event?.folderpath}/Images/${fileName}`,
      "strict_conflict": false
  };
  
  try {
      const tokenResponse = await fetch (`${process.env.NEXT_PUBLIC_SERVER_URL}/access_token`)
      const token = await tokenResponse.json()
      const response = await fetch("https://content.dropboxapi.com/2/files/upload", {
          method: "POST",
          headers: {
              "Authorization": `Bearer ${token.access_token}`,
              "Content-Type":"application/octet-stream",
              'Dropbox-API-Arg': JSON.stringify(headerDataForUpload),
        },
        body: blob

      })
      // setLoading(false)
      console.log("response",response)
      if(response.status === 200) {
 
          const data = await response.json();
          setFile(null);
          setFileName("")
          console.log("saved")
          // setUploadSuccess(!uploadSuccess)
      }
  } catch(error) {
      // setLoading(false)
      // setError(error.message)
      console.error("upload error",error)
  };
};
const onHandleFile = (event) => {
  console.log("handle file",event)
    // setUploadSuccess(false)
    setFile(event.target.files[0])
    setFileName(event.target.files[0].name)
}

const onHandleImageFile = (event) => {
    // setUploadSuccess(false)
    setImageFile(event.target.files[0])
    setFileName(event.target.files[0].name)
}

console.log("file:",file)
console.log("fileName:",fileName)

useEffect(()=>{
  file?  onSubmitFile():""
  imageFile?  onSubmitImageFile():""
  },[file,imageFile])
  return (
   <Layout>
    <PageTopHeading backBtn={true} dashboardBtn={true} pageTitle={"Upload Event Documents"}/>

    <div className="container mx-auto border-black rounded p-5">
      <div className="flex justify-between">
        <div className="w-4/5 ">
          <h3 className="font-black">Event name</h3>
          <input type="text" className="bg-gray-50 w-4/5 rounded-lg" value={event?.eventname} disabled/>
        </div>
        <div className="w-1/5  flex justify-end">
          <div className="">
          <h3 className="font-black">Event name</h3>
          <input type="text" className="px-5 rounded-lg" value={new Date(event?.eventdate).toLocaleDateString('en-US')} disabled/>
          
          </div>
        </div>
      </div>
      <div className="flex justify-center my-5">
                <Link href={`/events/${event?.id}/edit`}>

                  <button className="bg-black text-white rounded px-2 mr-2 ">

                    <a
                      className="px-10 py-2 flex  justify-center items-center font-bold"
                      id="myBtn"
                    >
                      {/* <img src="/events/edit_event_icon_button.svg" alt="" /> */}
                      <p className="ml-2 font-black">Edit event</p>
                    </a>
                  </button>
                </Link>
              </div>


              
    </div>
    

    <div className="container mx-auto my-5">
        <div>
          <h3 className="text-center">Upload your documents to the followin events folders</h3>
        </div>
    </div>

    <div className="container mx-auto">
    <div className="text-center mr-5 rounded bg-white  text-center   mb-2 rounded-xl flex justify-center gap-x-5">
  
  <button id="myBtn"
>
    <div className="border-black rounded p-5" >
      <div className="flex justify-center ">
       {/*  <img
          src="/events/copy_link_icon.svg"
          alt=""
          width={85}
        /> */}
      </div>
      <p className="my-5 font-bold text-black uppercase">
       Upload documents and flyers
      </p>
      <input 
        type='file'
        name="file"
        onChange={(event) => onHandleFile(event)}
        accept=".txt,.pdf,.csv,.xlsx,.jpg,.png,.jpeg,.docx"
      />

    </div>{" "}
  </button>


  <button id="myBtn"
>
    <div className="border-black rounded p-5" >
      <div className="flex justify-center ">
       {/*  <img
          src="/events/copy_link_icon.svg"
          alt=""
          width={85}
        /> */}
      </div>
      <p className="my-5 font-bold text-black uppercase">
       Upload event photos
      </p>
      <input 
        type='file'
        name="file"
        onChange={(event) => onHandleImageFile(event)}
        accept=".jpeg,.jpg,.png"
      />
    </div>{" "}
  </button>

</div>



    </div>
  
  </Layout>
  )
}

export default Upload_event

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const { id } = ctx.params;
    const [event, programs, locationTypes, areasOfFocus, eventTypes] =
      await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/events/${id}`)
          .then((r) => r.json())
          .then((response) => response[0])
          .catch((e)=>console.log(e)),
     
      ]);
    return {
      props: {
        event: event,
      },
    };
  },
});