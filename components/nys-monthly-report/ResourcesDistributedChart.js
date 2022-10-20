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
import { Packer } from "docx";

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

const ResourcesDistributedChart = ({ chartData, getHrefImage }) => {
  const resourcesCounts = {
    "Safer sex kits": 0,
    "HIV literature": 0,
    "HepC literature": 0,
    "PrEP literature": 0,
    "Health disparities literature": 0,
    "Masks": 0,
    "COVID literature": 0,
    "Vaccine related literature": 0,
    "Hand sanitizers": 0,
    "Male condoms": 0,
    "Female condoms": 0,
    "Lubricant": 0,
    "Referral lists": 0,
    "Dental dams": 0,
    "Promotional materials": 0,
  };

  const [stadistics, setStadistics] = useState([])
  useEffect(() => {
    console.log("resources changed", chartData)
  // setStadistics(Object.values(ageCounts))
  }, [chartData]);

  const options = {
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Resources Distributed",
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
          text: "# of resources",
          font: {
            weight: "bold",
          },
        },
        ticks: {
          precision: 0,
        },
        min: 0,
        max: 2500,
      },
    },
  };

  
  const resourcesDistributed = [
    "Safer sex kits",
    "HIV literature",
    "HepC literature",
    "PrEP literature",
    "Health disparities literature",
    "Masks",
    "COVID literature",
    "Vaccine related literature",
    "Hand sanitizers",
    "Male condoms",
    "Female condoms",
    "Lubricant",
    "Referral lists",
    "Dental dams",
    "Promotional materials",
  ];

  const data = {
    labels: resourcesDistributed,
    datasets: [
      {
        type: "bar",
        label: "# of new resources",
        backgroundColor: "#3c9648",
        data: chartData,
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

  const exportChart = useCallback(() => {
    const name = "resourcesDistributed";
    const href = chartRef.current.toBase64Image();
    getHrefImage(href, name);
    // console.log(href)
  }, []);

  //   useEffect(()=> exportChart(), [])

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
      <input type="radio" onChange={exportChart} />

      <Chart
        type="bar"
        ref={chartRef}
        data={data}
        options={options}
        onClick={onClick}
      />
    </div>
  );
};

export default ResourcesDistributedChart;
