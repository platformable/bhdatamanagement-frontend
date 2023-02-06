import React, { useState } from "react";
import Loader from "../Loader";
const PictureUploadDropbox = ({path, title, FileUploadedMessage, index}) => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [loader, setLoader] = useState(false);


  const onSubmitFile = async (event) => {
    setLoader(!loader);
    setFileName(event.target.files[0].name)


    const form = new FormData();
    const blob = new Blob([event.target.files[0]], {
      type: "text/plain",
    });
    console.log("blob", blob);

    form.append("file", blob);

    const dateNow = JSON.stringify(new Date());

    const headerDataForUpload = {
      autorename: false,
      mode: "add",
      mute: false,
      path: `${path}/Images/${event.target.files[0].name}`,
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
      // setLoader(false)
      console.log("response", response);
      if (response.status === 200) {
        const data = await response.json();
        setLoader(false);
        FileUploadedMessage(fileName);
        setFile(null);
        setFileName("");
        console.log("saved");
        // setUploadSuccess(!uploadSuccess)
      }
    } catch (error) {
      setLoader(false);
      // setError(error.message)
      console.error("upload error", error);
    }
  };
  return (
    <div>
     <div className="question-body">
            <h2 className="font-black">{title}</h2>
            <p>You can upload more than one image - please upload one image at a time</p>
            <input
              type="file"
              id={`image${index}`}
              hidden
              name="file"
              onChange={(event) => onSubmitFile(event)}
              accept=".txt,.pdf,.csv,.xlsx,.jpg,.png,.jpeg,.docx"
            />
            <section className="flex justify-start gap-5 items-center mt-7">
              <label
                for={`image${index}`}
                className="text-white flex items-center gap-3 bg-black px-5 py-2 rounded-md cursor-pointer "
              >
                Choose file
                {loader && <Loader />}
              </label>
              {fileName ? (
                <p className="text-center overflow-hidden">{fileName}</p>
              ) : (
                <p className="text-center overflow-hidden">No file chosen</p>
              )}
            </section>
          </div>
    </div>
  );
};

export default PictureUploadDropbox;
