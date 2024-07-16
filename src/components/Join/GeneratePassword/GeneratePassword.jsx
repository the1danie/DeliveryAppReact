import React, { useState } from 'react';
import NavbarHomePage from '../HomePage/SubCategory/NavbarHomePage.jsx';
import boy from '../../../assets/RunBoy.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const GeneratePassword = () => {
    const [firstPswd, setFirstPswd] = useState('');
    const [secondPswd, setSecondPswd] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();

    const handleFirstPswdChange = (e) => {
        setFirstPswd(e.target.value);
    };

    const handleSecondPswdChange = (e) => {
        setSecondPswd(e.target.value);
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Replace with actual authentication logic
        if (firstPswd === secondPswd) {
            // Simulate password change success
            console.log(`Password changed: ${firstPswd}`);
            navigate('/users'); // Navigate to '/users' upon successful password change
        } else {
            alert('Неправильные пароли');
        }

        // Reset fields after submission
        setFirstPswd('');
        setSecondPswd('');
    };

    return (
        <div>
            <NavbarHomePage />
            <div className='infohome-container'>
                <div className='infohome-container-order'>
                    <img src={boy} style={{ width: '50px', height: '50px' }} alt='First Icon' />
                    <p className='infohome-order'>Курьеры</p>
                </div>
                <div className='infohome-authentication'>
                    <h5 className='infohome-authentication-text'>Новый пароль</h5>
                    <form onSubmit={handleSubmit}>
                        <div className='password-container'>
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                placeholder='Новый пароль'
                                value={firstPswd}
                                onChange={handleFirstPswdChange}
                                name='password'
                            />
                            <FontAwesomeIcon
                                icon={passwordVisible ? faEye : faEyeSlash}
                                onClick={togglePasswordVisibility}
                                className='password-icon'
                            />
                        </div>
                        <div className='password-container'>
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                placeholder='Повторите новый пароль'
                                value={secondPswd}
                                onChange={handleSecondPswdChange}
                                name='password'
                            />
                            <FontAwesomeIcon
                                icon={passwordVisible ? faEye : faEyeSlash}
                                onClick={togglePasswordVisibility}
                                className='password-icon'
                            />
                        </div>
                        <button className='submit' type='submit'>
                            Сохранить
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default GeneratePassword;
