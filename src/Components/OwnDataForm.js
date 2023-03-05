/*import '../css/Reset.css'*/
import '../css/OwnDataForm.css'
import '../css/AuthorForm.css'
import vector from "../Assets/vector.svg";
import { Link } from 'react-router-dom'



function OwnDataForm() {
    return (
        <div className="wrap__own">
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
            <div className="wrap__own_Container">
                <p className="wrap__own_Container_Head">Заполните данные о себе</p>
                <div className="wrap__own_Container_Middle">
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
                <div className="wrap__own_Container_Bottom">
                    <button className="wrap__Container_Bottom_Btn">
                        Продолжить
                    </button>
                    <div className="wrap__Container_Bottom_Text">
                        <p className="wrap__Container_Bottom_Text_Left">Уже есть аккаунт?</p>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default OwnDataForm;