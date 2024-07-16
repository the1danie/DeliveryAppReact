// TopNavbar.jsx
import React, { useState } from 'react';
import './TopNavbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import World from '../../../../assets/World.svg'
import Admin from '../../../../assets/Admin.svg'


const TopNavbar = () => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <header className="header">
            <div className={`search-bar ${isFocused ? 'focused' : ''}`}>
                <FontAwesomeIcon icon={faSearch} className={`search-icon ${isFocused ? 'focused' : ''}`} />
                <input
                    type="text"
                    placeholder="Поиск"
                    className={`search-input ${isFocused ? 'focused' : ''}`}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            </div>
            <nav className="header-nav">
                <button className='top-navbar-button'>
                    <a href="#" className="header-link">
                        <img src={World} alt=""/>
                    </a>
                </button>
                <button className='top-navbar-button'>
                    <a href="#" className="header-link">
                        <img src={Admin} alt=""/>
                    </a>
                </button>
            </nav>
        </header>
    );
};

export default TopNavbar;
