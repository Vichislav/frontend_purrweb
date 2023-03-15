import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: {
            email: 'email@gmail.com'
        }
    },
    reducers: {
        updateName (state, action) {},
        updateEmail (state, action) {
            state.users.email = action.data.email
        },
    }
})

export const {updateEmail} = userSlice.actions;

export default userSlice.reducer;