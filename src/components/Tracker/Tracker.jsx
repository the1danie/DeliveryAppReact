import React from 'react';
import './Tracker.css'
import LeftNavbar from "../Users/AllUsers/SubCategory/LeftNavbar";
import TopNavbar from "../Users/AllUsers/SubCategory/TopNavbar";
import TopTracker from "./SubCategory/TopTracker";
import InfoTracker from "./SubCategory/InfoTracker";

const Tracker = () => {
    return (
        <div>
            <LeftNavbar/>
            <TopNavbar />
            <TopTracker/>
            <InfoTracker/>
        </div>
    );
};

export default Tracker;