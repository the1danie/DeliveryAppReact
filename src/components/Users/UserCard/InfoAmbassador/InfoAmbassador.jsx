import React from 'react';
import './InfoAmbassador.css'
import '../BlockUser/Modal.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";

const InfoAmbassador = ({ closeModal, handleBlock }) => {
    return (
        <div className="modal-background">
            <div className="modal-content">
                <div className="modal-header">
                    <h3>Блокировка пользователя</h3>
                    <button onClick={closeModal} className="close-button">
                        <FontAwesomeIcon icon={faXmark}/>
                    </button>
                </div>
                <div className="bordered-box">
                    <span>Причина</span>
                    <textarea placeholder="Описание причины блокировки пользователя"></textarea>
                </div>
                <button className="block" onClick={handleBlock}>Заблокировать</button>
            </div>
        </div>
    );
};

export default InfoAmbassador;