import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'

const GET_URL = 'http://localhost:8080/api/user'


const nameSlice = createSlice({
    name: 'nameSlice',
    initialState: {
        userName: ''
    },
    reducers: {
        updateName (state, action) {
            console.log("updateName state = " + state);
            console.log("action.payload =" + action.payload);
            state.userName = action.payload
            console.log("state.userName =" + state.userName);
        },
    }
})

export const updateNameAsync = (data) => async (dispatch) => {

        await axios.get(`${GET_URL}/${data}`)
            .then(function (response) {
                // обработка успешного запроса
                const res = response.data.name;
                console.log("res = " + res);
                dispatch(updateName(res));
            })
            .catch(function (error) {
                // обработка ошибки
                console.log(error);
            })
            .finally(function () {

                console.log('axios finally');
            });


}


export const {updateName} = nameSlice.actions;
export const showUserName = (state) => state.userName; console.log("state.userName")

export default nameSlice.reducer;