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
    <div className='px-7  mt-10'>
        <h2 className='font-black'>Which primary risk group is your event targeting?</h2>
        <p className="mb-5">Required for AIRS</p>
        <div>
            {options.map(opt => (
                <label >
                     <input
                    type="radio"
                    name="nysPrimaryRiskGroup"
                    className="my-3"
                    value={opt}
                    onChange={(e) =>
                      setEventForm((previous) => ({
                        ...previous,
                        [e.target.name]: e.target.value,
                      }))
                    }
                    defaultChecked={opt === eventForm.nysPrimaryRiskGroup ? 'checked': ""}
                  />
                  <p className="my-3 mx-5">{opt}</p>
                </label>
            ))}
        </div>
    </div>
  )
}

export default PostEventReportSection30