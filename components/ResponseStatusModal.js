const ResponseStatusModal = ({responseStatus, setShowResponseStatus}) => {
    return (
        <div className='modal flex items-center '>
            <div className='relative max-w-sm mx-auto flex flex-col items-center justify-center gap-10 bg-violet p-10 rounded-md h-3/6'>
            <button
            className="absolute  top-0 right-0"
            onClick={() => setShowResponseStatus(previous => !previous)}
            >
                <img src="/close-window-icon.svg" alt="close-window" title="close-window" className="rounded-tr"  width="20" /> 
            </button>
            {responseStatus.success === true ?
            <img src="/events/event_saved_icon.svg" alt="success request icon" /> :
            <img src="/events/please_complete_popup_icon.svg" alt="failed request icon" />
             }   
            <p className="font-black text-white ">{responseStatus.statusMessage}</p>
                
            </div>
        </div>
    );
};

export default ResponseStatusModal;