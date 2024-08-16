import React, { useState } from 'react';
import NavbarHomePage from '../HomePage/SubCategory/NavbarHomePage.jsx';
import boy from '../../../assets/RunBoy.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';
import { register } from '../../../../axiosStore';
import './GeneratePassword.css'; // Assuming you have a CSS file for styling

const GeneratePassword = () => {
    const [firstPswd, setFirstPswd] = useState('');
    const [secondPswd, setSecondPswd] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const login = location.state.username; // Using optional chaining to prevent null error
    const code = location.state.code; // Using optional chaining to prevent null error

    const handleFirstPswdChange = (e) => {
        setFirstPswd(e.target.value);
    };

    const handleSecondPswdChange = (e) => {
        setSecondPswd(e.target.value);
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (firstPswd === secondPswd) {
            try {

                navigate('/users'); // Navigate to '/users' upon successful password change
            } catch (err) {
                console.error(err); // Log the error for debugging
                setError(err.message || 'Failed to register new password.');
            }
        } else {
            setError('Пароли не совпадают');
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
                                required
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
                                required
                            />
                            <FontAwesomeIcon
                                icon={passwordVisible ? faEye : faEyeSlash}
                                onClick={togglePasswordVisibility}
                                className='password-icon'
                            />
                        </div>
                        {error && <p className='error-message'>{error}</p>}
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
