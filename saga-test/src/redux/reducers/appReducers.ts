import { combineReducers } from "redux";
import formReducer from "./form-reducer"

const  appReducers = combineReducers({
    form: formReducer
})

export default appReducers
