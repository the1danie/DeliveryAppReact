import React, { useState } from "react";
import "./Statistics.css";
import LeftNavbar from "../../Users/AllUsers/SubCategory/LeftNavbar.jsx";
import TopNavbar from "../../Users/AllUsers/SubCategory/TopNavbar.jsx";
import TopStatistics from "./SubCategory/TopStatistics.jsx";
import TopUsersStatistics from "./SubCategory/TopUsersStatistics.jsx";
import TopGraph from "./SubCategory/TopGraph.jsx";
import StatisticsBlocks from "./SubCategory/StatisticsBlocks.jsx";

const Statistics = () => {
  const [filter, setFilter] = useState("Пользователь"); // State for filtering users
  return (
    <div>
      <LeftNavbar />
      <TopNavbar />
      <TopStatistics />
      <TopUsersStatistics filter={filter} />
      <TopGraph />
      <StatisticsBlocks totalUsers={"1000"} totalPaidSubscriptions={"1000"} />
    </div>
  );
};

export default Statistics;
