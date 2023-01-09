import React, { useState } from "react";
import Loader from "../Loader";
const PictureUploadDropbox = ({path}) => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);

  const titles = [
    "Upload an event picture here:",
    "Upload another event picture",
    "Upload another event picture",
  ];

  const onSubmitFile = async (event) => {
    setLoading(!loading);

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
      path: `${path}/${event.target.files[0].name}`,
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
        setLoading(false);
        notifyMessage(fileName);
        setFile(null);
        setFileName("");
        console.log("saved");
        // setUploadSuccess(!uploadSuccess)
      }
    } catch (error) {
      setLoading(false);
      // setError(error.message)
      console.error("upload error", error);
    }
  };
  return (
    <div>
      {titles?.map((title) => (
        <>
          <div className="question-body">
            <h2 className="font-black">{title}</h2>

            <input
              type="file"
              id="upload"
              hidden
              name="file"
              onChange={(event) => onSubmitFile(event)}
              accept=".txt,.pdf,.csv,.xlsx,.jpg,.png,.jpeg,.docx"
            />
            <section className="flex justify-start gap-5 items-center mt-7">
              <label
                for="upload"
                className="text-white bg-black px-5 py-2 rounded-md cursor-pointer "
              >
                Choose file
                {loading && <Loader />}
              </label>
              {file ? (
                <p className="text-center overflow-hidden">{file.name}</p>
              ) : (
                <p className="text-center overflow-hidden">No file chosen</p>
              )}
            </section>
          </div>
        </>
      ))}
    </div>
  );
};

export default PictureUploadDropbox;
