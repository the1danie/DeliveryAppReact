import React, { useState } from 'react';
import LeftNavbar from "../AllUsers/SubCategory/LeftNavbar.jsx";
import TopNavbar from "../AllUsers/SubCategory/TopNavbar.jsx";
import './UserCard.css';
import TopInformationUser from "./SubCategory/TopInformationUser.jsx";
import TopUsersCard from "./SubCategory/TopUsersCard.jsx";
import TopInformationUserCard from "./SubCategory/TopInformationUserCard.jsx";
import DocumentCard from "./SubCategory/DocumentCard.jsx";
import StatusCard from "./SubCategory/StatusCard.jsx";

const UserCard = () => {
    const [activeFilter, setActiveFilter] = useState('Личные данные');

    const handleFilterChange = (filter) => {
        console.log(`Active filter: ${filter}`);
        setActiveFilter(filter);
    };

    return (
        <div>
            <LeftNavbar />
            <TopNavbar />
            <TopInformationUser nameUser={'Daniel'} userRole={'Пользователь'} />
            <TopUsersCard onFilterChange={handleFilterChange} />
            {activeFilter === 'Личные данные' && <TopInformationUserCard />}
            {activeFilter === 'Документы' && <DocumentCard />}
            {activeFilter === 'Статус' && <StatusCard />}
        </div>
    );
};

export default UserCard;
