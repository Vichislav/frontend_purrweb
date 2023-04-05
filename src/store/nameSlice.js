import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'

const GET_URL = 'http://localhost:8080/api/user'


const nameSlice = createSlice({
    name: 'nameSlice',
    initialState: {
        userName: "userName"
    },
    reducers: {
        updateName (state, action) {
            state.userName = action.payload
        },
    }
})

export const updateNameAsync = (data) => async (dispatch) => {

        const response = await axios.get(`${GET_URL}/${data}`)
        /*const response = axios.get(`${GET_URL}/${data}`)*/
            .then(function (response) {
                // обработка успешного запроса
                console.log(response);
            })
            .catch(function (error) {
                // обработка ошибки
                console.log(error);
            })
            .finally(function () {
                console.log('ну привет курортнички');
            });
        dispatch(updateName(response));

}


export const {updateName} = nameSlice.actions;
export const showUserName = (state) => state.userName
export default nameSlice.reducer;