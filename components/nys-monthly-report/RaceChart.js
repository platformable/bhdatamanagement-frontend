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
import ChartDataLabels from "chartjs-plugin-datalabels";
import { reverseDate } from "../../utils/helpers";
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
const RaceChart = ({ chartData, getHrefImage, selectedDate }) => {
  const [stadistics, setStadistics] = useState([]);
  const [value, copy] = useCopyToClipboard();
  const raceCounts = {
    "Black or African American": 0,
    Hispanic: 0,
    White: 0,
    Asian: 0,
    "Native Hawaiian or Other Pacific Islander": 0,
    "American Indian or Alaska Native": 0,
    "More than one race/ethnicity": 0,
    Other: 0,
    "Unknown/unreported": 0,
  };
  useEffect(() => {
    stadistics = chartData?.map((event) => {
      raceCounts["Black or African American"] +=
        event?.hivblackorafricanamerican;
      raceCounts["Hispanic"] += event?.hivhispanic;
      raceCounts["Asian"] += event?.hivasian;
      raceCounts["American Indian or Alaska Native"] +=
        event?.hivamericanindianoralaskanative;
      raceCounts["Native Hawaiian or Other Pacific Islander"] +=
        event?.hivnativehawaiianorotherpacificislander;
      raceCounts["White"] += event?.hivwhite;
      raceCounts["Other"] +=
        event?.hivsomeotherrace + event?.hivmiddleeasternornorthafrican;
      raceCounts["More than one race/ethnicity"] += event?.hivmorethanonerace;
      raceCounts["Unknown/unreported"] += event?.hivracedeclinedtoanswer;
    });
    setStadistics(Object.values(raceCounts));
  }, [chartData]);

  let values = stadistics.filter((value) => Number.isFinite(value));
  let maxValue = Math.max.apply(null, values);
  let totalOfValues = values.reduce((a, b) => a + b, 0);

  const reversedDate = {
    start: new Date(selectedDate.start).toLocaleDateString("en-US", {
      month: "numeric",
      day: "numeric",
      year: "numeric",
    }),
    finish: new Date(selectedDate.finish).toLocaleDateString("en-US", {
      month: "numeric",
      day: "numeric",
      year: "numeric",
    }),
  };

  const options = {
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `Races tested for HIV NYS CMP ${reverseDate(
          selectedDate.start
        )}-${reverseDate(selectedDate.finish)}`,
        position: "top",
        font: {
          size: 18,
        },
      },
      datalabels: {
        display: true,
        color: "#000",
        formatter: function (value, context) {
          return value > 0
            ? `${((value * 100) / totalOfValues).toFixed(2)}%`
            : "";
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
        max: maxValue + maxValue / 3,
      },
    },
  };

  const data = {
    labels: Object.keys(raceCounts),
    datasets: [
      {
        type: "bar",
        label: "# of people tested",
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

  const exportChart = useCallback(() => {
    const name = "participantRace";
    const href = chartRef.current.toBase64Image();
    getHrefImage(href, name);
  }, []);

  const imageToClipboard = async () => {
    const href = chartRef.current.toBase64Image();
    await fetch(href)
      .then((res) => res.blob())
      .then((blob) => copy(blob));
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
