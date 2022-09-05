import React from "react";
import { toast, ToastContainer } from "react-toastify";
import Layout from "../../../../components/Layout";
import PageTopHeading from "../../../../components/PageTopHeading";
import {ParticipantSurveySection1} from "../../../../components/participant-event-survey/ParticipantSurveySection1";
import { ParticipantSurveySection10 } from "../../../../components/participant-event-survey/ParticipantSurveySection10";
import { ParticipantSurveySection11 } from "../../../../components/participant-event-survey/ParticipantSurveySection11";
import { ParticipantSurveySection12 } from "../../../../components/participant-event-survey/ParticipantSurveySection12";
import { ParticipantSurveySection13 } from "../../../../components/participant-event-survey/ParticipantSurveySection13";
import { ParticipantSurveySection14 } from "../../../../components/participant-event-survey/ParticipantSurveySection14";
import { ParticipantSurveySection15 } from "../../../../components/participant-event-survey/ParticipantSurveySection15";
import { ParticipantSurveySection16 } from "../../../../components/participant-event-survey/ParticipantSurveySection16";
import { ParticipantSurveySection17 } from "../../../../components/participant-event-survey/ParticipantSurveySection17";
import { ParticipantSurveySection18 } from "../../../../components/participant-event-survey/ParticipantSurveySection18";
import { ParticipantSurveySection19 } from "../../../../components/participant-event-survey/ParticipantSurveySection19";
import { ParticipantSurveySection2 } from "../../../../components/participant-event-survey/ParticipantSurveySection2";
import { ParticipantSurveySection20 } from "../../../../components/participant-event-survey/ParticipantSurveySection20";
import { ParticipantSurveySection21 } from "../../../../components/participant-event-survey/ParticipantSurveySection21";
import { ParticipantSurveySection22 } from "../../../../components/participant-event-survey/ParticipantSurveySection22";
import { ParticipantSurveySection23 } from "../../../../components/participant-event-survey/ParticipantSurveySection23";
import { ParticipantSurveySection24 } from "../../../../components/participant-event-survey/ParticipantSurveySection24";
import { ParticipantSurveySection25 } from "../../../../components/participant-event-survey/ParticipantSurveySection25";
import { ParticipantSurveySection26 } from "../../../../components/participant-event-survey/ParticipantSurveySection26";
import { ParticipantSurveySection27 } from "../../../../components/participant-event-survey/ParticipantSurveySection27";
import { ParticipantSurveySection28 } from "../../../../components/participant-event-survey/ParticipantSurveySection28";
import { ParticipantSurveySection29 } from "../../../../components/participant-event-survey/ParticipantSurveySection29";
import { ParticipantSurveySection3 } from "../../../../components/participant-event-survey/ParticipantSurveySection3";
import { ParticipantSurveySection30 } from "../../../../components/participant-event-survey/ParticipantSurveySection30";
import { ParticipantSurveySection31 } from "../../../../components/participant-event-survey/ParticipantSurveySection31";
import { ParticipantSurveySection32 } from "../../../../components/participant-event-survey/ParticipantSurveySection32";
import { ParticipantSurveySection33 } from "../../../../components/participant-event-survey/ParticipantSurveySection33";
import { ParticipantSurveySection4 } from "../../../../components/participant-event-survey/ParticipantSurveySection4";
import { ParticipantSurveySection5 } from "../../../../components/participant-event-survey/ParticipantSurveySection5";
import { ParticipantSurveySection6 } from "../../../../components/participant-event-survey/ParticipantSurveySection6";
import { ParticipantSurveySection7 } from "../../../../components/participant-event-survey/ParticipantSurveySection7";
import { ParticipantSurveySection8 } from "../../../../components/participant-event-survey/ParticipantSurveySection8";
import { ParticipantSurveySection9 } from "../../../../components/participant-event-survey/ParticipantSurveySection9";

const Survey = () => {
  return (
    <>
      <Layout>
        <ToastContainer autoClose={1500} />
        <PageTopHeading
          backBtn={false}
          dashboardBtn={false}
          pageTitle={"Participant event survey"}
        />
        <div className="container mx-auto border-black rounded-lg mb-10">
          <ParticipantSurveySection1 />
          <ParticipantSurveySection2 />
          <ParticipantSurveySection3 />
          <ParticipantSurveySection4 />
          <ParticipantSurveySection5 />
          <ParticipantSurveySection6 />
          <ParticipantSurveySection7 />
          <ParticipantSurveySection8 />
          <ParticipantSurveySection9 />
          <ParticipantSurveySection10 />
          <ParticipantSurveySection11 />
          <ParticipantSurveySection12 />
          <ParticipantSurveySection13 />
          <ParticipantSurveySection14 />
          <ParticipantSurveySection15 />
          <ParticipantSurveySection16 />
          <ParticipantSurveySection17 />
          <ParticipantSurveySection18 />
          <ParticipantSurveySection19 />
          <ParticipantSurveySection20 />
          <ParticipantSurveySection21 />
          <ParticipantSurveySection22 />
          <ParticipantSurveySection23 />
          <ParticipantSurveySection24 />
          <ParticipantSurveySection25 />
          <ParticipantSurveySection26 />
          <ParticipantSurveySection27 />
          <ParticipantSurveySection28 />
          <ParticipantSurveySection29 />
          <ParticipantSurveySection30 />
          <ParticipantSurveySection31 />
          <ParticipantSurveySection32 />
          <ParticipantSurveySection33 />
          

         
        </div>

        <div className="flex justify-center">
        <h3>Thank you! Your answers help us plan our services, demonstrate our focus on our community, and help us meet our funding commitments.</h3>
        </div>

        <div className="flex justify-center my-10">
        
          <button
            className="py-2 px-5 flex items-center rounded bg-black text-white font-semibold"
            /* onClick={submitPostEventForm} */
          >
            Save
          </button>
          </div>

         
      </Layout>
    </>
  );
};

export default Survey;
