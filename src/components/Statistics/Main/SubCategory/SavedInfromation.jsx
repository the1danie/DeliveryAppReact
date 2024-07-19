import ProgressBarLine from "./ProgressBarLine"; // Adjust the path as needed
import React, { useState } from "react";
import './DocumentStatisticsBlocks.css'
import './SavedInformation.css'

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
            <div className='saved-information'>
                <div className='saved-information-blocks'>
                    <p>Общее хранилище, гб</p>
                    <p>100 000</p>
                </div>
                <ProgressBarLine progress={1.0}/>
            </div>

            <div className='saved-information'>
                <div className='saved-information-blocks'>
                    <p>Использовано, гб</p>
                    <p>87 122</p>
                </div>
                <ProgressBarLine progress={0.7}/>
            </div>

        </div>
    </div>
  );
};

export default SavedInformation;
