import "./TopGraph.css";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const TopGraph = () => {
  const data = {
    labels: [
      "January",
      "",
      "February",
      "",
      "March",
      "",
      "April",
      "",
      "May",
      "",
      "June",
      "",
      "July",
      "",
      "August",
      "",
      "September",
      "",
      "October",
      "",
      "November",
      "",
      "December",
    ],
    datasets: [
      {
        label: "Total Users",
        backgroundColor: "transparent",
        borderColor: "rgba(75,192,192,1)",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        pointRadius: 5, // Hide points
        data: [65, 59, 80, 81, 56, 55, 40, 70, 90, 100, 85, 95],
        tension: 0.5,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 20,
        max: 100,
        ticks: {
          stepSize: 20,
          callback: (value) => value + "K",
        },
      },
    },
    grid: {
      borderDash: [10],
    },
  };

  return (
    <div className="top-graph-container">
      <h2>Statistics Graph</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default TopGraph;
