import React from 'react';


const RadioList = ({ title, setSurveyForm, surveyForm,  columns = 2, name }) => {
    const options = [
        "N/A",
        "HIV Testing",
        "Bereavement",
        "Cancer",
        "Cardiovascular Disease",
        "Community Building Event ",
        "Community Violence",
        "COVID-19 & HIV",
        "Food pantry & HIV",
        "Health Disparities",
        "Health Insurance/ Healthcare",
        "Hepatitis & HIV",
        "HIV and Justice System Involved People",
        "HIV and Older Adults",
        "HIV and Substance use and Drug Policy",
        "HIV Prevention",
        "HIV/ Domestic Violence",
        "Managing Co-morbidities with HIV",
        "Mental Health and HIV",
        "Prevention (Broad)",
        "Research",
        "Teens and HIV",
        "Other",
    ]
    // const sortedOptions = options.sort();
    const columnLength = Math.ceil(options.length / columns);

    const handleForm = (e) => setSurveyForm(prev => ({...prev, [e.target.name]: e.target.value}))
    
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
                            {/* {option === 'Other' && (
                            <input
                                type="text"
                                value={option}
                                onChange={handleForm}
                                name={`${props.name}Other`}
                                defaultChecked={selected === option}
                            />
                        )} */}
                        </label>
                    ))}
                </div>
            ))}
            </div>
            
        </div>
    );
};

export default RadioList;