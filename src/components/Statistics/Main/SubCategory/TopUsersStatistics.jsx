import React, { useState } from "react";
import "./TopUsersStatistics.css";

const TopUsersStatistics = ({ onFilterChange }) => {
  const [activeItem, setActiveItem] = useState("Пользователь"); // State to track active item

  const handleClick = (item) => {
    setActiveItem(item); // Update active item
    onFilterChange(item); // Notify parent component of the filter change
  };

  return (
    <div className="users_platform">
      <div className="users">
        <p
          className={activeItem === "Пользователь" ? "active" : ""}
          onClick={() => handleClick("Пользователь")}
        >
          Пользователи
        </p>
        <p
          className={activeItem === "Документ" ? "active" : ""}
          onClick={() => handleClick("Документ")}
        >
          Документы
        </p>
        <p
          className={activeItem === "Хранилище" ? "active" : ""}
          onClick={() => handleClick("Хранилище")}
        >
          Хранилище
        </p>
      </div>
    </div>
  );
};

export default TopUsersStatistics;
