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
import {reverseDate} from "../../utils/helpers";

const GenderIdentityChart = ({ chartData,getHrefImage, selectedDate}) => {
  const [value, copy] = useCopyToClipboard()
  const [stadistics, setStadistics] = useState([])
  const gendersCounts = {
    "Woman/girl": 0,
    "Transgender woman/girl": 0,
    "Man/boy": 0,
    "Transgender man/boy": 0,
    "Non-binary person": 0,
    "Gender non-conforming person": 0,
    "Not sure/questioning": 0,
    "Gender not listed": 0,
    "Chose not to respond": 0,

  };
 useEffect(() => {
  stadistics = chartData?.map((event, index) =>{
    gendersCounts["Woman/girl"] += event?.hivfemale 
    gendersCounts["Transgender woman/girl"] += event?.hivtransgenderfemale  
    gendersCounts["Man/boy"] += event?.hivmale
    gendersCounts["Transgender man/boy"] += event?.hivtransgendermale  
    gendersCounts["Non-binary person"] += event?.hivnonbinary
    gendersCounts["Gender non-conforming person"] += event?.hivgendernonconforming 
    gendersCounts["Not sure/questioning"] += event?.hivgendernotsurequestioning 
    gendersCounts["Gender not listed"] += event?.hivothergenderidentity 
    gendersCounts["Chose not to respond"] += event?.hivgenderdeclinedtoanswer 
  })

  setStadistics(Object.values(gendersCounts))
 }, [chartData]);

 let values = stadistics.filter(value => Number.isFinite(value));
 let maxValue = Math.max.apply(null, values);
 let totalOfValues = values.reduce((a, b) => a + b, 0);

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
        text: `Gender identity tested for HIV NYS CMP ${reverseDate(selectedDate.start)}-${reverseDate(selectedDate.finish)}`,
        position: "top",
        font: {
          size: 18,
        },
      },
      datalabels: {
        display: true,
        color: "#000",
        formatter: function (value, context) {
          return value > 0 ? `${((value * 100) / totalOfValues).toFixed(2)}%`   : "";
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
          text: "# of people tested",
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

  

  const data = {
    labels:  Object.keys(gendersCounts),
    datasets: [
      {
        type: "bar",
        label: "# of people tested",
        backgroundColor: "#874fc2",
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
    const name = "participantGender";
    const href =  chartRef.current.toBase64Image();
    getHrefImage(href, name)
    // console.log(href)
  }, [])

  // useEffect(()=> exportChart(), [chartRef])

  const onClick = (event) => {
    const { current } = chartRef;

    if (!current) {
      return;
    }

    printDatasetAtEvent(getDatasetAtEvent(current, event));
    printElementAtEvent(getElementAtEvent(current, event));
    printElementsAtEvent(getElementsAtEvent(current, event));
  };

  const imageToClipboard = async () => {
    const href = chartRef.current.toBase64Image();
    await fetch(href)
    .then(res => res.blob())
    .then(blob => copy(blob))
  }

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

export default GenderIdentityChart;