import React from 'react';
import LeftNavbar from "../Users/AllUsers/SubCategory/LeftNavbar.jsx";
import TopNavbar from "../Users/AllUsers/SubCategory/TopNavbar.jsx";
import TopStatistics from "../Statistics/Main/SubCategory/TopStatistics.jsx";
import TopFinance from "./SubCategory/TopFinance.jsx";
import TopFinanceToogle from "./SubCategory/TopFinanceToogle.jsx";
import TopFinanceCard from "./SubCategory/TopFinanceCard.jsx";
import DateRangePicker from "./SubCategory/DateRangePicker.jsx";

const Finance = () => {
    return (
        <div>
            <LeftNavbar />
            <TopNavbar />
            <TopFinance/>
            <TopFinanceToogle/>
            <TopFinanceCard/>

        </div>
    );
};

export default Finance;