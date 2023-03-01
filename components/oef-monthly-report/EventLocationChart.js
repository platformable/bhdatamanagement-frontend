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
import {reverseDate} from "../../utils/helpers";

const EventLocationChart = ({ chartData, getHrefImage, selectedDate }) => {
  const [stadistics, setStadistics] = useState([])
  const [value, copy] = useCopyToClipboard()
  
  // const eventLocationsCounts = {
  //   0 : {label: "Community based organization site", count: 0},
  //   1: {label: "COVID vaccine location", count: 0},
  //   2: {label: "COVID-19 Testing location", count: 0},
  //   3: {label: "College/School/Trades school/community-based learning center", count: 0},
  //   4: {label: "Faith based location/Place of worship", count: 0},
  //   5: {label: "Food Bank/Pantry/Food Kitchen", count: 0},
  //   6: {label: "Hospital/Clinic", count: 0},
  //   7: {label: "Local neighborhood small business", count: 0},
  //   8: {label: "Park/Playground", count: 0},
  //   9: {label: "Public housing location", count: 0},
  //   10: {label: "Public transportation hub or station", count: 0},
  //   11: {label: "Other", count: 0},
  //   12: {label: "Virtual / Online", count: 0},

  // }
  const eventLocationsCounts = {
    "Virtual / Online": 0,
    "Community based organization site": 0,
    "COVID vaccine location": 0,
    "COVID-19 Testing location": 0,
    "College/School/Trades school/community-based learning center": 0,
    "Faith based location/Place of worship": 0,
    "Food Bank/Pantry/Food Kitchen": 0,
    "Hospital/Clinic": 0,
    "Local neighborhood small business": 0,
    "Park/Playground": 0,
    "Public housing location": 0,
    "Public transportation hub or station": 0,
    "Other": 0
}
  // console.log("chart data",chartData)
  useEffect(() => {
   stadistics = chartData?.map(event =>{
    // TO COUNT BY ID (ID'S NOT MATCHING WELL)
    // event.onlineinpersoneventtype === "Online" && (eventLocationsCounts[12]['count'] += 1);
    // event.eventlocationtypeid && (eventLocationsCounts[event?.eventlocationtypeid]['count'] += 1)  
    if (event.onlineinpersoneventtype === "In-person" && Object.keys(eventLocationsCounts).every(key => key !== event._eventlocationtypename))  {
      eventLocationsCounts["Other"] += 1;
      return;
    }

    if (event.onlineinpersoneventtype === "Online") {
      eventLocationsCounts["Virtual / Online"] += 1;
      return;
    }
    eventLocationsCounts[event.eventlocationtypename]++ 
   })
   let results = Object.values(eventLocationsCounts)
   setStadistics(results)
  }, [chartData]);

  let values = stadistics.filter(value => Number.isFinite(value));
  let maxValue = Math.max.apply(null, values);
  let totalOfValues = values.reduce((a, b) => a + b, 0);
  


  const options = {
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `Event Locations NYS CMP ${reverseDate(selectedDate.start)}-${reverseDate(selectedDate.finish)}`,
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
    labels: Object.keys(eventLocationsCounts),
    datasets: [
      {
        type: "bar",
        label: "# of events",
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