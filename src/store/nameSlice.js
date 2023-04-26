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
            console.log("updateName work");
            console.log("action.payload =" + action.payload);
            state.userName = action.payload
        },
    }
})

export const updateNameAsync = (data) => async (dispatch) => {

        await axios.get(`${GET_URL}/${data}`)
            .then(function (response) {
                // обработка успешного запроса
                console.log(response);
                const res = response.data.name;
                console.log(res);
                dispatch(updateName(res));
            })
            .catch(function (error) {
                // обработка ошибки
                console.log(error);
            })
            .finally(function () {
                console.log('ну привет курортнички');
            });


}


export const {updateName} = nameSlice.actions;
export const showUserName = (state) => state.userName; console.log("state.userName")

export default nameSlice.reducer;