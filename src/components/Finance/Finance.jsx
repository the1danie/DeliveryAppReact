import React, {useState} from 'react';
import LeftNavbar from "../Users/AllUsers/SubCategory/LeftNavbar.jsx";
import TopNavbar from "../Users/AllUsers/SubCategory/TopNavbar.jsx";
import TopFinance from "./SubCategory/TopFinance.jsx";
import TopFinanceToogle from "./SubCategory/TopFinanceToogle.jsx";
import TopFinanceCard from "./SubCategory/TopFinanceCard.jsx";
import TariffPage from "./SubCategory/TariffPage";

const Finance = () => {
    const [activeFilter, setActiveFilter] = useState('Статистика');

    const handleFilterChange = (filter) => {
        console.log(`Active filter: ${filter}`);
        setActiveFilter(filter);
    };
    return (
        <div>
            <LeftNavbar />
            <TopNavbar />
            <TopFinance/>
            <TopFinanceToogle onFilterChange={handleFilterChange} />
            {activeFilter === 'Статистика' && <TopFinanceCard />}
            {activeFilter === 'Тариф' && <TariffPage />}
        </div>
    );
};

export default Finance;