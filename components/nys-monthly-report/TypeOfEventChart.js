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

const TypeOfEventChart = ({ chartData, getHrefImage }) => {
  const typeOfEventsCounts = {
    "COVID-19 vaccine / testing": 0,
    "Outreach/Community Event": 0,
    "Day of action": 0,
    "In person: Workshop": 0,
    "In person: Town hall": 0,
    "Online: Workshop": 0,
    "Online: Town hall": 0,
    "Online: Webinar": 0,
    "Door knocking": 0,
  };
  const [stadistics, setStadistics] = useState([]);
  useEffect(() => {
    stadistics = chartData?.map((event) => {
      event.inpersoneventtypename !== null || event.inpersoneventtypename !== ""
        ? typeOfEventsCounts[event.inpersoneventtypename]++
        : typeOfEventsCounts[event.onlineeventtypename]++;
    });
    setStadistics(Object.values(typeOfEventsCounts));
  }, [chartData]);

  const typeOfEvents = [
    "COVID-19 vaccine / testing",
    "Outreach/Community Event",
    "Day of action",
    "In person: Workshop",
    "In person: Town hall",
    "Online: Workshop",
    "Online: Town hall",
    "Online: Webinar",
    "Door knocking",
  ];

  const options = {
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Type of Event",
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
          text: "# of events",
          font: {
            weight: "bold",
          },
        },
        ticks: {
          precision: 0,
        },
        min: 0,
        max: 80,
      },
    },
  };

  const data = {
    labels: typeOfEvents,
    datasets: [
      {
        type: "bar",
        label: "# of new events",
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
    await fetch(href)
    .then(res => res.blob())
    .then(blob => {
      const data = [new ClipboardItem({ [blob.type]: blob })]
      navigator.clipboard.write(data)
    })
    getHrefImage(href, name);
  };

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
        onClick={exportChart}
        className="px-5 py-2 text-lg border hover:bg-black hover:text-white rounded shadow"
      >
        Copy to clipboard
      </button>
    </div>
  );
};

export default TypeOfEventChart;
