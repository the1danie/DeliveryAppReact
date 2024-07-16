import {React, useState} from 'react';
import boy from '../../../../assets/RunBoy.svg';
import './InfoHomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const InfoHomePage = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <>
            <div className='infohome-container'>
                <div className='infohome-container-order'>
                    <img src={boy} style={{ width: '50px', height: '50px' }} alt="First Icon"/>
                    <p className='infohome-order'>Курьеры</p>
                </div>
                <div className="infohome-authentication">
                    <h5 className='infohome-authentication-text'>Вход</h5>
                    <form>
                        <input type="text" placeholder="Логин" name="username"/>
                        <div className='password-container'>
                            <input
                                type={passwordVisible ? "text" : "password"}
                                placeholder="Пароль"
                                name="password"
                            />
                            <FontAwesomeIcon
                                icon={passwordVisible ? faEye   : faEyeSlash}
                                onClick={togglePasswordVisibility}
                                className='password-icon'
                            />
                        </div>
                        <button className='submit' type="submit">Войти</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default InfoHomePage;
