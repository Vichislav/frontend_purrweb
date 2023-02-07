/*import '../css/Reset.css'*/
import '../css/RegistrationForm.css'
import '../css/AuthorForm.css'

import { Link } from 'react-router-dom'


function RegistrationForm() {
    return (
        <div className="wrap">
            <div className="wrap__Container_reg">
                <p className="wrap__Container_Head">Регистрация</p>
                <div className="wrap__Container_Middle_reg">
                    <label className="wrap__Container_Middle_Label">
                        Элетронная почта
                        <input type="text" className="wrap__Container_Middle_Input"
                               placeholder="example@mail.ru"/>
                    </label>
                    <label className="wrap__Container_Middle_Label_Password">
                        Пароль
                        <input type="text" className="wrap__Container_Middle_Password_Input"
                               placeholder="Введите пароль"/>
                    </label>
                    <label className="wrap__Container_Middle_Label_Password">
                        Повтор пароля
                        <input type="text" className="wrap__Container_Middle_Password_Input"
                               placeholder="Повторите пароль"/>
                    </label>
                </div>
                <div className="wrap__Container_Bottom">
                    <button className="wrap__Container_Bottom_Btn">
                        Продолжить
                    </button>
                    <div className="wrap__Container_Bottom_Text_reg">
                        <p className="wrap__Container_Bottom_Text_Left_reg">Уже есть аккаунт?</p>
                        <Link to="/" className="wrap__Container_Bottom_Text_Right_reg">Войти</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegistrationForm;