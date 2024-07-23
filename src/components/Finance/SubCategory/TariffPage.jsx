import React, { useState } from 'react';
import './TariffPage.css';
import TariffButton from '../../../assets/New-tariff-button.svg';

const TariffPage = () => {
    const [showInfo, setShowInfo] = useState(false); // State to manage visibility of additional information
    const [isEditing, setIsEditing] = useState(false); // State to manage edit mode
    const [changesSaved, setChangesSaved] = useState(false); // State to manage if changes have been saved
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false); // State to manage deletion confirmation visibility

    // Function to toggle the visibility of additional information
    const handleButtonClick = () => {
        setShowInfo(true);
    };

    // Function to close the additional information block
    const handleClose = () => {
        setShowInfo(false);
        setIsEditing(false); // Reset the edit mode when closing
        setChangesSaved(false); // Reset the changes saved state
        setShowDeleteConfirmation(false); // Reset the delete confirmation state
    };

    // Function to handle edit button click
    const handleEditClick = () => {
        if (isEditing) {
            // If in editing mode and save button is clicked
            setChangesSaved(true); // Mark changes as saved
            setIsEditing(false); // Exit edit mode
        } else {
            setIsEditing(true); // Enter edit mode
            setShowDeleteConfirmation(false); // Ensure delete confirmation is hidden
        }
    };

    // Function to handle delete button click
    const handleDeleteClick = () => {
        setShowDeleteConfirmation(true); // Show delete confirmation
        setIsEditing(false); // Ensure edit mode is hidden
        setChangesSaved(false); // Ensure changes saved state is hidden
    };

    const handleConfirmDelete = () => {
        // Implement deletion logic here
        handleClose(); // Close the info block after deletion
    };

    return (
        <div className="container-category">
            <div className="content-category">
                <div className="blocks-tariff">
                    <div className="information-tariff">
                        <div className="text-tariff">
                            <p>Суточный</p>
                            <p>Срок доставки: до 24 часов</p>
                        </div>
                        <div className="delivery-tariff">
                            <p>189 ₽</p>
                        </div>
                    </div>
                    <div className="information-tariff">
                        <div className="text-tariff">
                            <p>Суточный</p>
                            <p>Срок доставки: до 6 часов</p>
                        </div>
                        <div className="delivery-tariff">
                            <p>489 ₽</p>
                        </div>
                    </div>
                    <div className="information-tariff">
                        <div className="text-tariff">
                            <p>Суточный</p>
                            <p>Срок доставки: до 1 часа</p>
                        </div>
                        <div className="delivery-tariff">
                            <p>889 ₽</p>
                        </div>
                    </div>
                    <button onClick={handleButtonClick}>
                        <p>Новый тарифный план</p>
                    </button>
                </div>
            </div>

            {/* Overlay and Information Block */}
            {showInfo && (
                <div className="overlay">
                    <div
                        className={`info-block ${changesSaved ? 'editing-info-block' : ''} ${showDeleteConfirmation ? 'delete-confirmation-info' : ''}
    `}
                    >
                        <button className="close-button" onClick={handleClose}>
                            <i className="fas fa-times"></i> {/* Font Awesome X icon */}
                        </button>
                        <div className="container-tariff-page">
                            <h1>
                                {showDeleteConfirmation ? 'Удаление тарифа' :
                                    isEditing ? 'Редактирование тарифа' :
                                        changesSaved ? 'Новый тарифный план' : 'Суточный'}
                            </h1>

                            {!showDeleteConfirmation ? (
                                <>
                                    {changesSaved && (
                                        <div className="textfield">
                                            <label htmlFor="price">Название</label>
                                            <input type="text" id="price" placeholder="Суперсрочный"/>
                                        </div>
                                    )}

                                    <div className="textfield">
                                        <label htmlFor="description">Описание</label>
                                        <input type="text" id="description" placeholder="Срок доставки: до 24 часов"/>
                                    </div>

                                    <div className="textfield">
                                        <label htmlFor="price">Стоимость</label>
                                        <input type="text" id="price" placeholder="189 ₽"/>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="delivery-option">
                                        <div className="header-info">
                                            <p>Суточный</p>
                                            <div className="price">
                                                <div className="text">189 ₽</div>
                                            </div>
                                        </div>
                                        <div className="description">
                                            <div className="text">Срок доставки: до 24 часов</div>
                                        </div>

                                    </div>
                                    <div className="text-information">
                                        <p>Тариф нельзя будет восстановить вы уверены, что хотите удалить
                                            тариф?</p>
                                    </div>
                                </>
                            )}

                            <div className={`buttons ${isEditing ? 'editing' : ''}`}>
                                {showDeleteConfirmation ? (
                                    <>
                                    <button className="confirm-delete" onClick={handleConfirmDelete}>
                                            Удалить
                                        </button>
                                        <button className="cancel" onClick={handleClose}>
                                        Отмена
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        {!isEditing && !changesSaved && (
                                            <button className="delete" onClick={handleDeleteClick}>
                                                Удалить
                                            </button>
                                        )}
                                        {isEditing ? (
                                            <button className={`edit ${isEditing ? 'editing' : ''}`} onClick={handleEditClick}>
                                                Сохранить изменения
                                            </button>
                                        ) : (
                                            !changesSaved && (
                                                <button className="edit" onClick={handleEditClick}>
                                                    Редактировать
                                                </button>
                                            )
                                        )}
                                        {changesSaved && (
                                            <button className="new-tariff-plan" onClick={handleClose}>
                                                Добавить тарифный план
                                            </button>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TariffPage;
