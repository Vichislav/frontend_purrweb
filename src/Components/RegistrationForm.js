/*import '../css/Reset.css'*/
import '../css/RegistrationForm.css'
import '../css/AuthorForm.css'

import { Link } from 'react-router-dom'
import {useForm} from "react-hook-form";
import cross from "../Assets/cross.svg";
import eye from "../Assets/eye.svg";
import eye_open from "../Assets/eye_open.svg";


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
        }
    });

    let dirtyCount = false;

    const showEmailCross = () => {
        document.getElementById('crossEmail').classList.remove('cross_Block');
        document.getElementById('input_email').classList.add('red_border');
    }

    const showPasswordCross = () => {
        document.getElementById('crossPassword').classList.remove('cross_Block')
        document.getElementById('input_pas').classList.add('red_border');
        if (!document.querySelectorAll('.wrap__Container_Middle_Error_text').length) {
            return <p className="wrap__Container_Middle_Error_text">"Неверная почта или пароль"</p>;
        }
    }

    const showPasswordEye = () => {
        document.getElementById('eye').classList.remove('cross_Block')
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
    const clearPassword = () => {
        resetField('password')
    }

    const clearEmail = () => {
        resetField('email')
    }

    const onDirty = () => { /*вызывается если isDirty: true*/
        dirtyCount = true;
        console.log("dirtyCount" + dirtyCount)
    }

    const onValid = () => {
        console.log("onValid WORK")
        if (dirtyCount) {
            document.querySelector('.wrap__Container_Bottom_Btn').style.backgroundColor = "#466EFA"
            document.getElementById('input_pas').classList.remove('red_border');
            document.getElementById('input_email').classList.remove('red_border');
            document.getElementById('crossEmail').classList.add('cross_Block');
            document.getElementById('crossPassword').classList.add('cross_Block');
        }
    }

    const notValid = () => {
        console.log("notValid WORK")
        let elem = document.querySelector('.wrap__Container_Bottom_Btn');
        if (!elem == null) { /*он не успевает его найти он еще не отрисовался... поэтому и проверяем*/
            elem.style.backgroundColor = "#E5EBFF";
        }

    }

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
        reset();
        document.getElementById('eye').classList.add('cross_Block');
    }


    return (
        <div className="wrap">
            <form onSubmit={handleSubmit(onSubmit)} className="wrap__Container_reg">
                <p className="wrap__Container_Head">Регистрация</p>
                <div className="wrap__Container_Middle_reg">
                    <label className="wrap__Container_Middle_Label">
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
                    </label>
                    <label className="wrap__Container_Middle_Label_Password">
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
                        </div>
                    </label>
                    <div className="wrap__Container_Middle_Error">
                        {errors?.email && <p className="wrap__Container_Middle_Error_text">"Неверная почта или пароль"</p>}
                        {errors?.email && showEmailCross()}
                        {errors?.password && showPasswordCross()}
                        {dirtyFields?.password && showPasswordEye()}
                    </div>
                    <label className="wrap__Container_Middle_Label_Password_Again">
                        Повтор пароля
                        <input type="text" className="wrap__Container_Middle_Password_Input"
                               {...register('password_again',
                                   { validate: (value, formValues) => value === getValues('password') },

                               )}
                               placeholder="Повторите пароль"/>
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
                        </div>
                    </label>
                    <div className="wrap__Container_Middle_Error">
                        {errors.password_again && <p className="wrap__Container_Middle_Error_text">"Пароли не совпадают"</p>}
                    </div>
                </div>
                <div className="wrap__Container_Bottom">
                    <Link to="/OwnData" className="wrap__Container_Bottom_Link" >
                        <button type="submit"  className="wrap__Container_Bottom_Btn" disabled={!isValid}>
                            Продолжить
                        </button>
                    </Link>
                    <div className="wrap__Container_Bottom_Text_reg">
                        <p className="wrap__Container_Bottom_Text_Left_reg">Уже есть аккаунт?</p>
                        <Link to="/" className="wrap__Container_Bottom_Text_Right_reg">Войти</Link>
                    </div>
                </div>
            </form>
            {isDirty && onDirty()}
            {isValid && onValid()}
            {!isValid && notValid()}
        </div>
    );
}

export default RegistrationForm;