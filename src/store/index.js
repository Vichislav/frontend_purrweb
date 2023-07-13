import {configureStore} from "@reduxjs/toolkit";
import userReducer from './userSlice' /*притащили автоматом сформированное из Slice*/
import nameReducer from './nameSlice' /*toolkit сам его сформировал =| получается*/
import secondNameReducer from './secondNameSlice'
import phoneReducer from './phoneSlice'
import registrationReducer from './registrationSlice'
import ownDataReducer from "./ownDataSlice";

export default configureStore({
    reducer: {
        userReducer: userReducer, /*переназначили получается*/
        nameReducer: nameReducer, /*сформированный */
        secondNameReducer: secondNameReducer,
        phoneReducer: phoneReducer,
        registrationReducer: registrationReducer,
        ownDataReducer: ownDataReducer,
    }
})