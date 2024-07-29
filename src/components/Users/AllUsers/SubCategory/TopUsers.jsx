import React, { useState } from 'react';
import './TopUsers.css';

const TopUsers = ({ onFilterChange }) => {
    const [activeItem, setActiveItem] = useState('Все'); // State to track active item

    const handleClick = (item) => {
        setActiveItem(item); // Update active item on click
        onFilterChange(item); // Notify parent component of the filter change
    };

    return (
        <div className="users_platform">
            <div className="users">
                <p className={activeItem === 'Все' ? 'active' : ''} onClick={() => handleClick('Все')}>Все</p>
                <p className={activeItem === 'Пользователь' ? 'active' : ''}
                   onClick={() => handleClick('Пользователь')}>Пользователи</p>
                <p className={activeItem === 'Курьер' ? 'active' : ''} onClick={() => handleClick('Курьер')}>Курьеры</p>
                <p className={activeItem === 'Админ' ? 'active' : ''} onClick={() => handleClick('Админ')}>Админ</p>

            </div>
        </div>
    );
};

export default TopUsers;
