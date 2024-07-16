import React, { useState } from 'react';
import boy from '../../../../assets/RunBoy.svg';
import './InfoHomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const InfoHomePage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Here you can handle form submission logic, such as API calls or authentication
        console.log(`Username: ${username}, Password: ${password}`);

        // Simulate authentication success
        // Replace with actual authentication logic
        if (username === 'admin' && password === 'password') {
            navigate('/join/confirmation'); // Navigate to '/join/confirmation' upon successful authentication
        } else {
            alert('Invalid username or password');
        }

        // Reset fields after submission
        setUsername('');
        setPassword('');
    };

    return (
        <div className='infohome-container'>
            <div className='infohome-container-order'>
                <img src={boy} style={{ width: '50px', height: '50px' }} alt="First Icon"/>
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
                    />
                    <div className='password-container'>
                        <input
                            type={passwordVisible ? "text" : "password"}
                            placeholder="Пароль"
                            name="password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        <FontAwesomeIcon
                            icon={passwordVisible ? faEye : faEyeSlash}
                            onClick={togglePasswordVisibility}
                            className='password-icon'
                        />
                    </div>
                    <button className='submit' type="submit">Войти</button>
                </form>
            </div>
        </div>
    );
};

export default InfoHomePage;
