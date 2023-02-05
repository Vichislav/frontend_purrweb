/*import '../css/Reset.css'*/
import '../css/AuthorForm.css'


function AuthorForm() {
    return (
        <div className="wrapAuthorForm">
          <div className="wrapAuthorFormContainer">
              <p className="wrapAuthorFormContainerHead">Авторизация</p>
              <div className="wrapAuthorFormContainerMiddle">
                  <label className="wrapAuthorFormContainerMiddleLabel">
                      Элетронная почта
                      <input type="text" className="wrapAuthorFormContainerMiddleLabelInput"
                      placeholder="example@mail.ru"/>
                  </label>
                  <label className="wrapAuthorFormContainerMiddleLabelPassword">
                      Пароль
                      <input type="text" className="wrapAuthorFormContainerMiddleLabelPasswordInput"
                             placeholder="введите 8 значный пароль"/>
                  </label>
              </div>
              <div className="wrapAuthorFormContainerBottom">
                  <button className="wrapAuthorFormContainerBottomBtn">
                      Продолжить
                  </button>
                  <div className="wrapAuthorFormContainerBottomText">
                      <p className="wrapAuthorFormContainerBottomTextLeft">Ещё нет аккаунта?</p>
                      <a className="wrapAuthorFormContainerBottomTextRight">Зарегестрироваться</a>
                  </div>
              </div>
          </div>
        </div>
    );
}

export default AuthorForm;