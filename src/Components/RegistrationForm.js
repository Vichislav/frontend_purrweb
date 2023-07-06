/*import '../css/Reset.css'*/
import '../css/RegistrationForm.css'
import '../css/AuthorForm.css'

import { Link } from 'react-router-dom'
import {useForm} from "react-hook-form";
import cross from "../Assets/cross.svg";
import eye from "../Assets/eye.svg";
import eye_open from "../Assets/eye_open.svg";
import mark from "../Assets/green_mark.svg";
import axios from "axios";
import {addEmail} from "../store/userSlice";


function RegistrationForm() {

    const {
        register, getValues,/*позволяет регистрировать поля для формы*/
        formState: {
            errors, isValid, isDirty, dirtyFields, isValidating, validate, formValues,
        },
        handleSubmit, /*пропускает метод (onSubmit) только если нет errors*/
        reset, /*метод очистки формы после отправки*/
        resetField,
    } = useForm({
        mode: "onBlur", /*проверяет инпут при смене фокуса*/
        defaultValues: { /* должно быть что бы  dirtyFields работало*/
            email: '',
            password: '',
            password_again: '',
        }
    });

    let dirtyCount = false; /*переключатель для оценки изменяемости любого из инпутов*/
    let dirtyEmailCount = false; /*переключатель для оценки изменяемости поля email*/
    let dirtyPasswordCount = false; /*переключатель для оценки изменяемости поля Password*/
    let dirtySecondPasswordCount = false; /*переключатель для оценки изменяемости поля SecondPassword*/


    const onDirty = () => { /*вызывается если isDirty: true*/
        dirtyCount = true;
    }
    const onDirtyEmailCount = () => {
        dirtyEmailCount = true;
    }
    const onDirtyPasswordCount = () => {
        dirtyPasswordCount = true;
    }
    const onSecondDirtyPasswordCount = () => {
        dirtySecondPasswordCount = true;
    }

    const currentEmail = getValues("email");
    const currentPassword = getValues("password");

    const showEmailCross = () => {
        /*убираем галочку, чистим от зеленого, если оно есть*/
        if (document.getElementById('markEmail')) {
            document.getElementById('markEmail').classList.add('cross_Block');
            document.getElementById('input_email').classList.remove('green_border');
        }
        /*показываем крестик, красим в красное*/
        document.getElementById('crossEmail').classList.remove('cross_Block');
        document.getElementById('input_email').classList.add('red_border');
        /*показываем сообщение об ошибке*/
        document.getElementById('EmailErrorText').classList.remove('hiddenDiv');
    }

    const showPasswordCross = () => {
        /*убираем галочку, чистим от зеленого, если оно есть*/
        if (document.getElementById('markPassword')) {
            document.getElementById('markPassword').classList.add('cross_Block');
            document.getElementById('input_pas').classList.remove('green_border');
        }
        /*показываем крестик, красим в красное*/
        document.getElementById('crossPassword').classList.remove('cross_Block')
        document.getElementById('input_pas').classList.add('red_border');

        /*показываем сообщение об ошибке*/
        document.getElementById('PasErrorText').classList.remove('hiddenDiv');
    }

    const showPasswordEye = () => {
        document.getElementById('eye').classList.remove('cross_Block')
    }

    const showSecondPasswordCross = () => {
        if (document.getElementById('markSecondPassword')) {
            document.getElementById('markSecondPassword').classList.add('cross_Block');
            document.getElementById('input_second_pas').classList.remove('green_border');
        }
        /*показываем крестик, красим в красное*/
        document.getElementById('crossSecondPassword').classList.remove('cross_Block')
        document.getElementById('input_second_pas').classList.add('red_border');
        /*показываем сообщение об ошибке*/
        document.getElementById('2PasErrorText').classList.remove('hiddenDiv');
    }


    const showPasswordSecondEye = () => {
        document.getElementById('eye_second').classList.remove('cross_Block')
    }

    const passwordVisible = () => {
        const passAtr = document.getElementById('input_pas')
        if (passAtr.type === "password") {
            passAtr.type = "text"; /*открываем текст*/
            document.getElementById('eye_img').classList.add('cross_Block')
            document.getElementById('eye_open_img').classList.remove('cross_Block')

        } else {
            passAtr.type = "password"; /*закрываем текст*/
            document.getElementById('eye_open_img').classList.add('cross_Block')
            document.getElementById('eye_img').classList.remove('cross_Block')
        }
    }

    const secondPasswordVisible = () => {
        const passAtr = document.getElementById('input_second_pas')
        if (passAtr.type === "password") {
            passAtr.type = "text"; /*открываем текст*/
            document.getElementById('eye_second_img').classList.add('cross_Block')
            document.getElementById('eye_second_open_img').classList.remove('cross_Block')

        } else {
            passAtr.type = "password"; /*закрываем текст*/
            document.getElementById('eye_second_open_img').classList.add('cross_Block')
            document.getElementById('eye_second_img').classList.remove('cross_Block')
        }
    }

    const clearPassword = () => {
        resetField('password')
    }

    const clearEmail = () => {
        resetField('email')
    }


    const clearSecondPassword = () => {
        resetField('password_again')
    }

    const onValid = () => {
        if (dirtyCount) {
            document.querySelector('.wrap__Container_Bottom_Btn').style.backgroundColor = "#466EFA"
            /*document.getElementById('input_email').classList.remove('red_border');
            document.getElementById('crossEmail').classList.add('cross_Block');*/

        }
    }

    const notValid = () => {
        let elem = document.querySelector('.wrap__Container_Bottom_Btn');
        if (!elem == null) { /*он не успевает его найти он еще не отрисовался... поэтому и проверяем*/
            elem.style.backgroundColor = "#E5EBFF";
        }

    }

    const ValidEmail = () => {
        /*чистим от красного, если оно есть*/
        if(document.getElementById('crossEmail')) {
            document.getElementById('crossEmail').classList.add('cross_Block');
            document.getElementById('input_email').classList.remove('red_border');
        }
        /*красим в зеленный, если оно отрисовалось*/
        if (dirtyEmailCount) {
            document.getElementById('markEmail').classList.remove('cross_Block');
            document.getElementById('input_email').classList.add('green_border');
        }
        /*скрываем сообщение об ошибке*/
        if(document.getElementById('EmailErrorText')) {
            document.getElementById('EmailErrorText').classList.add('hiddenDiv');
        }
    }

    const ValidPassword = () => {
        /*чистим от красного, если оно есть*/
        if(document.getElementById('crossPassword')) {
            document.getElementById('crossPassword').classList.add('cross_Block');
            document.getElementById('input_pas').classList.remove('red_border');
        }
        /*красим в зеленный, если оно отрисовалось*/
        if (dirtyPasswordCount) {
            document.getElementById('markPassword').classList.remove('cross_Block');
            document.getElementById('input_pas').classList.add('green_border');
        }
        /*скрываем сообщение об ошибке*/
        if(document.getElementById('PasErrorText')) {
            document.getElementById('PasErrorText').classList.add('hiddenDiv');
        }
    }

    const ValidSecondPassword = () => {
        /*убираем крестик если он есть чистим от красного*/
        if (document.getElementById('crossSecondPassword')) {
            document.getElementById('crossSecondPassword').classList.add('cross_Block')
            document.getElementById('input_second_pas').classList.remove('red_border');
        }
        if (dirtySecondPasswordCount) {
            document.getElementById('markSecondPassword').classList.remove('cross_Block');
            document.getElementById('input_second_pas').classList.add('green_border');
        }
        /*скрываем сообщение об ошибке*/
        if (document.getElementById('2PasErrorText')) {
            document.getElementById('2PasErrorText').classList.add('hiddenDiv');
        }
    }

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
        reset();
        document.getElementById('eye').classList.add('cross_Block');
    }

    const  createNewUser = async () => {
        console.log('createNewUser work')
        console.log('currentEmail = ' + currentEmail)
        console.log('currentPassword = ' + currentPassword)

     /*   let currentUser = {
            name: 'test',
            surname: 'test',
            phone: '8908',
            email: currentEmail,
            password: currentPassword,
        }*/


        await axios.post(`${"http://localhost:8080/api/user"}`,
            {
            "name": `${currentEmail}`,
            "surname": "ivanchale de rikotto",
                "email" : "currentEmail",
        })
            .then(function (response) {
                // обработка успешного запроса
                console.log(response);
            })
            .catch(function (error) {
                // обработка ошибки
                console.log(error);
            })
            .finally(function () {
                console.log('axios finally');
            });


    }


    return (
        <div className="wrap">
            <form onSubmit={handleSubmit(onSubmit)} className="wrap__Container_reg">
                <p className="wrap__Container_Head">Регистрация</p>
                <div className="wrap__Container_Middle_reg">
                    <label className="wrap__Container_Middle_Email">
                        Элетронная почта
                        <input {...register('email',
                            {required: "Error!",
                                pattern: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                            }
                        )}
                               id="input_email" type="text" className="wrap__Container_Middle_Input"
                               placeholder="example@mail.ru"/>
                        <div id="crossEmail" className="wrap__Container_Middle_Cross cross_Block" onClick={clearEmail}>
                            <img
                                className="wrap__Container_Middle_img"
                                src={cross}
                                alt="cross not found"
                            />
                        </div>
                        <div id="markEmail" className="wrap__Container_Middle_Cross cross_Block">
                            <img
                                className="wrap__Container_Middle_img"
                                src={mark}
                                alt="mark not found"
                            />
                        </div>
                    </label>
                    <p id={'EmailErrorText'} className="wrap__Container_Error hiddenDiv">"Почта не корректна"</p>
                    <label className="wrap__Container_Middle_Password">
                        Пароль
                        <input {...register('password',
                            {required: "Error!", maxLength: 8, minLength: 8 },
                        )}
                               id="input_pas" type="text" className="wrap__Container_Middle_Password_Input"
                               placeholder="введите 8 значный пароль"/>
                        <div className="wrap__Container_Middle_Label_Password_Btn">
                            <div id="eye" className="wrap__Container_Middle_Eye cross_Block" onClick={passwordVisible}>
                                <img
                                    id="eye_img"
                                    className="wrap__Container_Middle_img cross_Block"
                                    src={eye}
                                    alt="eay not found"
                                />
                                <img
                                    id="eye_open_img"
                                    className="wrap__Container_Middle_img_open "
                                    src={eye_open}
                                    alt="eay not found"
                                />
                            </div>
                            <div id="crossPassword" className="wrap__Container_Middle_Cross_Pas cross_Block" onClick={clearPassword}>
                                <img
                                    className="wrap__Container_Middle_img"
                                    src={cross}
                                    alt="cross not found"
                                />
                            </div>
                            <div id="markPassword" className="wrap__Container_Middle_markPassword cross_Block">
                                <img
                                    className="wrap__Container_Middle_img"
                                    src={mark}
                                    alt="mark not found"
                                />
                            </div>
                        </div>
                    </label>
                    <p id={'PasErrorText'} className="wrap__Container_Error hiddenDiv">"Пароль должен содержать 8 симоволов"</p>
                    <div className="wrap__Container_Middle_Error">
                        {isDirty && onDirty()}
                        {dirtyFields?.password && showPasswordEye()}
                        {dirtyFields?.email && onDirtyEmailCount()}
                        {dirtyFields?.password && onDirtyPasswordCount()}
                        {dirtyFields?.password_again && onSecondDirtyPasswordCount()}
                        {errors?.email && showEmailCross()}
                        {!errors?.email && ValidEmail()}
                        {errors?.password && showPasswordCross()}
                        {!errors?.password && ValidPassword()}
                    </div>
                    <label className="wrap__Container_Middle_SecPassword">
                        Повтор пароля
                        <input id="input_second_pas" type="text" className="wrap__Container_Middle_Password_Input"
                               {...register('password_again',
                                   { validate: (value, formValues) => value === getValues('password') },

                               )}
                               placeholder="Повторите пароль"/>
                        <div className="wrap__Container_Middle_Label_Password_Btn">
                            <div id="eye_second" className="wrap__Container_Middle_Eye cross_Block" onClick={secondPasswordVisible}>
                                <img
                                    id="eye_second_img"
                                    className="wrap__Container_Middle_img cross_Block"
                                    src={eye}
                                    alt="eay not found"
                                />
                                <img
                                    id="eye_second_open_img"
                                    className="wrap__Container_Middle_img_open "
                                    src={eye_open}
                                    alt="eay not found"
                                />
                            </div>
                            <div id="crossSecondPassword" className="wrap__Container_Middle_Cross_Pas cross_Block" onClick={clearSecondPassword}>
                                <img
                                    className="wrap__Container_Middle_img"
                                    src={cross}
                                    alt="cross not found"
                                />
                            </div>
                            <div id="markSecondPassword" className="wrap__Container_Middle_markPassword cross_Block">
                                <img
                                    className="wrap__Container_Middle_img"
                                    src={mark}
                                    alt="mark not found"
                                />
                            </div>
                        </div>
                    </label>
                    <p id={'2PasErrorText'} className="wrap__Container_Error hiddenDiv">"Пароли не совпадают"</p>
                    <div className="wrap__Container_Middle_Error">
                        {errors?.password_again && showSecondPasswordCross()}
                        {dirtyFields?.password_again && showPasswordSecondEye()}
                        {!errors?.password_again && ValidSecondPassword()}
                    </div>
                </div>
                <div className="wrap__Container_Bottom">
                    <Link to="/OwnData" className="wrap__Container_Bottom_Link" >
                        <button type="submit" onMouseDown={handleSubmit(createNewUser)}  className="wrap__Container_Bottom_Btn" disabled={!isValid}>
                            Продолжить
                        </button>
                    </Link>
                    <div className="wrap__Container_Bottom_Text_reg">
                        <p className="wrap__Container_Bottom_Text_Left_reg">Уже есть аккаунт?</p>
                        <Link to="/" className="wrap__Container_Bottom_Text_Right_reg">Войти</Link>
                    </div>
                </div>
            </form>
            {isValid && onValid()}
            {!isValid && notValid()}
        </div>
    );
}

export default RegistrationForm;