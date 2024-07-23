import React from 'react';
import './TopTracker.css'
import { useNavigate } from 'react-router-dom';
import OrderButton from "../../../assets/OrderButton.svg";

const TopTracker = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/tracker/order');
    };
    return (
        <div className="container">
            <div className="content">
                <h1>Трекер</h1>
                <button onClick={handleButtonClick} className="add-button"><img src={OrderButton} alt="Add"/></button>
            </div>
        </div>
    );
};

export default TopTracker;