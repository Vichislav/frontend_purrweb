/*import '../css/Reset.css'*/
import '../css/RegistrationForm.css'
import '../css/OwnDataForm.css'
import '../css/AuthorForm.css'
import vector from "../Assets/vector.svg";
import { Link } from 'react-router-dom'
import {useForm} from "react-hook-form";
import cross from "../Assets/cross.svg";
import mark from "../Assets/green_mark.svg";
import {useDispatch, useSelector} from "react-redux";
import {updateOwnDataName, updateOwnDataSecondName, updateOwnDataPhone, postUser} from "../store/userSlice";



function OwnDataForm() {

    const dispatch = useDispatch();

    const {
        register, getValues,/*позволяет регистрировать поля для формы*/
        formState: {
            errors, isValid, isDirty, dirtyFields, isValidating, validate, formValues
        },
        handleSubmit, /*пропускает метод (onSubmit) только если нет errors*/
        reset, /*метод очистки формы после отправки*/
        resetField,
    } = useForm({
        mode: "onBlur", /*проверяет инпут при смене фокуса*/
        defaultValues: { /* должно быть что бы  dirtyFields работало*/
            name: '',
            secondName: '',
            phone: '',
        }
    });

    const userName = getValues('name');
    const userSecondName = getValues('secondName');
    const userPhone = getValues('phone');
    const userEmail = useSelector(state => state.userReducer.userEmail);
    const userPassword = useSelector(state => state.userReducer.userPassword);



    let dirtyCount = false; /*переключатель для оценки изменяемости любого из инпутов*/
    let dirtyNameCount = false; /*переключатель для оценки изменяемости поля email*/
    let dirtySecondNameCount = false; /*переключатель для оценки изменяемости поля Password*/
    let dirtyPhoneCount = false; /*переключатель для оценки изменяемости поля SecondPassword*/

    const onDirty = () => { /*вызывается если isDirty: true*/
        dirtyCount = true;
    }
    const onDirtyNameCount = () => {
        dirtyNameCount = true;
    }
    const onDirtySecondNameCount = () => {
        dirtySecondNameCount = true;
    }
    const onDirtyPhoneCount = () => {
        dirtyPhoneCount = true;
    }

    const clearName = () => {
        resetField('name')
    }
    const clearSecondName = () => {
        resetField('secondName')
    }
    const clearPhone = () => {
        resetField('phone')
    }

    const showNameCross = () => {

        /*убираем галочку, чистим от зеленого, если оно есть*/
        if (document.getElementById('markName')) {
            document.getElementById('markName').classList.add('cross_Block');
            document.getElementById('inputName').classList.remove('green_border');
        }
        /*показываем крестик, красим в красное*/
        document.getElementById('crossName').classList.remove('cross_Block')
        document.getElementById('inputName').classList.add('red_border');

        /*показываем сообщение об ошибке*/
        if (document.getElementById('NameErrorText')) {
            document.getElementById('NameErrorText').classList.remove('hiddenDiv');
        }
    }
    const ValidName = () => {

        /*чистим от красного, если оно есть*/
        if(document.getElementById('crossName')) {
            document.getElementById('crossName').classList.add('cross_Block');
            document.getElementById('inputName').classList.remove('red_border');
        }
        /*красим в зеленный, если оно отрисовалось*/
        if (dirtyNameCount) {
            document.getElementById('markName').classList.remove('cross_Block');
            document.getElementById('inputName').classList.add('green_border');
        }
        /*скрываем сообщение об ошибке*/
        if(document.getElementById('NameErrorText')) {
            document.getElementById('NameErrorText').classList.add('hiddenDiv');
        }
    }

    const showSecondNameCross = () => {

        /*убираем галочку, чистим от зеленого, если оно есть*/
        if (document.getElementById('markSecondName')) {
            document.getElementById('markSecondName').classList.add('cross_Block');
            document.getElementById('inputSecondName').classList.remove('green_border');
        }
        /*показываем крестик, красим в красное*/
        document.getElementById('crossSecondName').classList.remove('cross_Block')
        document.getElementById('inputSecondName').classList.add('red_border');

        /*показываем сообщение об ошибке*/
        if (document.getElementById('secondNameErrorText')) {
            document.getElementById('secondNameErrorText').classList.remove('hiddenDiv');
        }
    }
    const ValidSecondName = () => {

        /*чистим от красного, если оно есть*/
        if(document.getElementById('crossSecondName')) {
            document.getElementById('crossSecondName').classList.add('cross_Block');
            document.getElementById('inputSecondName').classList.remove('red_border');
        }
        /*красим в зеленный, если оно отрисовалось*/
        if (dirtySecondNameCount) {
            document.getElementById('markSecondName').classList.remove('cross_Block');
            document.getElementById('inputSecondName').classList.add('green_border');
        }
        /*скрываем сообщение об ошибке*/
        if(document.getElementById('secondNameErrorText')) {
            document.getElementById('secondNameErrorText').classList.add('hiddenDiv');
        }
    }

    const showPhoneCross = () => {

        /*убираем галочку, чистим от зеленого, если оно есть*/
        if (document.getElementById('markPhone')) {
            document.getElementById('markPhone').classList.add('cross_Block');
            document.getElementById('inputPhone').classList.remove('green_border');
        }
        /*показываем крестик, красим в красное*/
        document.getElementById('crossPhone').classList.remove('cross_Block')
        document.getElementById('inputPhone').classList.add('red_border');

        /*показываем сообщение об ошибке*/
        if (document.getElementById('phoneNameErrorText')) {
            document.getElementById('phoneNameErrorText').classList.remove('hiddenDiv');
        }
    }
    const ValidPhone = () => {

        /*чистим от красного, если оно есть*/
        if(document.getElementById('crossPhone')) {
            document.getElementById('crossPhone').classList.add('cross_Block');
            document.getElementById('inputPhone').classList.remove('red_border');
        }
        /*красим в зеленный, если оно отрисовалось*/
        if (dirtyPhoneCount) {
            document.getElementById('markPhone').classList.remove('cross_Block');
            document.getElementById('inputPhone').classList.add('green_border');
        }
        /*скрываем сообщение об ошибке*/
        if(document.getElementById('phoneNameErrorText')) {
            document.getElementById('phoneNameErrorText').classList.add('hiddenDiv');
        }
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
    const onSubmit = (data) => {
        /*alert(JSON.stringify(data))*/
        dispatch(updateOwnDataName(`${userName}`))
        dispatch(updateOwnDataSecondName(`${userSecondName}`))
        dispatch(updateOwnDataPhone(`${userPhone}`))
        console.log( "onSubmit " + userName, userSecondName, userPhone, userEmail, userPassword)
        dispatch(postUser(userName, userSecondName, userPhone, userEmail, userPassword ))
        /*reset();*/
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="wrap__own" id="formName">
            <div className='wrap__own_backBtn_box'>
                <Link to="/" className="wrap__own_backBtn">
                    <div className="wrap__own_vector">
                        <img
                            className="wrap__own_vector_item"
                            src={vector}
                            alt="vector not found"
                        />
                    </div>
                    <div className="wrap__own_text">Назад</div>
                </Link>
            </div>
            <div className="wrap__own_Container">
                <p className="wrap__own_Container_Head">Заполните данные о себе</p>
                <div className="wrap__own_Container_Middle">
                    <label className="wrap__own_Container_Middle_Label">
                        Имя
                        <input id={'inputName'} {...register('name',
                            {required: "Error!",
                                pattern: /^[а-яА-ЯёЁa-zA-Z]*$/i,
                            }
                        )}
                            type="text" className="wrap__Container_Middle_Input"
                               placeholder="Введите имя"/>
                        <div id="crossName" className="wrap__Container_Middle_Cross cross_Block" onClick={clearName}>
                            <img
                                className="wrap__Container_Middle_img"
                                src={cross}
                                alt="cross not found"
                            />
                        </div>
                        <div id="markName" className="wrap__Container_Middle_Cross cross_Block">
                            <img
                                className="wrap__Container_Middle_img"
                                src={mark}
                                alt="mark not found"
                            />
                        </div>
                        <p id={'NameErrorText'} className="wrap__Container_Error hiddenDiv">"Имя не корректно"</p>
                        {isDirty && onDirty()}
                        {dirtyFields?.name && onDirtyNameCount()}
                        {dirtyFields?.secondName && onDirtySecondNameCount()}
                        {dirtyFields?.phone && onDirtyPhoneCount()}
                        {errors?.name && showNameCross()}
                        {!errors?.name && ValidName()}
                    </label>
                    <label className="wrap__own_Container_Middle_Label_Password">
                        Фамилия
                        <input id={'inputSecondName'} {...register('secondName',
                            {required: "Error!",
                                pattern: /^[а-яА-ЯёЁa-zA-Z]*$/i,
                            }
                        )}
                            type="text" className="wrap__Container_Middle_Password_Input"
                               placeholder="Введите фамилию"/>
                        <div id="crossSecondName" className="wrap__Container_Middle_Cross cross_Block" onClick={clearSecondName}>
                            <img
                                className="wrap__Container_Middle_img"
                                src={cross}
                                alt="cross not found"
                            />
                        </div>
                        <div id="markSecondName" className="wrap__Container_Middle_Cross cross_Block">
                            <img
                                className="wrap__Container_Middle_img"
                                src={mark}
                                alt="mark not found"
                            />
                        </div>
                        <p id={'secondNameErrorText'} className="wrap__Container_Error hiddenDiv">"Фамилия не корректна"</p>
                        {errors?.secondName && showSecondNameCross()}
                        {!errors?.secondName && ValidSecondName()}
                    </label>
                    <label className="wrap__own_Container_Middle_Label_Password">
                        Телефон
                        <input id={'inputPhone'} {...register('phone',
                            {required: "Error!",
                                pattern: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/i,
                            }
                        )}
                            type="text" className="wrap__Container_Middle_Password_Input"
                               placeholder="+7(333)-333-33-33"/>
                        <div id="crossPhone" className="wrap__Container_Middle_Cross cross_Block" onClick={clearPhone}>
                            <img
                                className="wrap__Container_Middle_img"
                                src={cross}
                                alt="cross not found"
                            />
                        </div>
                        <div id="markPhone" className="wrap__Container_Middle_Cross cross_Block">
                            <img
                                className="wrap__Container_Middle_img"
                                src={mark}
                                alt="mark not found"
                            />
                        </div>
                        <p id={'phoneNameErrorText'} className="wrap__Container_Error hiddenDiv">"Телефон не корректен"</p>
                        {errors?.phone && showPhoneCross()}
                        {!errors?.phone && ValidPhone()}
                    </label>
                </div>
                <div className="wrap__own_Container_Bottom">
                    <Link to="/Profile" className="wrap__Container_Bottom_Link" >
                        <button type="submit" onMouseDown={handleSubmit(onSubmit)}  className="wrap__Container_Bottom_Btn" disabled={!isValid} form='formName'>
                            Продолжить
                        </button>
                    </Link>
                    {isValid && onValid()}
                    {!isValid && notValid()}
                </div>
            </div>
        </form>
    );
}

export default OwnDataForm;