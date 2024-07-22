import React from 'react';
import './TopFinanceCard.css';


const TopFinanceCard = () => {
    const users = [
        { date: '01.01.2024', order: '123456', status: 'Оплачено', price: '152 ₽' },
        { date: '01.01.2024', order: '123457', status: 'Не оплачено', price: '1520 ₽' }
    ];

    return (
        <div className="container-category">
            <div className="content-category">
                <table className="table">
                    <thead>
                    <tr>
                        <td scope="col" className='td-size'>ДАТА</td>
                        <td scope="col" className='td-role'>№ ЗАКАЗА</td>
                        <td scope="col" className='td-role'>СТАТУС</td>
                        <td scope="col" className='td-role'>СУММА</td>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td className='data'>{user.date}</td>
                            <td className='data-order'>{user.order}</td>
                            <td className='data-status'>
                                    <span className={user.status === 'Оплачено' ? "rect-green" : "rect-grey"}>
                                        {user.status}
                                    </span>
                            </td>
                            <td className='data-finance'>{user.price}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TopFinanceCard;
