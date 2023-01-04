import React, {useState} from "react";
import Loader from "../Loader";

const TestingDocuments = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [loading,setLoading]=useState(false)

  const onHandleFile = async (event) => {
    setFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
    await onSubmitFile()
  };
  const onSubmitFile = async (event) => {
    setLoading(!loading)

    const form = new FormData();
    const blob = new Blob([event.target.files[0]], {
      type: "text/plain",
    });
    console.log("blob", blob)

    form.append("file", blob);

    const dateNow = JSON.stringify(new Date());

    const headerDataForUpload = {
      autorename: false,
      mode: "add",
      mute: false,
      path: `/oef-hiv-docs/${event.target.files[0].name}`,
      strict_conflict: false,
    };

    try {
      const tokenResponse = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/access_token`
      );
      const token = await tokenResponse.json();
      const response = await fetch(
        "https://content.dropboxapi.com/2/files/uploaddd",
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
        setLoading(false)
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
  return (
    <>
      <div className="bg-black py-5 grid items-center justify-center justify-items-center">
                
                {loading && <div className="flex justify-center"><Loader/></div>}
                 <h2 className="mb-5 font-bold text-white uppercase">
                   Upload documents 
                 </h2>
                 <input type="file" id="upload" 
                 hidden
                 name="file"
                 onChange={(event) => onSubmitFile(event)}
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
    </>
  );
};

export default TestingDocuments;
