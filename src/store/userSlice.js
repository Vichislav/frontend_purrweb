import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {updateName} from "./nameSlice";

const POST_URL = 'http://localhost:8080/api/user'

const userSlice = createSlice({
    name: 'userInfo',
    initialState: {
        userName: "",
        userSecondName: "",
        userPhone: "",
        userEmail: "",
        userPassword: ""
    },
    reducers: { //reducers (множественное число) это набор методов **
        updateOwnDataName (state, action) {
            state.userName = action.payload
        },
        updateOwnDataSecondName (state, action) {
            state.userSecondName = action.payload
        },
        updateOwnDataPhone (state, action) {
            state.userPhone = action.payload
        },
        updateRegistrationEmail (state, action) {
            state.userEmail = action.payload
        },
        updateRegistrationPassword (state, action) {
            state.userPassword = action.payload
        },
    }
})

export const postUser = (name, surname, phone, email, password) => async () => {

    console.log( "postUser " + name, surname, phone, email, password)

    await axios.post(`${"http://localhost:8080/api/user"}`,
        {
            "name": `${name}`,
            "surname": `${surname}`,
            "phone": `${phone}`,
            "email": `${email}`,
            "password": `${password}`,
        })
        .then(function (response) {
            // обработка успешного запроса
            console.log(response);
        })
        .catch(function (error) {
            // обработка ошибки
            console.log(error);
        })
        .finally(function () {
            console.log('axios finally');
        });


}

//эти экшены нужно именовано импортировать туда где мы их хотим использовать, неожиданно...
export const {
    updateOwnDataName,
    updateOwnDataSecondName,
    updateOwnDataPhone,
    updateRegistrationEmail,
    updateRegistrationPassword
} = userSlice.actions;

//reducer (единственное число) это асбтрактный редсюер который мы
// и тащим в configureStore
export default userSlice.reducer; //
// export default это не именованный экспорт по этому этот
// фаил импортируется как *любое имя*, например мы его
// импортируем в index.js  в configureStore  как registrationReducer