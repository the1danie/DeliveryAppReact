import React, { useState, useEffect } from "react";
import "./Category.css";
import AvatarSecond from "../../../../assets/Avatar.png";
import AvatarFirst from "../../../../assets/Avatar.svg";
import Pen from "../../../../assets/Pen.svg";
import { Link } from "react-router-dom";
import Trash from "../../../../assets/Trash.svg";
import { role } from "../../../../../axiosStore"; // Import the role function

const Category = ({ filter }) => {
  const [userRoles, setUserRoles] = useState({});
  const [tokens, setTokens] = useState({ accessToken: '', refreshToken: '' });

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    setTokens({ accessToken, refreshToken });
  }, []);

  const users = [
    {
      date: "01.01.2024",
      role: "Пользователь",
      role_number: 1,
      name: "Иван Иванов",
      status: "Амбассадор",
      email: "bombaa@gmail.com",
      avatar: AvatarFirst,
    },
    {
      date: "01.01.2024",
      role: "Курьер",
      role_number: 2,
      name: "Ирина Иванова",
      status: "Амбассадор",
      email: "guest@guest.com",
      avatar: AvatarSecond,
    },
    {
      date: "01.01.2024",
      role: "Пользователь",
      role_number: 2,
      name: "Иван Иванов",
      status: "",
      email: "admin1@gmail.com",
      avatar: AvatarFirst,
    },
    {
      date: "01.01.2024",
      role: "Курьер",
      name: "Ирина Иванова",
      status: "",
      email: "irina_ivanova@gmail.com",
      avatar: AvatarSecond,
    },
  ];

  const filterUsersByRole = (users, role) => {
    if (role === "Все") {
      return users;
    }
    return users.filter(user => user.role === role);
  };

  const fetchUserRoles = async (users) => {
    let roles = {};
    for (let user of users) {
      try {
        const response = await role(user.email, user.role_number, tokens.accessToken, tokens.refreshToken);
        roles[user.email] = response.user_type;
      } catch (error) {
        console.error(`Failed to fetch role for ${user.email}:`, error);
        roles[user.email] = ""; // Set empty string if the request fails
      }
    }
    setUserRoles(roles);
  };

  useEffect(() => {
    if (tokens.accessToken && tokens.refreshToken) {
      fetchUserRoles(users);
    }
  }, [tokens]); // Run when tokens are set

  const filteredUsers = filterUsersByRole(users, filter);

  return (
      <div className="container-category">
        <div className="content-category">
          <table className="table">
            <thead>
            <tr>
              <td scope="col" className="td-size">РЕГИСТРАЦИЯ</td>
              <td scope="col" className="td-size">РОЛЬ</td>
              <td scope="col" className="td-size">ИМЯ И ФАМИЛИЯ</td>
              <td scope="col" className="td-size td-status">СТАТУС</td>
              <td scope="col" className="td-size">ЭЛ.ПОЧТА</td>
            </tr>
            </thead>
            <tbody>
            {filteredUsers.map((user, index) => (
                <tr key={index}>
                  <td className="data">{user.date}</td>
                  <td>
                  <span className={userRoles[user.email] === "Courier" ? "rect-orange" : "rect-green"}
                        style={{display: userRoles[user.email] ? '' : 'none'}}>
                      {userRoles[user.email]}
                    </span>
                  </td>
                  <td className="img-container">
                    <div style={{display: "flex"}}>
                      <img src={user.avatar} alt="Profile"/>
                      <div className="img-text">
                      <span>{user.name}</span>
                      </div>
                    </div>
                  </td>
                  <td className="ambassador">{user.status}</td>
                  <td className="gmail-table">{user.email}</td>
                  <td className="pen-table">
                    <Link to={`/users/edit`}>
                      <img src={Pen} alt="Edit" />
                    </Link>
                  </td>
                  <td className="pen-table">
                    <button>
                      <img src={Trash} alt="Delete" />
                    </button>
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
