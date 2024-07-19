import ProgressBarLine from "./ProgressBarLine"; // Adjust the path as needed
import React, { useState } from "react";

const SavedInformation = () => {
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
          Хранилище
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
            style={{
              padding: "5px 10px",
              marginRight: "5px",
              border:
                timeRange === "12 months" ? "2px solid blue" : "1px solid #ccc",
              borderRadius: "5px",
              backgroundColor: timeRange === "12 months" ? "#f0f0f0" : "white",
            }}
          >
            12 месяцев
          </button>
          <button
            onClick={() => setTimeRange("6 months")}
            style={{
              padding: "5px 10px",
              marginRight: "5px",
              border:
                timeRange === "6 months" ? "2px solid blue" : "1px solid #ccc",
              borderRadius: "5px",
              backgroundColor: timeRange === "6 months" ? "#f0f0f0" : "white",
            }}
          >
            6 месяцев
          </button>
          <button
            onClick={() => setTimeRange("30 days")}
            style={{
              padding: "5px 10px",
              marginRight: "5px",
              border:
                timeRange === "30 days" ? "2px solid blue" : "1px solid #ccc",
              borderRadius: "5px",
              backgroundColor: timeRange === "30 days" ? "#f0f0f0" : "white",
            }}
          >
            30 дней
          </button>
          <button
            onClick={() => setTimeRange("7 days")}
            style={{
              padding: "5px 10px",
              marginRight: "5px",
              border:
                timeRange === "7 days" ? "2px solid blue" : "1px solid #ccc",
              borderRadius: "5px",
              backgroundColor: timeRange === "7 days" ? "#f0f0f0" : "white",
            }}
          >
            7 дней
          </button>
        </div>
        <ProgressBarLine />
      </div>
    </div>
  );
};

export default SavedInformation;
