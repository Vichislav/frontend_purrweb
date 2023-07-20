import purrweb_logo from "../Assets/purrweb_logo.svg";
import '../css/Profile.css'
import '../css/Reset.css'
import out from "../Assets/out.svg";
import pencil from "../Assets/pencil.svg";
import cross_gray from "../Assets/cross_gray.svg";
import illustration from "../Assets/illustration.svg";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {updateNameAsync, showUserName} from "../store/nameSlice";
import {useEffect, useState} from "react";
import {updateUser, updateOwnDataSecondName} from "../store/userSlice";




function Profile() {

    const dispatch = useDispatch();

    const [onEdit, setonEdit] = useState(false)

    const [editInput, setEditInput] = useState('');


    const handleEditInput = (event) => {
        setEditInput(event.target.value)
    }


    const usersProfileEmail = useSelector(state => state.userReducer.userEmail);
    const userProfileName = useSelector(state => state.userReducer.userName)


    // const userName = 'Вячеслав' //заглушка на время адаптивной верстки
    const userSecondName = useSelector(state => state.userReducer.userSecondName)
    const userPhone = useSelector(state => state.userReducer.userPhone)
    const userId = useSelector(state => state.userReducer.userId)

    const showOutMenu = () => {

        let element = document.getElementById('Out_window');
            if (element !== null) {
                element.style.visibility = 'visible';
            }
            else {
                console.log('showOutMenu else work')
            }

    }
    const HideOutMenu = () => {

        let element = document.getElementById('Out_window');
        if (element !== null) {
            element.style.visibility = 'hidden';
        }
        else {
            console.log('HideOutMenu else work')
        }
    }
    const onEditToggle = () => {
        setonEdit(!onEdit)
        console.log("onEdit " + onEdit)
    }

   const onEditComplete = () => {
       console.log("userId " + userId )
       onEditToggle()
       dispatch(updateOwnDataSecondName(editInput))
       dispatch(updateUser(userId, editInput, editInput))
   }

    return (
        <div className="wrap__Profile">

            <div className="wrap__Out" id={'Out_window'}>
                <div className="wrap__Out_back"></div>
                <div className="wrap__Out_menu">
                    <div className="wrap__Out_cross" onClick={HideOutMenu}>
                        <img
                            className="cross_gray"
                            src={cross_gray}
                            alt="logo not found"
                        />
                    </div>
                    <div className="wrap__Out_text">
                        <p className="wrap__Out_text_item">
                            Вы уверены что хотите выйти из аккаунта?
                        </p>
                    </div>
                    <div className="wrap__Out_btn">
                        <button type="submit"  className="wrap__Out_cancel" onClick={HideOutMenu}>
                            Отмена
                        </button>
                        <Link to="/" className="wrap__Out_link">
                            <button type="submit"  className="wrap__Out_exit">
                                Выйти
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="wrap__Window">
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
                        <div className="wrap__Header_data_name">{userProfileName} {userSecondName}</div>
                        <div className="wrap__Header_link" onClick={showOutMenu}>
                            <div className='wrap__Header_out_text'>Выйти</div>
                        </div>
                        <div onClick={showOutMenu}>
                            <img
                                className="wrap__Header_out_img"
                                src={out}
                                alt="logo not found"
                            />
                        </div>
                    </div>
                </div>
                <div className="wrap__Title">
                    <div className="wrap__Title_text">
                        Мой профиль
                    </div>
                    <div className="wrap__Title_img" onClick={onEditComplete}>
                        <img
                            src={pencil}
                            alt="logo not found"
                        />
                    </div>
                    <div className="wrap__Title_btn" onClick={onEditToggle}>
                        Редактировать
                    </div>
                </div>
                <div className="wrap__Data">
                    <div className="wrap__Data_left">
                        <div className="wrap__Data_name">
                            <div className="wrap__Data_title">Имя</div>
                            <div className="wrap__Data_text">{userProfileName}</div>
                        </div>
                        <div className="wrap__Data_secondName">
                            <div className="wrap__Data_title">Фамилия</div>
                            {onEdit ? (
                                <div>
                                    <input type="text" id={"secondNameInput"} placeholder={`${userSecondName}`}
                                    className={'wrap__Edit_Input'} onChange={handleEditInput} />
                                </div>
                            ) : (
                                <div className="wrap__Data_text">{userSecondName}</div>
                            )}
                        </div>
                    </div>
                    <div className="wrap__Data_right">
                        <div className="wrap__Data_name">
                            <div className="wrap__Data_title">Телефон</div>
                            <div className="wrap__Data_text">{userPhone}</div>
                        </div>
                        <div className="wrap__Data_secondName">
                            <div className="wrap__Data_title">Электронная почта</div>
                            <div className="wrap__Data_text">{usersProfileEmail}</div>
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
        </div>
    );
}

export default Profile;