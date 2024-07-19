import React from "react";
import PurpleCircle from "../../../../assets/PurpleCircle.svg";
import GreenCircle from "../../../../assets/GreenCircle.svg";
import "./DocumentInfoBlocks.css"; // Import the CSS file

const DocumentInfoBlocks = ({ totalUsers, totalPaidSubscriptions }) => {
  return (
    <div className="document-info-container">
      <div className="document-info-block">
        <img src={PurpleCircle} alt="Purple Circle" />
        <div>
          <p>Общее количество загруженных файлов</p>
          <h3>{totalUsers}</h3>
        </div>
      </div>
      <div className="document-info-block">
        <img src={GreenCircle} alt="Green Circle" />
        <div>
          <p>Общее количество скачанных файлов</p>
          <h3>{totalPaidSubscriptions}</h3>
        </div>
      </div>
    </div>
  );
};

export default DocumentInfoBlocks;
