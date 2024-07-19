import React, { useState } from "react";
import "./Statistics.css";
import LeftNavbar from "../../Users/AllUsers/SubCategory/LeftNavbar.jsx";
import TopNavbar from "../../Users/AllUsers/SubCategory/TopNavbar.jsx";
import TopStatistics from "./SubCategory/TopStatistics.jsx";
import TopUsersStatistics from "./SubCategory/TopUsersStatistics.jsx";
import TopGraph from "./SubCategory/TopGraph.jsx";
import StatisticsBlocks from "./SubCategory/StatisticsBlocks.jsx";
import DocumentStatisticsBlocks from "./SubCategory/DocumentStatisticsBlocks.jsx";
import DocumentInfoBlocks from "./SubCategory/DocumentInfoBlocks.jsx";

const Statistics = () => {
  const [filter, setFilter] = useState("Пользователь"); // State for filtering

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div>
      <LeftNavbar />
      <TopNavbar />
      <TopStatistics />
      <TopUsersStatistics onFilterChange={handleFilterChange} />
      {filter === "Пользователь" && (
        <>
          <TopGraph />
          <StatisticsBlocks
            totalUsers={"1000"}
            totalPaidSubscriptions={"1000"}
          />
        </>
      )}
      {filter === "Документ" && (
        <>
          <DocumentStatisticsBlocks />
          <DocumentInfoBlocks
            totalUsers={"2000"}
            totalPaidSubscriptions={"3000"}
          />
        </>
      )}
    </div>
  );
};

export default Statistics;
