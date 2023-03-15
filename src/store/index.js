import {configureStore} from "@reduxjs/toolkit";
import userReducer from './userSlice' /*притащили автоматом сформированное из Slice*/


export default configureStore({
    reducer: {
        userReducer: userReducer, /*переназначили получается*/
    }
})