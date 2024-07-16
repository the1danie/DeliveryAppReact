import React from 'react';
import { Nav } from 'react-bootstrap';
import './LeftNavbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUserCircle,
    faChartLine,
    faMoneyBill,
    faClock,
    faCog
} from '@fortawesome/free-solid-svg-icons';
import boy from "../../../../assets/RunBoy.svg";

const LeftNavbar = () => {
    return (
        <Nav className="flex-column navbar">
            <div className='infohome-container-order'>
                <img src={boy} style={{width: '40px', height: '40px', marginLeft: '20px'}} alt="First Icon"/>
                <p className='infohome-order'>Курьеры</p>
            </div>
            <Nav.Item>
                <Nav.Link href="#" className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faUserCircle} size='lg' className="nav-icon"/>
                    <span className='ml-2'>Пользователи</span>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#" className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faChartLine} className="nav-icon"/>
                    <span className="ml-2">Статистика</span>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#" className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faMoneyBill} className="nav-icon"/>
                    <span className="ml-2">Финансы</span>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#" className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faClock} className="nav-icon"/>
                    <span className="ml-2">Трекер</span>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#" className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faCog} className="nav-icon"/>
                    <span className="ml-2">Настройки</span>
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default LeftNavbar;
