import React from 'react';
import './TopInformationUser.css'
import {faCaretLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const TopInformationUser = ({ nameUser, userRole }) => {
    return (
        <div className="container-user">
            <div className="content-user">
                <button>
                    <FontAwesomeIcon icon={faCaretLeft} />
                </button>
                <h1>{nameUser}</h1>
                <span className={userRole === 'Пользователь' ? "rect-green-user" : "rect-orange-user"}>{userRole}</span>
            </div>
        </div>
    );
};

export default TopInformationUser;