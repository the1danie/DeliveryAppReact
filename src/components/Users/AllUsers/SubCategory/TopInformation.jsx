import React from 'react';
import './TopInformation.css';
import AddButton from '../../../../assets/AddButton.svg'; // Убедитесь, что путь к вашему AddButton.svg указан правильно

const TopInformation = ({ activeItem }) => {
    // Определяем текст заголовка на основе активного элемента
    let titleText;
    if (activeItem === 'Все') {
        titleText = 'Пользователи';
    } else if (activeItem === 'Пользователь') {
        titleText = 'Пользователи';
    } else if (activeItem === 'Курьер') {
        titleText = 'Курьеры';
    }

    return (
        <div className="container">
            <div className="content">
                <h1>{titleText}</h1>
                <button className="add-button"><img src={AddButton} alt="Add"/></button>
            </div>
        </div>
    );
};

export default TopInformation;
