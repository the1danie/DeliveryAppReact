import React, { useState } from 'react';
import './TopUsersCard.css';

const TopUsersCard = ({ onFilterChange }) => { // Corrected prop name
    const [activeItem, setActiveItem] = useState('Личные данные'); // State to track active item

    const handleClick = (item) => {
        console.log(`Clicked item: ${item}`);
        setActiveItem(item);
        onFilterChange(item); // Corrected prop name
    };

    return (
        <div className="users_platform">
            <div className="users">
                <p className={activeItem === 'Личные данные' ? 'active' : ''} onClick={() => handleClick('Личные данные')}>Личные данные</p>
                <p className={activeItem === 'Документы' ? 'active' : ''} onClick={() => handleClick('Документы')}>Документы</p>
                <p className={activeItem === 'Статус' ? 'active' : ''} onClick={() => handleClick('Статус')}>Статус</p>
            </div>
        </div>
    );
};

export default TopUsersCard;
