import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavbarHomePage from '../HomePage/SubCategory/NavbarHomePage.jsx';
import boy from '../../../assets/RunBoy.svg';
import './ConfirmationPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { sendCode, verifyCode } from '../../../../axiosStore';

const ConfirmationPage = () => {
    const [code, setCode] = useState('');
    const [error, setError] = useState('');
    const [codeSent, setCodeSent] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const login = location.state.username;

    useEffect(() => {
        const sendVerificationCode = async () => {
            try {
                const response = await sendCode(login);
                setCodeSent(true);
            } catch (err) {
                setError(err.message || 'Failed to send confirmation code.');
            }
        };

        if (!codeSent) {
            sendVerificationCode();
        }
    }, [login, codeSent]);

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');
        console.log('Access Token:', accessToken);
        console.log('Refresh Token:', refreshToken);
    }, []);

    const handleCodeChange = (e) => {
        setCode(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {


            // Navigate to another page on successful verification
            navigate('/join/generatepswd', { state: { username: login, code } });
        } catch (err) {
            console.error(err); // Log the error for debugging
            setError(err.message || 'Failed to verify confirmation code.');
        }

        // Reset fields after submission
        setCode('');
    };

    return (
        <div>
            <NavbarHomePage />
            <div className='infohome-container'>
                <div className='infohome-container-order'>
                    <img src={boy} style={{ width: '50px', height: '50px' }} alt='First Icon' />
                    <p className='infohome-order'>Курьеры</p>
                </div>
                <div className='confirmation-page'>
                    <div className='confirmation-page-return'>
                        <button className='icon-button'>
                            <FontAwesomeIcon icon={faCaretLeft} size='1x' style={{ color: '#252C32' }} />
                        </button>
                        <h5>Код подтверждения</h5>
                    </div>
                    <div className='confirmation-page-text'>
                        <p>Вам отправлен код для сброса пароля на почту <br />{login}</p>
                        {error && <p className='error-message'>{error}</p>}
                    </div>
                    <div className='confirmation-authentication'>
                        <form onSubmit={handleSubmit}>
                            <input
                                type='text'
                                placeholder='Код подтверждения'
                                value={code}
                                onChange={handleCodeChange}
                                name='code'
                            />
                            <button className='submit' type='submit'>Войти</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationPage;
