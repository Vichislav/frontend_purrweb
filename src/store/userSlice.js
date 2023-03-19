import {createSlice} from "@reduxjs/toolkit";

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
    }
})

export const {updateEmail} = userSlice.actions;

export default userSlice.reducer;