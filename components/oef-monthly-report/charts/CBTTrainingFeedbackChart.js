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
import ChartDataLabels from "chartjs-plugin-datalabels";


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
  ChartDataLabels,
  // ChartjsPluginStacked100
);
import useCopyToClipboard from "../../../utils/useCopyToClipboard";
import { reverseDate } from "../../../utils/helpers";

const CBTTrainingFeedbackChart = ({
  cbtParticipants,
  getHrefImage,
  selectedDate,
}) => {
  console.log("chartDAta",cbtParticipants)
  const [value, copy] = useCopyToClipboard();
  const informationuseful = {
    "Strongly disagree": 0,
    "Disagree": 0,
    "Neither agree nor disagree": 0,
    "Agree": 0,
    "Strongly agree": 0,

  };
  const canapply = {
    "Strongly disagree": 0,
    "Disagree": 0,
    "Neither agree nor disagree": 0,
    "Agree": 0,
    "Strongly agree": 0,
  };
  const presenterexplainwell = {
    "Strongly disagree": 0,
    "Disagree": 0,
    "Neither agree nor disagree": 0,
    "Agree": 0,
    "Strongly agree": 0,
  };
  const understoodtopics = {
    "Strongly disagree": 0,
    "Disagree": 0,
    "Neither agree nor disagree": 0,
    "Agree": 0,
    "Strongly agree": 0,
  };
  const [stadistics, setStadistics] = useState([]);
  useEffect(() => {
    stadistics = cbtParticipants?.map((event) => {
      informationuseful[event?.informationuseful] += 1;
      canapply[event?.canapply] += 1;
      presenterexplainwell[event?.presenterexplainwell] += 1;
      understoodtopics[event?.understoodtopics] += 1;
    });
    setStadistics([informationuseful, canapply, presenterexplainwell, understoodtopics]);
  }, [cbtParticipants]);
  console.log(stadistics)

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
    indexAxis: 'y',
    plugins: {
      // stacked100: { enable: true, },
      legend: {
        position: "top",
        // align: 'start',
        labels: {
          color: '#000',
          font: {
            weight: 'normal',  
          }
        }
      },
      title: {
        display: true,
        text: ["CBT Training Feedback",`${reverseDate(selectedDate.start)}-${reverseDate(selectedDate.finish)}  N=${cbtParticipants?.length}`],
        position: "top",
        align: 'start',
        color: '#000',
        font: {
          size: 18,
          weight: 'bold'
        },
      },
      datalabels: {
        display: true,
        color: "#000",
        formatter: function (value, context) {
          return value > 0
            ? value
            : "";
        },
        font: {
          weight: "bold",
        },
        anchor: "end",
        offset: 10,
        align: "start",
      },
    },
    scales: {
      x: {
        stacked: true,
        min: 0,

        ticks: {
          color: '#000',
          stepSize: (value) => {
            return value.scale.max / 4
          },
          callback: (value, index, values) => {
            maxValue = values.findLast(e => e).value
            return `${((value * 100) / maxValue).toFixed()} %`
          },
        }, 
      },
      y: {
        stacked: true,
        beginAtZero: true,
        position: 'left',
        title: {
          display: true,
          // text: "# of people tested",
          font: {
            weight: "bold",
          },
        },
        ticks: {
          color: '#000',
          precision: 0,
        },
        // min: 0,
        // max: maxValue + maxValue / 3,
      },
      yRight: {
        beginAtZero: true,
        // type: 'linear',
        position: 'right',
        ticks: {
          color: '#000',
          callback: (value,index,values) => {
            let obj = stadistics[value];
            if (obj) {
              return Object.values(obj).reduce((a, b) => (a || 0 ) + (b || 0), 0)
            }
            // return value
          } 
        },
        grid: {
          display: false,
        }
      },
    },
  };

  const labels = [
    ["The information and", "materials presented", "were useful"],
    ["I can apply what I learned today", "to my work at my faith-based", " or community organization"],
    ["The presenter", "explained the", "topic well"],
    ["I understood the", "topics and concepts", "being discussed"],
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        type: "bar",
        label: "Strongly disagree",
        backgroundColor: "#DE8EA3",
        data: stadistics.map(obj => obj["Strongly disagree"]),
        borderColor: "white",
        borderWidth: 2,
      },
      {
        type: "bar",
        label: "Disagree",
        backgroundColor: "#EDC1CC",
        data: stadistics.map(obj => obj["Disagree"]),
        borderColor: "white",
        borderWidth: 2,
      },
      {
        type: "bar",
        label: "Neutral",
        backgroundColor: "#C0E2F7",
        data: stadistics.map(obj => obj["Neither agree nor disagree"]),
        borderColor: "white",
        borderWidth: 2,
      },
      {
        type: "bar",
        label: "Agree",
        backgroundColor: "#C6FFEB",
        data: stadistics.map(obj => obj["Agree"]),
        borderColor: "white",
        borderWidth: 2,
      },
      {
        type: "bar",
        label: "Strongly agree",
        backgroundColor: "#A1EDD2",
        data: stadistics.map(obj => obj["Strongly agree"]),
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
    const name = "participantAge";
    const href = chartRef.current.toBase64Image();
    getHrefImage(href, name);
    // console.log(href)
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

<br />
      <small className="italic"><strong>Methodology:</strong> Black Health collects data on events held, including number and demographics of participants, resources distributed,  testing outputs and outcomes/challenges from event delivery. No personally identifiable information is collected or stored.</small>
      
      <br /> 
      <button
        onClick={imageToClipboard}
        className="px-5 my-5 py-2 text-lg border hover:bg-black hover:text-white rounded shadow"
      >
        Copy to clipboard
      </button>
    </div>
  );
};

export default CBTTrainingFeedbackChart;
