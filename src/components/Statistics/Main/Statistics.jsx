import React from 'react';
import './Statistics.css'
import LeftNavbar from "../../Users/AllUsers/SubCategory/LeftNavbar.jsx";
import TopNavbar from "../../Users/AllUsers/SubCategory/TopNavbar.jsx";
import TopStatistics from "./SubCategory/TopStatistics.jsx";

const Statistics = () => {
    return (
        <div>
            <LeftNavbar/>
            <TopNavbar/>
            <TopStatistics/>
        </div>
    );
};

export default Statistics;