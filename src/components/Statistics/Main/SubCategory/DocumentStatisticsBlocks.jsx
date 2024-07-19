import React, { useState } from "react";
import MyResponsiveLine from "./MyResponsiveLine"; // Adjust the path as per your file structure
import "./DocumentStatisticsBlocks.css";

const data12Months = [
  {
    id: "First dataset",
    data: [
      { x: "Jan", y: 33 },
      { x: "Feb", y: 53 },
      { x: "Mar", y: 85 },
      { x: "Apr", y: 41 },
      { x: "May", y: 44 },
      { x: "Jun", y: 65 },
      { x: "Jul", y: 75 },
      { x: "Aug", y: 56 },
      { x: "Sep", y: 65 },
      { x: "Oct", y: 85 },
      { x: "Nov", y: 45 },
      { x: "Dec", y: 65 },
    ],
  },
  {
    id: "Second dataset",
    data: [
      { x: "Jan", y: 33 },
      { x: "Feb", y: 25 },
      { x: "Mar", y: 35 },
      { x: "Apr", y: 51 },
      { x: "May", y: 54 },
      { x: "Jun", y: 76 },
      { x: "Jul", y: 65 },
      { x: "Aug", y: 55 },
      { x: "Sep", y: 75 },
      { x: "Oct", y: 95 },
      { x: "Nov", y: 45 },
      { x: "Dec", y: 65 },
    ],
  },
];

const data6Months = [
  {
    id: "First dataset",
    data: [
      { x: "Jan", y: 33 },
      { x: "Feb", y: 53 },
      { x: "Mar", y: 85 },
      { x: "Apr", y: 41 },
      { x: "May", y: 44 },
      { x: "Jun", y: 65 },
    ],
  },
  {
    id: "Second dataset",
    data: [
      { x: "Jan", y: 33 },
      { x: "Feb", y: 25 },
      { x: "Mar", y: 35 },
      { x: "Apr", y: 51 },
      { x: "May", y: 54 },
      { x: "Jun", y: 76 },
    ],
  },
];

const data30Days = [
  // Data for 30 days
];

const data7Days = [
  // Data for 7 days
];

const DocumentStatisticsBlocks = () => {
  const [timeRange, setTimeRange] = useState("12 months");

  const getData = () => {
    switch (timeRange) {
      case "6 months":
        return data6Months;
      case "30 days":
        return data30Days;
      case "7 days":
        return data7Days;
      default:
        return data12Months;
    }
  };

  // Функция для вычисления общего количества пользователей
  const getTotalUsers = () => {
    const data = getData();
    return data.reduce((total, dataset) => {
      return total + dataset.data.reduce((sum, point) => sum + point.y, 0);
    }, 0);
  };

  // Функция для вычисления общего количества платных подписок (пример, можно адаптировать под реальные данные)
  const getTotalPaidSubscriptions = () => {
    return 1234; // Примерное значение, замените реальным вычислением
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        padding: "10px",
      }}
    >
      <div
        style={{
          padding: "10px",
          borderRadius: "10px",
          border: "1px solid #ddd",
          maxWidth: "1000px",
          width: "90%",
          marginLeft: "17%", // Adjust the width as needed
        }}
      >
        <h2
          style={{
            marginTop: "5px",
            marginLeft: "10px",
          }}
        >
          Документы
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "10px",
            gap: "25px",
          }}
        >
          <button
            onClick={() => setTimeRange("12 months")}
            className={`button-default ${
              timeRange === "12 months" ? "button-active" : ""
            }`}
          >
            12 months
          </button>

          <button
            onClick={() => setTimeRange("6 months")}
            className={`button-default ${
              timeRange === "6 months" ? "button-active" : ""
            }`}
          >
            6 months
          </button>
          <button
              onClick={() => setTimeRange("30 days")}
              className={`button-default ${
                  timeRange === "30 days" ? "button-active" : ""
              }`}
          >
            30 days
          </button>
          <button
              onClick={() => setTimeRange("7 days")}
              className={`button-default ${
                  timeRange === "7 days" ? "button-active" : ""
              }`}
          >
            7 days
          </button>
        </div>
        <div style={{height: "300px"}}>
          <MyResponsiveLine data={getData()}/>
        </div>
      </div>
    </div>
  );
};
export default DocumentStatisticsBlocks;
