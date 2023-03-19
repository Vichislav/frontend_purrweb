import {createSlice} from "@reduxjs/toolkit";

const phoneSlice = createSlice({
    name: 'phoneSlice',
    initialState: {
        userPhone: "89007006050"
    },
    reducers: {
        updatePhone (state, action) {
            state.userPhone = action.payload
        },
    }
})

export const {updatePhone} = phoneSlice.actions;

export default phoneSlice.reducer;