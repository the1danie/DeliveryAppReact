import React from "react";

const StatisticsBlocks = ({ totalUsers, totalPaidSubscriptions }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)", // Create two equal columns
        marginTop: "10px",
        gap: "20px", // Space between the blocks
        width: "50.4%", // Container width
        marginLeft: "17.4%",
      }}
    >
      <div
        style={{
          textAlign: "left",
          padding: "20px", // Adjust padding as needed
          borderRadius: "10px",
          border: "1px solid #ddd",
        }}
      >
        <p>Общее количество пользователей</p>
        <h3>{totalUsers}</h3>
      </div>
      <div
        style={{
          textAlign: "left",
          padding: "20px", // Adjust padding as needed
          borderRadius: "10px",
          border: "1px solid #ddd",
        }}
      >
        <p>Общее количество платных подписок</p>
        <h3>{totalPaidSubscriptions}</h3>
      </div>
    </div>
  );
};

export default StatisticsBlocks;
