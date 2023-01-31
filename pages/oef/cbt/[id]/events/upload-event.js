import React, { useState, useEffect } from "react";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Layout from "../../../../../components/Layout";
import PageTopHeading from "../../../../../components/PageTopHeading";
import Loader from "../../../../../components/Loader";
import Link from "next/link";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TopEventsInfo from "../../../../../components/TopEventsInfo";
import DropboxDocumentUpload from "../../../../../components/DropboxDocumentUpload";

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

      <TopEventsInfo event={event}/>

      <section className="md:px-0 px-0 md:px-0">
        <div className="container mx-auto my-10">
          <h1 className="font-black mb-1">
            Upload your documents to the following events folders
          </h1>
          <DropboxDocumentUpload />
        </div>

        <div className="container mx-auto my-10">
          <h1 className="font-black mb-1">
            Upload your images to the following events folders
          </h1>
          <DropboxDocumentUpload />
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
