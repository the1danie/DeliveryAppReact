import React from 'react';
import './Modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Modal = ({ closeModal, handleBlock, isAmbassador }) => {
    return (
        <div className="modal-background">
            <div className="modal-content">
                <div className="modal-header">
                    <h3>{isAmbassador ? 'Удаление статуса' : 'Амбассадор'}</h3>
                    <button onClick={closeModal} className="close-button">
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
                <div className="bordered-box">
                    <span>{isAmbassador ? 'Причина удаления' : 'Причина предоставления'}</span>
                    <textarea placeholder={isAmbassador ? 'Описание причины удаления статуса амбассадора' : 'Описание причины предоставления статуса амбассадора'}></textarea>
                </div>
                <button className={isAmbassador ? 'block' : 'remove-ambassador-second'}  onClick={handleBlock}>
                    {isAmbassador ? 'Удалить статус' : 'Сделать амбассадором'}
                </button>
            </div>
        </div>
    );
};

export default Modal;
