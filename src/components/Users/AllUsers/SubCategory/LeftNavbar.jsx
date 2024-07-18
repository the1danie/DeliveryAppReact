import React, { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";
import "./LeftNavbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faChartLine,
  faMoneyBill,
  faClock,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import boy from "../../../../assets/RunBoy.svg";
import { Link } from "react-router-dom"; // Import Link from React Router

const LeftNavbar = () => {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const savedActiveLink = localStorage.getItem("activeLink");
    if (savedActiveLink) {
      setActiveLink(savedActiveLink);
    }
  }, []);

  const handleNavLinkClick = (linkName) => {
    console.log(`Changing active link to: ${linkName}`);
    setActiveLink(linkName);
    localStorage.setItem("activeLink", linkName);
  };

  console.log(`Current active link: ${activeLink}`);

  return (
    <Nav className="flex-column navbar">
      <div className="infohome-container-order">
        <img
          src={boy}
          style={{ width: "40px", height: "40px", marginLeft: "20px" }}
          alt="First Icon"
        />
        <p className="infohome-order">Курьеры</p>
      </div>
      <Nav.Item>
        <Link
          to="/users"
          className={`nav-link d-flex align-items-center ${activeLink === "Пользователи" ? "nav-link-active" : ""}`}
          onClick={() => handleNavLinkClick("Пользователи")}
        >
          <FontAwesomeIcon icon={faUserCircle} size="lg" className="nav-icon" />
          <span className="ml-2">Пользователи</span>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link
          to="/statistics"
          className={`nav-link d-flex align-items-center ${activeLink === "Статистика" ? "nav-link-active" : ""}`}
          onClick={() => handleNavLinkClick("Статистика")}
        >
          <FontAwesomeIcon icon={faChartLine} className="nav-icon" />
          <span className="ml-2">Статистика</span>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link
          to="/finances"
          className={`nav-link d-flex align-items-center ${activeLink === "Финансы" ? "nav-link-active" : ""}`}
          onClick={() => handleNavLinkClick("Финансы")}
        >
          <FontAwesomeIcon icon={faMoneyBill} className="nav-icon" />
          <span className="ml-2">Финансы</span>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link
          to="/tracker"
          className={`nav-link d-flex align-items-center ${activeLink === "Трекер" ? "nav-link-active" : ""}`}
          onClick={() => handleNavLinkClick("Трекер")}
        >
          <FontAwesomeIcon icon={faClock} className="nav-icon" />
          <span className="ml-2">Трекер</span>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link
          to="/settings"
          className={`nav-link d-flex align-items-center ${activeLink === "Настройки" ? "nav-link-active" : ""}`}
          onClick={() => handleNavLinkClick("Настройки")}
        >
          <FontAwesomeIcon icon={faCog} className="nav-icon" />
          <span className="ml-2">Настройки</span>
        </Link>
      </Nav.Item>
    </Nav>
  );
};

export default LeftNavbar;
