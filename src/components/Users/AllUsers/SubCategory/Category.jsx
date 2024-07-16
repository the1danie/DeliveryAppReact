import React from 'react';
import './Category.css';
import AvatarSecond from '../../../../assets/Avatar.png';
import AvatarFirst from '../../../../assets/Avatar.svg';
import Pen from '../../../../assets/Pen.svg';
import Trash from '../../../../assets/Trash.svg';

const Category = ({filter}) => {
    const users = [
        { date: '01.01.2024', role: 'Пользователь', name: 'Иван Иванов', status: 'Амбассадор', email: 'ivan_ivanov@gmail.com', avatar: AvatarFirst },
        { date: '01.01.2024', role: 'Курьер', name: 'Ирина Иванова', status: 'Амбассадор', email: 'irina_ivanova@gmail.com', avatar: AvatarSecond },
        { date: '01.01.2024', role: 'Пользователь', name: 'Иван Иванов', status: '', email: 'ivan_ivanov@gmail.com', avatar: AvatarFirst },
        { date: '01.01.2024', role: 'Курьер', name: 'Ирина Иванова', status: '', email: 'irina_ivanova@gmail.com', avatar: AvatarSecond }
    ];

    function filterUsersByRole(users, role) {
        console.log('Filter:', role); // Отладочный вывод
        if (role === 'Все') {
            console.log(users);
            return users;
        }

        let filteredUsers = [];
        for (let i = 0; i < users.length; i++) {
            if (users[i].role === role) {
                filteredUsers.push(users[i]);
            }
        }

        return filteredUsers;
    }

    const filteredUsers = filterUsersByRole(users, filter);

    console.log('Filtered Users:', filteredUsers); // Отладочный вывод

    return (
        <div className="container-category">
            <div className="content-category">
                <table className="table">
                    <thead>
                    <tr>
                        <td scope="col" className='td-size'>РЕГИСТРАЦИЯ</td>
                        <td scope="col" className='td-size'>РОЛЬ</td>
                        <td scope="col" className="td-size">ИМЯ И ФАМИЛИЯ</td>
                        <td scope="col" className='td-size td-status'>СТАТУС</td>
                        <td scope="col" className='td-size'>ЭЛ.ПОЧТА</td>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredUsers.map((user, index) => (
                        <tr key={index}>
                            <td className='data'>{user.date}</td>
                            <td><span className={user.role === 'Пользователь' ? "rect-green" : "rect-orange"}>{user.role}</span></td>
                            <td className="img-container">
                                <img src={user.avatar} alt="Profile" />
                                <div className="img-text">
                                    <span>{user.name}</span>
                                </div>
                            </td>
                            <td className='ambassador'>{user.status}</td>
                            <td className='gmail-table'>{user.email}</td>
                            <td className='pen-table'>
                                <button><img src={Pen} alt=""/></button>
                            </td>
                            <td className='pen-table'>
                                <button><img src={Trash} alt=""/></button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Category;
