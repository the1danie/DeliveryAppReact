import React, {useState} from 'react';
import NavbarHomePage from "../HomePage/SubCategory/NavbarHomePage.jsx";
import boy from "../../../assets/RunBoy.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";

const GeneratePassword = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    return (
        <div>
            <NavbarHomePage/>
            <div className='infohome-container'>
                <div className='infohome-container-order'>
                    <img src={boy} style={{width: '50px', height: '50px'}} alt="First Icon"/>
                    <p className='infohome-order'>Курьеры</p>
                </div>
                <div className="infohome-authentication">
                    <h5 className='infohome-authentication-text'>Новый пароль</h5>
                    <form>
                        <div className='password-container'>
                            <input type={passwordVisible ? "text" : "password"} placeholder="Новый пароль" name="password"/>

                            <FontAwesomeIcon
                                icon={passwordVisible ? faEye : faEyeSlash}
                                onClick={togglePasswordVisibility}
                                className='password-icon'
                            />
                        </div>
                        <div className='password-container'>
                        <input
                                type={passwordVisible ? "text" : "password"}
                                placeholder="Повторите новый пароль"
                                name="password"
                            />
                            <FontAwesomeIcon
                                icon={passwordVisible ? faEye : faEyeSlash}
                                onClick={togglePasswordVisibility}
                                className='password-icon'
                            />
                        </div>
                        <button className='submit' type="submit">Сохранить</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default GeneratePassword;