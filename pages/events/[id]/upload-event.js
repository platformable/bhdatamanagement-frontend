import React, { useState, useEffect } from "react";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Layout from "../../../components/Layout";
import PageTopHeading from "../../../components/PageTopHeading";
import Loader from "../../../components/Loader";
import Link from "next/link";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TopEventsInfo from "../../../components/TopEventsInfo";

export const Upload_event = ({ event }) => {
  const [file, setFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [loadingFile,setLoadingFile]=useState(false)
  const [loadingImgFile,setLoadingImgFile]=useState(false)

  console.log("event",event)

  const onSubmitFile = async (e) => {
    setLoadingFile(!loadingFile)
    const form = new FormData();
    const blob = new Blob([file], {
      type: "text/plain",
    });
    form.append("file", blob);
    const fileFormat = fileName.split(".")[1];

    const dateNow = JSON.stringify(new Date());

    const headerDataForUpload = {
      autorename: false,
      mode: "add",
      mute: false,
      path: `/data governance app/events/nys cmp/${event.eventname}-${event.eventdate.split('T')[0]}/${fileName}`,
      strict_conflict: false,
    };

    try {
      const tokenResponse = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/access_token`
      );
      const token = await tokenResponse.json();
      const response = await fetch(
        "https://content.dropboxapi.com/2/files/upload",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token.access_token}`,
            "Content-Type": "application/octet-stream",
            "Dropbox-API-Arg": JSON.stringify(headerDataForUpload),
          },
          body: blob,
        }
      );
      // setLoading(false)
      console.log("response", response);
      if (response.status === 200) {
        const data = await response.json();
        setLoadingFile(false)
        notifyMessage(fileName);
        setFile(null);
        setFileName("");
        console.log("saved");
        // setUploadSuccess(!uploadSuccess)
      }
    } catch (error) {
      // setLoading(false)
      // setError(error.message)
      console.error("upload error", error);
    }
  };

  const onSubmitImageFile = async (e) => {
    setLoadingImgFile(!loadingFile)
    const form = new FormData();
    const blob = new Blob([imageFile], {
      type: "text/plain",
    });
    form.append("file", blob);
    const fileFormat = fileName.split(".")[1];

    const dateNow = JSON.stringify(new Date());

    const headerDataForUpload = {
      autorename: false,
      mode: "add",
      mute: false,
      path: `/data governance app/events/nys cmp/${event.eventname}-${event.eventdate.split('T')[0]}/Images/${fileName}`,
      strict_conflict: false,
    };

    try {
      const tokenResponse = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/access_token`
      );
      const token = await tokenResponse.json();
      const response = await fetch(
        "https://content.dropboxapi.com/2/files/upload",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token.access_token}`,
            "Content-Type": "application/octet-stream",
            "Dropbox-API-Arg": JSON.stringify(headerDataForUpload),
          },
          body: blob,
        }
      );
      // setLoading(false)

      if (response.status === 200) {
        const data = await response.json();
        setLoadingImgFile(false)
        notifyMessage(fileName);
        setFile(null);
        setFileName("");
        console.log("saved");
        // setUploadSuccess(!uploadSuccess)
      }
    } catch (error) {
      // setLoading(false)
      // setError(error.message)
      console.error("upload error", error);
    }
  };
  const onHandleFile = (event) => {
    // setUploadSuccess(false)
    setFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
  };

  const onHandleImageFile = (event) => {
    // setUploadSuccess(false)
    setImageFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
  };
  const notifyMessage = (filename) => {
    toast.success(filename + " has been saved to the events folder", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  // useEffect(() => {
  //   file ? onSubmitFile() : "";
  //   imageFile ? onSubmitImageFile() : "";
  // }, [file, imageFile]);

  console.log("imageFile",imageFile)

  return (
    <Layout showStatusHeader={true}>
      <ToastContainer autoClose={1500} />
      <PageTopHeading
        backBtn={true}
        dashboardBtn={true}
        pageTitle={"Upload event documents"}
      />

      <TopEventsInfo event={event} editPath={`/events/${event?.eventid || event?.id}/nys_cmp/edit`}/>

      <section className="px-5 md:px-0">
        <div className="container mx-auto my-10">
          <h1 className="font-black mb-1">
            Upload your documents to the following events folders
          </h1>
          <p>Click the choose button and choose the file from your computer, then press the save button. Files are saved one at a time.</p>
        </div>

        <div className="container mx-auto">
          <div className="text-center mb-7 rounded-xl  md:no-wrap md:justify-center  grid gap-y-10 lg:gap-x-40 xl:grid-cols-2 md:gap-y-10">
            <div
              className="border-black  shadow-lg rounded grid"
              style={{ gridTemplateColumns: "2fr 1fr" }}
            >
              <div className="bg-black py-5 grid items-center justify-center justify-items-center">
                
               {loadingFile && <div className="flex justify-center"><Loader/></div>}
                <h2 className="mb-5 font-bold text-white uppercase">
                  Upload documents 
                </h2>
                <input type="file" id="upload" 
                hidden
                name="file"
                onChange={(event) => onHandleFile(event)}
                accept=".txt,.pdf,.csv,.xlsx,.jpg,.png,.jpeg,.docx" 
                />
                <div className="flex justify-center">
                <label
                  for="upload"
                  className="text-black bg-white px-5 py-2 rounded-md cursor-pointer "
                >
                  Choose file
                </label>
                </div>
                <br />
              {file ? <p className="text-white overflow-hidden w-4/5">{file.name}</p> : <p className="text-white overflow-hidden w-4/5">No file chosen</p>}
              </div>
              
              <div className="flex items-center justify-center md:px-0 px-5">
              <button
                type="submit"
                onClick={onSubmitFile}
                className="bg-black text-white rounded py-2 px-10"
              >
                Save
              </button>
              </div>

              {/* <h2 className="my-5 font-bold text-black uppercase">
                Upload documents
                and flyers
              </h2>
              <input
                type="file"
                name="file"
                onChange={(event) => onHandleFile(event)}
                accept=".txt,.pdf,.csv,.xlsx,.jpg,.png,.jpeg,.docx"
              />
              <button
                type="submit"
                onClick={onSubmitFile}
                className="bg-black mt-5 text-white rounded py-2 w-full"
              >
                Save
              </button> */}
            </div>









          {/* <div className="flex justify-end"> */}
            <div
              className="border-black  shadow-lg rounded grid"
              style={{ gridTemplateColumns: "2fr 1fr" }}
            >
              <div className="bg-black py-5 grid items-center justify-center justify-items-center">
              {loadingImgFile && <div className="flex justify-center"><Loader/></div>}
                <h2 className="mb-5 font-bold text-white uppercase">
                  Upload photos
                </h2>
                <input
                id="imgUpload" 
                hidden
                type="file"
                name="file"
                onChange={(event) => onHandleImageFile(event)}
                accept=".jpeg,.jpg,.png"
                />
                <div className="flex justify-center">
                <label
                  for="imgUpload"
                  className="text-black bg-white px-5 py-2 rounded-md cursor-pointer 0"
                >
                  Choose file
                </label>
                
                </div>
                <br />
                {imageFile ? <p className="text-white overflow-hidden  w-4/5">{imageFile.name}</p> : <p className="text-white overflow-hidden w-4/5">No file chosen</p>}

              </div>
              <div className="flex items-center justify-center md:px-0 px-5">
              <button
                type="submit"
                onClick={onSubmitImageFile}
                className="bg-black text-white rounded py-2 px-10"
              >
                Save
              </button>
              </div>

              {/* <h2 className="my-5 font-bold text-black uppercase">
                Upload documents
                <br /> and flyers
              </h2>
              <input
                type="file"
                name="file"
                onChange={(event) => onHandleFile(event)}
                accept=".txt,.pdf,.csv,.xlsx,.jpg,.png,.jpeg,.docx"
              />
              <button
                type="submit"
                onClick={onSubmitFile}
                className="bg-black mt-5 text-white rounded py-2 w-full"
              >
                Save
              </button> */}
            </div>   
            </div>




            {/* <div className="flex justify-end">
              <div>
              <div className="border-black w-134 shadow-lg rounded" 
              style={{ gridTemplateColumns: "2fr 1fr" }}
              >
                  <div className="bg-black">
                <h2 className="my-5 font-bold text-white uppercase">
                  Upload documents and flyers
                </h2>
                <input type="file" id="upload" 
                hidden
                name="file"
                onChange={(event) => onHandleFile(event)}
                accept=".txt,.pdf,.csv,.xlsx,.jpg,.png,.jpeg,.docx" 
                />
                <label
                  for="upload"
                  className="text-black bg-white px-5 py-2 rounded-md cursor-pointer"
                >
                  Choose file
                </label>
              </div>
              <div className="flex items-center justify-center">
              <button
                type="submit"
                onClick={onSubmitFile}
                className="bg-black text-white rounded py-2 px-10"
              >
                Save
              </button>
              </div>
                <h2 className="my-5 font-bold text-black uppercase">
                  Upload event <br />
                  photos
                </h2>
                <input
                  type="file"
                  name="file"
                  onChange={(event) => onHandleImageFile(event)}
                  accept=".jpeg,.jpg,.png"
                />
                <button
                  type="submit"
                  onClick={onSubmitImageFile}
                  className="bg-black mt-5 text-white rounded py-2 w-full"
                >
                  Save
                </button>
              </div>
              </div>
            </div> */}
        </div>
      </section>
    </Layout>
  );
};

export default Upload_event;

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const { id } = ctx.params;
    const [event, programs, locationTypes, areasOfFocus, eventTypes] =
      await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/events/${id}`)
          .then((r) => r.json())
          .then((response) => response[0])
          .catch((e) => console.log(e)),
      ]);
    return {
      props: {
        event: event,
      },
    };
  },
});
