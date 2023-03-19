import {createSlice} from "@reduxjs/toolkit";

const secondNameSlice = createSlice({
    name: 'secondNameSlice',
    initialState: {
        userSecondName: "userSecondName"
    },
    reducers: {
        updateSecondName (state, action) {
            state.userSecondName = action.payload
        },
    }
})

export const {updateSecondName} = secondNameSlice.actions;

export default secondNameSlice.reducer;