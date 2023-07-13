import {createSlice} from "@reduxjs/toolkit";

const registrationSlice = createSlice({
    name: 'registrationInfo',
    initialState: {
        userEmail: "regDefEmail@.gmail.com",
        userPassword: "regDefPassword"

    },
    reducers: { //reducers (множественное число) это набор методов **
        updateRegistrationEmail (state, action) {
            state.userEmail = action.payload
        },
        updateRegistrationPassword (state, action) {
            state.userPassword = action.payload
        },
    }
})

//эти экшены нужно именовано импортировать туда где мы их хотим использовать, неожиданно...
export const {updateRegistrationEmail, updateRegistrationPassword} = registrationSlice.actions;

//reducer (единственное число) это асбтрактный редсюер который мы
// и тащим в configureStore
export default registrationSlice.reducer; //
// export default это не именованный экспорт по этому этот
// фаил импортируется как *любое имя*, например мы его
// импортируем в index.js  в configureStore  как registrationReducer