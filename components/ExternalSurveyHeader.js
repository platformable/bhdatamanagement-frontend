import React from 'react';

const ExternalSurveyHeader = ({pageTitle}) => {
    return (
        <div className="h-88 py-10 container mx-auto mt-3 flex mb-10 flex-col items-center rounded-lg border-black">
        <h1 className="text-center font-black">{pageTitle}</h1>
        <div className="flex items-center gap-5 mt-5">
          <h2 className="pt-2">In partnership with</h2>
          <img
            src="/main/BH_logo.svg"
            alt="black health data app management logo"
            width={400}
            className=""
          />{" "}
        </div>
      </div>
    );
}

export default ExternalSurveyHeader;
