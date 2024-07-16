import React, { useState } from 'react';
import './StatusCard.css';
import HandShake from '../../../../assets/HandShake.svg';
import '../../AllUsers/SubCategory/Category.css';
import Modal from '../BlockUser/Modal.jsx';
import classNames from "classnames";

const StatusCard = () => {
    const [showModal, setShowModal] = useState(false);
    const [isAmbassador, setIsAmbassador] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleAmbassadorStatus = () => {
        setIsAmbassador(!isAmbassador);
        closeModal();
    };

    return (
        <div className="centered-container"> {/* Контейнер для центрирования */}
            <div className={classNames('photo-info-square', {'ambassador': isAmbassador})}>
                <div className="photo-wrapper">
                    <img src={HandShake} alt="Фото" className="photo"/>
                </div>
                {isAmbassador && (
                    <div className="box-information">
                        <span>Причина</span>
                        <textarea placeholder="Описание причины предоставления статуса амбассадора"></textarea>
                    </div>
                )}
                <div className="button-wrapper">
                    <button className={classNames('button', {
                        'ambassador-second': !isAmbassador,
                        'remove-ambassador': isAmbassador,
                    })}
                            onClick={openModal}>
                        <p>
                            {isAmbassador ? 'Убрать статус амбассадора' : 'Сделать амбассадором'}
                        </p>
                    </button>
                </div>
            </div>
            {showModal && <Modal closeModal={closeModal} handleBlock={handleAmbassadorStatus} isAmbassador={isAmbassador} />}
        </div>
    );
};

export default StatusCard;
