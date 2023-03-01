import React, { useState, useEffect, useRef } from "react";
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
import ChartDataLabels from 'chartjs-plugin-datalabels';

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
  Title,
  ChartDataLabels
);
import useCopyToClipboard from "../../utils/useCopyToClipboard";
const TypeOfEventChart = ({ chartData, getHrefImage, selectedDate }) => {
  const [value, copy] = useCopyToClipboard()

  const counts = {
    "Online: Meeting": 0,
    "Online: Town Hall": 0,
    "Online: Webinar": 0,
    "Online: Workshop/Training": 0,
    "Outreach/Community Event": 0,
    "Town Hall": 0,
    "Vaccine and/or COVID-19 Testing Event": 0,
    "Workshop/Training": 0,
  }
  const [stadistics, setStadistics] = useState([]);
  useEffect(() => {
  console.log("db",chartData)

    const datastadistics = chartData?.map((event, index) => {



      if (event.inpersoneventtypename !== null || event.inpersoneventtypename !== "") {
        console.log("type",event.inpersoneventtypename)
        switch(event.inpersoneventtypename) {
          case ("Outreach/Community Event"):
            counts["Outreach/Community Event"] += 1
            break;
          case ("Town Hall"):
            counts["Town Hall"] += 1
            break;
          case ("Vaccine and/or COVID-19 Testing Event"):
            counts["Vaccine and/or COVID-19 Testing Event"] += 1
            break;
          case ("Workshop/Training"):
            counts["Workshop/Training"] += 1
            break;
        }
      }
        

      if (event.onlineeventtypename !== null || event.onlineeventtypename !== "") {
        switch (event.onlineeventtypename){
          case "Meeting":
            counts["Meeting"] += 1
            break;
          case "Town Hall":
            counts["Town Hall"] += 1
            break;
          case "Webinar":
            counts["Webinar"] += 1
            break;
          case "Workshop/Training":
            counts["Workshop/Training"] += 1
            break;
        }
      }


    });
    setStadistics(Object.values(counts));
  }, [chartData]);
  console.log("stadistics", counts)

  let values = stadistics.filter(value => Number.isFinite(value));
  let maxValue = Math.max.apply(null, values);
  let totalOfValues = values.reduce((a, b) => a + b, 0);

 /*  const reversedDate  = {
    start: new Date(selectedDate.start).toLocaleDateString("en-US", {month: "numeric", day: "numeric", year: "numeric"}),
    finish: new Date(selectedDate.finish).toLocaleDateString("en-US", {month: "numeric", day: "numeric", year: "numeric"})
  } */


  const reverseDate = (date) => {
    const splitted = new Date(date).toISOString().split("T")
    const reverse = splitted[0].split('-');
    const result=reverse[1]+'/'+reverse[2]+'/'+reverse[0];
    return result;
  }

  const typeOfEvents = [
    "Online: Meeting",
    "Online: Town Hall",
    "Online: Webinar",
    "Online: Workshop/Training",
    "In-person: Outreach/Community Event",
    "In-person: Town Hall",
    "In-person: Vaccine and/or COVID-19 Testing Event",
    "In-person: Workshop/Training",
  ];

  const options = {
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `Types of event NYS CMP ${reverseDate(selectedDate.start)}-${reverseDate(selectedDate.finish)}`,
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
          text: "# of events",
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
    labels: typeOfEvents,
    datasets: [
      {
        type: "bar",
        label: "# of events",
        backgroundColor: "#2B80F5",
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

  const exportChart = async () => {
    const name = "typeOfEvent";
    const href = chartRef.current.toBase64Image();
    getHrefImage(href, name);
  };

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
        className="px-5 my-5 py-2 text-lg border hover:bg-black hover:text-white rounded shadow"
      >
        Copy to clipboard
      </button>
    </div>
  );
};

export default TypeOfEventChart;
