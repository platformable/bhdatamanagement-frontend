import React, { useState, useCallback, useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  BarController,
  LineController,
  LineElement,
  Legend,
  Tooltip,
  Title,
} from "chart.js";
import {
  Chart,
  getDatasetAtEvent,
  getElementAtEvent,
  getElementsAtEvent,
} from "react-chartjs-2";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarController,
  LineController,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Title
);
import useCopyToClipboard from "../../utils/useCopyToClipboard";
const RaceChart = ({ chartData,getHrefImage, selectedDate}) => {
  const [stadistics, setStadistics] = useState([])
  const [value, copy] = useCopyToClipboard()
  const raceCounts = {
    "Black or African American": 0,
    "Hispanic, Latino/a or Spanish": 0,
    "Asian": 0,
    "American Indian or Alaska Native": 0,
    "Middle Eastern or North African": 0,
    "Native Hawaiian or Other Pacific Islander": 0,
    "White": 0,
    "Some other race or origin": 0,
    "More than one race/ethnicity": 0,
    "Decline to answer": 0
  };
  useEffect(() => {
    stadistics = chartData?.map(event =>{
      raceCounts["Black or African American"] = event?.hivblackorafricanamerican + event?.stiblackorafricanamerican + event?.hepcblackorafricanamerican
      raceCounts["Hispanic, Latino/a or Spanish"] = event?.hivhispanic + event?.stihispanic + event?.hepchispanic
      raceCounts["Asian"] = event?.hivasian + event?.stiasian + event?.hepcasian
      raceCounts["American Indian or Alaska Native"] = event?.hivamericanindianoralaskanative + event?.stiamericanindianoralaskanative + event?.hepcamericanindianoralaskanative
      raceCounts["Middle Eastern or North African"] = event?.hivmiddleeasternornorthafrican + event?.stimiddleeasternornorthafrican + event?.hepcmiddleeasternornorthafrican
      raceCounts["Native Hawaiian or Other Pacific Islander"] = event?.hivnativehawaiianorotherpacificislander + event?.stinativehawaiianorotherpacificislander + event?.hepcnativehawaiianorotherpacificislander
      raceCounts["White"] = event?.hivwhite + event?.stiwhite + event?.hepcwhite
      raceCounts["Some other race or origin"] = event?.hivsomeotherrace + event?.stisomeotherrace + event?.hepcsomeotherrace
      raceCounts["More than one race/ethnicity"] = event?.hivmorethanonerace + event?.stimorethanonerace + event?.hepcmorethanonerace
      raceCounts["Decline to answer"] = event?.hivracedeclinedtoanswer + event?.stiracedeclinedtoanswer + event?.hepcracedeclinedtoanswer
    })
    setStadistics(Object.values(raceCounts))
   }, [chartData]);

   let values = stadistics.filter(value => Number.isFinite(value));
   let maxValue = Math.max.apply(null, values);
   const reversedDate  = {
    start: new Date(selectedDate.start).toLocaleDateString("en-US", {month: "numeric", day: "numeric", year: "numeric"}),
    finish: new Date(selectedDate.finish).toLocaleDateString("en-US", {month: "numeric", day: "numeric", year: "numeric"})
  }

  const options = {
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `Race - CMP NYS - ${reversedDate?.start}-${reversedDate?.finish} n=${chartData?.length}`,
        position: "top",
        font: {
          size: 18,
        },
      },
      datalabels: {
        display: true,
        color: "#000",
        formatter: function (value, context) {
          return value > 0 ? value : "";
        },
        font: {
          weight: "bold",
        },
        anchor: "end",
        offset: -20,
        align: "start",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "# of participants",
          font: {
            weight: "bold",
          },
        },
        ticks: {
          precision: 0,
        },
        min: 0,
        max: maxValue,
      },
    },
  };

  const race = [
    "Black or African American",
    "Hispanic, Latino/a or Spanish",
    "Asian",
    "American Indian or Alaska Native",
    "Middle Eastern or North African",
    "Native Hawaiian or Other Pacific Islander",
    "White",
    "Some other race or origin",
    "Decline to answer"];
  const data = {
    labels:  race,
    datasets: [
      {
        type: "bar",
        label: "# of participants",
        backgroundColor: "#ebd61e",
        data: stadistics,
        borderColor: "white",
        borderWidth: 2,
      },
      
    ],
  };
  const printDatasetAtEvent = (dataset) => {
    if (!dataset.length) return;

    const datasetIndex = dataset[0].datasetIndex;

    console.log(data.datasets[datasetIndex].label);
  };

  const printElementAtEvent = (element) => {
    if (!element.length) return;

    const { datasetIndex, index } = element[0];

    console.log(data.labels[index], data.datasets[datasetIndex].data[index]);
  };

  const printElementsAtEvent = (elements) => {
    if (!elements.length) return;

    console.log(elements.length);
  };
  
  const chartRef = useRef();

  const exportChart = useCallback( () => {
    const name = "participantRace";
    const href =  chartRef.current.toBase64Image();
    getHrefImage(href, name)
   
  }, [])

  const imageToClipboard = async () => {
    const href = chartRef.current.toBase64Image();
    await fetch(href)
    .then(res => res.blob())
    .then(blob => copy(blob))
  }

  const onClick = (event) => {
    const { current } = chartRef;

    if (!current) {
      return;
    }

    printDatasetAtEvent(getDatasetAtEvent(current, event));
    printElementAtEvent(getElementAtEvent(current, event));
    printElementsAtEvent(getElementsAtEvent(current, event));
  };

  return (
    <div>
        {/* <input type="radio" onChange={exportChart} /> */}

    <Chart
      type="bar"
      ref={chartRef}
      data={data}
      options={options}
      onClick={onClick}
        
    />
    <button
        onClick={imageToClipboard}
        className="px-5 my-5 py-2 text-lg border hover:bg-black hover:text-white rounded shadow"
      >
        Copy to clipboard
      </button>
    </div>
    
  );
};

export default RaceChart;