import React from 'react';
import AvatarFirst from "../../../assets/Avatar.svg";
import AvatarSecond from "../../../assets/Avatar.png";

const InfoTracker = () => {
    const users = [
        {
            numOrder: '123456',
            dateOrder: '01.02.2024',
            statusOrder: 'Определение исполнителя',
            order: 'Иван Иванов',
            deliveryOrder: { order: '', avatar: '' },
            avatar: AvatarFirst
        },
        {
            numOrder: '123456',
            dateOrder: '01.02.2024',
            statusOrder: 'Доставка',
            order: 'Ирина Иванова',
            deliveryOrder: { order: 'Ирина Иванова', avatar: AvatarSecond },
            avatar: AvatarSecond
        },
        {
            numOrder: '123456',
            dateOrder: '01.02.2024',
            statusOrder: 'Завершен',
            order: 'Иван Иванов',
            deliveryOrder: { order: 'Иван Иванов', avatar: AvatarFirst },
            avatar: AvatarFirst
        },
        {
            numOrder: '123456',
            dateOrder: '01.02.2024',
            statusOrder: 'Проблема',
            order: 'Ирина Иванова',
            deliveryOrder: { order: 'Ирина Иванова', avatar: AvatarSecond },
            avatar: AvatarSecond
        }
    ];
    return (
        <div className="container-category">
            <div className="content-category">
                <table className="table">
                    <thead>
                    <tr>
                        <td style={{ whiteSpace: 'nowrap'}} scope="col" className='td-size'>№ ЗАКАЗА</td>
                        <td scope="col" className='td-role'>ДАТА ЗАКАЗА</td>
                        <td scope="col" className="td-role">СТАТУС ЗАКАЗА</td>
                        <td scope="col" className='td-role'>ОТПРАВИТЕЛЬ</td>
                        <td scope="col" className='td-role'>КУРЬЕР</td>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td className='data '>{user.numOrder}</td>
                            <td className='td-role-information data'>
                                {user.dateOrder}
                            </td>
                            <td className="td-role-information ">
                                <span
                                    className={user.statusOrder === 'Завершен' ? "rect-green" : user.statusOrder === 'Доставка' ? "rect-orange" : user.statusOrder === 'Проблема' ? "rect-red" : "rect-grey"}>
                                    {user.statusOrder}
                                </span>
                            </td>
                            <td className="img-container td-role-information ">
                                <div style={{display: "flex"}}>
                                    <img src={user.avatar} alt="Profile"/>
                                    <div className="img-text">
                                        <span>{user.order}</span>
                                    </div>
                                </div>
                            </td>
                            <td className="img-container td-role-information ">
                                <div style={{display: "flex"}}>
                                    {user.deliveryOrder.avatar && (
                                        <img src={user.deliveryOrder.avatar} alt="Profile"/>
                                    )}
                                    <div className="img-text">
                                        <span>{user.deliveryOrder.order}</span>
                                    </div>
                                </div>
                            </td>

                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InfoTracker;