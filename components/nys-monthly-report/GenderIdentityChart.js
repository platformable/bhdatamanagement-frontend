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

const GenderIdentityChart = ({ chartData,getHrefImage}) => {
  const [stadistics, setStadistics] = useState([])
  const gendersCounts = {
    "Female": 0,
    "Male": 0,
    "Transgender female": 0,
    "Transgender male": 0,
    "Gender non-conforming": 0,
    "Non-binary": 0,
    "NotSureQuestioning": 0,
    "OtherGenderIdentity": 0,
    "GenderDeclinedToAnswer": 0
  };
 useEffect(() => {
  stadistics = chartData?.map(event =>{
    gendersCounts["Female"] = event?.hivfemale + event?.stifemale + event?.hepcfemale
    gendersCounts["Male"] = event?.hivmale + event?.stimale + event?.hepcmale
    gendersCounts["Female"] = event?.hivtransgenderfemale + event?.stitransgenderfemale + event?.hepctransgenderfemale
    gendersCounts["Transgender female"] = event?.hivtransgendermale + event?.stitransgendermale + event?.hepctransgendermale
    gendersCounts["Gender non-conforming"] = event?.hivgendernonconforming + event?.stigendernonconforming + event?.hepcgendernonconforming
    gendersCounts["Non-binary"] = event?.hivnonbinary + event?.stinonbinary + event?.hepcnonbinary
    gendersCounts["NotSureQuestioning"] = event?.hivnotsurequestioning + event?.stinotsurequestioning + event?.hepcnotsurequestioning
    gendersCounts["OtherGenderIdentity"] = event?.hivothergenderidentity + event?.stiothergenderidentity + event?.hepcothergenderidentity
    gendersCounts["GenderDeclinedToAnswer"] = event?.hivgenderdeclinedtoanswer + event?.stigenderdeclinedtoanswer + event?.hepcgenderdeclinedtoanswer
  })
  setStadistics(Object.values(gendersCounts))
 }, [chartData]);

  const options = {
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Gender identity",
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

  const genders = [
    "Female",
    "Male",
    "Female",
    "Transgender female",
    "Gender non-conforming",
    "Non-binary",
    "Other",
     ];

  const data = {
    labels:  genders,
    datasets: [
      {
        type: "bar",
        label: "# of participants",
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

export default GenderIdentityChart;