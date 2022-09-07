import React from "react";

export const ParticipantSurveySection18 = ({surveyForm,setSurveyForm}) => {
  return (
    <div className="px-7">
      <h1 className="font-black">
        <span className="">18</span> How comfortable are you discussing the following with your provider? (1 = very uncomfortable, 2 = uncomfortable, 3 = neutral, 4 = comfortable, and 5 = very comfortable)
      </h1>
      <div className="mt-7 grid grid-cols-1 space-between gap-5">
        <div className="block md:flex gap-x-5  items-center">
          <h3 className="md:w-96 w-100">Sexual Health Concerns</h3>
          <label className="m-5 flex items-center">
            <input type="radio" name="participantComfortSex" value={1} className="mr-2 w-6 h-6" onChange={(e) =>
          setSurveyForm((previous) => ({
            ...previous,
            [e.target.name]:Number(e.target.value)
          }))
        }/>1
          </label>
          <label className="m-5 flex items-center">
            <input type="radio" name="participantComfortSex" value={2} className="mr-2 w-6 h-6" onChange={(e) =>
          setSurveyForm((previous) => ({
            ...previous,
            [e.target.name]:Number(e.target.value)
          }))
        }/>2
          </label>
          <label className="m-5 flex items-center">
            <input type="radio" name="participantComfortSex" value={3} className="mr-2 w-6 h-6" onChange={(e) =>
          setSurveyForm((previous) => ({
            ...previous,
            [e.target.name]:Number(e.target.value)
          }))
        }/>3
          </label>
          <label className="m-5 flex items-center">
            <input type="radio" name="participantComfortSex" value={4} className="mr-2 w-6 h-6" onChange={(e) =>
          setSurveyForm((previous) => ({
            ...previous,
            [e.target.name]:Number(e.target.value)
          }))
        }/>4
          </label>
          <label className="m-5 flex items-center">
            <input type="radio" name="participantComfortSex" value={5} className="mr-2 w-6 h-6" onChange={(e) =>
          setSurveyForm((previous) => ({
            ...previous,
            [e.target.name]:Number(e.target.value)
          }))
        }/>5
          </label>
        </div>
        <div className="block md:flex gap-x-5  items-center">
          <h3 className="md:w-96 w-100">Mental Health Concerns</h3>

          <label className="m-5 flex items-center">
            <input type="radio" name="participantComfortMentalHealth" value={1} className="mr-2 w-6 h-6" onChange={(e) =>
          setSurveyForm((previous) => ({
            ...previous,
            [e.target.name]:Number(e.target.value)
          }))
        }/>1
          </label>
          <label className="m-5 flex items-center">
            <input type="radio" name="participantComfortMentalHealth" value={2} className="mr-2 w-6 h-6" onChange={(e) =>
          setSurveyForm((previous) => ({
            ...previous,
            [e.target.name]:Number(e.target.value)
          }))
        }/>2
          </label>
          <label className="m-5 flex items-center">
            <input type="radio" name="participantComfortMentalHealth" value={3} className="mr-2 w-6 h-6" onChange={(e) =>
          setSurveyForm((previous) => ({
            ...previous,
            [e.target.name]:Number(e.target.value)
          }))
        }/>3
          </label>
          <label className="m-5 flex items-center">
            <input type="radio" name="participantComfortMentalHealth" value={4} className="mr-2 w-6 h-6" onChange={(e) =>
          setSurveyForm((previous) => ({
            ...previous,
            [e.target.name]:Number(e.target.value)
          }))
        }/>4
          </label>
          <label className="m-5 flex items-center">
            <input type="radio" name="participantComfortMentalHealth" value={5} className="mr-2 w-6 h-6" onChange={(e) =>
          setSurveyForm((previous) => ({
            ...previous,
            [e.target.name]:Number(e.target.value)
          }))
        }/>5
          </label>
        </div>
        <div className="block md:flex gap-x-5 items-center">
          <h3 className="md:w-96 w-100">Diet/ Nutrition</h3>
          <label className="m-5 flex items-center">
            <input type="radio" name="participantComfortDiet" value={1} className="mr-2 w-6 h-6" onChange={(e) =>
          setSurveyForm((previous) => ({
            ...previous,
            [e.target.name]:Number(e.target.value)
          }))
        }/>1
          </label>
          <label className="m-5 flex items-center">
            <input type="radio" name="participantComfortDiet" value={2} className="mr-2 w-6 h-6" onChange={(e) =>
          setSurveyForm((previous) => ({
            ...previous,
            [e.target.name]:Number(e.target.value)
          }))
        }/>2
          </label>
          <label className="m-5 flex items-center">
            <input type="radio" name="participantComfortDiet" value={3} className="mr-2 w-6 h-6" onChange={(e) =>
          setSurveyForm((previous) => ({
            ...previous,
            [e.target.name]:Number(e.target.value)
          }))
        }/>3
          </label>
          <label className="m-5 flex items-center">
            <input type="radio" name="participantComfortDiet" value={4} className="mr-2 w-6 h-6" onChange={(e) =>
          setSurveyForm((previous) => ({
            ...previous,
            [e.target.name]:Number(e.target.value)
          }))
        }/>4
          </label>
          <label className="m-5 flex items-center">
            <input type="radio" name="participantComfortDiet" value={5} className="mr-2 w-6 h-6" onChange={(e) =>
          setSurveyForm((previous) => ({
            ...previous,
            [e.target.name]:Number(e.target.value)
          }))
        }/>5
          </label>
        </div>
        <div className="block md:flex gap-x-5  items-center">
          <h3 className="md:w-96 w-100"> Physical Activity/ Exercise</h3>
          <label className="m-5 flex items-center">
          <input type="radio" name="participantComfortExercise" value={1} className="mr-2 w-6 h-6" onChange={(e) =>
          setSurveyForm((previous) => ({
            ...previous,
            [e.target.name]:Number(e.target.value)
          }))
        }/>1
          </label>
          <label className="m-5 flex items-center">
          <input type="radio" name="participantComfortExercise" value={2} className="mr-2 w-6 h-6" onChange={(e) =>
          setSurveyForm((previous) => ({
            ...previous,
            [e.target.name]:Number(e.target.value)
          }))
        }/>2
          </label>
          <label className="m-5 flex items-center">
          <input type="radio" name="participantComfortExercise" value={3} className="mr-2 w-6 h-6" onChange={(e) =>
          setSurveyForm((previous) => ({
            ...previous,
            [e.target.name]:Number(e.target.value)
          }))
        }/>3
          </label>
          <label className="m-5 flex items-center">
          <input type="radio" name="participantComfortExercise" value={4} className="mr-2 w-6 h-6" onChange={(e) =>
          setSurveyForm((previous) => ({
            ...previous,
            [e.target.name]:Number(e.target.value)
          }))
        }/>4
          </label>
          <label className="m-5 flex items-center">
          <input type="radio" name="participantComfortExercise" value={5} className="mr-2 w-6 h-6" onChange={(e) =>
          setSurveyForm((previous) => ({
            ...previous,
            [e.target.name]:Number(e.target.value)
          }))
        }/>5
          </label>
        </div>
        <div className="block md:flex gap-x-5 items-center">
          <h3 className="md:w-96 w-100">Health Concerns (Chronic disease care)</h3>
          <label className="m-5 flex items-center">
            <input type="radio" name="participantComfortHealth" value={1} className="mr-2 w-6 h-6" onChange={(e) =>
          setSurveyForm((previous) => ({
            ...previous,
            [e.target.name]:Number(e.target.value)
          }))
        }/>1
          </label>
          <label className="m-5 flex items-center">
            <input type="radio" name="participantComfortHealth" value={2} className="mr-2 w-6 h-6" onChange={(e) =>
          setSurveyForm((previous) => ({
            ...previous,
            [e.target.name]:Number(e.target.value)
          }))
        }/>2
          </label>
          <label className="m-5 flex items-center">
            <input type="radio" name="participantComfortHealth" value={3} className="mr-2 w-6 h-6" onChange={(e) =>
          setSurveyForm((previous) => ({
            ...previous,
            [e.target.name]:Number(e.target.value)
          }))
        }/>3
          </label>
          <label className="m-5 flex items-center">
            <input type="radio" name="participantComfortHealth" value={4} className="mr-2 w-6 h-6" onChange={(e) =>
          setSurveyForm((previous) => ({
            ...previous,
            [e.target.name]:Number(e.target.value)
          }))
        }/>4
          </label>
          <label className="m-5 flex items-center">
            <input type="radio" name="participantComfortHealth" value={5} className="mr-2 w-6 h-6" onChange={(e) =>
          setSurveyForm((previous) => ({
            ...previous,
            [e.target.name]:Number(e.target.value)
          }))
        }/>5
          </label>
        </div>
        <div className="block md:flex gap-x-5  items-center">
          <h3 className="md:w-96 w-100">Medications</h3>
          <label className="m-5 flex items-center">
            <input type="radio" name="participantComfortMedications" value={1} className="mr-2 w-6 h-6" onChange={(e) =>
          setSurveyForm((previous) => ({
            ...previous,
            [e.target.name]:Number(e.target.value)
          }))
        }/>1
          </label>
          <label className="m-5 flex items-center">
            <input type="radio" name="participantComfortMedications" value={2} className="mr-2 w-6 h-6" onChange={(e) =>
          setSurveyForm((previous) => ({
            ...previous,
            [e.target.name]:Number(e.target.value)
          }))
        }/>2
          </label>
          <label className="m-5 flex items-center">
            <input type="radio" name="participantComfortMedications" value={3} className="mr-2 w-6 h-6" onChange={(e) =>
          setSurveyForm((previous) => ({
            ...previous,
            [e.target.name]:Number(e.target.value)
          }))
        }/>3
          </label>
          <label className="m-5 flex items-center">
            <input type="radio" name="participantComfortMedications" value={4} className="mr-2 w-6 h-6" onChange={(e) =>
          setSurveyForm((previous) => ({
            ...previous,
            [e.target.name]:Number(e.target.value)
          }))
        }/>4
          </label>
          <label className="m-5 flex items-center">
            <input type="radio" name="participantComfortMedications" value={5} className="mr-2 w-6 h-6" onChange={(e) =>
          setSurveyForm((previous) => ({
            ...previous,
            [e.target.name]:Number(e.target.value)
          }))
        }/>5
          </label>
        </div>
        <div className="block md:flex gap-x-5 items-center">
          <h3 className="md:w-96 w-100">
            Health screens (Mammogram, Colonoscopy, PSAs etc.)
          </h3>
          <label className="m-5 flex items-center">
            <input type="radio" name="participantComfortScreens" value={1} className="mr-2 w-6 h-6" onChange={(e) =>
          setSurveyForm((previous) => ({
            ...previous,
            [e.target.name]:Number(e.target.value)
          }))
        }/>1
          </label>
          <label className="m-5 flex items-center">
            <input type="radio" name="participantComfortScreens" value={2} className="mr-2 w-6 h-6" onChange={(e) =>
          setSurveyForm((previous) => ({
            ...previous,
            [e.target.name]:Number(e.target.value)
          }))
        }/>2
          </label>
          <label className="m-5 flex items-center">
            <input type="radio" name="participantComfortScreens" value={3} className="mr-2 w-6 h-6" onChange={(e) =>
          setSurveyForm((previous) => ({
            ...previous,
            [e.target.name]:Number(e.target.value)
          }))
        }/>3
          </label>
          <label className="m-5 flex items-center">
            <input type="radio" name="participantComfortScreens" value={4} className="mr-2 w-6 h-6" onChange={(e) =>
          setSurveyForm((previous) => ({
            ...previous,
            [e.target.name]:Number(e.target.value)
          }))
        }/>4
          </label>
          <label className="m-5 flex items-center">
            <input type="radio" name="participantComfortScreens" value={5} className="mr-2 w-6 h-6" onChange={(e) =>
          setSurveyForm((previous) => ({
            ...previous,
            [e.target.name]:Number(e.target.value)
          }))
        }/>5
          </label>
        </div>
        <div className="block md:flex gap-x-5  items-center">
          <h3 className="md:w-96 w-100">Substance Use Concerns</h3>
          <label className="m-5 flex items-center">
            <input type="radio" name="participantComfortSubstances" value={1} className="mr-2 w-6 h-6" onChange={(e) =>
          setSurveyForm((previous) => ({
            ...previous,
            [e.target.name]:Number(e.target.value)
          }))
        }/>1
          </label>
          <label className="m-5 flex items-center">
            <input type="radio" name="participantComfortSubstances" value={2} className="mr-2 w-6 h-6" onChange={(e) =>
          setSurveyForm((previous) => ({
            ...previous,
            [e.target.name]:Number(e.target.value)
          }))
        }/>2
          </label>
          <label className="m-5 flex items-center">
            <input type="radio" name="participantComfortSubstances" value={3} className="mr-2 w-6 h-6" onChange={(e) =>
          setSurveyForm((previous) => ({
            ...previous,
            [e.target.name]:Number(e.target.value)
          }))
        }/>3
          </label>
          <label className="m-5 flex items-center">
            <input type="radio" name="participantComfortSubstances" value={4} className="mr-2 w-6 h-6" onChange={(e) =>
          setSurveyForm((previous) => ({
            ...previous,
            [e.target.name]:Number(e.target.value)
          }))
        }/>4
          </label>
          <label className="m-5 flex items-center">
            <input type="radio" name="participantComfortSubstances" value={5} className="mr-2 w-6 h-6" onChange={(e) =>
          setSurveyForm((previous) => ({
            ...previous,
            [e.target.name]:Number(e.target.value)
          }))
        }/>5
          </label>
        </div>
      </div>
    </div>
  );
};
