// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import boy from '../../../../assets/RunBoy.svg';
import './InfoHomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { loginUser } from "../../../../../axiosStore";

const InfoHomePage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
        setError('');
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setError('');
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!username || !password) {
            setError('Please enter both username and password');
            return;
        }

        try {
            const { access_token, refresh_token, userType } = await loginUser(username, password);
            // Store tokens in local storage
            localStorage.setItem('accessToken', access_token);
            localStorage.setItem('refreshToken', refresh_token);

            // Redirect to another page
            navigate('/join/confirmation', { state: { username } });
        } catch (error) {
            setError(error.message || 'Login failed');
        }
    };


    return (
        <div className='infohome-container'>
            <div className='infohome-container-order'>
                <img src={boy} style={{ width: '50px', height: '50px' }} alt="Courier Icon"/>
                <p className='infohome-order'>Курьеры</p>
            </div>
            <div className="infohome-authentication">
                <h5 className='infohome-authentication-text'>Вход</h5>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Логин"
                        name="username"
                        value={username}
                        onChange={handleUsernameChange}
                        required
                    />
                    <div className='password-container'>
                        <input
                            type={passwordVisible ? "text" : "password"}
                            placeholder="Пароль"
                            name="password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                        <FontAwesomeIcon
                            icon={passwordVisible ? faEye : faEyeSlash}
                            onClick={togglePasswordVisibility}
                            className='password-icon'
                        />
                    </div>
                    {error && <p className='error-message' style={{margin: '0'}}>{error}</p>}
                    <button className='submit' type="submit">Войти</button>
                </form>
            </div>
        </div>
    );
};

export default InfoHomePage;
