import React, { useState } from 'react';
import TopNavbar from "./SubCategory/TopNavbar.jsx";
import LeftNavbar from "./SubCategory/LeftNavbar.jsx";
import TopInformation from "./SubCategory/TopInformation.jsx";
import TopUsers from "./SubCategory/TopUsers.jsx";
import Category from "./SubCategory/Category.jsx";

const AllUsers = () => {
    const [filter, setFilter] = useState('Все'); // State for filtering users

    return (
        <>
            <LeftNavbar/>
            <TopNavbar/>
            <TopInformation activeItem={filter} />
            <TopUsers onFilterChange={setFilter} />
            <Category filter={filter} />
        </>
    );
};

export default AllUsers;
