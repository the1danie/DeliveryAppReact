import React, { useState } from 'react';
import './TopFinanceToogle.css';
import MyDateRangePicker from "./MyDateRangePicker";
import ButtonPeriod from '../../../assets/ButtonPeriod.svg'

const TopFinanceToogle = ({ onFilterChange }) => {
    const [activeItem, setActiveItem] = useState("Статистика"); // State to track active item
    const [showDatePicker, setShowDatePicker] = useState(false); // State to toggle date picker

    // Handle item click
    const handleClick = (item) => {
        setActiveItem(item); // Update active item
        onFilterChange(item); // Notify parent component of the filter change
        console.log(`Active item set to: ${item}`);
    };

    // Toggle date picker visibility
    const toggleDatePicker = () => {
        setShowDatePicker(prev => {
            const newState = !prev;
            console.log(`DatePicker visibility changed to: ${newState}`);
            return newState;
        });
    };

    // Close date picker handler
    const handleDatePickerClose = () => {
        setShowDatePicker(false);
        console.log('Date picker closed');
    };

    return (
        <div className="users_platform users_platform_custom">
            <div className="users">
                <p
                    className={activeItem === "Статистика" ? "active" : ""}
                    onClick={() => handleClick("Статистика")}
                >
                    Статистика платежей
                </p>
                <p
                    className={activeItem === "Тариф" ? "active" : ""}
                    onClick={() => handleClick("Тариф")}
                >
                    Тарифные планы
                </p>
            </div>


            {activeItem === "Статистика" && (
                <>
                    <button onClick={toggleDatePicker}><img src={ButtonPeriod} alt=""/></button>
                    {showDatePicker && (
                        <div className="overlay">
                            <MyDateRangePicker onClose={handleDatePickerClose} />
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default TopFinanceToogle;
