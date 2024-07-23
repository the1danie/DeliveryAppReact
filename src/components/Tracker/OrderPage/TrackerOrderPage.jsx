import React from 'react';
import './TrackerOrderPage.css'
import LeftNavbar from "../../Users/AllUsers/SubCategory/LeftNavbar";
import TopNavbar from "../../Users/AllUsers/SubCategory/TopNavbar";
import OrderInformation from "./SubCategory/OrderInformation";
import InformationOrderBlock from "./SubCategory/InformationOrderBlock";

const TrackerOrderPage = () => {
    return (
        <div>
            <LeftNavbar/>
            <TopNavbar />
            <OrderInformation/>
            <InformationOrderBlock/>
        </div>
    );
};

export default TrackerOrderPage;