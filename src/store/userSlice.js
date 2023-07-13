import {createSlice} from "@reduxjs/toolkit";

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