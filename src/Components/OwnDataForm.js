/*import '../css/Reset.css'*/
import '../css/RegistrationForm.css'
import '../css/AuthorForm.css'

import { Link } from 'react-router-dom'


function OwnDataForm() {
    return (
        <div className="wrap">
            <div className="wrap__backBtn">
                <Link to="/" className="wrap__Container_Bottom_Text_Right_reg">Назад</Link>
            </div>
            <div className="wrap__Container_reg">
                <p className="wrap__Container_Head">Заполните данные о себе</p>
                <div className="wrap__Container_Middle_reg">
                    <label className="wrap__Container_Middle_Label">
                        Имя
                        <input type="text" className="wrap__Container_Middle_Input"
                               placeholder="Введите имя"/>
                    </label>
                    <label className="wrap__Container_Middle_Label_Password">
                        Фамилия
                        <input type="text" className="wrap__Container_Middle_Password_Input"
                               placeholder="Введите фамилию"/>
                    </label>
                    <label className="wrap__Container_Middle_Label_Password">
                        Телефон
                        <input type="text" className="wrap__Container_Middle_Password_Input"
                               placeholder="+7(333)-333-33-33"/>
                    </label>
                </div>
                <div className="wrap__Container_Bottom">
                    <button className="wrap__Container_Bottom_Btn">
                        Продолжить
                    </button>
                    <div className="wrap__Container_Bottom_Text_reg">
                        <p className="wrap__Container_Bottom_Text_Left_reg">Уже есть аккаунт?</p>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default OwnDataForm;