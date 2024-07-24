import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faTimes } from '@fortawesome/free-solid-svg-icons';
import './SettingsForms.css';

const SettingsForms = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [popupShowPassword, setPopupShowPassword] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [popupStep, setPopupStep] = useState(1);


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const togglePopupPasswordVisibility = () => {
        setPopupShowPassword(!popupShowPassword);
    }

    const togglePopup = () => {
        setShowPopup(!showPopup);
        setPopupStep(1); // Reset to the first step when closing
    };

    const handleNextStep = () => {
        setPopupStep(2);
    };

    return (
        <>
            <div className='container'>
                <div className='content'>
                    <h5>Общая информация</h5>
                </div>
            </div>
            <div style={{
                marginLeft: "17.5%",
                display: 'flex',
                border: '1px solid #eee',
                maxWidth: '700px',
                height: '90px',
                borderRadius: '15px',
                padding: '10px',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <div style={{
                    width: '50%',
                    borderRight: '1px solid #eee',
                    height: '100%',
                    boxSizing: 'border-box',
                    padding: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <label htmlFor="email"
                           style={{color: 'grey', fontSize: '14px', marginBottom: '5px'}}>Эл.почта</label>
                    <input type="email" id="email" name="email" placeholder="irina_ivanova@gmail.com"
                           style={{border: 'none', outline: 'none', background: 'transparent', fontSize: '18px'}}
                    />
                </div>
                <div style={{
                    marginLeft: '10px',
                    width: '50%',
                    height: '100%',
                    boxSizing: 'border-box',
                    padding: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <label htmlFor="phone"
                           style={{color: 'grey', fontSize: '14px'}}>Номер телефона</label>
                    <input type="text" id="phone" name="phone" placeholder="+1 (777) 458 - 78 - 94"
                           style={{
                               border: 'none',
                               outline: 'none',
                               background: 'transparent',
                               fontSize: '18px',
                               padding: '0px'
                           }}
                    />
                </div>
            </div>
            <div style={{
                marginLeft: '18.6%',
                marginTop: '30px',
            }}>
                <button style={{
                    background: '#343434',
                    color: 'white',
                    width: '200px',
                    height: '45px',
                    borderRadius: '5px',
                }}>Редактировать
                </button>
            </div>
            <div className='container'>
                <div className='content' style={{marginTop: '20px'}}>
                    <h5>Пароль</h5>
                </div>
            </div>
            <div style={{
                marginLeft: "17.5%",
                display: 'flex',
                border: '1px solid #eee',
                maxWidth: '700px',
                height: '90px',
                borderRadius: '15px',
                padding: '10px',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <div style={{
                    width: '50%',
                    borderRight: '1px solid #eee',
                    height: '100%',
                    boxSizing: 'border-box',
                    padding: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <label htmlFor="new-password"
                           style={{color: 'grey', fontSize: '14px', marginBottom: '5px'}}>Новый пароль</label>
                    <div style={{position: 'relative'}}>
                        <input type={showPassword ? "text" : "password"} id="new-password" name="new-password"
                               placeholder="********"
                               style={{
                                   border: 'none',
                                   outline: 'none',
                                   background: 'transparent',
                                   fontSize: '18px',
                                   padding: '0px',
                                   width: '100%'
                               }}
                        />
                        <FontAwesomeIcon
                            icon={showPassword ? faEye : faEyeSlash}
                            onClick={togglePasswordVisibility}
                            style={{
                                position: 'absolute',
                                right: '10px',
                                transform: 'translateY(-50%)',
                                cursor: 'pointer',
                                color: '#aaa'
                            }}
                        />
                    </div>
                </div>
                <div style={{
                    marginLeft: '10px',
                    width: '50%',
                    height: '100%',
                    boxSizing: 'border-box',
                    padding: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <label htmlFor="confirm-password"
                           style={{color: 'grey', fontSize: '14px', marginBottom: '5px'}}>Подтвердить пароль</label>
                    <div style={{position: 'relative'}}>
                        <input type={showPassword ? "text" : "password"} id="confirm-password" name="confirm-password"
                               placeholder="********"
                               style={{
                                   border: 'none',
                                   outline: 'none',
                                   background: 'transparent',
                                   fontSize: '18px',
                                   padding: '0px',
                                   width: '100%'
                               }}
                        />
                        <FontAwesomeIcon
                            icon={showPassword ? faEye : faEyeSlash}
                            onClick={togglePasswordVisibility}
                            style={{
                                position: 'absolute',
                                right: '10px',
                                transform: 'translateY(-50%)',
                                cursor: 'pointer',
                                color: '#aaa'
                            }}
                        />
                    </div>
                </div>
            </div>
            <div style={{
                marginLeft: '18.6%',
                marginTop: '30px',
            }}>
                <button onClick={togglePopup} style={{
                    background: '#343434',
                    color: 'white',
                    width: '200px',
                    height: '45px',
                    borderRadius: '5px',
                }}>Изменить пароль
                </button>
            </div>
            {showPopup && (
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    background: 'white',
                    padding: '20px',
                    borderRadius: '10px',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    zIndex: 1000,
                    width: '400px',
                    height: '300px'
                }}>
                    {popupStep === 1 && (
                        <>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: '20px'
                            }}>
                                <h5>Смена пароля</h5>
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    onClick={togglePopup}
                                    style={{
                                        cursor: 'pointer',
                                        color: '#aaa'
                                    }}
                                />
                            </div>
                            <div>
                                <div style={{
                                    border: '1px solid #eee',
                                    borderRadius: '5px',
                                    height: '100%',
                                    boxSizing: 'border-box',
                                    padding: '10px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center'
                                }}>
                                    <label htmlFor="new-password"
                                           style={{color: 'grey', fontSize: '14px', marginBottom: '5px'}}>Новый
                                        пароль</label>
                                    <div style={{position: 'relative'}}>
                                        <input type={popupShowPassword ? "text" : "password"} id="new-password"
                                               name="new-password"
                                               placeholder="********"
                                               style={{
                                                   border: 'none',
                                                   outline: 'none',
                                                   background: 'transparent',
                                                   fontSize: '18px',
                                                   padding: '0px',
                                                   width: '100%'
                                               }}
                                        />
                                        <FontAwesomeIcon
                                            icon={popupShowPassword ? faEye : faEyeSlash}
                                            onClick={togglePopupPasswordVisibility}
                                            style={{
                                                position: 'absolute',
                                                right: '10px',
                                                transform: 'translateY(-50%)',
                                                cursor: 'pointer',
                                                color: '#aaa'
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div style={{
                                    border: '1px solid #eee',
                                    borderRadius: '5px',
                                    height: '100%',
                                    boxSizing: 'border-box',
                                    padding: '10px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center'
                                }}>
                                    <label htmlFor="new-password"
                                           style={{color: 'grey', fontSize: '14px', marginBottom: '5px'}}>Подтвердите
                                        новый пароль</label>
                                    <div style={{position: 'relative'}}>
                                        <input type={popupShowPassword ? "text" : "password"} id="new-password"
                                               name="new-password"
                                               placeholder="********"
                                               style={{
                                                   border: 'none',
                                                   outline: 'none',
                                                   background: 'transparent',
                                                   fontSize: '18px',
                                                   padding: '0px',
                                                   width: '100%'
                                               }}
                                        />
                                        <FontAwesomeIcon
                                            icon={popupShowPassword ? faEye : faEyeSlash}
                                            onClick={togglePopupPasswordVisibility}
                                            style={{
                                                position: 'absolute',
                                                right: '10px',
                                                transform: 'translateY(-50%)',
                                                cursor: 'pointer',
                                                color: '#aaa'
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button onClick={handleNextStep} style={{
                                background: '#343434',
                                color: 'white',
                                border: 'none',
                                marginLeft: "30px",
                                width: "300px",
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                marginTop: '10px',
                            }}>Далее
                            </button>
                        </>
                    )}

                    {popupStep === 2 && (
                        <>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: '20px'
                            }}>
                                <h5>Код подтверждения</h5>
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    onClick={togglePopup}
                                    style={{
                                        cursor: 'pointer',
                                        color: '#aaa'
                                    }}
                                />
                            </div>
                            <p style={{margin: 0}}>На эл.почту irina_ivanova@gmail.com был отправлен код подтверждения
                                для смены пароля.</p>
                            <div style={{
                                display: 'flex',
                                flexDirection: "column",
                                alignItems: "flex-start",
                                border: '1px solid #eee',
                                padding: '10px',
                                borderRadius: '5px'
                            }}>
                                <label htmlFor="code"
                                       style={{color: 'grey', fontSize: '14px'}}>Код подтверждения</label>
                                <input type="text" id="code" name="code" placeholder="123456"
                                       style={{
                                           border: 'none',
                                           outline: 'none',
                                           background: 'transparent',
                                           fontSize: '18px',
                                           padding: '0px'
                                       }}
                                />
                            </div>
                            <button onClick={togglePopup} style={{
                                background: '#343434',
                                color: 'white',
                                border: 'none',
                                marginLeft: "30px",
                                width: "300px",
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                marginTop: '10px',
                            }}>Далее
                            </button>
                        </>
                    )}

                </div>
            )}
            {showPopup && (
                <div onClick={togglePopup} style={{
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0, 0, 0, 0.3)',
                    zIndex: 999,
                }}></div>
            )}
        </>
    );
};

export default SettingsForms;
