import React from 'react';
import './OrderInformation.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretLeft} from "@fortawesome/free-solid-svg-icons";

const OrderInformation = () => {
    return (
        <div style={{ marginTop: '15px'}} className="container-user">
            <div className="content-user">
                <button>
                    <FontAwesomeIcon icon={faCaretLeft}/>
                </button>
                <h1>Заказ №123456</h1>
                <span
                    className="rect-green-user">Завершен</span>
            </div>
        </div>
    );
};

export default OrderInformation;