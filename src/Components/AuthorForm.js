/*import '../css/Reset.css'*/
import '../css/AuthorForm.css'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";


function AuthorForm() {

    const {
        register, /*позволяет регистрировать поля для формы*/
        formState: {
            errors, isValid,
        },
        handleSubmit, /*пропускает метод (onSubmit) только если нет errors*/
        reset, /*метод очистки формы после отправки*/
    } = useForm({
        mode: "onBlur" /*проверяет инпут при смене фокуса*/
    });

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
        reset();
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
                  </label>
                  <div>
                      {errors?.email && <p>{errors?.email?.message || "email not correct"}</p>}
                  </div>
                  <label className="wrap__Container_Middle_Label_Password">
                      Пароль
                      <input type="text" className="wrap__Container_Middle_Password_Input"
                             placeholder="введите 8 значный пароль"/>
                  </label>
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