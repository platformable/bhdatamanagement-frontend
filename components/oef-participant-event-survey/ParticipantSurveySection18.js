import React from "react";

export const ParticipantSurveySection18 = ({ surveyForm, setSurveyForm }) => {
  return (
    <div className="px-7">
      <h2 className="font-black">
        {/* <span className="">18</span> */}
         How comfortable are you discussing the
        following with your provider? 
      </h2>
      <div className="mt-7 grid grid-cols-1 gap-y-7">
        <div className="flex flex-col items-start">
          <h2 className="font-black">Sexual health concerns</h2>
          <div className="">
          <label className="gap-x-5 flex text-lg items-center my-5">
              <input
                type="radio"
                name="participantComfortSex"
                value={5}
                className=""
                onChange={(e) =>
                  setSurveyForm((previous) => ({
                    ...previous,
                    [e.target.name]: Number(e.target.value),
                  }))
                }
              />
              Very comfortable
            </label>
          <label className="gap-x-5 flex text-lg items-center my-5">
              
              <input
                type="radio"
                name="participantComfortSex"
                value={4}
                className=""
                onChange={(e) =>
                  setSurveyForm((previous) => ({
                    ...previous,
                    [e.target.name]: Number(e.target.value),
                  }))
                }
              />
              Comfortable
            </label>
           


            <label className="gap-x-5 flex text-lg items-center my-5">
              <input
                type="radio"
                name="participantComfortSex"
                value={3}
                className=""
                onChange={(e) =>
                  setSurveyForm((previous) => ({
                    ...previous,
                    [e.target.name]: Number(e.target.value),
                  }))
                }
              />
              Neutral
            </label>
           
            <label className="gap-x-5 flex text-lg items-center my-5">
              <input
                type="radio"
                name="participantComfortSex"
                value={1}
                className=""
                onChange={(e) =>
                  setSurveyForm((previous) => ({
                    ...previous,
                    [e.target.name]: Number(e.target.value),
                  }))
                }
              />
              Very Uncomfortable
            </label>
            <label className="gap-x-5 flex text-lg items-center my-5">
              
              <input
                type="radio"
                name="participantComfortSex"
                value={2}
                className=""
                onChange={(e) =>
                  setSurveyForm((previous) => ({
                    ...previous,
                    [e.target.name]: Number(e.target.value),
                  }))
                }
              />
              Uncomfortable
            </label>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <h2 className="font-black">Mental health concerns</h2>


          <div className="">
          <label className="gap-x-5 flex text-lg items-center my-5">
              
              <input
                type="radio"
                name="participantComfortMentalHealth"
                value={5}
                className=""
                onChange={(e) =>
                  setSurveyForm((previous) => ({
                    ...previous,
                    [e.target.name]: Number(e.target.value),
                  }))
                }
              />Very comfortable
            </label>
            
            <label className="gap-x-5 flex text-lg items-center my-5">
              
              <input
                type="radio"
                name="participantComfortMentalHealth"
                value={4}
                className=""
                onChange={(e) =>
                  setSurveyForm((previous) => ({
                    ...previous,
                    [e.target.name]: Number(e.target.value),
                  }))
                }
              />Comfortable
            </label>
            <label className="gap-x-5 flex text-lg items-center my-5">
              
              <input
                type="radio"
                name="participantComfortMentalHealth"
                value={3}
                className=""
                onChange={(e) =>
                  setSurveyForm((previous) => ({
                    ...previous,
                    [e.target.name]: Number(e.target.value),
                  }))
                }
              />Neutral
            </label>
          
            <label className="gap-x-5 flex text-lg items-center my-5">
              
              <input
                type="radio"
                name="participantComfortMentalHealth"
                value={2}
                className=""
                onChange={(e) =>
                  setSurveyForm((previous) => ({
                    ...previous,
                    [e.target.name]: Number(e.target.value),
                  }))
                }
              />
              Uncomfortable
            </label>
            
            <label className="gap-x-5 flex text-lg items-center my-5">
              <input
                type="radio"
                name="participantComfortMentalHealth"
                value={1}
                className=""
                onChange={(e) =>
                  setSurveyForm((previous) => ({
                    ...previous,
                    [e.target.name]: Number(e.target.value),
                  }))
                }
              />
              Very uncomfortable
            </label>
          </div>
        </div>
        <div className="flex flex-col  items-start">
          <h2 className="font-black">Diet / Nutrition</h2>
          <div className="">
            

          <label className="gap-x-5 flex text-lg items-center my-5">
              
              <input
                type="radio"
                name="participantComfortDiet"
                value={5}
                className=""
                onChange={(e) =>
                  setSurveyForm((previous) => ({
                    ...previous,
                    [e.target.name]: Number(e.target.value),
                  }))
                }
              />Very comfortable
            </label>

            <label className="gap-x-5 flex text-lg items-center my-5">
              
              <input
                type="radio"
                name="participantComfortDiet"
                value={4}
                className=""
                onChange={(e) =>
                  setSurveyForm((previous) => ({
                    ...previous,
                    [e.target.name]: Number(e.target.value),
                  }))
                }
              />Comfortable
            </label>
            <label className="gap-x-5 flex text-lg items-center my-5">
              
              <input
                type="radio"
                name="participantComfortDiet"
                value={3}
                className=""
                onChange={(e) =>
                  setSurveyForm((previous) => ({
                    ...previous,
                    [e.target.name]: Number(e.target.value),
                  }))
                }
              />Neutral
            </label>
        

            <label className="gap-x-5 flex text-lg items-center my-5">
              
              <input
                type="radio"
                name="participantComfortDiet"
                value={2}
                className=""
                onChange={(e) =>
                  setSurveyForm((previous) => ({
                    ...previous,
                    [e.target.name]: Number(e.target.value),
                  }))
                }
              />Uncomfortable
            </label>
            <label className="gap-x-5 flex text-lg items-center my-5">
              
              <input
                type="radio"
                name="participantComfortDiet"
                value={1}
                className=""
                onChange={(e) =>
                  setSurveyForm((previous) => ({
                    ...previous,
                    [e.target.name]: Number(e.target.value),
                  }))
                }
              />Very uncomfortable
            </label>
          </div>
        </div>
        <div className="flex flex-col   items-start">
          <h2 className="font-black"> Physical activity / Exercise</h2>
          <div className="">
          <label className="gap-x-5 flex text-lg items-center my-5">
          
          <input
            type="radio"
            name="participantComfortExercise"
            value={5}
            className=""
            onChange={(e) =>
              setSurveyForm((previous) => ({
                ...previous,
                [e.target.name]: Number(e.target.value),
              }))
            }
          />Very comfortable
        </label>

        <label className="gap-x-5 flex text-lg items-center my-5">
          
          <input
            type="radio"
            name="participantComfortExercise"
            value={4}
            className=""
            onChange={(e) =>
              setSurveyForm((previous) => ({
                ...previous,
                [e.target.name]: Number(e.target.value),
              }))
            }
          />Comfortable
        </label>
          
          <label className="gap-x-5 flex text-lg items-center my-5">
          
            <input
              type="radio"
              name="participantComfortExercise"
              value={3}
              className=""
              onChange={(e) =>
                setSurveyForm((previous) => ({
                  ...previous,
                  [e.target.name]: Number(e.target.value),
                }))
              }
            />Neutral
          </label>
         
          <label className="gap-x-5 flex text-lg items-center my-5">
          
          <input
            type="radio"
            name="participantComfortExercise"
            value={2}
            className=""
            onChange={(e) =>
              setSurveyForm((previous) => ({
                ...previous,
                [e.target.name]: Number(e.target.value),
              }))
            }
          />Uncomfortable
        </label>
          <label className="gap-x-5 flex text-lg items-center my-5">
          
          <input
            type="radio"
            name="participantComfortExercise"
            value={1}
            lassName=""
            onChange={(e) =>
              setSurveyForm((previous) => ({
                ...previous,
                [e.target.name]: Number(e.target.value),
              }))
            }
          />Very uncomfortable
        </label>
          </div>
          
        </div>
        <div className="flex flex-col items-start">
          <h2 className="font-black">Health concerns (Chronic disease care)</h2>
          <div className="">
            <label className="gap-x-5 flex text-lg items-center my-5">
              
              <input
                type="radio"
                name="participantComfortHealth"
                value={1}
                className=""
                onChange={(e) =>
                  setSurveyForm((previous) => ({
                    ...previous,
                    [e.target.name]: Number(e.target.value),
                  }))
                }
              />Very uncomfortable
            </label>
            <label className="gap-x-5 flex text-lg items-center my-5">
              
              <input
                type="radio"
                name="participantComfortHealth"
                value={2}
                className=""
                onChange={(e) =>
                  setSurveyForm((previous) => ({
                    ...previous,
                    [e.target.name]: Number(e.target.value),
                  }))
                }
              />Uncomfortable
            </label>
            <label className="gap-x-5 flex text-lg items-center my-5">
              
              <input
                type="radio"
                name="participantComfortHealth"
                value={3}
                className=""
                onChange={(e) =>
                  setSurveyForm((previous) => ({
                    ...previous,
                    [e.target.name]: Number(e.target.value),
                  }))
                }
              />Neutral
            </label>
            <label className="gap-x-5 flex text-lg items-center my-5">
              
              <input
                type="radio"
                name="participantComfortHealth"
                value={4}
                className=""
                onChange={(e) =>
                  setSurveyForm((previous) => ({
                    ...previous,
                    [e.target.name]: Number(e.target.value),
                  }))
                }
              />Comfortable
            </label>
            <label className="gap-x-5 flex text-lg items-center my-5">
              <input
                type="radio"
                name="participantComfortHealth"
                value={5}
                className=""
                onChange={(e) =>
                  setSurveyForm((previous) => ({
                    ...previous,
                    [e.target.name]: Number(e.target.value),
                  }))
                }
              />
              Very comfortable
            </label>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <h2 className="font-black">Medications</h2>
          <div className="">
          <label className="gap-x-5 flex text-lg items-center my-5">
              <input
                type="radio"
                name="participantComfortMedications"
                value={5}
                className=""
                onChange={(e) =>
                  setSurveyForm((previous) => ({
                    ...previous,
                    [e.target.name]: Number(e.target.value),
                  }))
                }
              />
              Very comfortable
            </label>

            <label className="gap-x-5 flex text-lg items-center my-5">
              
              <input
                type="radio"
                name="participantComfortMedications"
                value={4}
                className=""
                onChange={(e) =>
                  setSurveyForm((previous) => ({
                    ...previous,
                    [e.target.name]: Number(e.target.value),
                  }))
                }
              />
              Comfortable
            </label>
           
            <label className="gap-x-5 flex text-lg items-center my-5">
              
              <input
                type="radio"
                name="participantComfortMedications"
                value={3}
                className=""
                onChange={(e) =>
                  setSurveyForm((previous) => ({
                    ...previous,
                    [e.target.name]: Number(e.target.value),
                  }))
                }
              />Neutral
            </label>
            
         
            <label className="gap-x-5 flex text-lg items-center my-5">
              <input
                type="radio"
                name="participantComfortMedications"
                value={2}
                className=""
                onChange={(e) =>
                  setSurveyForm((previous) => ({
                    ...previous,
                    [e.target.name]: Number(e.target.value),
                  }))
                }
              />
              Uncomfortable
            </label>
            <label className="gap-x-5 flex text-lg items-center my-5">
              <input
                type="radio"
                name="participantComfortMedications"
                value={1}
                className=""
                onChange={(e) =>
                  setSurveyForm((previous) => ({
                    ...previous,
                    [e.target.name]: Number(e.target.value),
                  }))
                }
              />
              Very uncomfortable
            </label>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <h2 className="font-black">
            Health screens (Mammogram, Colonoscopy, PSAs etc.)
          </h2>
          <div className="">
          <label className="gap-x-5 flex text-lg items-center my-5">
              
              <input
                type="radio"
                name="participantComfortScreens"
                value={5}
                className=""
                onChange={(e) =>
                  setSurveyForm((previous) => ({
                    ...previous,
                    [e.target.name]: Number(e.target.value),
                  }))
                }
              />Very comfortable
            </label>
           
           
            <label className="gap-x-5 flex text-lg items-center my-5">
              
              <input
                type="radio"
                name="participantComfortScreens"
                value={4}
                className=""
                onChange={(e) =>
                  setSurveyForm((previous) => ({
                    ...previous,
                    [e.target.name]: Number(e.target.value),
                  }))
                }
              />Comfortable
            </label>
            <label className="gap-x-5 flex text-lg items-center my-5">
              
              <input
                type="radio"
                name="participantComfortScreens"
                value={3}
                className=""
                onChange={(e) =>
                  setSurveyForm((previous) => ({
                    ...previous,
                    [e.target.name]: Number(e.target.value),
                  }))
                }
              />Neutral
            </label>
            <label className="gap-x-5 flex text-lg items-center my-5">
              
              <input
                type="radio"
                name="participantComfortScreens"
                value={2}
                className=""
                onChange={(e) =>
                  setSurveyForm((previous) => ({
                    ...previous,
                    [e.target.name]: Number(e.target.value),
                  }))
                }
              />Uncomfortable
            </label>
          
            <label className="gap-x-5 flex text-lg items-center my-5">
              
              <input
                type="radio"
                name="participantComfortScreens"
                value={1}
                className=""
                onChange={(e) =>
                  setSurveyForm((previous) => ({
                    ...previous,
                    [e.target.name]: Number(e.target.value),
                  }))
                }
              />Very uncomfortable
            </label>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <h2 className="font-black">Substance use concerns</h2>
          <div className="">
          <label className="gap-x-5 flex text-lg items-center my-5">
              
              <input
                type="radio"
                name="participantComfortSubstances"
                value={5}
                className=""
                onChange={(e) =>
                  setSurveyForm((previous) => ({
                    ...previous,
                    [e.target.name]: Number(e.target.value),
                  }))
                }
              />Very comfortable
            </label>

            <label className="gap-x-5 flex text-lg items-center my-5">
              
              <input
                type="radio"
                name="participantComfortSubstances"
                value={4}
                className=""
                onChange={(e) =>
                  setSurveyForm((previous) => ({
                    ...previous,
                    [e.target.name]: Number(e.target.value),
                  }))
                }
              />Comfortable
            </label>
           
            <label className="gap-x-5 flex text-lg items-center my-5">
              
              <input
                type="radio"
                name="participantComfortSubstances"
                value={3}
                className=""
                onChange={(e) =>
                  setSurveyForm((previous) => ({
                    ...previous,
                    [e.target.name]: Number(e.target.value),
                  }))
                }
              />Neutral
            </label>
           
            <label className="gap-x-5 flex text-lg items-center my-5">
              
              <input
                type="radio"
                name="participantComfortSubstances"
                value={2}
                className=""
                onChange={(e) =>
                  setSurveyForm((previous) => ({
                    ...previous,
                    [e.target.name]: Number(e.target.value),
                  }))
                }
              />Uncomfortable
            </label>
           
            <label className="gap-x-5 flex text-lg items-center my-5">
              
              <input
                type="radio"
                name="participantComfortSubstances"
                value={1}
                className=""
                onChange={(e) =>
                  setSurveyForm((previous) => ({
                    ...previous,
                    [e.target.name]: Number(e.target.value),
                  }))
                }
              />Very uncomfortable
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
