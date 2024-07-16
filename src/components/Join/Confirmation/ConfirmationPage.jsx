import React from 'react';
import NavbarHomePage from "../HomePage/SubCategory/NavbarHomePage.jsx";
import boy from "../../../assets/RunBoy.svg";
import './ConfirmationPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft} from "@fortawesome/free-solid-svg-icons";

const ConfirmationPage = ({ login }) => {
    const loginExample = 'bombuuk@gmail.com';

    return (
        <div>
            <NavbarHomePage />
            <div className='infohome-container'>
                <div className='infohome-container-order'>
                    <img src={boy} style={{ width: '50px', height: '50px' }} alt="First Icon" />
                    <p className='infohome-order'>Курьеры</p>
                </div>
                <div className='confirmation-page'>
                    <div className='confirmation-page-return'>
                        <button className='icon-button'>
                            <FontAwesomeIcon icon={faCaretLeft} size='1x' style={{ color: "#252C32" }} />
                        </button>
                        <h5>Код подтверждения</h5>
                    </div>
                    <div className="confirmation-page-text">
                        <p>Вам отправлен код для сброса пароля на почту <br/>{loginExample}</p>
                    </div>
                    <div className="confirmation-authentication">
                        <form>
                            <input type="text" placeholder="Код подтверждения" name="username" />
                            <button className='submit' type="submit">Войти</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationPage;
