import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "./chart.css";

function SearchChart() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Month",
          },
        },
      ],
      yAxes: [
        {
          display: false,
          ticks: {
            beginAtZero: true,
            steps: 10,
            stepValue: 5,
            max: 100,
          },
        },
      ],
    },
  };

  const labels = [
    "01/10/22",
    "02/10/22",
    "03/10/22",
    "04/10/22",
    "05/10/22",
    "06/10/22",
    "07/10/22",
    "08/10/22",
    "09/10/22",
    "10/10/22",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "number of searches perfroms at 4 hr",
        data: [120, 220, 452, 604, 729, 442, 502, 692, 702, 1000],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <h3 className="text-center">
      SearchChart
      <div className="chart-size">
        <Bar options={options} data={data} />
      </div>
    </h3>
  );
}

export default SearchChart;
