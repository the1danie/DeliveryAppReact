import React, { useState } from "react";
import MyResponsiveLine from "./MyResponsiveLine"; // Adjust the path as per your file structure

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

const App = () => {
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

  return (
      <div style={{ padding: "10px", borderRadius: "10px", border: "1px solid #ddd", maxWidth: "800px", margin: "auto" }}>
        <h2>Пользователи</h2>
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "10px" }}>
          <button onClick={() => setTimeRange("12 months")}>12 месяцев</button>
          <button onClick={() => setTimeRange("6 месяцев")}>6 месяцев</button>
          <button onClick={() => setTimeRange("30 дней")}>30 дней</button>
          <button onClick={() => setTimeRange("7 дней")}>7 дней</button>
        </div>
        <div style={{ height: "200px" }}>
          <MyResponsiveLine data={getData()} />
        </div>
      </div>
  );
};

export default App;
