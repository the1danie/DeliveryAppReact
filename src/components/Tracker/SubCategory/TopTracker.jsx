import React from 'react';
import './TopTracker.css'
import OrderButton from "../../../assets/OrderButton.svg";

const TopTracker = () => {
    return (
        <div className="container">
            <div className="content">
                <h1>Трекер</h1>
                <button className="add-button"><img src={OrderButton} alt="Add"/></button>
            </div>
        </div>
    );
};

export default TopTracker;