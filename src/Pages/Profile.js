import purrweb_logo from "../Assets/purrweb_logo.svg";
import '../css/Profile.css'
import out from "../Assets/out.svg";
import pencil from "../Assets/pencil.svg";
import illustration from "../Assets/illustration.svg";
import {Link} from "react-router-dom";


function Profile() {
    return (
        <div>
            <div className="wrap__Header">
                <div className="wrap__Header_Logo">
                    <img
                        className="wrapHeaderLogoImg"
                        src={purrweb_logo}
                        alt="logo not found"
                    />
                    <p className="wrap__Header_Text">Purrweb</p>
                </div>
                <div className='wrap__Header_data'>
                    <div className="wrap__Header_data_name">Анастасия Филатова</div>
                    <Link to="/" className="wrap__Header_link">
                        <div className='wrap__Header_out_text'>Выйти</div>
                    </Link>
                    <Link to="/">
                        <img
                            className="wrap__Header_out_img"
                            src={out}
                            alt="logo not found"
                        />
                    </Link>
                </div>
            </div>
            <div className="wrap__Title">
                <div className="wrap__Title_text">
                    Мой профиль
                </div>
                <div className="wrap__Title_img">
                    <img
                        src={pencil}
                        alt="logo not found"
                    />
                </div>
                <div className="wrap__Title_btn">
                    Редактировать
                </div>
            </div>
            <div className="wrap__Data">
                <div className="wrap__Data_left">
                    <div className="wrap__Data_name">
                       <div className="wrap__Data_title">Имя</div>
                        <div className="wrap__Data_text">Анстасия</div>
                    </div>
                    <div className="wrap__Data_secondName">
                        <div className="wrap__Data_title">Фамилия</div>
                        <div className="wrap__Data_text">Филатова</div>
                    </div>
                </div>
                <div className="wrap__Data_right">
                    <div className="wrap__Data_name">
                        <div className="wrap__Data_title">Телефон</div>
                        <div className="wrap__Data_text">+7 908 555 35 35</div>
                    </div>
                    <div className="wrap__Data_secondName">
                        <div className="wrap__Data_title">Электронная почта</div>
                        <div className="wrap__Data_text">nastie203@mail.ru</div>
                    </div>
                </div>
            </div>
            <div className="wrap__Banner">
                <div className="wrap__Banner_item">
                    <div className="wrap__Banner_left">
                        <div className="wrap__Banner_title">Ваша продуктивность выросла!</div>
                        <div className="wrap__Banner_text">За прошлую неделю Вы выполнили 12 задач</div>
                        <div className="wrap__Banner_btn">Продолжить</div>
                    </div>
                    <div className="wrap__Banner_right">
                        <div className="wrap__Banner_illustration">
                            <img
                                className="wrap__Banner_illustration_img"
                                src={illustration}
                                alt="logo not found"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrap__Accordion">
                <div className="wrap__Accordion_title">
                    Часто задаваемые вопросы
                </div>
            </div>
        </div>
    );
}

export default Profile;