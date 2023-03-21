import React from 'react';


const RadioListWithOptions = ({ title, setSurveyForm, surveyForm,  columns = 2, name }) => {

    const options = [
        'FBO - ALI',
'FBO - YIP',
'FBO - ALI & YIP',
'All FBOs',
'Community - Adults',
'Community - Youth Adolescents',
'Community - Intergenerational',
'People living with HIV/AIDs',
'All of the above',
'Other (please elaborate in notes)',
    ]
   
    // const sortedOptions = options.sort();
    const columnLength = Math.ceil(options.length / columns);

    const handleForm = (e) => {
            
        setSurveyForm(prev => ({...prev, [e.target.name]: e.target.value}))
    }
    
    return (
        <div className='question-body'>
            <h2 className='font-black'>{title}</h2>
            <div className={`grid-cols-${columns}`}>
            {Array.from({ length: columns }, (_, i) => (
                <div key={i} className="flex flex-col gap-5 justify-center">
                    {options.slice(i * columnLength, (i + 1) * columnLength).map((option) => (
                        <label key={option} className="flex items-center gap-5">
                            <input
                                type="radio"
                                value={option}
                                onChange={handleForm}
                                name={name}
                                defaultChecked={surveyForm?.[name] === option}
                            />
                            {option}
                        </label>
                    ))}
                </div>
            ))}
            </div>
            
        </div>
    );
};

export default RadioListWithOptions;