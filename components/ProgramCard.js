const ProgramCard = ({program, datasetName, description, dateRange, records, programImage}) => {
    return (
        <div className='rounded shadow grid grid-cols-6 md:h-52'>
            <div className='grid grid-rows-4 col-span-1'>
              <h2 className='bg-yellow row-span-1 flex justify-center items-center font-semibold text-color-violet rounded-tl-xl'>{program}</h2>
              <div className='bg-white row-span-3 flex justify-center'>
                <img src={programImage} alt="program icon" title="program icon" width={100}/>
              </div>
            </div>
            <div className='grid grid-rows-4 col-span-5'>
              <h2 className='bg-violet row-span-1 text-white flex items-center px-5 rounded-tr-xl'>{datasetName}</h2>
              <div className='bg-white grid grid-cols-4 row-span-3 gap-4'>
                <div className='col-span-3 flex flex-col py-3 px-5 justify-between'>
                  <h3 className='text-xl'>{description}</h3>
                  <div className='grid grid-cols-3'>
                    <div className='flex items-center'>
                      <img src="/historical_data/record_icons.svg" alt="records icon"/>
                      <h3 className='ml-3 text-xl font-semibold text-color-violet'>{records} records</h3>
                    </div>
                    <div className='flex items-center'>
                      <img src="/historical_data/date_icon.svg" alt="date icon"/>
                      <h3 className='ml-3 text-xl  font-semibold text-color-violet'>{dateRange}</h3>
                    </div>
                  </div>
                </div>
                <div className='bg-white flex items-center justify-center'>
                  <button className='col-span-1 rounded-md bg-violet text-white text-lg flex items-center px-4 py-1'>
                  <img src="/historical_data/download_icon_button.svg" alt="download" className='mr-2'/>
                    Download</button>
                </div>
              </div>
            </div>
        </div>
  
    )
  }

  export default ProgramCard;