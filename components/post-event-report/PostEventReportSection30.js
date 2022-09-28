import React from 'react'

const PostEventReportSection30 = ({eventForm, setEventForm}) => {
    const options = [
        "IDU",
        "MSM",
        "MSM / IDU",
        "Sex involving transgender",
        "Heterosexual contact",
        "Other / Risk not identified"

    ]
  return (
    <div className='px-7 question-body '>
        <h2 className='font-black'>Which primary risk group is your event targeting?</h2>
        {/* <p className="">Required for AIRS</p> */}
        <div>
            {options.map(opt => (
                <label >
                     <input
                    type="radio"
                    name="nysPrimaryRiskGroup"
                    className=""
                    value={opt}
                    onChange={(e) =>
                      setEventForm((previous) => ({
                        ...previous,
                        [e.target.name]: e.target.value,
                      }))
                    }
                    defaultChecked={opt === eventForm.nysPrimaryRiskGroup ? 'checked': ""}
                  />
                  <p className="">{opt}</p>
                </label>
            ))}
        </div>
    </div>
  )
}

export default PostEventReportSection30