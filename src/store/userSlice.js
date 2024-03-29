import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const userSlice = createSlice({
    name: 'userInfo',
    initialState: {
        userId: "",
        userName: "Name",
        userSecondName: "Surname",
        userPhone: "89998887766",
        userEmail: "test@mail.ru",
        userPassword: ""
    },
    reducers: { //reducers (множественное число) это набор методов **

        updateOwnDataID (state, action) {
            state.userId = action.payload
        },

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

    const POST_URL = 'http://localhost:8080/api/user'

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

export const updateUser = (id, name, surname) => async () => {

    await axios.put(`${"http://localhost:8080/api/user"}`,
        {
            "id":`${id}`,
            "name": `${name}`,
            "surname": `${surname}`,
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

const GET_URL = 'http://localhost:8080/api/user'

export const getUser = (email, password) => async (dispatch) => {

    await axios.get(`${GET_URL}/${email}`)

        .then(function (response) {
            // обработка успешного запроса
            const dbName = response.data.name
            const dbSurname = response.data.surname
            const dbPhone = response.data.phone
            const dbEmail = response.data.email
            const dbId = response.data.id
            //const dbPassword =  response.data.password

            dispatch(updateOwnDataName(dbName))
            dispatch(updateOwnDataSecondName(dbSurname))
            dispatch(updateOwnDataPhone(dbPhone))
            dispatch(updateRegistrationEmail(dbEmail))
            dispatch(updateOwnDataID(dbId))

        })
        .catch(function (error) {
            // обработка ошибки
            console.log(error);
        })
        .finally(function () {
            console.log('axios finally');
        });


}

export const checkUser = (email, password) => async (dispatch) => {

    await axios.get(`${GET_URL}/${email}`)

        .then(function (response) {
            // обработка успешного запроса
            const dbPassword =  response.data.password
            dispatch(updateRegistrationPassword(dbPassword))
            return dbPassword
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
    updateRegistrationPassword,
    updateOwnDataID
} = userSlice.actions;

//reducer (единственное число) это асбтрактный редсюер который мы
// и тащим в configureStore
export default userSlice.reducer; //
// export default это не именованный экспорт по этому этот
// фаил импортируется как *любое имя*, например мы его
// импортируем в index.js  в configureStore  как registrationReducer