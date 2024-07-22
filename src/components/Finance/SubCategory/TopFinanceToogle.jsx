import React, {useState} from 'react';
import './TopFinanceToogle.css'
import Period from "../../../assets/ButtonPeriod.svg";
import Admin from "../../../assets/Admin.svg";

const TopFinanceToogle = ({ onFilterChange }) => {
    const [activeItem, setActiveItem] = useState("Статистика"); // State to track active item

    const handleClick = (item) => {
        setActiveItem(item); // Update active item
        onFilterChange(item); // Notify parent component of the filter change
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
            <button className='top-navbar-button'>
                <a href="#" className="header-link">

                </a>
            </button>
        </div>
);
};

export default TopFinanceToogle;