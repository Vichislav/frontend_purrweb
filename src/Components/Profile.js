import purrweb_logo from "../Assets/purrweb_logo.svg";
import '../css/Profile.css'
import out from "../Assets/out.svg";
import pencil from "../Assets/pencil.svg";
import illustration from "../Assets/illustration.svg";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {updateNameAsync, showUserName} from "../store/nameSlice";
import {useEffect, useState} from "react";




function Profile() {

    const dispatch = useDispatch();

    useEffect(() => {
        console.log("useEffect work")
        dispatch(updateNameAsync(10))
        console.log(userName)
    }, [])

    const usersEmail = useSelector(state => state.userReducer.users.email)
    //const userName = useSelector(showUserName)
    const userName = 'Вячеслав' //заглушка на время адаптивной верстки
    const userSecondName = useSelector(state => state.secondNameReducer.userSecondName)
    const userPhone = useSelector(state => state.phoneReducer.userPhone)

    /*const [name, setName] = useState('defaultName')*/

    /*const showName = () => {
        setName(userName);
        console.log("showName userName = " + userName)
        console.log("showName name = " + name)
    }
    setTimeout(showName, 1000)*/

    return (
        <div className="wrap__Profile">
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
                    <div className="wrap__Header_data_name">{userName} {userSecondName}</div>
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
                         <div className="wrap__Data_text">{userName}</div>
                    </div>
                    <div className="wrap__Data_secondName">
                        <div className="wrap__Data_title">Фамилия</div>
                        <div className="wrap__Data_text">{userSecondName}</div>
                    </div>
                </div>
                <div className="wrap__Data_right">
                    <div className="wrap__Data_name">
                        <div className="wrap__Data_title">Телефон</div>
                        <div className="wrap__Data_text">{userPhone}</div>
                    </div>
                    <div className="wrap__Data_secondName">
                        <div className="wrap__Data_title">Электронная почта</div>
                        <div className="wrap__Data_text">{usersEmail}</div>
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
                <div className="accordion">
                    <div className="accordion-item">
                        <input id="accordion-trigger-1" className="accordion-trigger-input" type="checkbox"></input>
                        <label className="accordion-trigger" htmlFor="accordion-trigger-1">Подписываете ли Вы соглашение о неразглошении?
                        </label>
                        <section className="accordion-animation-wrapper">
                            <div className="accordion-animation">
                                <div className="accordion-transform-wrapper">
                                    <div className="accordion-content">
                                        <p>Подписываю все, чего требует производственная необходимость.
                                            Исключения составляют только кредиты и прочие сомнительные бумаги.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="accordion-item">
                        <input id="accordion-trigger-2" className="accordion-trigger-input" type="checkbox"></input>
                        <label className="accordion-trigger" htmlFor="accordion-trigger-2">Сколько займет создание MVP?
                        </label>
                        <section className="accordion-animation-wrapper">
                            <div className="accordion-animation">
                                <div className="accordion-transform-wrapper">
                                    <div className="accordion-content">
                                        <p>Чтобы создать надежный продукт, вам необходимо создать его прототип, спроектировать,
                                            разработать и протестировать. На прохождение всех этих этапов у вас уйдет около
                                            3 месяцев.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="accordion-item">
                        <input id="accordion-trigger-3" className="accordion-trigger-input" type="checkbox"></input>
                        <label className="accordion-trigger" htmlFor="accordion-trigger-3">Представляете ли Вы маркетинговые услуги?
                        </label>
                        <section className="accordion-animation-wrapper">
                            <div className="accordion-animation">
                                <div className="accordion-transform-wrapper">
                                    <div className="accordion-content">
                                        <p>Маркетинговые услуги для меня тайна. Но креатив я люблю.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="accordion-item">
                        <input id="accordion-trigger-4" className="accordion-trigger-input" type="checkbox"></input>
                        <label className="accordion-trigger" htmlFor="accordion-trigger-4">Различается ли MVP от прототипов?
                        </label>
                        <section className="accordion-animation-wrapper">
                            <div className="accordion-animation">
                                <div className="accordion-transform-wrapper">
                                    <div className="accordion-content">
                                        <p>Если погуглить пол часика, у всего можно найти отличия</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="wrap__Black" >
                    <div className="wrap__Black_item"></div>
                </div>
            </div>
        </div>
    );
}

export default Profile;