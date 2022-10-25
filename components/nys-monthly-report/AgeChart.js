import React, { useCallback, useState, useEffect, useRef } from "react";
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
import ChartDataLabels from 'chartjs-plugin-datalabels';

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
  Title,
  ChartDataLabels
);
import useCopyToClipboard from "../../utils/useCopyToClipboard";

const AgeChart = ({ chartData,getHrefImage, selectedDate}) => {
  const [value, copy] = useCopyToClipboard()
  const ageCounts = {
    "Under 13": 0,
    "13-18": 0,
    "19-24": 0,
    "25-29": 0,
    "30-34": 0,
    "35-39": 0,
    "40-44": 0,
    "45-49": 0,
    "50-54": 0,
    "55-59": 0,
    "60-64": 0,
    "65-69": 0,
    "70+": 0 
  };

    const [stadistics, setStadistics] = useState([])
    useEffect(() => {
    stadistics = chartData?.map(event =>{
      ageCounts["Under 13"] = event?.altagehivunder13
      ageCounts["13-18"] = event?.altagehiv13_18
      ageCounts["19-24"] = event?.altagehiv19_24
      ageCounts["25-29"] = event?.hiv25_29
      ageCounts["30-34"] = event?.hiv30_34
      ageCounts["35-39"] = event?.hiv35_39
      ageCounts["40-44"] = event?.hiv40_44
      ageCounts["45-49"] = event?.hiv45_49
      ageCounts["50-54"] = event?.hiv50_54
      ageCounts["55-59"] = event?.hiv55_59
      ageCounts["60-64"] = event?.hiv60_64
      ageCounts["65-69"] = event?.hiv65_69
      ageCounts["70+"] = event?.hiv70
    })
    setStadistics(Object.values(ageCounts))
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
        text: `Ages tested for HIV NYS CMP ${reversedDate?.start}-${reversedDate?.finish}`,
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
        max: maxValue + (maxValue / 3),
      },
    },
  };

  
  const age = [
    "Under 13",
    "13-18",
    "19-24",
    "25-29",
    "30-34",
    "35-39",
    "40-44",
    "45-49",
    "50-54",
    "55-59",
    "60-64",
    "65-69",
    "70+" 
     ];

  const data = {
    labels:  age,
    datasets: [
      {
        type: "bar",
        label: "# of participants",
        backgroundColor: "#3c9648",
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
    const name = "participantAge";
    const href =  chartRef.current.toBase64Image();
    getHrefImage(href, name)
    // console.log(href)
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

export default AgeChart;