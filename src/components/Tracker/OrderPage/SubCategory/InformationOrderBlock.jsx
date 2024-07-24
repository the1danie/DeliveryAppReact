import React from 'react';
import './InformationOrderBlock.css';
import GreyVector from '../../../../assets/VectorgreyVector.svg';
import PurpleVector from '../../../../assets/VectorpurpleVector.svg';
import Line from '../../../../assets/Vector 2189Line.svg'
import Man from '../../../../assets/man.png';
import Woman from '../../../../assets/Avatar.png';

const InformationOrderBlock = () => {
    return (
        <div style={{ display: 'flex' }}>
            <div className="order-block">
                <div style={{display: 'flex', justifyContent: 'space-around', flexDirection: 'column'}}>
                    <div className="order-section">
                        <div style={{display: 'flex', gap: '10px', alignItems: 'flex-start'}}><img src={GreyVector}
                                                                                                   alt=""/>
                            <p className="order-action">Забрать посылку</p></div>
                        <p className="order-info">
                        <span>                        Антонов Власий Борисович<br/>
</span>
                            Москва, Малая Юшуньская улица, 1к1
                        </p>
                    </div>
                    <div style={{position: 'absolute', marginLeft: '280px', marginBottom: '100px'}}>
                        <img src={Line} alt="" height={'240px'}/>
                    </div>
                    <div className="order-section">
                        <div style={{display: 'flex', gap: '10px', alignItems: 'flex-start'}}>
                            <img src={PurpleVector} alt=""/>
                            <p className="order-action">Доставить посылку</p>
                        </div>
                        <p className="order-info">
                            <span>Орехов Вадим Агафонович<br/></span>
                            Москва, Малая Юшуньская улица, 15к1
                        </p>
                    </div>
                </div>

                <div style={{display: 'flex'}}>
                    <div className="order-details">
                        <p><span className="details-label">Тип документа:</span> Налоговые отчеты</p>
                        <p><span className="details-label">Тариф:</span> Срочный</p>
                        <p><span className="details-label">Срок доставки:</span> до 6 часов</p>
                        <p><span className="details-label">Дата заказа:</span> 01.01.2024</p>
                        <p><span className="details-label">Время заказа:</span> 15:00</p>
                        <p><span className="details-label">Дата доставки:</span> 01.01.2024</p>
                        <p><span className="details-label">Время доставки:</span> 21:00</p>
                        <p><span className="details-label">Стоимость заказа:</span> 152 ₽</p>
                    </div>
                </div>
            </div>
            <div className="details-container">
                <div className="details-card">
                    <div className="details-card-header">
                        <img src={Man} alt="Отправитель"/>
                        <span>Отправитель</span>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        padding: '20px'
                    }}>
                        <div className="details-field">
                            <span className="details-field-label">Имя</span>
                            <span className="details-field-value">Иван</span>
                        </div>
                        <div className="details-field">
                            <span className="details-field-label">Фамилия</span>
                            <span className="details-field-value">Иванов</span>
                        </div>
                        <div className="details-field">
                            <span className="details-field-label">Отчество</span>
                            <span className="details-field-value">Иванович</span>
                        </div>
                        <div className="details-field">
                            <span className="details-field-label">ИНН</span>
                            <span className="details-field-value">123456789123</span>
                        </div>
                        <div className="details-field details-field-custom">
                            <span className="details-field-label">Номер телефона</span>
                            <span className="details-field-value">+1 (777) 458 - 78 - 94</span>
                        </div>
                    </div>
                </div>
                <div className="details-card">
                    <div className="details-card-header">
                        <img src={Woman} alt="Отправитель"/>
                        <span>Курьер</span>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        padding: '20px'
                    }}>
                    <div className="details-field">
                        <span className="details-field-label">Имя</span>
                        <span className="details-field-value">Ирина</span>
                    </div>
                    <div className="details-field">
                        <span className="details-field-label">Фамилия</span>
                        <span className="details-field-value">Иванова</span>
                    </div>
                    <div className="details-field">
                        <span className="details-field-label">Отчество</span>
                        <span className="details-field-value">Ивановна</span>
                    </div>
                    <div className="details-field">
                        <span className="details-field-label">ИНН</span>
                        <span className="details-field-value">123456789123</span>
                    </div>
                    <div className="details-field details-field-custom">
                        <span className="details-field-label">Номер телефона</span>
                        <span className="details-field-value">+1 (777) 458 - 78 - 94</span>
                    </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default InformationOrderBlock;
