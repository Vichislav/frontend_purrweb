import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const GET_URL = 'http://localhost:8080/api/user'

const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: {
            email: 'email@gmail.com'
        }
    },
    reducers: {
        updateEmail (state, action) {
            state.users.email = action.payload
        },
        addEmail (state, action) {
            state.data.push(action.payload)
        }
    }
})

export const updateEmailAsync = (data, email) => async (dispatch) => {

    await axios.post(`${GET_URL}/${data}`)
        .then(function (response) {
            // обработка успешного запроса
            const res = response.data.name;
            console.log("res = " + res);
            dispatch(addEmail(res));
        })
        .catch(function (error) {
            // обработка ошибки
            console.log(error);
        })
        .finally(function () {

            console.log('axios finally');
        });


}


export const {updateEmail} = userSlice.actions;
export const {addEmail} = userSlice.actions;

/*export const showUserName = (state) => state.userName; console.log("state.userName")*/

export default userSlice.reducer;