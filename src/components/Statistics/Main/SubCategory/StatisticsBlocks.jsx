import React from "react";
import PurpleCircle from "../../../../assets/PurpleCircle.svg";
import GreenCircle from "../../../../assets/GreenCircle.svg";

const StatisticsBlocks = ({ totalUsers, totalPaidSubscriptions }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)", // Create two equal columns
        marginTop: "10px",
        gap: "20px", // Space between the blocks
        width: "52%", // Container width
        marginLeft: "17.4%", // Container alignment
      }}
    >
      <div
        style={{
          textAlign: "left",
          padding: "20px", // Adjust padding as needed
          borderRadius: "10px",
          border: "1px solid #ddd",
          display: "flex", // Corrected the display property
          alignItems: "baseline", // Center items vertically
        }}
      >
        <img
          src={PurpleCircle}
          alt="Purple Circle"
          style={{
            marginRight: "10px", // Space between the circle and text
          }}
        />
        <div>
          <p style={{ margin: 0 }}>Общее количество пользователей</p>
          <h3 style={{ margin: 0 }}>{totalUsers}</h3>
        </div>
      </div>
      <div
        style={{
          textAlign: "left",
          padding: "20px", // Adjust padding as needed
          borderRadius: "10px",
          border: "1px solid #ddd",
          display: "flex", // Corrected the display property
          alignItems: "baseline", // Center items vertically
        }}
      >
        <img
          src={GreenCircle}
          alt="Green Circle"
          style={{
            marginRight: "10px", // Space between the circle and text
          }}
        />
        <div>
          <p style={{ margin: 0 }}>Общее количество платных подписок</p>
          <h3 style={{ margin: 0 }}>{totalPaidSubscriptions}</h3>
        </div>
      </div>
    </div>
  );
};

export default StatisticsBlocks;
