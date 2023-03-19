import {createSlice} from "@reduxjs/toolkit";

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

export const {updateName} = nameSlice.actions;

export default nameSlice.reducer;