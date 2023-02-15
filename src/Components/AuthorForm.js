/*import '../css/Reset.css'*/
import '../css/AuthorForm.css'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import cross from '../Assets/cross.svg'
import purrweb_logo from "../Assets/purrweb_logo.svg";


function AuthorForm() {

    const {
        register, /*позволяет регистрировать поля для формы*/
        formState: {
            errors, isValid, isDirty,
        },
        handleSubmit, /*пропускает метод (onSubmit) только если нет errors*/
        reset, /*метод очистки формы после отправки*/
        resetField,
    } = useForm({
        mode: "onBlur" /*проверяет инпут при смене фокуса*/
    });

    const showEmailCross = () => {
        document.getElementById('crossEmail').classList.remove('cross_Block')
    }

    const clearEmail = () => {
        resetField('email')
    }

    const test = () => {
        console.log('test work')
    }

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
        reset();
        document.getElementById('crossEmail').classList.add('cross_Block')
    }

    return (
        <div className="wrap">
          <form onSubmit={handleSubmit(onSubmit)} className="wrap__Container">
              <p className="wrap__Container_Head">Авторизация</p>
              <div className="wrap__Container_Middle">
                  <label className="wrap__Container_Middle_Label">
                      Элетронная почта
                      <input {...register('email',
                          {required: "Error!",
                                 pattern: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                             }
                      )}
                             type="text" className="wrap__Container_Middle_Input"
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
                      <input type="text" className="wrap__Container_Middle_Password_Input"
                             placeholder="введите 8 значный пароль"/>
                  </label>
                  <div className="wrap__Container_Middle_Error">
                      {errors?.email && <p className="wrap__Container_Middle_Error_text">{errors?.email?.message || "Неверная почта или пароль"}</p>}
                      {errors?.email && showEmailCross()}
                  </div>
              </div>
              <div className="wrap__Container_Bottom">
                  <button type="submit"  className="wrap__Container_Bottom_Btn" disabled={!isValid}>
                      Продолжить
                  </button>
                  <div className="wrap__Container_Bottom_Text">
                      <p className="wrap__Container_Bottom_Text_Left">Ещё нет аккаунта?</p>
                      <Link to="/registration" className="wrap__Container_Bottom_Text_Right">Зарегестрироваться</Link>
                  </div>
              </div>
          </form>
        </div>
    );
}

export default AuthorForm;