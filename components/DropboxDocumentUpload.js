import React, {useState} from 'react';
import Loader from './Loader';

const DropboxDocumentUpload = ({path, title, FileUploadedMessage, forValue}) => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);

  
  const onSubmitFile = async (event) => {
    setLoading(!loading);
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
      path: `${path}/${event.target.files[0].name}`,
      strict_conflict: false,
    };
    console.log("Documents", path, fileName)

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
        FileUploadedMessage(fileName);
        setFile(null);
        setFileName("");
        console.log("saved");
        // setUploadSuccess(!uploadSuccess)
      }
    } catch (error) {
      setLoading(false)
      // setError(error.message)
      console.error("upload error", error);
    }
  };
  return (
    
    <div>
      <div className="">
          <h2 className="font-black">
          {title}
          </h2>
          <p>You can upload more than one file - please upload one file at a time</p>
          
          <input
            type="file"
            id={`document${forValue}`}
            hidden
            name="file"
            onChange={(event) => onSubmitFile(event)}
            accept=".txt,.pdf,.csv,.xlsx,.jpg,.png,.jpeg,.docx"
          />
          <section className="flex justify-start gap-5 items-center mt-7 mr-2">
            <label
              for={`document${forValue}`}
              className="text-white bg-black px-5 flex items-center gap-3 py-2 rounded-md cursor-pointer "
            >
              Choose file
              {loading && (
              <Loader />
          )}
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
}

export default DropboxDocumentUpload