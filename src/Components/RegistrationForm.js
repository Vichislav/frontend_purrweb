/*import '../css/Reset.css'*/
import '../css/RegistrationForm.css'
import '../css/AuthorForm.css'
import {useDispatch, useSelector} from "react-redux";
import {checkUser, getUser, updateRegistrationEmail, updateRegistrationPassword} from "../store/userSlice";

import {Link, useNavigate} from 'react-router-dom'
import {useForm} from "react-hook-form";
import cross from "../Assets/cross.svg";
import eye from "../Assets/eye.svg";
import eye_open from "../Assets/eye_open.svg";
import mark from "../Assets/green_mark.svg";
import cross_gray from "../Assets/cross_gray.svg";


function RegistrationForm() {

    const {
        register, getValues,/*позволяет регистрировать поля для формы, получать данные inputs*/
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

    const navigate = useNavigate();

    const enterToOwnData = () => {
        navigate('/OwnData');
    };

    const showCross = (mark, cross, input, errorText) => {
        /*убираем галочку и зеленый цвет инпута*/
        if (document.getElementById(`${mark}`)) { /*есть ли галочка*/
            document.getElementById(`${mark}`).classList.add('cross_Block'); /*блокируем галочку*/
            document.getElementById(`${input}`).classList.remove('green_border'); /*убираем зеленый цвет*/
        }
        /*показываем крестик, красим в красное*/
        document.getElementById(`${cross}`).classList.remove('cross_Block');
        document.getElementById(`${input}`).classList.add('red_border');
        /*показываем сообщение об ошибке*/
        document.getElementById(`${errorText}`).classList.remove('hiddenDiv');
    }

    const showPasswordEye = () => {
        document.getElementById('eye').classList.remove('cross_Block')
    }


    const showPasswordSecondEye = () => {
        document.getElementById('eye_second').classList.remove('cross_Block')
    }

    const everyPasswordVisible = (input, eye, eyeOpen) => {
        const passAtr = document.getElementById(`${input}`)
            if (passAtr.type === "password") {
                passAtr.type = "text"; /*открываем текст*/
                document.getElementById(`${eye}`).classList.add('cross_Block')
                document.getElementById(`${eyeOpen}`).classList.remove('cross_Block')
            } else {
                passAtr.type = "password"; /*закрываем текст*/
                document.getElementById(`${eyeOpen}`).classList.add('cross_Block')
                document.getElementById(`${eye}`).classList.remove('cross_Block')
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

    const getGreenEmail = () => {
        if (dirtyEmailCount) {
            document.getElementById(`markEmail`).classList.remove('cross_Block');
            document.getElementById(`input_email`).classList.add('green_border');
        }
    }
    const getGreenPassword = () => {
        if (dirtyPasswordCount) {
            document.getElementById(`markPassword`).classList.remove('cross_Block');
            document.getElementById(`input_pas`).classList.add('green_border');
        }
    }
    const getGreenSecondPassword = () => {
        if (dirtySecondPasswordCount) {
            document.getElementById(`markSecondPassword`).classList.remove('cross_Block');
            document.getElementById(`input_second_pas`).classList.add('green_border');
        }
    }

    const validInput = (cross, input, errorText) => {
        const element = document.getElementById(`${input}`)
        if(element){
            /*чистим от красного, если оно есть*/
            if(document.getElementById(`${cross}`)) {
                document.getElementById(`${cross}`).classList.add('cross_Block');
                document.getElementById(`${input}`).classList.remove('red_border');
            }
            /*скрываем сообщение об ошибке*/
            if(document.getElementById(`${errorText}`)) {
                document.getElementById(`${errorText}`).classList.add('hiddenDiv');
            }
        }
    }
    //validInput('crossEmail', 'input_email', 'dirtyEmailCount', 'markEmail', 'EmailErrorText')
    //validInput('crossPassword', 'input_pas', 'dirtyPasswordCount', 'markPassword', 'PasErrorText')
    //validInput('crossSecondPassword', 'input_second_pas', 'dirtySecondPasswordCount', 'markSecondPassword', '2PasErrorText')

    const validEmail = () => {
        validInput('crossEmail', 'input_email', 'EmailErrorText')
        getGreenEmail()
    }
    const validPassword = () => {
        validInput('crossPassword', 'input_pas', 'PasErrorText')
        getGreenPassword()
    }
    const validSecondPassword = () => {
        validInput('crossSecondPassword', 'input_second_pas', '2PasErrorText')
        getGreenSecondPassword()
    }
    const RemoveAllGreenMarks = () => {
        /*убираем галочку, чистим от зеленого, если оно есть поле Email*/
        if (document.getElementById('markEmail')) {
            document.getElementById('markEmail').classList.add('cross_Block');
            document.getElementById('input_email').classList.remove('green_border');
        }
        /*убираем галочку, чистим от зеленого, если оно есть поле Password*/
        if (document.getElementById('markPassword')) {
            document.getElementById('markPassword').classList.add('cross_Block');
            document.getElementById('input_pas').classList.remove('green_border');
        }
        /*убираем галочку, чистим от зеленого, если оно есть поле secondPassword*/
        if (document.getElementById('markSecondPassword')) {
            document.getElementById('markSecondPassword').classList.add('cross_Block');
            document.getElementById('input_second_pas').classList.remove('green_border');
        }
    }

    const currentEmail = getValues("email");
    const currentPassword = getValues("password");


    const dispatch = useDispatch()

    const dbPassword = useSelector(state => state.userReducer.userPassword)

    const regInfoUpdate = () => {

        console.log('email & password ' + currentEmail, currentPassword)
        dispatch(checkUser(currentEmail, currentPassword))
        console.log('dbPassword ' + dbPassword)
        if (currentPassword === dbPassword) {
            console.log('else work with ' + dbPassword)
            showOutMenu()
        } else {
            console.log('dispatch work')
            dispatch(updateRegistrationEmail(`${currentEmail}`))
            dispatch(updateRegistrationPassword(`${currentPassword}`))
            enterToOwnData()
        }

    }
    const HideOutMenu = () => {

        let element = document.getElementById('Out_window');
        if (element !== null) {
            element.style.visibility = 'hidden';
            reset()
            RemoveAllGreenMarks()
        }
        else {
            console.log('HideOutMenu else work')
        }
    }
    const showOutMenu = () => {

        let element = document.getElementById('Out_window');
        if (element !== null) {
            element.style.visibility = 'visible';
        }
        else {
            console.log('showOutMenu else work')
        }

    }

    const onSubmit = () => {
        reset();
        document.getElementById('eye').classList.add('cross_Block');
    }




    return (
        <div className="wrap">
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
                        <p className="wrap__Out_text_item_Reg">
                            Пользователь с таким email и password уже существует.
                        </p>
                    </div>
                    <div className="wrap__Out_btn_Reg">
                        <Link  className="wrap__Out_link">
                            <button type="submit" onClick={HideOutMenu} className="wrap__Out_exit">
                                Ok
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
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
                            <div id="eye" className="wrap__Container_Middle_Eye cross_Block" onClick={() => everyPasswordVisible('input_pas', 'eye_img', 'eye_open_img')}>
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
                        {errors?.email && showCross('markEmail', 'crossEmail', 'input_email', 'EmailErrorText')}
                        {!errors?.email && validEmail()}
                        {errors?.password && showCross('markPassword', 'crossPassword',  'input_pas', 'PasErrorText')}
                        {!errors?.password && validPassword()}
                    </div>
                    <label className="wrap__Container_Middle_SecPassword">
                        Повтор пароля
                        <input id="input_second_pas" type="text" className="wrap__Container_Middle_Password_Input"
                               {...register('password_again',
                                   { validate: (value, formValues) => value === getValues('password') },

                               )}
                               placeholder="Повторите пароль"/>
                        <div className="wrap__Container_Middle_Label_Password_Btn">
                            <div id="eye_second" className="wrap__Container_Middle_Eye cross_Block" onClick={() => everyPasswordVisible('input_second_pas', 'eye_second_img', 'eye_second_open_img')}>
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
                        {errors?.password_again && showCross('markSecondPassword', 'crossSecondPassword',  'input_second_pas', '2PasErrorText')}
                        {dirtyFields?.password_again && showPasswordSecondEye()}
                        {!errors?.password_again && validSecondPassword()}
                    </div>
                </div>
                <div className="wrap__Container_Bottom">
                    <Link  className="wrap__Container_Bottom_Link" >
                        {/*onMouseDown={handleSubmit(regInfoUpdate)}*/}
                        <button type="submit" onMouseDown={handleSubmit(regInfoUpdate)} className="wrap__Container_Bottom_Btn" disabled={!isValid}>
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