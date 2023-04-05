const NameGuestSpeakers = ({eventForm, setEventForm}) => {
  return (
    <div className="question-body">
        <h2 className="mb-7 font-black">
        Name of the leader of this CBT
      </h2>
      <label className="grid items-center">
        
        <input
          type="text"
          className="md:w-1/3 w-5/6 p-2 border-black rounded text-lg"
          onChange={(e) => {
            setEventForm(prev => ({...prev, nameGuestSpeakers: e.target.value.trim() }))
          }}
          defaultValue={eventForm?.nameGuestSpeakers }
        />
      </label>
    </div>
  );
};

export default NameGuestSpeakers;
