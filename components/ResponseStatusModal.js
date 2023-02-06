const ResponseStatusModal = ({ responseStatus, setShowResponseStatus }) => {
  return (
    <div className="modal flex items-center ">
      <div className="relative flex justify-between max-w-sm mx-auto flex flex-col items-center justify-center gap-10 bg-white p-10 rounded-md w-2/5 h-3/6">
        <button
          className="absolute  top-0 right-0"
          onClick={() => setShowResponseStatus((previous) => !previous)}
        >
          <img
            src="/close-window-icon.svg"
            alt="close-window"
            title="close-window"
            className="rounded-tr"
            width="20"
          />
        </button>
        <div></div>
        <p className="font-black text-black text-center">
          {responseStatus.statusMessage}
        </p>
        <button
          onClick={() => setShowResponseStatus((previous) => !previous)}
          className="text-white py-2 px-5 bg-black rounded shadow"
        >
          Ok
        </button>
      </div>
    </div>
  );
};

export default ResponseStatusModal;
