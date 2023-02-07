/*import '../css/Reset.css'*/
import '../css/AuthorForm.css'


function AuthorForm() {
    return (
        <div className="wrap">
          <div className="wrap__Container">
              <p className="wrap__Container_Head">Авторизация</p>
              <div className="wrap__Container_Middle">
                  <label className="wrap__Container_Middle_Label">
                      Элетронная почта
                      <input type="text" className="wrap__Container_Middle_Input"
                      placeholder="example@mail.ru"/>
                  </label>
                  <label className="wrap__Container_Middle_Label_Password">
                      Пароль
                      <input type="text" className="wrap__Container_Middle_Password_Input"
                             placeholder="введите 8 значный пароль"/>
                  </label>
              </div>
              <div className="wrap__Container_Bottom">
                  <button className="wrap__Container_Bottom_Btn">
                      Продолжить
                  </button>
                  <div className="wrap__Container_Bottom_Text">
                      <p className="wrap__Container_Bottom_Text_Left">Ещё нет аккаунта?</p>
                      <a className="wrap__Container_Bottom_Text_Right">Зарегестрироваться</a>
                  </div>
              </div>
          </div>
        </div>
    );
}

export default AuthorForm;