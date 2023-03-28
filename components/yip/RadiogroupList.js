function RadiogroupList({
  header,
  questions,
  setSurveyForm,
  surveyForm,
}) {
  const booleansValues = [
    {
      value: true,
      text: "True",
    },
    {
      value: false,
      text: "False",
    },
  ];
 
  return (
    <div className="grid divide-y divide border">
      <div className="header-list  bg-black text-white font-bold px-5 py-3 text-lg">
        <h2>{header}</h2>
      </div>
      {questions?.map((question, index) => (
          <div className="px-5 py-3 flex justify-between" key={index}>
            <h4 className="font-medium text-lg">{question.title}</h4>
            <div className="grid grid-cols-2 gap-16">
              {booleansValues.map((bool) => (
                <label className="flex gap-5 text-base items-center">
                  <input type={"radio"} value={bool.value} name={question.value} onChange={(e) => {
                    setSurveyForm(prev => ({
                        ...prev,
                        [question.value]: bool.value
                    }))
                  }}
                  
                  />    
                  {bool.text}
                </label>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}

export default RadiogroupList
