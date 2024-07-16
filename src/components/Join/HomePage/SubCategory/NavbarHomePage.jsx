// eslint-disable-next-line no-unused-vars
import React from 'react';
import firstIcon from '../../../../assets/World.svg';
import secondIcon from '../../../../assets/Join.svg';
import  './NavbarHomePage.css'

const NavbarHomePage = () => {
    return (
        <>
            <div className="homepage-container">
                <button className="homepage-button">
                    <img src={firstIcon} alt="First Icon"/>
                </button>

                <button className="homepage-button">
                    <img src={secondIcon} alt="Second Icon"/>
                </button>
            </div>


        </>
    );
};

export default NavbarHomePage;
