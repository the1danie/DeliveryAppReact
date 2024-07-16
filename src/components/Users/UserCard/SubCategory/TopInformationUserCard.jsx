import React, { useState } from 'react';
import './TopInformationUserCard.css';
import Avatar from '../../../../assets/Avatar.svg';
import Modal from '../BlockUser/Modal.jsx'

const TopInformationUserCard = () => {
    const [showModal, setShowModal] = useState(false);
    const [isBlocked, setIsBlocked] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleBlock = () => {
        setIsBlocked(!isBlocked);
        closeModal();
    };

    return (
        <div>
            <div className="container-user">
                <div className="content-user">
                    <img src={Avatar} height={'100px'} width='100px' alt=""/>
                </div>
            </div>
            <div className="container-user">
                <div className="content-user">
                    <div className="form-wrapper">
                        <div className="form-container">
                            <div className="form-group">
                                <label>Имя</label>
                                <input type="text" value="Иван" readOnly/>
                            </div>
                            <div className="form-group">
                                <label>Фамилия</label>
                                <input type="text" value="Иванов" readOnly/>
                            </div>
                            <div className="form-group">
                                <label>Отчество</label>
                                <input type="text" value="Иванович" readOnly/>
                            </div>
                            <div className="form-group">
                                <label>ИНН</label>
                                <input type="text" value="123456789123" readOnly/>
                            </div>
                            <div className="form-group">
                                <label>Номер телефона</label>
                                <input type="text" value="+1 (777) 458 - 78 - 94" readOnly className="no-border"/>
                            </div>
                        </div>
                        <div className="form-buttons">
                            <button className="delete-button">Удалить</button>
                            <button className="block-button" onClick={openModal}>
                                {isBlocked ? 'Разблокировать' : 'Заблокировать'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {showModal && <Modal closeModal={closeModal} handleBlock={handleBlock} />}
        </div>
    );
};

export default TopInformationUserCard;
