import React from "react";
import { CustomProvider, DateRangePicker } from "rsuite";
import ruRU from "rsuite/locales/ru_RU";
import "rsuite/dist/rsuite.css"; // Import RSuite default styles
import './DateRangePicker.css'; // Import your custom black-and-white styles

const MyDateRangePicker = () => {
    return (
        <div className='dates'>
            <CustomProvider locale={ruRU}>
                <DateRangePicker />
            </CustomProvider>
        </div>
    );
};

export default MyDateRangePicker;
