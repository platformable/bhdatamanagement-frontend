import React, { useState, useEffect } from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Layout from "../../../../components/Layout";
import PageTopHeading from "../../../../components/PageTopHeading";
// import { ToastContainer,toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import TopEventsInfo from "../../../../components/TopEventsInfo";
import DropboxDocumentUpload from "../../../../components/DropboxDocumentUpload";
import ResponseStatusModal from "../../../../components/ResponseStatusModal";

export const Upload_event = ({ event }) => {
  const [showStatusUpload, setShowStatusUpload] = useState(false);
  const [msgStatusUpload, setMsgStatusUpload] = useState({});

  // console.log("event",event)

  const FileUploadedMessage = (fileName) => {
    // toast.success("File saved to dropbox", {
    //   position: toast.POSITION.TOP_CENTER,
    // });
    setMsgStatusUpload({ statusMessage: "Upload has been successful" });
    setShowStatusUpload(true);
  };

  return (
    <>
      <Layout showStatusHeader={true}>
        <PageTopHeading
          backBtn={true}
          dashboardBtn={true}
          pageTitle={"Upload YIP event documents"}
        />

        <TopEventsInfo
          event={event[0]}
          editPath={`/oef/yip/${event?.eventid || event?.id}/edit`}
        />

        <section className="md:px-0 px-0 md:px-0">
          <div className="container mx-auto my-10">
            <h1 className="font-black mb-1">
              Upload your documents to the following events folders
            </h1>
            <DropboxDocumentUpload
              path={`${event?.folderpath}/Documents`}
              title=""
              FileUploadedMessage={FileUploadedMessage}
              forValue="1"
            />
          </div>

          <div className="container mx-auto my-10">
            <h1 className="font-black mb-1">
              Upload your images to the following events folders
            </h1>
            <DropboxDocumentUpload
              path={`${event?.folderpath}/Images`}
              title=""
              FileUploadedMessage={FileUploadedMessage}
              forValue="2"
            />
          </div>
        </section>
      </Layout>
      {showStatusUpload && (
        <ResponseStatusModal
          responseStatus={msgStatusUpload}
          setShowResponseStatus={setShowStatusUpload}
        />
      )}
    </>
  );
};

export default Upload_event;

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const { id } = ctx.params;
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/events/${id}`
    );
    const event = await res.json();

    return {
      props: {
        event: event,
      },
    };
  },
});
