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

const EventLocationChart = ({ chartData, getHrefImage }) => {
  const [stadistics, setStadistics] = useState([])
  const [value, copy] = useCopyToClipboard()
  const eventLocationsCounts = {
    "Virtual / Online": 0,
    "College/School/Trades school/community-based learning center": 0,
    "Community based organization site": 0,
    "COVID vaccine location": 0,
    "COVID-19 Testing location": 0,
    "Faith based location/Place of worship": 0,
    "Food Bank/Pantry/Food Kitchen": 0,
    "Hospital/Clinic": 0,
    "Local neighborhood small business": 0,
    "Park/Playground": 0,
    "Public housing location": 0,
    "Public transportation hub or station": 0,
}
  useEffect(() => {
   stadistics = chartData?.map(event =>{
     eventLocationsCounts[event.eventlocationtypename]++ 
   })
   setStadistics(Object.values(eventLocationsCounts))
  }, [chartData]);
  const options = {
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Event location",
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
        max: 10,
      },
    },
  };

  const labels = ["Week 1", "Week 2", "Week 3", "Week 4+"];
  const eventLocations = [
    "Virtual / Online",
    "College/School/Trades school/community-based learning center",
    "Community based organization site",
    "COVID vaccine location",
    "COVID-19 Testing location",
    "Faith based location/Place of worship",
    "Food Bank/Pantry/Food Kitchen",
    "Hospital/Clinic",
    "Local neighborhood small business",
    "Park/Playground",
    "Public housing location",
    "Public transportation hub or station",
  ];

  const data = {
    labels: eventLocations,
    datasets: [
      {
        type: "bar",
        label: "# of new events",
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

  const exportChart = useCallback(() => {
    const name = "eventLocation";
    const href = chartRef.current.toBase64Image();
    getHrefImage(href, name);
  }, []);

  const imageToClipboard = async () => {
    const href = chartRef.current.toBase64Image();
    await fetch(href)
    .then(res => res.blob())
    .then(blob => copy(blob))
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
        onClick={imageToClipboard}
        className="my-5 px-5 py-2 text-lg border hover:bg-black hover:text-white rounded shadow"
      >
        Copy to clipboard
      </button>
    </div>
  );
};

export default EventLocationChart;