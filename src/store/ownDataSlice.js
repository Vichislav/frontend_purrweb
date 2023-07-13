import {createSlice} from "@reduxjs/toolkit";

const ownDataSlice = createSlice({
    name: 'ownDataInfo',
    initialState: {
        userName: "",
        userSecondName: "",
        userPhone: ""
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
    }
})


export const {updateOwnDataName, updateOwnDataSecondName, updateOwnDataPhone} = ownDataSlice.actions;

export default ownDataSlice.reducer; //
