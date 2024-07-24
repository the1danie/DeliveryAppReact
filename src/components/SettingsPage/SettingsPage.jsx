import React from 'react';
import './SettingsPage.css'
import LeftNavbar from "../Users/AllUsers/SubCategory/LeftNavbar";
import TopNavbar from "../Users/AllUsers/SubCategory/TopNavbar";
import SettingsInfo from "./SubCategory/SettingsInfo";
import SettingsForms from "./SubCategory/SettingsForms";

const SettingsPage = () => {
    return (
        <div>
            <LeftNavbar/>
            <TopNavbar/>
            <SettingsInfo/>
            <SettingsForms/>
        </div>
    );
};

export default SettingsPage;