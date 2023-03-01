import React, { useState, useEffect, useRef } from "react";
import useCopyToClipboard from "../../utils/useCopyToClipboard";
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

const ParticipantReferralsChart = ({ selectedDate,chartData}) => {
  const [stadistics, setStadistics] = useState([])
  console.log("ParticipantReferralsChart",chartData)
  const [value, copy] = useCopyToClipboard()
  let values = Object.values(chartData).filter(value => Number.isFinite(value));
  let maxValue = Math.max.apply(null, values);
  let totalOfValues = values.reduce((a, b) => a + b, 0);

  useEffect(() => {
    setStadistics(chartData)
  }, [chartData])
  
  const options = {
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `How participants heard about the event - ${new Date(selectedDate.finish).toLocaleDateString('en-US', {month: 'long', year: '2-digit'})}`,
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
        // title: {
        //   display: true,
        //   text: "# of events",
        //   font: {
        //     weight: "bold",
        //   },
        // },
        ticks: {
          precision: 0,
          callback: (value, index, values) => {
            return `${((value * 100) / totalOfValues).toFixed()} %`
          },
        },
        min: 0,
        max: maxValue + (maxValue / 3),
      },
    },
  };



  const data = {
    labels: Object.keys(chartData),
    datasets: [
      {
        type: "bar",
        label: "# Participant referrals",
        backgroundColor: "#802E86",
        data: Object.values(chartData),
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

//   const exportChart = useCallback(() => {
//     const name = "resourcesDistributed";
//     const href = chartRef.current.toBase64Image();
//     getHrefImage(href, name);
//   }, []);

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

      <Chart
        type="bar"
        ref={chartRef}
        data={data}
        options={options}
        onClick={onClick}
      />
      <button
        onClick={imageToClipboard}
        className="my-5 px-5 py-2 text-lg border hover:bg-black hover:text-white rounded shadow"
      >
        Copy to clipboard
      </button>
    </div>
  );
};

export default ParticipantReferralsChart;