import React, { useCallback,useState, useEffect, useRef } from "react";
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

const SexualOrientationChart = ({ chartData,getHrefImage}) => {

  const sexualOrientationCounts = {
    "Gay or lesbian": 0,
    "Straight or heterosexual": 0,
    "Bisexual": 0,
    "Queer": 0,
    "Questioning or not sure": 0,
    "Unknown": 0,
    "Decline to answer": 0,
  }
  
  const [stadistics, setStadistics] = useState([])
 useEffect(() => {
  stadistics = chartData?.map(event =>{
    sexualOrientationCounts["Gay or lesbian"] = event?.hivgayorlesbian + event?.stigayorlesbian + event?.hepcgayorlesbian
    sexualOrientationCounts["Straight or heterosexual"] = event?.hivstraightorheterosexual + event?.stistraightorheterosexual + event?.hepcstraightorheterosexual
    sexualOrientationCounts["Bisexual"] = event?.hivbisexual + event?.stibisexual + event?.hepcbisexual
    sexualOrientationCounts["Queer"] = event?.hivqueer + event?.stiqueer + event?.hepcqueer
    sexualOrientationCounts["Questioning or not sure"] = event?.hivquestioningornotsure + event?.stiquestioningornotsure + event?.hepcquestioningornotsure
    sexualOrientationCounts["Unknown"] = event?.hivsexualorientationunknown + event?.stisexualorientationunknown + event?.hepcsexualorientationunknown
    sexualOrientationCounts["Decline to answer"] = event?.hivsexualorientationdeclinedtoanswer + event?.stisexualorientationdeclinedtoanswer + event?.hepcsexualorientationdeclinedtoanswer
  })
  setStadistics(Object.values(sexualOrientationCounts))
 }, [chartData]);

  const options = {
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Sexual orientation",
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
        max: 15,
      },
    },
  };

  const sexualOrientation = [
    "Gay or lesbian",
    "Straight or heterosexual",
    "Bisexual",
    "Queer",
    "Questioning or not sure",
    "Unknown",
    "Decline to answer",
  ];
  const data = {
    labels:  sexualOrientation,
    datasets: [
      {
        type: "bar",
        label: "# of participants",
        backgroundColor: "#c42132",
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
    const name = "participantSexualOrientation";
    const href =  chartRef.current.toBase64Image();
    getHrefImage(href, name)
    // console.log(href)
  }, [])

  // useEffect(()=> exportChart(), [])

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

export default SexualOrientationChart;