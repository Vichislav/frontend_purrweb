import {configureStore} from "@reduxjs/toolkit";
import userReducer from './userSlice' /*притащили автоматом сформированное из Slice*/
import nameReducer from './nameSlice' /*toolkit сам его сформировал =| получается*/



export default configureStore({
    reducer: {
        nameReducer: nameReducer, /*сформированный */
        userReducer: userReducer,
    }
})