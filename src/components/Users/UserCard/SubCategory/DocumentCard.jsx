import React from 'react';
import './DocumentCard.css'
import AvatarFirst from "../../../../assets/Avatar.svg";
import AvatarSecond from "../../../../assets/Avatar.png";
import '../../AllUsers/SubCategory/Category.css';

const DocumentCard = () => {
    const users = [
        { date: '01.01.2024', role: 'Принят', name: 'Иван Иванов', deliveryGo: 'Москва, Малая Юшуньская улица, 1к1', deliveryBack: 'Москва, Малая Юшуньская улица, 15к1', avatar: AvatarFirst },
        { date: '01.01.2024', role: 'На проверке', name: 'Ирина Иванова', deliveryGo: 'Москва, Малая Юшуньская улица, 1к1', deliveryBack: 'Москва, Малая Юшуньская улица, 15к1', avatar: AvatarSecond },
        { date: '01.01.2024', role: 'Не принят', name: 'Иван Иванов', deliveryGo: 'Москва, Малая Юшуньская улица, 1к1', deliveryBack: 'Москва, Малая Юшуньская улица, 15к1', avatar: AvatarFirst }
    ];

    return (
        <div className="container-category">
            <div className="content-category">
                <table className="table">
                    <thead>
                    <tr>
                        <td scope="col" className='td-size'>РЕГИСТРАЦИЯ</td>
                        <td scope="col" className='td-role'>РОЛЬ</td>
                        <td scope="col" className="td-role">КУРЬЕР</td>
                        <td scope="col" className='td-role'>АДРЕС ДОСТАВКИ ТУДА</td>
                        <td scope="col" className='td-role'>АДРЕС ДОСТАВКИ ОБРАТНО</td>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td className='data '>{user.date}</td>
                            <td className='td-role-information'>
                                <span className={user.role === 'Принят' ? "rect-green" : user.role === 'На проверке' ? "rect-orange" : "rect-grey"}>
                                    {user.role}
                                </span>
                            </td>
                            <td className="img-container td-role-information">
                                <img src={user.avatar} alt="Profile" />
                                <div className="img-text">
                                    <span>{user.name}</span>
                                </div>
                            </td>
                            <td className='td-role-information data'>{user.deliveryGo}</td>
                            <td className='td-role-information data'>{user.deliveryBack}</td>

                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DocumentCard;